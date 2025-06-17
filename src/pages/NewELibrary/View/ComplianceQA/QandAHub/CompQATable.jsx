import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  compQandALibraryPaginatedGet
} from "../../../../../store/actions/otherActions";
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Spin } from "antd";
import "./CompQACSS.css";

let searchDebounceTimer;

const CompQATable = ({ localPage = 1, setLocalPage = () => { } }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const { data, loading } = useSelector((state) => state.compQandALibraryPaginatedRed);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [faqs, setFaqs] = useState([]);
  const pageSize = 1000;

  const fetchData = (keyword = "") => {
    const filters = {
      complianceCategory: categoryId,
      ...(keyword && { topic: keyword }) // Include topic filter if keyword exists
    };
    dispatch(compQandALibraryPaginatedGet({ page: localPage, limit: pageSize, filters }));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const flatFAQs = data.flatMap((entry) =>
        entry.complianceDetails?.map((detail) => ({
          ...detail,
          open: false,
        }))
      );
      setFaqs(flatFAQs);
    }
  }, [data]);

  const toggleFAQ = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  // Debounced Search Effect
  useEffect(() => {
    clearTimeout(searchDebounceTimer);
    searchDebounceTimer = setTimeout(() => {
      fetchData(searchKeyword.trim());
    }, 100);
    return () => clearTimeout(searchDebounceTimer);
  }, [searchKeyword]);

  return (
    <>

      <div className="backCon1">
        <div className="text-center mb-3">
          <button onClick={() => navigate("/elibrary/View/Compliance")} className="back-button" style={{ position: 'relative', top: '55px' }}>
            <ArrowBackIcon />
          </button>

          <h2 className="fw-bold" style={{ color: "#013879", paddingBottom: "30px", paddingTop: "20px" }}>
            Compliance Questions & Answers
          </h2>
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-8">
            <label className="form-label fw-semibold text-center d-block">Search Keyword</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type topic..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
          </div>
        </div>

        <div className="faqs">
          {loading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div
                className={"faq " + (faq?.open ? "open" : "")}
                key={`${faq?.question}-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="state-badgeTO">{faq?.topic}</span>
                <div className="faq-question">
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{index + 1}.</span>
                  {faq?.question}
                </div>
                <div className="faq-answer">{faq?.answer}</div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger text-center fw-semibold">
              No Compliance FAQ E-Library Available
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompQATable;

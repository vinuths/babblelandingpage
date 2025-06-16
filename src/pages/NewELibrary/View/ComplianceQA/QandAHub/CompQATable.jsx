import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryGetComplianceList,
  compQandALibraryPaginatedGet,
} from "../../../../../store/actions/otherActions";
import { Spin } from "antd";
import "./CompQACSS.css";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CompQATable = ({ localPage, setLocalPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading } = useSelector(
    (state) => state.compQandALibraryPaginatedRed
  );
  const { compCategoryInfo } = useSelector(
    (state) => state.complianceCategoryGetRed
  );

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [faqs, setFaqs] = useState([]);
  const pageSize = 1000;

  useEffect(() => {
    dispatch(categoryGetComplianceList());
  }, [dispatch]);

  const fetchData = (page = localPage) => {
    const filters = {};
    if (selectedCategory) filters.complianceCategory = selectedCategory;
    dispatch(compQandALibraryPaginatedGet({ page, limit: pageSize, filters }));
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

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
        open: i === index ? !faq?.open : false,
      }))
    );
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq &&
      typeof faq.topic === "string" &&
      typeof faq.question === "string" &&
      (
        faq.topic.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        faq.question.toLowerCase().includes(searchKeyword.toLowerCase())
      )
  );

  return (
    <>
      <div>
        <button
          onClick={() => navigate("/elibrary/View")}
          className="back-button"
          style={{ position: 'relative', top: '35px' }}
        >
          <ArrowBackIcon />
        </button>
      </div>

      <div className="container mt-4 backCon">
        <div className="text-center mb-3">
          <h2 className="fw-bold" style={{ color: "#013879", paddingBottom: "30px", paddingTop: "20px" }}>
            Compliance Questions & Answers
          </h2>
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <label className="form-label fw-semibold text-center d-block">Filter by Category</label>
            <select
              className="form-select text-center"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setLocalPage(1);
              }}
            >
              <option value="">Select Category</option>
              {compCategoryInfo?.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label fw-semibold text-center d-block">Search Keyword</label>
            <input
              type="text"
              className="form-control text-center"
              placeholder="Type topic or question..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              // disabled={!selectedCategory}
            />
          </div>
        </div>

        <div className="faqs">
          {loading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
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
            <div className="alert danger-info text-center fw-semibold">
              No Compliance FAQ E-Library Available
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CompQATable;

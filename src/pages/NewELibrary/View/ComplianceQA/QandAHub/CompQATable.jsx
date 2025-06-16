import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryGetComplianceList,
  compQandALibraryPaginatedGet,
} from "../../../../../store/actions/otherActions";
import { Spin } from "antd";
import "./CompQACSS.css"; // Custom styles
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
  const [selectedTopic, setSelectedTopic] = useState("");
  const [faqs, setFaqs] = useState([]);
  const pageSize = 1000;

  // Fetch categories
  useEffect(() => {
    dispatch(categoryGetComplianceList());
  }, [dispatch]);

  // Fetch FAQs based on selected filters
  const fetchData = (page = localPage) => {
    const filters = {};
    if (selectedCategory) filters.complianceCategory = selectedCategory;
    dispatch(compQandALibraryPaginatedGet({ page, limit: pageSize, filters }));
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory]);

  // Process data into flat FAQ list
  useEffect(() => {
    if (data && Array.isArray(data)) {
      const flatFAQs = data.flatMap((entry) =>
        entry.complianceDetails
          ?.filter((detail) => {
            if (selectedTopic) {
              return detail.topic === selectedTopic;
            }
            return true;
          })
          .map((detail) => ({
            ...detail,
            open: false,
          }))
      );
      setFaqs(flatFAQs);
    }
  }, [data, selectedTopic]);

  // Toggle open/close state
  const toggleFAQ = (index) => {
    setFaqs((prev) =>
      prev.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  // Extract unique topics for dropdown
  const topicOptions = [
    ...new Set(
      data
        ?.flatMap((entry) =>
          entry.complianceDetails?.map((d) => d.topic)
        )
        .filter(Boolean)
    ),
  ];

  return (
    <>

      <div >
        {/* <div style={{ marginBottom: "20px" }}> */}
        <button
          onClick={() => navigate("/elibrary/View")}
          className="back-button"
          style={{ position: 'relative', top: '35px' }}
        >
          <ArrowBackIcon />
        </button>
        {/* </div> */}

      </div>
      <div className="container mt-4 backCon">
        <div className="text-center mb-3">
          <h2 className="fw-bold" style={{ color: "#013879", paddingBottom: "30px", paddingTop: "20px" }}>
            Compliance Questions & Answers
          </h2>
          {/* <p style={{ color: "gray", fontStyle: "italic", maxWidth: "800px", margin: "auto" }}>
          This collection covers a wide range of key business areas such as human resources, data security,
          compliance, and workplace conduct. Our templates are crafted to help companies establish clear
          guidelines, promote best practices, and ensure regulatory compliance efficiently and effectively.
        </p> */}
        </div>

        <div className="row mb-4 justify-content-center">
          <div className="col-md-6">
            <label className="form-label fw-semibold text-center d-block">Filter by Category</label>
            <select
              className="form-select text-center"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedTopic("");
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
            <label className="form-label fw-semibold text-center d-block">Filter by Topic</label>
            <select
              className="form-select text-center"
              value={selectedTopic}
              onChange={(e) => {
                setSelectedTopic(e.target.value);
                setLocalPage(1);
              }}
              disabled={!selectedCategory}
            >
              <option value="">Select Topic</option>
              {topicOptions.map((topic, index) => (
                <option key={index} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="faqs">
          {loading ? (
            <Spin size="large" className="d-flex justify-content-center" />
          ) : faqs.length > 0 ? (
            faqs.map((faq, index) => (
              <div
                className={"faq " + (faq.open ? "open" : "")}
                key={`${faq.question}-${index}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="state-badgeTO">{faq.topic}</span>
                <div className="faq-question">
                  <span style={{ fontWeight: "bold", marginRight: "8px" }}>{index + 1}.</span>
                  {faq.question}
                </div>
                <div className="faq-answer">{faq.answer}</div>
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

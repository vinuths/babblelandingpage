import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    categoryGetComplianceList,
    reLeagalUpdateLibraryPaginatedGet,
} from "../../../../store/actions/otherActions";
import { Spin } from "antd";
import moment from "moment";
import "./LegalCSS.css"; // use same FAQ styles
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const LegalUpdsTable = ({ localPage, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, loading } = useSelector(
        (state) => state.reLeagalUpdateLibraryPaginatedRed
    );
    const { compCategoryInfo } = useSelector(
        (state) => state.complianceCategoryGetRed
    );
    const { stateInfo } = useSelector((state) => state.getState);

    const [selectedCategory, setSelectedCategory] = useState("");
    const [faqs, setFaqs] = useState([]);
    const [selectedState, setSelectedState] = useState("");

    const pageSize = 1000;

    useEffect(() => {
        dispatch(categoryGetComplianceList());
    }, [dispatch]);

    useEffect(() => {
        const filters = {};
        if (selectedState) filters.state = selectedState;

        dispatch(reLeagalUpdateLibraryPaginatedGet({ page: localPage, limit: pageSize, filters }));
    }, [dispatch, selectedState, localPage]);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            setFaqs(
                data.map((item) => ({
                    ...item,
                    open: false,
                }))
            );
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

    const getStateName = (id) => {
        return stateInfo?.find((s) => s._id === id)?.name || "N/A";
    };

    return (
        <>
            <div className="container mt-4 backCon">
                {/* Header with Back Button */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <button
                        onClick={() => navigate("/elibrary/View")}
                        className="back-button btn btn-link p-0"
                        style={{ fontSize: "24px" }}
                    >
                        <ArrowBackIcon />
                    </button>
                    <h2 className="fw-bold flex-grow-1 text-center m-0" style={{ color: "#013879" }}>
                        Legal & Regulatory Updates
                    </h2>
                    <div style={{ width: "40px" }}></div>
                </div>

                <div className="text-center mb-3">
                    <p>Stay informed with the latest developments in laws, regulations, and compliance requirements that impact your business. Our Recent Legal Updates provide timely, accurate, and easy-to-understand summaries of key legal changes, helping you navigate the evolving legal landscape with confidence and ensure your operations remain compliant.</p>
                </div>

                <div className="row mb-4 justify-content-center">
                    <div className="col-md-6">
                        <label className="form-label fw-semibold text-center d-block" htmlFor="stateFilter">State:</label>
                        <select
                            id="stateFilter"
                            className="form-select"
                            value={selectedState}
                            onChange={(e) => {
                                setSelectedState(e.target.value);
                                setLocalPage(1);
                            }}
                        >
                            <option value="">All States</option>
                            {stateInfo
                                ?.filter((state) => state.name !== "All States")
                                .map((state) => (
                                    <option key={state._id} value={state._id}>
                                        {state.name}
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
                                key={faq._id}
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="state-badgeQA">
                                    {faq.department} | {getStateName(faq.state)}
                                </span>
                                <div className="faq-question">
                                    <span style={{ fontWeight: "bold", marginRight: "8px" }}>{index + 1}.</span>
                                    {faq.actOrRule}
                                </div>
                                <div className="faq-answer">
                                    <p style={{ whiteSpace: "pre-line", marginBottom: "10px" }}>{faq.description}</p>
                                    <p><strong>Type:</strong> {faq.type || "N/A"}</p>
                                    <div className="row">
                                        <div className="col-4">
                                            {faq.updated_at ? (
                                                <p><strong>Updated On:</strong> {faq.updated_at ? moment(faq.updated_at).format("DD MMM YYYY") : "N/A"}</p>
                                            ) : (
                                                <p><strong>Created On:</strong> {faq.created_At ? moment(faq.created_At).format("DD MMM YYYY") : "N/A"}</p>
                                            )}
                                        </div>
                                        <div className="col-5"></div>
                                        <div className="col-3" style={{ marginTop: '-10px' }}>
                                            {faq.doc && (
                                                <a
                                                    className="btn btn-primary"
                                                    href={faq.doc}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    📄 View Document
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="alert alert-danger text-center fw-semibold">
                            No Legal & Regulatory Updates Available
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default LegalUpdsTable;

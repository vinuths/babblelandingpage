import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateGets, actLibraryPaginatedGet } from "../../../../../store/actions/otherActions";
import moment from "moment";
import { Pagination } from "antd";
// import 'antd/dist/antd.css';
import "./ActCSS.css";
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ActTable = ({ localPage, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, totalCount, loading } = useSelector((state) => state.actLibGetRed);
    const { stateInfo } = useSelector((state) => state.getState);

    const [pageSize, setPageSize] = useState(20);
    const [selectedState, setSelectedState] = useState("");

    const totalPages = Math.ceil(totalCount / pageSize);

    const [expandedDescriptions, setExpandedDescriptions] = useState({});

    const toggleDescription = (id) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        const filters = {};
        if (selectedState) filters.state = selectedState;
        dispatch(
            actLibraryPaginatedGet({
                page: localPage,
                limit: pageSize,
                filters,
            })
        );
    }, [localPage, selectedState, pageSize, dispatch]);

    const formatDateToInput = (isoDate) =>
        isoDate ? moment(isoDate).format("DD-MM-YYYY") : "";

    return (<>
        <div >
            {/* <div style={{ marginBottom: "20px" }}> */}
            <button
               onClick={() => navigate(-1)}
                className="back-button"
            >
                <ArrowBackIcon />
            </button>
            {/* </div> */}

        </div>
        <div className="custom-act-container">
            <div className="acts-header">
                <h2>Acts</h2>
                <p>
                    Labour Acts in India are designed to protect the rights of workers, ensure fair employment practices, and promote safe and equitable working conditions. These laws cover various aspects such as wages, employment conditions, industrial relations, safety, welfare, and social security.                </p>
            </div>
            <div className="filter-bar">
                <div className="left-filters">
                    <label htmlFor="stateFilter">State:</label>
                    <select
                        id="stateFilter"
                        className="state-select"
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

                <div className="right-filters">
                    <label htmlFor="pageSizeSelect">Show:</label>
                    <select
                        id="pageSizeSelect"
                        className="state-select"
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                            setLocalPage(1);
                        }}
                    >
                        {[10, 20, 30, 50].map((size) => (
                            <option key={size} value={size}>
                                {size} per page
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="act-list">
                {loading ? (
                    <div className="loader">Loading...</div>
                ) : data?.length > 0 ? (
                    data.map((item) => {
                        const isExpanded = expandedDescriptions[item._id];
                        const shouldTruncate = item.description && item.description.length > 300;
                        const displayText = isExpanded || !shouldTruncate
                            ? item.description
                            : item.description.slice(0, 300) + "...";

                        return (
                            <div className="act-card" key={item._id}>
                                <div className="act-info">
                                    <span className="state-badge">{item.stateData?.name || "N/A"}</span>
                                    <h3>{item.act}</h3>
                                    <p className="act-part">
                                        {displayText}
                                        {shouldTruncate && (
                                            <span
                                                onClick={() => toggleDescription(item._id)}
                                                className="toggle-link"
                                            >
                                                {isExpanded ? " View Less<<" : " View More>>"}
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <div className="act-meta">
                                    {item.updated_at ? (
                                        <p>Updated: <span style={{ color: 'red', fontStyle: 'italic' }}>{formatDateToInput(item.updated_at)}</span></p>
                                    ) : (
                                        <p>Created: <span style={{ color: 'red', fontStyle: 'italic' }}>{formatDateToInput(item.created_At)}</span></p>
                                    )}

                                    <a
                                        href={item.doc}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="download-btn"
                                    >
                                        Download ⬇
                                    </a>
                                </div>
                            </div>
                        );
                    })

                ) : (
                    <div className="no-data-box">
                        <h3>No Acts E-Library Available</h3>
                    </div>
                )}
            </div>

            {data?.length > 0 && (
                <div className="pagination-bar">
                    <Pagination
                        current={localPage}
                        pageSize={pageSize}
                        total={totalCount}
                        showSizeChanger={false} // because you already have your own page size selector
                        onChange={(page) => setLocalPage(page)}
                        responsive
                    />
                </div>
            )}
        </div>
    </>
    );
};

export default ActTable;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generalUpdateLibraryPaginatedGet } from "../../../../store/actions/otherActions";
import { Pagination } from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./Others.css";

const OthersTable = ({ localPage, setLocalPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, totalCount, loading } = useSelector(
    (state) => state.generalUpdateLibraryPaginatedRed
  );

  const [pageSize, setPageSize] = useState(20);
  const [topicSearch, setTopicSearch] = useState("");
  const [dateRange, setDateRange] = useState([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const fetchData = () => {
    const filters = {};
    if (topicSearch.trim()) filters.topic = topicSearch.trim();
    if (dateRange.length === 2) {
      filters.fromDate = dateRange[0].toISOString();
      filters.toDate = dateRange[1].toISOString();
    }
    dispatch(generalUpdateLibraryPaginatedGet({ page: localPage, limit: pageSize, filters }));
  };

  useEffect(() => {
    const debounce = setTimeout(() => fetchData(), 300);
    return () => clearTimeout(debounce);
  }, [localPage, topicSearch, dateRange, pageSize]);

  const formatDateToInput = (date) =>
    date ? moment(date).format("DD-MM-YYYY") : "";

  return (
    <>
      <div>
        <button onClick={() => navigate("/elibrary/View")} className="back-button">
          <ArrowBackIcon />
        </button>
      </div>
      <div className="custom-act-container">
        <div className="acts-header">
          <h2>General</h2>
          <p>
            A collection of miscellaneous templates and documents relevant to compliance and governance. Useful for general references across topics.
          </p>
        </div>

        <div className="filter-bar">
          <div className="left-filters">
            <label>Search Topic:</label>
            <input
              type="text"
              className="state-select"
              value={topicSearch}
              onChange={(e) => {
                setTopicSearch(e.target.value);
                setLocalPage(1);
              }}
              placeholder="Enter keyword..."
            />
          </div>
          <div className="right-filters">
            <label>Show:</label>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setLocalPage(1);
              }}
              className="state-select"
            >
              {[10, 20, 30, 50].map((s) => (
                <option key={s} value={s}>{s} per page</option>
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
                    <h3>{item.topic}</h3>
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
                    {item.doc && (
                      <a
                        href={item.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="download-btn"
                      >
                        Download ⬇ 
                      </a>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="no-data-box">
              <h3>No General E-Library Available</h3>
            </div>
          )}
        </div> 

        {data?.length > 0 && (
          <div className="pagination-bar">
            <Pagination
              current={localPage}
              pageSize={pageSize}
              total={totalCount}
              showSizeChanger={false}
              onChange={(page) => setLocalPage(page)}
              responsive
            />
          </div>
        )}
      </div>
    </>
  );
};

export default OthersTable;

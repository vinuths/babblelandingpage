import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  generalUpdateLibraryPaginatedGet,
  labourCodesGet,
  stateGets,
} from "../../../../store/actions/otherActions";

import { Pagination } from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  // Typography,
  Paper,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import "./Others.css";

/* ---------------- Row Component ---------------- */

function Row({ row, index, page, pageSize }) {
  const [open, setOpen] = useState(false);

  const serialNo = (page - 1) * pageSize + index + 1;

  const formatDate = (date) =>
    date ? moment(date).format("DD-MM-YYYY") : "";

  const getStatusChip = (status) => {
    const statusColors = {
      "Rule in Drafting": { bg: "#f0e6e6", color: "#616161" },
      "Draft Rule Published": { bg: "#fff3cd", color: "#856404" },
      "Final Rule Notified": { bg: "#cce5ff", color: "#004085" },
      "Rule Partially Notified": { bg: "#ffe5b4", color: "#8a5a00" },
      "Final Rule Notified and Implemented": { bg: "#d4edda", color: "#155724" },
      "Amendment Notified": { bg: "#e2e3ff", color: "#383d7c" }
    };

    const style = statusColors[status] || { bg: "#eee", color: "#333" };

    return (
      <span
        style={{
          backgroundColor: style.bg,
          color: style.color,
          padding: "4px 10px",
          borderRadius: "14px",
          fontSize: "12px",
          fontWeight: 600,
          display: "inline-block",
          whiteSpace: "nowrap"
        }}
      >
        {status}
      </span>
    );
  };
  const getStatusChipForLC = (status) => {
    const statusColorsForLC = {
      "Act in Drafting": { bg: "#f0e6e6", color: "#616161" },
      "Draft Act Published": { bg: "#fff3cd", color: "#856404" },
      "Final Act Notified": { bg: "#cce5ff", color: "#004085" },
      "Final Act Notified and Implemented": { bg: "#d4edda", color: "#155724" },
      "Amendment Notified": { bg: "#e2e3ff", color: "#383d7c" }
    };

    const styleForLC = statusColorsForLC[status] || { bg: "#eee", color: "#333" };

    return (
      <span
        style={{
          backgroundColor: styleForLC.bg,
          color: styleForLC.color,
          padding: "4px 10px",
          borderRadius: "14px",
          fontSize: "12px",
          fontWeight: 600,
          display: "inline-block",
          whiteSpace: "nowrap"
        }}
      >
        {status}
      </span>
    );
  };

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell width="75" align="center">{serialNo}</TableCell>
        <TableCell>{row.codeType}</TableCell>
        <TableCell>{row.stateName}</TableCell>
        {/* <TableCell>
          {row.updatedAt
            ? formatDate(row.updatedAt)
            : formatDate(row.createdAt)}
        </TableCell> */}
        {/* <TableCell>{row.rules?.length || 0}</TableCell> */}
        <TableCell>{formatDate(row.publishedDate)}</TableCell>
        <TableCell>{formatDate(row.effectiveDate)}</TableCell>
        <TableCell><a href={row.doc}>View Document</a></TableCell>
        <TableCell>{getStatusChipForLC(row.codeStatus)}</TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      {/* -------- Rules Collapse -------- */}
      <TableRow>
        <TableCell colSpan={8} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 2 }}>
              {/* <Typography variant="h6" gutterBottom>
                Rules
              </Typography> */}
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Sl No.</TableCell>
                    <TableCell>Rule Title</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Published Date</TableCell>
                    <TableCell>Effective Date</TableCell>
                    <TableCell>Document</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.rules?.map((rule, index) => (
                    <TableRow key={rule._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{rule.ruleTitle}</TableCell>
                      <TableCell>{getStatusChip(rule.ruleStatus)}</TableCell>
                      <TableCell>
                        {moment(rule.publishedDate).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell>
                        {moment(rule.effectiveDate).format("DD-MM-YYYY")}
                      </TableCell>
                      <TableCell>
                        {rule.ruledoc && (
                          <a
                            href={rule.ruledoc}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

/* ---------------- Main Component ---------------- */

const OthersTable = ({ localPage, setLocalPage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, totalCount, loading } = useSelector(
    (state) => state.generalUpdateLibraryPaginatedRed
  );

  const { data: labourCodes } = useSelector(
    (state) => state.labourCodesGetRed
  );

  const { stateInfo = [] } = useSelector(
    (state) => state.getState
  );

  const [pageSize, setPageSize] = useState(20);
  const [labourCodeFilterID, setLabourCodeFilterID] = useState("");
  const [stateFilter, setStateFilter] = useState("");

  /* -------- Fetch Data -------- */

  const fetchData = () => {
    const filters = {};

    if (labourCodeFilterID) filters.labourCodeId = labourCodeFilterID;
    if (stateFilter) filters.state = stateFilter;

    dispatch(
      generalUpdateLibraryPaginatedGet({
        page: localPage,
        limit: pageSize,
        filters,
      })
    );
  };

  /* -------- Initial Load -------- */

  useEffect(() => {
    dispatch(stateGets());
    dispatch(labourCodesGet());
  }, [dispatch]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      fetchData();
    }, 300);

    return () => clearTimeout(debounce);
  }, [localPage, labourCodeFilterID, stateFilter, pageSize]);

  return (
    <>
      {/* -------- Back Button -------- */}
      <div>
        <button
          onClick={() => navigate("/elibrary/View")}
          className="back-button"
        >
          <ArrowBackIcon />
        </button>
      </div>
      <div className="custom-act-container">
        {/* -------- Header -------- */}
        <div className="acts-header">
          <h2>Labour Codes</h2>
          <p style={{ marginBottom: "6px" }}>
            India has undertaken a significant labour law reform by consolidating 29 central labour laws into four comprehensive codes
            with the objective of simplifying labour compliance, enhancing ease of doing business, and strengthening worker protection.
            Although these Codes have been enacted by the Central Government and notified on 21 November 2025, their operational
            implementation will take effect from the date on which the respective states and union territories notify the
            corresponding rules. Until such rules are notified and brought into force, the existing labour laws will continue to remain applicable.
          </p>
          <ul
            style={{
              margin: "4px 0",
              paddingLeft: "20px",
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              listStylePosition: "inside"
            }}
          >
            <li style={{ fontSize: "13px", fontStyle: "italic", fontWeight: "bold", margin: 0 }}>
              The Code on Wages, 2019
            </li>
            <li style={{ fontSize: "13px", fontStyle: "italic", fontWeight: "bold", margin: 0 }}>
              The Industrial Relations Code, 2020
            </li>
            <li style={{ fontSize: "13px", fontStyle: "italic", fontWeight: "bold", margin: 0 }}>
              The Code on Social Security, 2020
            </li>
            <li style={{ fontSize: "13px", fontStyle: "italic", fontWeight: "bold", margin: 0 }}>
              The Occupational Safety, Health and Working Conditions Code, 2020
            </li>
          </ul>
          {/* <p style={{ marginTop: "6px" }}>
          </p> */}
        </div>
        {/* -------- Filters -------- */}
        <div className="filter-bar">
          <div className="left-filters">
            <label>Labour Code:</label>
            <select
              className="state-select"
              value={labourCodeFilterID}
              onChange={(e) => {
                setLabourCodeFilterID(e.target.value);
                setLocalPage(1);
              }}
            >
              <option value="">All Codes</option>
              {labourCodes?.map((code) => (
                <option key={code._id} value={code._id}>
                  {code.codeType}
                </option>
              ))}
            </select>
          </div>
          <div className="center-filters">
            <label>State:</label>
            <select
              className="state-select"
              value={stateFilter}
              onChange={(e) => {
                setStateFilter(e.target.value);
                setLocalPage(1);
              }}
            >
              <option value="">All States</option>
              {stateInfo?.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
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
                <option key={s} value={s}>
                  {s} per page
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* -------- Table -------- */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Sl No.</TableCell>
                <TableCell>Labour Code</TableCell>
                <TableCell>State</TableCell>
                {/* <TableCell>Date</TableCell> */}
                <TableCell>Published Date</TableCell>
                <TableCell>Effective Date</TableCell>
                <TableCell>Document</TableCell>
                <TableCell>Code Status</TableCell>
                <TableCell>Rules</TableCell>
                {/* <TableCell /> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : data?.length > 0 ? (
                // data.map((row) => <Row key={row._id} row={row} />)
                data.map((row, index) => (
                  <Row
                    key={row._id}
                    row={row}
                    index={index}
                    page={localPage}
                    pageSize={pageSize}
                  />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No Labour Codes E-Library Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {/* -------- Pagination -------- */}
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
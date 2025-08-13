import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Box,
  TextField
} from "@mui/material";
import { companyLoginBranchGet, registerCompPaginatedGet } from "../../../../store/actions/otherActions";

const rowsPerPageDefault = 10000;

const RegisterPanel = ({ setFromMonth, setToMonth, fromMonth, toMonth, onBack }) => {
  const dispatch = useDispatch();

  /* ------ pagination state ------ */
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);
  const [branch, setBranch] = useState('');

  /* ------ redux data ------ */
  const { loading, data: list = [], count = 0 } =
    useSelector((s) => s.getregisterCompRed) || {};
  const { loadingCLB, getCompanyLoginBranchInfo } = useSelector((s) => s.companyLoginBranchRed || {});

  const [actFilter, setActFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [registerFilter, setRegisterFilter] = useState('');
  const [periodFilter, setPeriodFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');


  /* ------ fetch whenever page/rowsPerPage changes ------ */
  useEffect(() => {
    dispatch(companyLoginBranchGet());
  }, [dispatch]);
  useEffect(() => {
    if (!fromMonth || !toMonth) return;

    const postBody = {
      fromDate: fromMonth,
      toDate: toMonth,
      ...(branch && { branchId: branch }) // ✅ sends ID, not name

    };

    dispatch(registerCompPaginatedGet({
      page: page + 1,
      limit: rowsPerPage,
      filters: postBody  // ✅ Use filters key to match backend expectation
    }));
  }, [dispatch, page, rowsPerPage, fromMonth, toMonth, branch]);


  /* ------ handlers ------ */
  const handlePageChange = (_, newPage) => setPage(newPage);
  const handleRowsChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  /* ------ status mapping ------ */
  const statusText = (s) => {
    if (s === 1) return { text: "Updated", color: "green" };
    if (s === 2) return { text: "Pending", color: "orange" };
    return { text: "No Status Available", color: "grey" };
  };


  /* ------ render ------ */
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Registers Maintenance</Typography>
          <Button variant="outlined" style={{ backgroundColor: '#013879', color: 'white' }} size="small" onClick={onBack}>Back</Button>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mb: 2,
          }}
        >
          {/* 📅 Date Filters (left side) */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: '10px' }} className="filter-container">
            <TextField
              type="month"
              size="small"
              label="From"
              value={fromMonth}
              onChange={(e) => setFromMonth(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type="month"
              size="small"
              label="To"
              value={toMonth}
              onChange={(e) => setToMonth(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>

          {/* 🏢 Branch Selector (right side) */}
          <Box sx={{ minWidth: 200 }}>
            <select
              className="form-select"
              id="branch"
              name="branch"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">All Branches</option>
              {Array.isArray(getCompanyLoginBranchInfo) &&
                getCompanyLoginBranchInfo.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 2, mt: 2, ml: 0 }}>
          <TextField
            size="small"
            label="Filter by State"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Applicable Act"
            value={actFilter}
            onChange={(e) => setActFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Register Name"
            value={registerFilter}
            onChange={(e) => setRegisterFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Period"
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value.toLowerCase())}
          />
        </Box>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>


                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Sl. No</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>State</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Branch</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Act</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Register&nbsp;Name</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Period</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Details</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Remarks</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Status</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Approval</TableCell>
                    <TableCell style={{ backgroundColor: '#013879', color: 'white' }} align="center">Document</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} align="center">
                        <Typography color="error">No Data Available</Typography>
                      </TableCell>
                    </TableRow>
                  ) : (
                    list
                      .filter((r) => {
                        const statusLabel = r.status === 1
                          ? "updated"
                          : r.status === 2
                            ? "pending"
                            : "no status available";

                        return (
                          (r.state || "").toLowerCase().includes(stateFilter) &&
                          (r.applicableAct || "").toLowerCase().includes(actFilter) &&
                          (r.registerName || "").toLowerCase().includes(registerFilter) &&
                          (r.period || "").toLowerCase().includes(periodFilter) &&
                          statusLabel.includes(statusFilter)
                        );
                      })
                      .map((r, index) => (
                        <TableRow key={r._id}>


                          <TableCell>{index + 1}</TableCell>
                          <TableCell>{r.state}</TableCell>
                          <TableCell>{r.branchName}</TableCell>
                          <TableCell>{r.applicableAct}</TableCell>
                          <TableCell>{r.registerName}</TableCell>
                          <TableCell>{r.period}</TableCell>
                          <TableCell>{r.details}</TableCell>
                          <TableCell>{r.remarks}</TableCell>
                          {(() => {
                            const { text, color } = statusText(r.status);
                            return (
                              <TableCell>
                                <Typography style={{ color }}>{text}</Typography>
                              </TableCell>
                            );
                          })()}
                          <TableCell>
                            <span
                              style={{
                                color:
                                  r.workStatus === 1
                                    ? "green"
                                    : r.workStatus === 2
                                      ? "red"
                                      : "gray",
                                fontStyle: r.workStatus === 0 ? "italic" : "normal",
                              }}
                            >
                              {r.workStatus === 1
                                ? "Approved"
                                : r.workStatus === 2
                                  ? "Rejected"
                                  : "Pending"}
                            </span>
                          </TableCell>
                          <TableCell align="center">
                            {r.doc ? (
                              <a
                                href={r.doc}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View&nbsp;Doc
                              </a>
                            ) : (
                              "-"
                            )}
                          </TableCell>
                        </TableRow>
                      )))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* <TablePagination
              component="div"
              count={count}
              page={page}
              // onPageChange={handlePageChange}
              rowsPerPage={rowsPerPage}
              // onRowsPerPageChange={handleRowsChange}
              // rowsPerPageOptions={[5, 10, 25]}
              sx={{ mt: 1 }}
            /> */}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RegisterPanel;

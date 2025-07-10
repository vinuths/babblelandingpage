import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Button,
  Box,
  TextField,
  TablePagination,
} from "@mui/material";
import { companyLoginBranchGet, returnsGetAll } from "../../../../store/actions/otherActions";

const rowsPerPageDefault = 10000;


const ReturnsPanel = ({ setFromMonth, setToMonth, fromMonth, toMonth, onBack, onViewDoc }) => {
  const dispatch = useDispatch();
  const {
    loading,
    data = [],
    count = 0,
    currentPage = 1,
    totalPages = 1
  } = useSelector((s) => s.returnsRed || {});

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);
  const { loadingCLB, getCompanyLoginBranchInfo } = useSelector((s) => s.companyLoginBranchRed || {});

  const [branch, setBranch] = useState('');

  const [actFilter, setActFilter] = useState('');
  const [returnNameFilter, setReturnNameFilter] = useState('');
  const [periodFilter, setPeriodFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');


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

    dispatch(returnsGetAll({
      page: page + 1,
      limit: rowsPerPage,
      filters: postBody  // ✅ Use filters key to match backend expectation
    }));
  }, [dispatch, page, rowsPerPage, fromMonth, toMonth, branch]);

  // useEffect(() => {
  //   dispatch(returnsGetAll());
  // }, [dispatch]);

  /* ------ status mapping ------ */
  const statusText = (s) => {
    if (s === 1) return { text: "Completed", color: "green" };
    if (s === 2) return { text: "Partially Completed", color: "orange" };
    if (s === 3) return { text: "Pending", color: "red" };
    return { text: "No Status Available", color: "grey" };
  };

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Returns Filing</Typography>
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 8, mb: 2, ml: 8 }}>
          <TextField
            size="small"
            label="Filter by Act"
            value={actFilter}
            onChange={(e) => setActFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Return Name"
            value={returnNameFilter}
            onChange={(e) => setReturnNameFilter(e.target.value.toLowerCase())}
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
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sl. No</TableCell>
                  <TableCell>Branch</TableCell>
                  <TableCell>Act</TableCell>
                  <TableCell>Return&nbsp;Name</TableCell>
                  <TableCell>Period</TableCell>
                  <TableCell>Due&nbsp;Date</TableCell>
                  <TableCell>Filing&nbsp;Date</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="center">Docs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} align="center">
                      <Typography color="error">No Data Available</Typography>
                    </TableCell>
                  </TableRow>
                ) : (

                  data
                    .filter((r) => {
                      const statusLabel =
                        r.status === 1
                          ? "completed"
                          : r.status === 2
                            ? "partially completed"
                            : r.status === 3
                              ? "pending"
                              : "no status available";

                      return (
                        (r.act || '').toLowerCase().includes(actFilter) &&
                        (r.returnName || '').toLowerCase().includes(returnNameFilter) &&
                        (r.period || '').toLowerCase().includes(periodFilter) &&
                        statusLabel.includes(statusFilter)
                      );
                    })
                    .map((r, index) => (
                      <TableRow key={r._id}>
                        <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                        <TableCell>{r.branch.name}</TableCell>
                        <TableCell>{r.act}</TableCell>
                        <TableCell>{r.returnName}</TableCell>
                        <TableCell>{r.period}</TableCell>
                        <TableCell>{r.dueDate?.slice(0, 10)}</TableCell>
                        <TableCell>{r.filingDate?.slice(0, 10)}</TableCell>
                        {(() => {
                          const { text, color } = statusText(r.status);
                          return (
                            <TableCell>
                              <Typography style={{ color }}>{text}</Typography>
                            </TableCell>
                          );
                        })()}
                        <TableCell align="center">
                          {r.status !== 3 ? (
                            <Button
                              size="small"
                              onClick={() => onViewDoc(r._id)} // ← send id up
                            >
                              View Docs
                            </Button>
                          ):("-")}

                        </TableCell>
                      </TableRow>
                    ))
                )}
              </TableBody>
            </Table>
          </TableContainer>

        )}
        {/* <TablePagination
          component="div"
          count={count}
          page={currentPage - 1} // Convert to 0-based for Material UI
          onPageChange={(event, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0); // Reset to first page on limit change
          }}
          rowsPerPageOptions={[5, 10, 25, 50]}
        /> */}
      </CardContent>
    </Card>
  );
};

export default ReturnsPanel;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TextField,
  Box
} from "@mui/material";
import { companyLoginBranchGet, remittanceGetAll } from "../../../../store/actions/otherActions";

const rowsPerPageDefault = 10000;

const RemittanceTable = ({ setFromMonth, setToMonth, fromMonth, toMonth, onBack, onViewDoc }) => {
  const dispatch = useDispatch();
  const { loading, data = [] } = useSelector((s) => s.remittanceRed || {});
  const { loadingCLB, getCompanyLoginBranchInfo } = useSelector((s) => s.companyLoginBranchRed || {});

  useEffect(() => {
    dispatch(companyLoginBranchGet());
  }, [dispatch]);
  const [page, setPage] = useState(0);
  const [branch, setBranch] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageDefault);

  const [paymentTypeFilter, setPaymentTypeFilter] = useState('');
  const [challanTypeFilter, setChallanTypeFilter] = useState('');
  const [periodFilter, setPeriodFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');


  useEffect(() => {
    if (!fromMonth || !toMonth) return;

    const postBody = {
      fromDate: fromMonth,
      toDate: toMonth,
      ...(branch && { branchId: branch }) // ✅ sends ID, not name
    };

    dispatch(remittanceGetAll({
      page: page + 1,
      limit: rowsPerPage,
      filters: postBody
    }));

  }, [dispatch, page, rowsPerPage, fromMonth, toMonth, branch]);
  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  const formatDate1 = (dateStr) => {
    if (!dateStr) return " ";
    const date = new Date(dateStr);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month}-${year}`;
  };
  const formatDate2 = (dateStr) => {
    if (!dateStr) return " ";
    const date = new Date(dateStr);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `-${month}-${year}`;
  };



  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Remittance Tracker</Typography>
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
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 9, mb: 2, marginLeft: '40px' }}>
          <TextField
            size="small"
            label="Filter by Payment Type"
            value={paymentTypeFilter}
            onChange={(e) => setPaymentTypeFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Challan Type"
            value={challanTypeFilter}
            onChange={(e) => setChallanTypeFilter(e.target.value.toLowerCase())}
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
              <TableHead >
                <TableRow >
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '50px' }}>Sl</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>State</TableCell>
                  {/* <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Act/Rule</TableCell> */}
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '140px' }}>Branch</TableCell>
                  {/* <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Category</TableCell> */}
                  {/* <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Frequency</TableCell> */}
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '80px' }}>Type</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Challan&nbsp;Type</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Amount</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '160px' }}>
                    Period
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '140px' }}>
                    Due&nbsp;Date
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white', minWidth: '110px' }}>
                    Paid&nbsp;On
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Status</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Docs</TableCell>
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
                      const period = `${r.periodAt || ''}–${r.periodTo || ''}`.toLowerCase();

                      const statusLabel =
                        r.status === 1
                          ? "remittances are done in time"
                          : r.status === 2
                            ? "remittances are done after due date"
                            : r.status === 3
                              ? "remittance is not done"
                              : "no status yet";

                      return (
                        (r.paymentType || '').toLowerCase().includes(paymentTypeFilter) &&
                        (r.challanType || '').toLowerCase().includes(challanTypeFilter) &&
                        (`${formatDate(r.periodAt)} – ${formatDate(r.periodTo)}`.toLowerCase().includes(periodFilter)) &&
                        (statusLabel.toLowerCase().includes(statusFilter))

                      );
                    })
                    .map((r, index) => (

                      <TableRow key={r._id} >
                        <TableCell style={{ minWidth: '50px' }}>{index + 1}</TableCell>
                        <TableCell>{r.stateData[0]?.name}</TableCell>
                        {/* <TableCell>{r.actOrRule}</TableCell> */}
                        <TableCell style={{ minWidth: '140px' }}>{r.branch?.name}</TableCell>
                        {/* <TableCell>{r.cateoData[0]?.name}</TableCell> */}
                        {/* <TableCell>{r.remFrequency}</TableCell> */}
                        <TableCell style={{ minWidth: '80px' }}>{r.paymentType}</TableCell>
                        <TableCell>{r.challanType}</TableCell>
                        <TableCell>
                          {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                          }).format(r.amount)}
                        </TableCell>
                        <TableCell style={{ minWidth: '160px' }}>
                          {formatDate1(r.periodAt)}  {formatDate2(r.periodTo)}
                        </TableCell>
                        <TableCell style={{ minWidth: '140px' }}>
                          {formatDate(r.dueDatePayment)}
                        </TableCell>
                        <TableCell style={{ minWidth: '110px' }}>
                          {formatDate(r.paymentDate)}
                        </TableCell>


                        <TableCell>
                          <span
                            style={{
                              color:
                                r.status === 1
                                  ? "green"
                                  : r.status === 2
                                    ? "orange"
                                    : r.status === 3
                                      ? "red"
                                      : "gray",
                              fontStyle: r.status === 0 ? "italic" : "normal",
                            }}
                          >
                            {r.status === 1
                              ? "Done in Time"
                              : r.status === 2
                                ? "Done after Due date"
                                : r.status === 3
                                  ? "Not done"
                                  : "No Status Yet"}
                          </span>
                        </TableCell>
                        <TableCell align="center">
                          {r.status !== 3 ? (
                            <Button
                              size="small"
                              style={{backgroundColor:'#013879', color:'white'}}
                              onClick={() => onViewDoc(r._id)} // ← send id up
                            >
                              View
                            </Button>
                          ) : ("-")}

                        </TableCell>
                      </TableRow>
                    )))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default RemittanceTable;

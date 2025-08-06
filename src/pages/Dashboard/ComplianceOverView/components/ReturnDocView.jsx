import React, { useEffect } from "react";
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
} from "@mui/material";
import { returnsGetById } from "../../../../store/actions/otherActions";

const ReturnDocView = ({ returnName: returnId, onBack }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((s) => s.returnsGetByIdRed || {});
  console.log("returnId", returnId);

  useEffect(() => {
    if (returnId) dispatch(returnsGetById(returnId));
  }, [dispatch, returnId]);

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Return&nbsp;Documents</Typography>
          <Button variant="outlined" style={{ backgroundColor: '#013879', color: 'white' }} size="small" onClick={onBack}>Back</Button>
        </div>

        {loading || !data ? (
          <p>Loading…</p>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 2 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>#</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Workings</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Acknowledgement</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Returns</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Remarks</TableCell>
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
                  data.returnsDetails?.map((d, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{idx + 1}</TableCell>
                      {["workings", "acknowledement", "returns"].map((key) => (
                        <TableCell key={key}>
                          {d[key] ? (
                            <a href={d[key]} target="_blank" rel="noopener noreferrer">
                              View
                            </a>
                          ) : (
                            "-"
                          )}
                        </TableCell>
                      ))}
                      <TableCell>{d.remarks || "-"}</TableCell>
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

export default ReturnDocView;


import React, { useState } from "react";
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
  Paper
} from "@mui/material";

const  ReturnDocView = ({ returnName, onBack }) => (
  <Card sx={{ mb: 4 }}>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Typography variant="h6" className="compliance-header">{returnName} Documents</Typography>
        <Button variant="outlined" size="small" onClick={onBack}>Back</Button>
      </div>
      <TableContainer component={Paper}>
        <Table size="small" className="compliance-table">
          <TableHead>
            <TableRow>
              <TableCell>Working</TableCell>
              <TableCell>Return</TableCell>
              <TableCell>Acknowledgement</TableCell>
              <TableCell>Remarks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>View</TableCell>
              <TableCell>View</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Filed Successfully</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);
export default ReturnDocView;

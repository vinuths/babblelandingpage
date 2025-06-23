
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

const RemittanceTable = ({ onBack, onViewDoc }) => (
  <Card sx={{ mb: 4 }}>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Typography variant="h6" className="compliance-header">Remittance Tracker</Typography>
        <Button variant="outlined" size="small" onClick={onBack}>Back</Button>
      </div>
      <TableContainer component={Paper}>
        <Table size="small" className="compliance-table">
          <TableHead>
            <TableRow>
              <TableCell>Payment Type</TableCell>
              <TableCell>Challan Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Payment Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {["PF", "ESIC", "PT"].map((type, idx) => (
              <TableRow key={idx}>
                <TableCell>{type}</TableCell>
                <TableCell>Regular</TableCell>
                <TableCell>12345</TableCell>
                <TableCell>May-25</TableCell>
                <TableCell>15-Jun-25</TableCell>
                <TableCell>16-Jun-25</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => onViewDoc(type)}>
                    View Document
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  </Card>
);
export default RemittanceTable;

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

const ReturnsPanel = ({ onBack, onViewDoc }) => (
  <Card sx={{ mb: 4 }}>
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Typography variant="h6" className="compliance-header">Returns Filing</Typography>
        <Button variant="outlined" size="small" onClick={onBack}>Back</Button>
      </div>
      <TableContainer component={Paper}>
        <Table size="small" className="compliance-table">
          <TableHead>
            <TableRow>
              <TableCell>Return Name</TableCell>
              <TableCell>Period</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Filed Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {["PF Monthly", "ESIC Monthly", "LWF Half-Yearly"].map((ret, idx) => (
              <TableRow key={idx}>
                <TableCell>{ret}</TableCell>
                <TableCell>May-25</TableCell>
                <TableCell>15-Jun-25</TableCell>
                <TableCell>16-Jun-25</TableCell>
                <TableCell>Filed</TableCell>
                <TableCell>
                  <Button size="small" onClick={() => onViewDoc(ret)}>
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

export default ReturnsPanel;

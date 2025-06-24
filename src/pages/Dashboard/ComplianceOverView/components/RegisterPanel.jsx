import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";



export const RegisterPanel = ({ onBack }) => {

    return (
        
        <Card sx={{ mb: 4 }}>
            <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Typography variant="h6" className="compliance-header">Registers Maintenance</Typography>
                    <Button variant="outlined" size="small" onClick={onBack}>Back</Button>
                </div>
                <TableContainer component={Paper}>
                    <Table size="small" className="compliance-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Register Name</TableCell>
                                <TableCell>Details</TableCell>
                                <TableCell>Period</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {["Muster Roll", "Wage Register", "Leave Register"].map((reg, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{reg}</TableCell>
                                    <TableCell>Details of {reg}</TableCell>
                                    <TableCell>May-25</TableCell>
                                    <TableCell>Maintained</TableCell>
                                    <TableCell><Button size="small">View</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>

    );
};

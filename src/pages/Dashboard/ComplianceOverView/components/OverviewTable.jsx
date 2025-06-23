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
    Paper,
    TextField,
    Box
} from "@mui/material";
import './Compliance.css';
import { useDispatch, useSelector } from "react-redux";
// import { complianceOverViewGet } from "../../../../store/actions/otherActions";

export const OverviewTable = ({ setView }) => {
    const dispatch = useDispatch();

    const [fromMonth, setFromMonth] = useState("2025-05");
    const [toMonth, setToMonth] = useState("2025-05");

    // const { compOverView } = useSelector((state) => state.complianceOverviewRed);
    // console.log("compOverView", compOverView);

    // useEffect(() => {
    //     dispatch(complianceOverViewGet());
    // }, [dispatch])
    return (
        <Card>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        mb: 2,
                    }}
                >
                    <Typography variant="h6" className="compliance-header">
                        Compliance Overview: {new Date(fromMonth).toLocaleString('default', { month: 'long', year: 'numeric' })} - {new Date(toMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }} className="filter-container">
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
                </Box>

                <TableContainer component={Paper}>
                    <Table size="small" className="compliance-table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Module</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { module: "Registrations & Licenses", view: "licenses" },
                                { module: "Remittance Tracker", view: "remittance" },
                                { module: "Registers Maintenance", view: "registers" },
                                { module: "Returns Filing", view: "returns" },
                            ].map((item, idx) => (
                                <TableRow key={idx}>
                                    <TableCell>{item.module}</TableCell>
                                    <TableCell>Complete/Partial/Pending</TableCell>
                                    <TableCell>
                                        <Button
                                            size="small"
                                            onClick={() => setView(item.view)}
                                        >
                                            View Details
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
};

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
// import dayjs from "dayjs";
import { companyLoginBranchGet, overViewStatusGet } from "../../../../store/actions/otherActions";


export const OverviewTable = ({ setView, loggedInUser, fromMonth, toMonth, setFromMonth, setToMonth }) => {
    const dispatch = useDispatch();
    const {
        loadingOVS,
        branchCount,
        licenceSummary = [],
        remmitanceResponse = [],
        registerResponse = {},
        returnsResponse = {},
        error,
    } = useSelector((state) => state.getOverViewStatusRed);
    console.log("licenceSummary", licenceSummary);

    // const currentMonth = dayjs().format("YYYY-MM");
    // const [fromMonth, setFromMonth] = useState(currentMonth);
    // const [toMonth, setToMonth] = useState(currentMonth);

    // useEffect(() => {
    //     dispatch(overViewStatusGet());
    // }, [dispatch]);
    const [branch, setBranch] = useState('');
    const { loadingCLB, getCompanyLoginBranchInfo } = useSelector((s) => s.companyLoginBranchRed || {});

    useEffect(() => {
        dispatch(companyLoginBranchGet());
    }, [dispatch]);

    useEffect(() => {
        if (!fromMonth || !toMonth) return;
        const postBody = {
            fromMonth,
            toMonth,
            ...(branch && { branchId: branch }) // ✅ sends ID, not name

        }        // guard against empty state
        dispatch(overViewStatusGet(postBody));
        // console.log("fromMonth,toMonth1", fromMonth);
        // console.log("fromMonth,toMonth2", toMonth);
    }, [dispatch, fromMonth, toMonth, branch]);




    // Utility for remittance custom logic
    const getRemittanceStatusAndDetail = (remittanceData) => {
        const statuses = remittanceData.map(r => r.status);
        const types = remittanceData.map(r => r.type);

        const has0 = statuses.includes(0);
        const has3 = statuses.includes(3);
        const has4 = statuses.includes(4);
        const all0 = statuses.length && statuses.every(s => s === 0);
        const all1 = statuses.length && statuses.every(s => s === 1);
        const all1Or2 = statuses.length && statuses.every(s => s === 1 || s === 2);

        let statusText = "No Data";
        let statusColor = "grey";
        let detailText = "";

        if (all1) {
            statusText = "Completed";
            statusColor = "green";
            detailText = "All Remittances are done in time";
        } else if (all1Or2) {
            statusText = "Partially Completed";
            statusColor = "orange";
            detailText = "Remittances are done after due date";
        } else if (all0) {
            statusText = "No Data";
            statusColor = "grey";
            detailText = "No Data";
        } else if (has3 || has0) {
            const pendingTypes = remittanceData
                .filter(r => r.status === 3 || r.status === 0)
                .map(r => r.type)
                .join(", ");
            statusText = "Pending";
            statusColor = "red";
            detailText = `The (${pendingTypes}) Remittance is pending`;
        } else if (has4) {
            const notDoneTypes = remittanceData
                .filter(r => r.status === 4)
                .map(r => r.type)
                .join(", ");
            statusText = "Pending";
            statusColor = "red";
            detailText = `The (${notDoneTypes}) Remittance is not done`;
        }

        return { text: statusText, color: statusColor, detailText };
    };

    const remittanceModule = (() => {
        const { text, color, detailText } = getRemittanceStatusAndDetail(remmitanceResponse);
        return {
            label: "Remittance Tracker",
            view: "remittance",
            statusText: text,
            statusColor: color,
            detailText,
        };
    })();

    const getlicenceSummaryStatus = (licenceSummary = []) => {
        if (licenceSummary.length === 0) {
            return {
                text: "No Data",
                color: "grey",
                detailText: "No license data available"
            };
        }

        const statuses = licenceSummary.map((l) => l.status);

        const allAre = (allowed) => statuses.every((s) => allowed.includes(s));

        if (allAre([1])) {
            return {
                text: "Completed",
                color: "green",
                detailText: "All active licenses in place"
            };
        }

        if (allAre([1, 2])) {
            const licences = licenceSummary.filter(l => l.status === 2).map(l => l.licence).join(', ');
            return {
                text: "Partially Completed",
                color: "orange",
                detailText: `(${licences}) Licenses are not in place or renewed`
            };
        }

        if (allAre([3])) {
            return {
                text: "Pending",
                color: "red",
                detailText: "No Licenses are in Place"
            };
        }

        // Mixed statuses (e.g., 2 and 3 or 1, 2, 3)
        const licences = licenceSummary.filter(l => l.status === 3).map(l => l.licence).join(', ');
        return {
            text: "Pending",
            color: "red",
            detailText: `(${licences}) Licenses are not in place or renewed`
        };
    };

    const licenseModule = (() => {
        const { text, color, detailText } = getlicenceSummaryStatus(licenceSummary);
        return {
            label: "Registrations & Licenses",
            view: "licenses",
            statusText: text,
            statusColor: color,
            detailText,
        };
    })();

    const registerModule = (() => {
        const status = registerResponse.registerStatus ?? 4;
        let text = "No Status";
        let color = "grey";
        let detailText = "No data available";

        if (status === 1) {
            text = "Completed";
            color = "green";
            detailText = "All Registers are uploaded";
        } else if (status === 2) {
            text = "Partially Completed";
            color = "orange";
            detailText = `${registerResponse.missingDocsCount} documents are Pending`;
        } else if (status === 3) {
            text = "Pending";
            color = "red";
            detailText = "No documents are uploaded";

        } else if (status === 0 || status === null) {
            text = "No Data";
            color = "grey";
            detailText = "No documents Available";
        }

        return {
            label: "Registers Maintenance",
            view: "registers",
            statusText: text,
            statusColor: color,
            detailText
        };
    })();

    const returnsModule = (() => {
        const status = returnsResponse.returnsStatus ?? 4;
        let text = "No Status";
        let color = "grey";
        let detailText = "No data available";

        if (status === 1) {
            text = "Completed";
            color = "green";
            detailText = "All Returns are done in Time";
        } else if (status === 2) {
            text = "Partially Completed";
            color = "orange";
            detailText = "Returns are filed after due date";
        } else if (status === 3) {
            text = "Pending";
            color = "red";
            detailText = "Some returns are pending";
        } else if (status === 4) {
            text = "Pending";
            color = "red";
            detailText = "Returns are not filed";
        }

        return {
            label: "Returns Filing",
            view: "returns",
            statusText: text,
            statusColor: color,
            detailText
        };
    })();


    const modules = [
        licenseModule,
        remittanceModule,
        registerModule,
        returnsModule
    ];





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
                    {/* <Box sx={{ minWidth: 200 }}>
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
                    </Box> */}
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
                            {modules.map((item, idx) => {
                                const isUnauthorized =
                                    (item.view === "licenses" && !loggedInUser?.isLisRegComp) ||
                                    (item.view === "remittance" && !loggedInUser?.isRemmitComp) ||
                                    (item.view === "registers" && !loggedInUser?.isRegisterComp) ||
                                    (item.view === "returns" && !loggedInUser?.isReturnsComp);

                                if (isUnauthorized) return null; // 🔒 completely skip this row
                                const isDisabled = false;
                                return (
                                    <TableRow key={idx}>
                                        <TableCell>{item.label}</TableCell>
                                        <TableCell>
                                            <Typography style={{ color: item.statusColor }}>
                                                {item.statusText}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="small"
                                                disabled={isDisabled}
                                                onClick={!isDisabled ? () => setView(item.view) : undefined}
                                            >
                                                {item.detailText}
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>


                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
};

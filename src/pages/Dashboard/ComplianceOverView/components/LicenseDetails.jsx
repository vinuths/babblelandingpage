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
  Box,
  TextField
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { complianceOverViewGet } from "../../../../store/actions/otherActions";
import './Compliance.css';

export const LicenseDetails = ({ onBack }) => {
  const dispatch = useDispatch();
  const { compOverView } = useSelector((state) => state.complianceOverviewRed);
  console.log("compOverView", compOverView);

  useEffect(() => {
    dispatch(complianceOverViewGet());
  }, [dispatch]);

  /* utils.js -------------------------------------------------------------- */
  const [labelFilter, setLabelFilter] = useState("");
  const [validKeyFilter, setValidKeyFilter] = useState("");
  const [renewalKeyFilter, setRenewalKeyFilter] = useState("");
  const [statusKeyFilter, setStatusKeyFilter] = useState("");
  const [branchFilter, setBranchFilter] = useState("");



  const licenses = [
    // expiryStatus‑based licences  –––––––––––––––––
    {
      label: "S&E",
      numberKey: "licensenumber",
      validKey: "doe",
      renewalKey: "doddr",
      statusKey: "expiryStatus.licensenumber.status",
      dayKey: "expiryStatus.licensenumber.days",
      fileKey: "licenseimage",
    },
    {
      label: "Factory",
      numberKey: "licensenumber1",
      validKey: "doe1",
      renewalKey: "doddr1",
      statusKey: "expiryStatus.licensenumber1.status",
      dayKey: "expiryStatus.licensenumber1.days",
      fileKey: "licenseimage1",
    },
    {
      label: "NSP",
      numberKey: "licensenumberNSP",
      validKey: "doeNSP",
      renewalKey: "doddrNSP",
      statusKey: "expiryStatus.licensenumberNSP.status",
      dayKey: "expiryStatus.licensenumberNSP.days",
      fileKey: "licenseimageNSP",
    },
    {
      label: "OTP",
      numberKey: "licensenumberOTP",
      validKey: "doeOTP",
      renewalKey: "doddrOTP",
      statusKey: "expiryStatus.licensenumberOTP.status",
      dayKey: "expiryStatus.licensenumberOTP.days",
      fileKey: "licenseimageOTP",
    },
    {
      label: "TL",
      numberKey: "licensenumberTL",
      validKey: "doeTL",
      renewalKey: "doddrTL",
      statusKey: "expiryStatus.licensenumberTL.status",
      dayKey: "expiryStatus.licensenumberTL.days",
      fileKey: "licenseimageTL",
    },
    {
      label: "WOE",
      numberKey: "licensenumberWOE",
      validKey: "doeWOE",
      renewalKey: "doddrWOE",
      statusKey: "expiryStatus.licensenumberWOE.status",
      dayKey: "expiryStatus.licensenumberWOE.days",
      fileKey: "licenseimageWOE",
    },
    {
      label: "BOCW",
      numberKey: "licensenumberBOCW",
      validKey: "doeBOCW",
      renewalKey: "doddrBOCW",
      statusKey: "expiryStatus.licensenumberBOCW.status",
      dayKey: "expiryStatus.licensenumberBOCW.days",
      fileKey: "licenseimageBOCW",
    },
    {
      label: "ISMW",
      numberKey: "licensenumberISMW",
      validKey: "doeISMW",
      renewalKey: "doddrISMW",
      statusKey: "expiryStatus.licensenumberISMW.status",
      dayKey: "expiryStatus.licensenumberISMW.days",
      fileKey: "licenseimageISMW",
    },
    {
      label: "FASSAI",
      numberKey: "licensenumberFASSAI",
      validKey: "doeFASSAI",
      renewalKey: "doddrFASSAI",
      statusKey: "expiryStatus.licensenumberFASSAI.status",
      dayKey: "expiryStatus.licensenumberFASSAI.days",
      fileKey: "licenseimageFASSAI",
    },

    // licences whose status is inside the number object ––––––––
    {
      label: "PF",
      numberKey: "pfnumber",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.pfnumber.status",
      dayKey: "expiryStatus.pfnumber.days",
      fileKey: "pfimage",
    },
    {
      label: "ESI",
      numberKey: "esinumber",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.esinumber.status",
      dayKey: "expiryStatus.esinumber.days",
      fileKey: "esiimage",
    },
    {
      label: "LWF",
      numberKey: "registrationlwfD3",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.registrationlwfD3.status",
      dayKey: "expiryStatus.registrationlwfD3.days",
      fileKey: "registrationlwfD3image",
    },
    {
      label: "PTR",
      numberKey: "registrationptrD3",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.registrationptrD3.status",
      dayKey: "expiryStatus.registrationptrD3.days",
      fileKey: "registrationptrD3image",
    },
    {
      label: "PTE",
      numberKey: "registrationPTED3",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.registrationPTED3.status",
      dayKey: "expiryStatus.registrationPTED3.days",
      fileKey: "registrationPTED3image",
    },
    {
      label: "MSME",
      numberKey: "licensenumberMSME",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.licensenumberMSME.status",
      dayKey: "expiryStatus.licensenumberMSME.days",
      fileKey: "licenseimageMSME",
    },
    {
      label: "SB",
      numberKey: "licensenumberSB",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.licensenumberSB.status",
      dayKey: "expiryStatus.licensenumberSB.days",
      fileKey: "licenseimageSB",
    },
    {
      label: "CLRA",
      numberKey: "contractLabourRegistration",
      validKey: "NA",
      renewalKey: "NA",
      statusKey: "expiryStatus.contractLabourRegistration.status",
      dayKey: "N/A",
      fileKey: "contractLabourRegistrationFile",

    },
  ];


  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };


  const getNestedValue = (obj, path) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };


  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Typography variant="h6" className="compliance-header">Registrations & Licenses</Typography>
          <Button variant="outlined" style={{ backgroundColor: '#013879', color: 'white' }} size="small" onClick={onBack}>Back</Button>
        </div>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, marginLeft: '40px' }}>
          <TextField
            size="small"
            label="Filter by Branch"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value.toLowerCase())}
          />

          <TextField
            size="small"
            label="Filter by License Type"
            value={labelFilter}
            onChange={(e) => setLabelFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Valid Date"
            value={validKeyFilter}
            onChange={(e) => setValidKeyFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Renewal Date"
            value={renewalKeyFilter}
            onChange={(e) => setRenewalKeyFilter(e.target.value.toLowerCase())}
          />
          <TextField
            size="small"
            label="Filter by Status"
            value={statusKeyFilter}
            onChange={(e) => setStatusKeyFilter(e.target.value.toLowerCase())}
          />
        </Box>

        <TableContainer component={Paper}>

          <Table size="small" className="compliance-table">
            <TableHead>
              <TableRow>
                <TableCell>S. No</TableCell>
                <TableCell>Branch Name</TableCell>
                <TableCell>License Type</TableCell>
                <TableCell>License No</TableCell>
                <TableCell>Valid Upto</TableCell>
                <TableCell>Renewal Due</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(compOverView) &&
                compOverView.map((branch, branchIndex) => {
                  /* -----------------------------------------------------------
                     Hide “Factory” if S&E licence number is present,
                     Hide “S&E”    if Factory licence number is present.
                  ----------------------------------------------------------- */
                  const branchLicenses = licenses
                    .filter((lic) => {
                      if (lic.numberKey === "licensenumber1") return !branch.licensenumber;
                      if (lic.numberKey === "licensenumber") return !branch.licensenumber1;
                      return branch[lic.numberKey];
                    })
                    .filter((lic) => {
                      const validDateStr =
                        lic.validKey !== "NA" && branch[lic.validKey]
                          ? formatDate(branch[lic.validKey]).toLowerCase()
                          : "n/a";

                      const renewalDateStr =
                        lic.renewalKey !== "NA" && branch[lic.renewalKey]
                          ? formatDate(branch[lic.renewalKey]).toLowerCase()
                          : "n/a";

                      const statusVal = getNestedValue(branch, lic.statusKey);
                      const daysVal = getNestedValue(branch, lic.dayKey);

                      let statusLabel = "no status";
                      if (statusVal === 1) statusLabel = "active";
                      else if (statusVal === 2 && daysVal != null) statusLabel = `expiring soon (in ${daysVal} days)`;
                      else if (statusVal === 3 && daysVal != null) statusLabel = `expired (${daysVal} days ago)`;
                      else if (statusVal === 4) statusLabel = "not-available";

                      const branchName = (branch.name || "").toLowerCase();

                      return (
                        lic.label.toLowerCase().includes(labelFilter) &&
                        validDateStr.includes(validKeyFilter) &&
                        renewalDateStr.includes(renewalKeyFilter) &&
                        statusLabel.includes(statusKeyFilter) &&
                        branchName.includes(branchFilter)
                      );
                    });
                  /* ---------- render only the rows that survived the filter ---------- */
                  return branchLicenses.map((item, licenseIndex) => (
                    <TableRow key={`${branchIndex}-${licenseIndex}`}>
                      <TableCell>{licenseIndex + 1}</TableCell>
                      <TableCell>{branch.name || '-'}</TableCell>
                      <TableCell>{item.label}</TableCell>
                      <TableCell>{branch[item.numberKey] || '-'}</TableCell>

                      <TableCell>
                        {item.validKey !== "NA"
                          ? formatDate(branch[item.validKey])
                          : "N/A"}
                      </TableCell>

                      <TableCell>
                        {item.renewalKey !== "NA"
                          ? formatDate(branch[item.renewalKey])
                          : "N/A"}
                      </TableCell>

                      <TableCell>
                        {(() => {
                          const statusObj = getNestedValue(branch, item.statusKey);
                          const daysObj = getNestedValue(branch, item.dayKey);

                          let label = "No Status";
                          let color = "text.secondary";

                          if (statusObj === 2 && daysObj != null) {
                            label = `Expiring Soon (in ${daysObj} days)`;
                            color = "orange";
                          } else if (statusObj === 3 && daysObj != null) {
                            label = `Expired (${daysObj} days ago)`;
                            color = "red";
                          } else if (statusObj === 1) {
                            label = "Active";
                            color = "green";
                          } else if (statusObj === 4) {
                            label = "Not‑Available";
                            color = "grey";
                          }

                          return <Typography style={{ color }}>{label}</Typography>;
                        })()}
                      </TableCell>

                      <TableCell>
                        {branch[item.fileKey] ? (
                          <Button size="small" target="_blank" href={branch[item.fileKey]}>
                            View Document
                          </Button>
                        ) : "No File"}
                      </TableCell>
                    </TableRow>
                  ));
                })}
            </TableBody>


          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

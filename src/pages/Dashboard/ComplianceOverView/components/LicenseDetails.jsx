import React, { useEffect } from "react";
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
import { complianceOverViewGet } from "../../../../store/actions/otherActions";
import './Compliance.css';

export const LicenseDetails = ({ onBack }) => {
  const dispatch = useDispatch();
  const { compOverView } = useSelector((state) => state.complianceOverviewRed);
  console.log("compOverView", compOverView);

  useEffect(() => {
    dispatch(complianceOverViewGet());
  }, [dispatch]);

  const licenses = [
  {
    label: "NSP",
    numberKey: "licensenumberNSP",
    validKey: "doeNSP",
    renewalKey: "doddrNSP",
    statusKey: "lis_statusNSP",
    fileKey: "licenseimageNSP",
  },
  {
    label: "OTP",
    numberKey: "licensenumberOTP",
    validKey: "doeOTP",
    renewalKey: "doddrOTP",
    statusKey: "lis_statusOTP",
    fileKey: "licenseimageOTP",
  },
  {
    label: "TL",
    numberKey: "licensenumberTL",
    validKey: "doeTL",
    renewalKey: "doddrTL",
    statusKey: "lis_statusTL",
    fileKey: "licenseimageTL",
  },
  {
    label: "WOE",
    numberKey: "licensenumberWOE",
    validKey: "doeWOE",
    renewalKey: "doddrWOE",
    statusKey: "lis_statusWOE",
    fileKey: "licenseimageWOE",
  },
  {
    label: "PF",
    numberKey: "pfnumber",
    validKey: "doc",  
    renewalKey: "",  
    statusKey: "lis_status_pf",
    fileKey: "pfimage",
  },
  {
    label: "ESI",
    numberKey: "esinumber",
    validKey: "doc",  
    renewalKey: "",  
    statusKey: "lis_status_esi",
    fileKey: "esiimage",
  },
  {
    label: "LWF",
    numberKey: "registrationlwfD3",
    validKey: "doregistrationlwfD3",
    renewalKey: "",   
    statusKey: "lis_status_lwf",
    fileKey: "registrationlwfD3image",
  },
  {
    label: "PTR",
    numberKey: "registrationptrD3",
    validKey: "doregistrationptrD3",
    renewalKey: "",   
    statusKey: "lis_status_ptr",
    fileKey: "registrationptrD3image",
  },
  {
    label: "PTE",
    numberKey: "registrationPTED3",
    validKey: "doregistrationPTED3",
    renewalKey: "",   
    statusKey: "lis_status_pte",
    fileKey: "registrationPTED3image",
  },
  {
    label: "MSME",
    numberKey: "licensenumberMSME",
    validKey: "dorMSME",  
    renewalKey: "",      
    statusKey: "lis_status_msme",
    fileKey: "licenseimageMSME",
  },
  {
    label: "BOCW",
    numberKey: "licensenumberBOCW",
    validKey: "doeBOCW",
    renewalKey: "doddrBOCW",
    statusKey: "lis_status_bocw",
    fileKey: "licenseimageBOCW",
  },
  {
    label: "ISMW",
    numberKey: "licensenumberISMW",
    validKey: "doeISMW",
    renewalKey: "doddrISMW",
    statusKey: "lis_status_ismw",
    fileKey: "licenseimageISMW",
  },
  {
    label: "FASSAI",
    numberKey: "licensenumberFASSAI",
    validKey: "doeFASSAI",
    renewalKey: "doddrFASSAI",
    statusKey: "lis_status_fassai",
    fileKey: "licenseimageFASSAI",
  },
  {
    label: "SB",
    numberKey: "licensenumberSB",
    validKey: "dorSB",  
    renewalKey: "",     
    statusKey: "lis_status_sb",
    fileKey: "licenseimageSB",
  },
];

  const formatDate = (dateString) => {
    if (!dateString) return "-";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB");
  };

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Typography variant="h6" className="compliance-header">Registrations & Licenses</Typography>
          <Button variant="outlined" size="small" onClick={onBack}>Back</Button>
        </div>

        <TableContainer component={Paper}>

          <Table size="small" className="compliance-table">
            <TableHead>
              <TableRow>
                <TableCell>License Type</TableCell>
                <TableCell>License No</TableCell>
                <TableCell>Valid Upto</TableCell>
                <TableCell>Renewal Due</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compOverView?.[0] &&
                licenses.map((item, idx) => (
                  <TableRow key={idx}>
                    {/* <TableCell>{compOverView[0].name || '-'}</TableCell> */}
                    <TableCell>{item.label}</TableCell>
                    <TableCell>{compOverView[0][item.numberKey] || '-'}</TableCell>
                    <TableCell>{formatDate(compOverView[0][item.validKey])}</TableCell>
                    <TableCell>{formatDate(compOverView[0][item.renewalKey])}</TableCell>
                    <TableCell>{
                      {
                        1: "Not In Scope",
                        2: "License Applied",
                        3: "License Not-Applied",
                        4: "Life-Time License"
                      }[compOverView[0][item.statusKey]] || "No Status"
                    }
                    </TableCell>
                    <TableCell>
                      {compOverView[0][item.fileKey] ? (
                        <Button
                          size="small"
                          target="_blank"
                          href={compOverView[0][item.fileKey]}
                        >
                          View Document
                        </Button>
                      ) : "No File"}
                    </TableCell>
                  </TableRow>
                ))
              }

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

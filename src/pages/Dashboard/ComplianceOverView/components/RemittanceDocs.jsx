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
import { remmitanceGetById } from "../../../../store/actions/otherActions";

const RemittanceDocs = ({ type: remittanceId, onBack }) => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((s) => s.remittanceGetByIdRed || {});

  useEffect(() => {
    if (remittanceId) dispatch(remmitanceGetById(remittanceId));
  }, [dispatch, remittanceId]);

  const remittanceFields = [
    { key: "ecr", label: `${data?.paymentType} ECR` },
    { key: "workings", label: `${data?.paymentType} Workings` },
    { key: "paidChallan", label: `${data?.paymentType} Paid Challan` },
    { key: "acknowledement", label: `${data?.paymentType} Ack` },
    { key: "returns", label: `${data?.paymentType} Returns` },
    { key: "q24", label: `${data?.paymentType} Q24` },
    { key: "remarks", label: `${data?.paymentType} Remarks` },
  ];

  // Determine which fields have any data
  const visibleFields = remittanceFields.filter((field) =>
    data?.remmitanceDetails?.some((d) => !!d[field.key])
  );

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Remittance Documents</Typography>
          <Button variant="outlined" style={{ backgroundColor: '#013879', color: 'white' }} size="small" onClick={onBack}>Back</Button>
        </div>

        {loading || !data ? (
          <p>Loading…</p>
        ) : (
          <TableContainer component={Paper} sx={{ mt: 2 }} >
            <Table size="small" >
              <TableHead>
                <TableRow>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Sl No.</TableCell>
                  <TableCell style={{ backgroundColor: '#013879', color: 'white' }}>Challan&nbsp;No.</TableCell>
                  {visibleFields.map((field) => (
                    <TableCell key={field.key} style={{ backgroundColor: '#013879', color: 'white' }}>{field.label}</TableCell>
                  ))}
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
                  data.remmitanceDetails?.map((d, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{idx + 1}</TableCell>
                      <TableCell>{d.challans}</TableCell>
                      {visibleFields.map((field) => (
                        <TableCell key={field.key}>
                          {field.key === "remarks"
                            ? d[field.key] || null
                            : d[field.key] ? (
                              <a
                                href={d[field.key]}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                            ) : "-"}
                        </TableCell>
                      ))}
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

export default RemittanceDocs;

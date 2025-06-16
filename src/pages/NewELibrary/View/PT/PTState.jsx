import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    pTByStateWise,
    stateGets,
} from "../../../../store/actions/otherActions";
// import "./LabourWelfareStateCards.css";

const PTState = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const stateId = location.state || {};

    const { PTStateInfo } = useSelector(
        (state) => state.PTLibraryStateWiseRed
    );
    const { stateInfo } = useSelector((state) => state.getState);

    const [dataSource, setDataSource] = useState({});
    const [selectedState, setSelectedState] = useState(stateId || "");

    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        if (selectedState) {
            dispatch(pTByStateWise({ stateId: selectedState }));
        }
    }, [dispatch, selectedState]);

    useEffect(() => {
        if (
            PTStateInfo &&
            Array.isArray(PTStateInfo) &&
            PTStateInfo.length > 0
        ) {
            setDataSource(PTStateInfo[0]);
        } else {
            setDataSource({});
        }
    }, [PTStateInfo]);

    const formatDate = (date) => {
        if (!date) return "N/A";
        const parsed = new Date(date);
        if (isNaN(parsed)) return "N/A";
        return moment(parsed).format("DD-MM-YYYY");
    };

    return (
        <div className="container-fluid p-3 labour-container1">
            <style>{`
        .styled-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        .styled-table th, .styled-table td {
          border: 1px solid #ccc;
          padding: 8px;
          text-align: left;
        }
        .styled-table thead {
          background-color: #013879;
          color: white;
          font-weight: bold;
        }
        .docButton {
          padding: 5px 10px;
        }
        @media (max-width: 768px) {
          .responsive-row {
            flex-direction: column;
            gap: 1rem !important;
          }
          .styled-table {
            overflow-x: auto;
            display: block;
          }
        }
      `}</style>

            <div className="d-flex align-items-center mb-3">
                <button className="btn btn-light me-3" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </button>
                <h4 className="fw-bold mb-0" style={{ color: '#013879' }}>
                    Professional Tax for {dataSource?.state || "State"}
                </h4>
            </div>

            {/* <p className="text-muted mb-3">
                {dataSource?.description || "No description available."}
            </p> */}

            <div className="details-header">
                <p style={{ color: "red", marginBottom: 0 }}>
                    Created On:{" "}
                    {dataSource?.created_At
                        ? moment(dataSource.created_at).format("DD MMM YYYY")
                        : "N/A"}
                </p>

                <div className="stateFilter1">
                    <label htmlFor="stateFilterLabour" className="myt fw-bold">
                        State:
                    </label>
                    <select
                        id="stateFilterLabour"
                        className="form-select"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                    >
                        {stateInfo
                            ?.filter((state) => state.name !== "All States")
                            .map((state) => (
                                <option key={state._id} value={state._id}>
                                    {state.name}
                                </option>
                            ))}
                    </select>
                </div>
            </div>


            {Object.keys(dataSource).length === 0 ? (
                <div className="alert alert-danger">No data found for this state.</div>
            ) : (
                <>
                    <div className="table-responsive mb-4">
                        <table className="styled-table">
                            <tbody>
                                <tr>
                                    <td><strong>Act</strong></td>
                                    <td>{dataSource?.act || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Rule</strong></td>
                                    <td>{dataSource?.rule || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Applicability</strong></td>
                                    <td>
                                        {dataSource?.applicability === true
                                            ? "Applicable"
                                            : dataSource?.applicability === false
                                                ? "Not Applicable"
                                                : "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Exemption</strong></td>
                                    <td>{dataSource?.exemption || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Frequency</strong></td>
                                    <td>{dataSource?.frequency || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Registration Form</strong></td>
                                    <td>{dataSource?.registrationForm || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Registration Form File</strong></td>
                                    <td>
                                        {dataSource?.regFormDoc ? (
                                            <a href={dataSource?.regFormDoc} target="_blank" rel="noreferrer">View Form</a>
                                        ) : dataSource?.registrationForm ? (
                                            <>{dataSource.registrationForm}</>
                                        ) : "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Registration Process</strong></td>
                                    <td>{dataSource?.registrationProcess || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Website</strong></td>
                                    <td>
                                        {dataSource?.websiteLink ? (
                                            <a href={dataSource.websiteLink.startsWith('http') ? dataSource.websiteLink : `http://${dataSource.websiteLink}`} target="_blank" rel="noreferrer">
                                                {dataSource.websiteLink}
                                            </a>
                                        ) : "N/A"}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Activity</strong></td>
                                    <td>{dataSource?.activity || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Note</strong></td>
                                    <td>{dataSource?.note || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Date of Deduction</strong></td>
                                    <td>{dataSource?.dateOfDeduction || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Last Date of Remmitance</strong></td>
                                    <td>{dataSource?.lastDateRemittance || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Return Form</strong></td>
                                    <td><a href={dataSource?.doc} target="_blank" rel="noreferrer">Return Form</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* PROFESSIONAL RATES */}
                    <h5 className="fw-bold">Professional Rates</h5>
                    <div className="table-responsive mb-4">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Sl No.</th>
                                    <th>Salary (INR)</th>
                                    <th>PT Amount</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource?.professionalRates?.length > 0 ? (
                                    dataSource.professionalRates.map((rate, idx) => (
                                        <tr key={rate._id || idx}>
                                            <td>{idx + 1}</td>
                                            <td>{rate.salary || "N/A"}</td>
                                            <td>₹ {rate.ptAmount || "N/A"}</td>
                                            <td>{rate.remarks || ""}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">No PT rate data available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>


                </>
            )}

        </div>
    );
};

export default PTState;

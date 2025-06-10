import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    labourWelfareLibraryStateWise,
    stateGets,
} from "../../../../store/actions/otherActions";
import "./LabourWelfareStateCards.css";

const LabourWelfareState = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const stateId = location.state || {};

    const { LabourWelfareStateInfo } = useSelector(
        (state) => state.labourWelfareLibraryStateWiseRed
    );
    const { stateInfo } = useSelector((state) => state.getState);

    const [dataSource, setDataSource] = useState({});
    const [selectedState, setSelectedState] = useState(stateId || "");

    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        if (selectedState) {
            dispatch(labourWelfareLibraryStateWise({ stateId: selectedState }));
        }
    }, [dispatch, selectedState]);

    useEffect(() => {
        if (
            LabourWelfareStateInfo &&
            Array.isArray(LabourWelfareStateInfo) &&
            LabourWelfareStateInfo.length > 0
        ) {
            setDataSource(LabourWelfareStateInfo[0]);
        } else {
            setDataSource({});
        }
    }, [LabourWelfareStateInfo]);

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
                    Labour Welfare for {dataSource?.state || "State"}
                </h4>
            </div>

            <p className="text-muted mb-3">
                {dataSource?.description || "No description available."}
            </p>

            <div className="details-header">
                <p style={{ color: "red", marginBottom: 0 }}>
                    Created On:{" "}
                    {dataSource?.created_At
                        ? moment(dataSource.created_At).format("DD MMM YYYY")
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
                    <div className="state-label fw-bold fs-5 mb-2">
                        {dataSource?.state || "N/A"}
                    </div>

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
                                    <td>{dataSource?.applicableData || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Frequency</strong></td>
                                    <td>{dataSource?.frequency || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Form</strong></td>
                                    <td>
                                        {dataSource?.form ? (
                                            <a
                                                className="btn btn-primary btn-sm docButton"
                                                href={dataSource?.doc}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                📄 View Document
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Website</strong></td>
                                    <td>
                                        {dataSource?.websiteLink ? (
                                            <a
                                                href={dataSource.websiteLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {dataSource.websiteLink}
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h5 className="fw-bold">Labour Welfare Fund Contribution</h5>
                    <div className="table-responsive">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Employee Contribution</th>
                                    <th>Employer Contribution</th>
                                    <th>Total Contribution</th>
                                    <th>Date Of Deduction</th>
                                    <th>Last Date For Submission</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{dataSource?.category || "N/A"}</td>
                                    <td>{dataSource?.employee_Contribution || "N/A"}</td>
                                    <td>{dataSource?.employer_Contribution || "N/A"}</td>
                                    <td>{dataSource?.total_Contribution || "N/A"}</td>
                                    <td>{formatDate(dataSource?.date_deduction)}</td>
                                    <td>{formatDate(dataSource?.last_date_remittance)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default LabourWelfareState;

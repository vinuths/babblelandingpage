import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
    wHAndLRByStateWise,
    stateGets,
} from "../../../../../store/actions/otherActions";
// import "./LabourWelfareStateCards.css";

const WH_LR_State = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
const stateId = location.state?.stateId || "";

    const { WH_LRStateInfo } = useSelector(
        (state) => state.wH_LRLibraryStateWiseRed
    );
    const { stateInfo } = useSelector((state) => state.getState);

    const [dataSource, setDataSource] = useState({});
const [selectedState, setSelectedState] = useState(stateId);

    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        if (selectedState) {
            dispatch(wHAndLRByStateWise({ stateId: selectedState }));
        }
    }, [dispatch, selectedState]);

    useEffect(() => {
        if (
            WH_LRStateInfo &&
            Array.isArray(WH_LRStateInfo) &&
            WH_LRStateInfo.length > 0
        ) {
            setDataSource(WH_LRStateInfo[0]);
        } else {
            setDataSource({});
        }
    }, [WH_LRStateInfo]);

    const formatDate = (date) => {
        if (!date) return "N/A";
        const parsed = new Date(date);
        if (isNaN(parsed)) return "N/A";
        return moment(parsed).format("DD-MM-YYYY");
    };

    const selectedStateObj = stateInfo?.find((s) => s._id === selectedState);

    const definitionsData = {
        "andaman and nicobar islands": {
            normalWages: "The basic wages and such allowances including the cash equivalent of the advantage accruing through the concessional sale to a worker of foodgrains and other articles, as the employee is for the time being entitled to, but does not include bonus."
        },
        "andhra pradesh": {
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "assam": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "Ordinary rate of wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the supply of meals and the concessional sale to employees of food grains and other articles as the employee is for the time being entitled to, but does not include bonus"
        },
        "bihar": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "Ordinary rate of wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the supply of meals and the concessional sale to employees of food grains and other articles as the employee is for the time being entitled to, but does not include bonus"
        },
        "central": {
            normalWages: "For the purpose of calculating the normal hourly wage for the day shall be reckoned as consisting of eight hours."
        },
        "chandigarh": {
            normalWages: "Normal Wages means basic wages plus such allowances including the cash equivalent of the advantages accruing through the Concessional sale to workers of foodgrains and other articles as the worker is for the time being entitled to, but does not include bonus."
        },
        "chhattisgarh": {
            year: "Year commencing on the first day of January."
        },
        "dadra and nagar haveli": {
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "delhi": {
            normalWages: "For the purpose of calculating the normal hourly wage for the day shall be reckoned as consisting of eight hours."
        },
        "goa": {
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "haryana": {
            year: "Year commencing on the first day of April",
            quarter: "Period of three months commencing on the first day of January, first day of April , first day of July and first day of October every year",
            normalWages: "Normal Wages means basic wages plus such allowances including the cash equivalent of the advantages accruing through the concessional sale to workers of food grains and other articles as the worker is for the time being entitled to , but does not include bonus."
        },
        "himachal pradesh": {
            year: "Year reckoned according to the British Calendar",
            quarter: "Quarter means a period of three months commencing on the first day of January, first day of April, first day of July or first day of October every year",
            normalWages: "Normal wages means basic wages plus such allowances including the cash equivalent of the advantages accruing through the confessional sale to workers of food grains and other articles as any worker is for the time being entitled to but does not include bonus."
        },
        "jammu and kashmir": {
            year: "Year commencing on the first day of April."
        },
        "jharkhand": {
            year: "Year commencing on the first day of January",
            normalWages: "Normal wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the concessional sale to workers of food grains and other articles, as the worker is for the time being entitled to, but does not include a bonus."
        },
        "karnataka": {
            year: "Year commencing on the first day of January",
            normalWages: "Normal wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the concessional sale to workers of food grains and other articles, as the worker is for the time being entitled to, but does not include a bonus."
        },
        "kerala": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "Ordinary rate of wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the supply of meals and the concessional sale to employees of food grains and other articles, as the employee is for the time being entitled to, but does not include bonus."
        },
        "madhya pradesh": {
            year: "Year commencing on the first day of January"
        },
        "manipur": {
            year: "Period of twelve months of the Gregorian Calendar commencing on the first day of January."
        },
        "nagaland": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "odisha": {
            ordinaryRate: "Ordinary rates of wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the concessional sale to workers of food-grains and other articles as the worker is for the time being entitled to but does not include a bonus."
        },
        "puducherry": {
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribedza."
        },
        "punjab": {
            normalWages: "Normal Wages means basic wages plus such allowances including the cash equivalent of the advantages accruing through the Concessional sale to workers of foodgrains and other articles as the worker is for the time being entitled to, but does not include bonus."
        },
        "rajasthan": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "The ordinary rate of wages means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the concessional sale to workers of foodgrains and other articles, as the worker is for the time being entitled to, but does not include bonus."
        },
        "sikkim": {
            year: "Year commencing on the first day of January",
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "tamil nadu": {
            ordinaryRate: "The ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "telangana": {
            ordinaryRate: "Ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "tripura": {
            ordinaryRate: "The ordinary rate of wages shall mean such rate of wages as may be calculated in the manner prescribed."
        },
        "uttar pradesh": {
            quarter: "Quarter means a period of three consecutive months beginning on the 1st of January, the 1st of April, the 1st of July or the 1st of October",
            ordinaryRate: "Ordinary rate means the basic wages plus such allowances, including the cash equivalent of the advantage accruing through the concessional sale to employees of foodgrains and other articles, as the employee is for the time being entitled to, but does not include bonus."
        }
    };


    return (
<div className="container py-4">
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

 {/* INNER CENTERED CONTAINER */}
    <div
      style={{
        maxWidth: "1200px",
        margin: "100px auto 0",
        backgroundColor: "#fff",
        padding: "20px 25px",
      }}
        >
            <div className="d-flex align-items-center mb-3">
                <button className="btn btn-light me-3" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </button>
                <h4 className="fw-bold mb-0" style={{ color: '#013879' }}>
                    Working Hours & Leave Rules for {dataSource?.state || "State"}
                </h4>
            </div>

            {/* <p className="text-muted mb-3">
                {dataSource?.description || "No description available."}
            </p> */}

            <div className="details-header">
                <p style={{ color: "red", marginBottom: 0 }}>
                    Created On:{" "}
                    {dataSource?.created_at
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
                <><h5 className="fw-bold mt-4">Leave for Shops and Establishment</h5>
                    <div className="table-responsive mb-4">
                        <table className="styled-table">
                            <thead>
                                <tr>
                                    <th>Type Of Leave</th>
                                    <th>Leave Entitlement</th>
                                    <th>Max Carry Forward Days</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataSource?.TypeOfLeaveDetails?.filter(leave => leave?.TypeOfLeave).map((leave, index) => (
                                    <tr key={index}>
                                        <td>{leave.TypeOfLeave || "N/A"}</td>
                                        <td>{leave.leaveEntitlement || "NA"}</td>
                                        <td>{leave.MaxCarryFowDays || "NA"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h5 className="fw-bold mt-4">Working Hours for Shops and Establishment</h5>
                    <div className="table-responsive mb-4">
                        <table className="styled-table">
                            <tbody>
                                <tr>
                                    <td><strong>Normal Working Hours</strong></td>
                                    <td>{dataSource?.normalWorkingHours || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Interval For Rest</strong></td>
                                    <td>{dataSource?.intervalForRest || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Maximum Over Time Hours</strong></td>
                                    <td>{dataSource?.maximumOverTimeHours || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Spreadover Hours</strong></td>
                                    <td>{dataSource?.spreadOverHours || "N/A"}</td>
                                </tr>
                                <tr>
                                    <td><strong>Rate of OT Wages</strong></td>
                                    <td>{dataSource?.rateOfOTWages || "N/A"}</td>
                                </tr>
                            </tbody>
                        </table>
                        {selectedStateObj && (
                            <div className="mt-4">
                                <h6 className="fw-bold" style={{ fontSize: '10px', color: 'gray', fontStyle: 'italic' }}>
                                    Definitions:
                                </h6>
                                {definitionsData[selectedStateObj.name?.toLowerCase()]?.year && (
                                    <p className="mb-1" style={{ fontSize: '10px', color: 'gray', fontStyle: 'italic' }}>
                                        <strong>Year :</strong> {definitionsData[selectedStateObj.name?.toLowerCase()]?.year}
                                    </p>
                                )}
                                {definitionsData[selectedStateObj.name?.toLowerCase()]?.normalWages && (
                                    <p className="mb-1" style={{ fontSize: '10px', color: 'gray', fontStyle: 'italic' }}>
                                        <strong>Normal wages :</strong> {definitionsData[selectedStateObj.name?.toLowerCase()]?.normalWages}
                                    </p>
                                )}
                                {definitionsData[selectedStateObj.name?.toLowerCase()]?.ordinaryRate && (
                                    <p className="mb-1" style={{ fontSize: '10px', color: 'gray', fontStyle: 'italic' }}>
                                        <strong>Ordinary rate of wages :</strong> {definitionsData[selectedStateObj.name?.toLowerCase()]?.ordinaryRate}
                                    </p>
                                )}
                                {definitionsData[selectedStateObj.name?.toLowerCase()]?.quarter && (
                                    <p className="mb-1" style={{ fontSize: '10px', color: 'gray', fontStyle: 'italic' }}>
                                        <strong>Quarter :</strong> {definitionsData[selectedStateObj.name?.toLowerCase()]?.quarter}
                                    </p>
                                )}
                            </div>
                        )}


                    </div>
                </>
            )}
        </div>
        </div>
    );
};

export default WH_LR_State;

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import moment from "moment";
import { holidayLibraryStateWise, stateGets } from "../../../../../store/actions/otherActions";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./HolidayStateCards.css";

const HolidayElibraryStateDetails = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { year, stateId } = location.state || {};

    const { holidayStateInfo } = useSelector((state) => state.holidayLibraryStateWiseRed);
    const { stateInfo } = useSelector((state) => state.getState);

    const [dataSource, setDataSource] = useState(null);
    const [selectedState, setSelectedState] = useState(stateId || "");

    useEffect(() => {
        dispatch(stateGets()); // get all states
    }, [dispatch]);

    useEffect(() => {
        if (year && selectedState) {
            dispatch(
                holidayLibraryStateWise({
                    year,
                    stateId: selectedState,
                })
            );
        }
    }, [dispatch, year, selectedState]);

    // useEffect(() => {
    //     if (holidayStateInfo && Array.isArray(holidayStateInfo) && holidayStateInfo.length > 0) {
    //         setDataSource(holidayStateInfo[0]);
    //     }
    // }, [holidayStateInfo]);

    useEffect(() => {
        if (holidayStateInfo && Array.isArray(holidayStateInfo)) {

            setDataSource(holidayStateInfo[0] || null); // Set null if no data
        }
    }, [holidayStateInfo]);



    const columns = [
        {
            title: "Sl",
            key: "slNo",
            render: (_text, _record, index) => index + 1,
            width: 45,
            // fixed: 'top',
        }
        ,
        {
            title: "Holiday Name",
            dataIndex: "holiday",
            key: "holiday",
        },
        {
            title: "Date",
            dataIndex: "holidayDate",
            key: "holidayDate",
            render: (text) => moment(text).format("DD-MM-YYYY"),
        },
        {
            title: "Day",
            dataIndex: "holidayDay",
            key: "holidayDay",
        },
        {
            title: "Type",
            dataIndex: "holidaytype",
            key: "holidaytype",
        },
        {
            title: "Remarks",
            dataIndex: "holidayRemarks",
            key: "holidayRemarks",
        },
    ];

    return (
        
        <div className="holiday-container1">
            {/* Inline style overrides */}
            <style>{`
                .ant-table-thead > tr > th {
                    background-color: #013879 !important;
                    color: white !important;
                    font-weight: bold;
                    position: sticky !important;
                    
                }
                .ant-table {
                    border: 0.5px solid #013879;
                    border-radius: 10px;
                }
                    .ant-table-cell{
                    padding: 5px !important;
                    }
            `}</style>

            <div className="headBack">
                <button className="btn mb-3 ms-2" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                </button>
                <h2 className="mb-4 fw-bold headLine">
                    Holidays List for {dataSource?.state || "State"} - {dataSource?.year}
                </h2>
            </div>

            <p>{dataSource?.description}</p>

            <div className="holiDates">
                <p style={{ color: 'red' }}>
                    Created On:{" "}
                    {dataSource?.created_at
                        ? moment(dataSource.created_at).format("DD MMM YYYY")
                        : "N/A"}
                </p>
                <p style={{ color: 'red' }}>
                    Effective From:{" "}
                    {dataSource?.effectiveDate
                        ? moment(dataSource.effectiveDate).format("DD MMM YYYY")
                        : "N/A"}
                </p>
            </div>

            <div className="stateFilter">
                <div className="stateFilter1">
                    <label htmlFor="stateFilter" className="myt fw-bold" >State:</label>
                    <select
                        id="stateFilter"
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
                {dataSource?.doc && (
                    <a
                        className="btn btn-primary mb-3"
                        href={dataSource.doc}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        📄 View Document
                    </a>
                )}
            </div>
            {dataSource === null ? (
                <div className="alert alert-warning text-center">
                    No holiday data available for the selected state and year.
                </div>
            ) : (<Table
                columns={columns}
                dataSource={dataSource?.holidayDetails || []}
                rowKey={(record, index) => index}
                pagination={false}
                bordered
                // scroll={{
                //     y: 600,
                    
                // }}
            // locale={{
            //     emptyText: "No Holiday Data Available",
            // }}
            />)}



        </div>
    );
};

export default HolidayElibraryStateDetails;

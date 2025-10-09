import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Table } from "antd";
import moment from "moment";
import { minWageGetById, minWagePeriodsByStateAndYearGet, stateGets } from "../../../../store/actions/otherActions";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import "./HolidayStateCards.css";

const MinWagesStateWise = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const { year, stateId, minId } = location.state || {};

    const { minWagePeriodStateInfo } = useSelector((state) => state.minWagePeriodsByStateAndYearGetRed);
    const { minWageByIDInfo } = useSelector((state) => state.minWageGetByIdRed);
    console.log("minWageByIDInfo", minWageByIDInfo);

    const { stateInfo } = useSelector((state) => state.getState);

    const [dataSource, setDataSource] = useState(null);
    const [selectedState, setSelectedState] = useState(stateId || "");
    const [selectedPeriod, setSelectedPeriod] = useState(minId || null);

    useEffect(() => {
        dispatch(stateGets()); // get all states
    }, [dispatch]);

    // useEffect(() => {


    //     dispatch(
    //         minWageGetById(selectedPeriod)
    //     );
    // }, []);

    useEffect(() => {
        if (selectedPeriod) {
            dispatch(minWageGetById(selectedPeriod));
        }
    }, []);


    // useEffect(() => {
    //     if (
    //         Array.isArray(minWagePeriodStateInfo) &&
    //         minWagePeriodStateInfo.length > 0 &&
    //         selectedState
    //     ) {
    //         const firstPeriodId = minWagePeriodStateInfo[0]._id;
    //         setSelectedPeriod(firstPeriodId);
    //         dispatch(minWageGetById(firstPeriodId));
    //     }
    // }, [minWagePeriodStateInfo, selectedState]);

    useEffect(() => {
        if (year && selectedState) {
            dispatch(
                minWagePeriodsByStateAndYearGet({
                    year,
                    state: selectedState,
                })
            );
        }
    }, [dispatch, year, selectedState]);

    useEffect(() => {
        console.log("🔥 minWageByIDInfo", minWageByIDInfo);
        if (minWageByIDInfo) {
            if (Array.isArray(minWageByIDInfo)) {
                setDataSource(minWageByIDInfo);
            } else if (
                typeof minWageByIDInfo === 'object' &&
                Array.isArray(minWageByIDInfo.minimumWageDetails)
            ) {
                setDataSource(minWageByIDInfo.minimumWageDetails);
            } else {
                setDataSource([]);
            }
        } else {
            setDataSource([]);
        }
    }, [minWageByIDInfo]);

    // 1
    // useEffect(() => {
    //     if (minWageByIDInfo && Array.isArray(minWageByIDInfo.minimumWageDetails)) {
    //         if (minWageByIDInfo.minimumWageDetails.length > 0) {
    //             setDataSource(minWageByIDInfo.minimumWageDetails);
    //         } else {
    //             setDataSource([]); // Clear table when no data
    //         }
    //     } else {
    //         setDataSource([]); // Also clear if undefined
    //     }
    // }, [minWageByIDInfo]);

    // // 2 (conflicts with the above)
    // useEffect(() => {
    //     if (minWageByIDInfo && Array.isArray(minWageByIDInfo) && minWageByIDInfo.length > 0) {
    //         setDataSource(minWageByIDInfo);
    //     }
    // }, [minWageByIDInfo]);


    // useEffect(() => {
    //     if (
    //         Array.isArray(minWagePeriodStateInfo) &&
    //         minWagePeriodStateInfo.length > 0 &&
    //         selectedState
    //     ) {
    //         const firstPeriodId = minWagePeriodStateInfo[0]._id;
    //         setSelectedPeriod(firstPeriodId);
    //         dispatch(minWageGetById(firstPeriodId));
    //     }
    // }, [minWagePeriodStateInfo, selectedState]);

    const handlePeriodChange = (e) => {
        const selectedId = e.target.value;
        setSelectedPeriod(selectedId);

        // Fetch Minimum Wage data for selected period ID
        dispatch(minWageGetById(selectedId));
        setDataSource([]); // Optional: Clear table until data loads

    };



    useEffect(() => {
        if (
            Array.isArray(minWagePeriodStateInfo) &&
            minWagePeriodStateInfo.length > 0
        ) {
            const firstPeriodId = minWagePeriodStateInfo[0]._id;
            setSelectedPeriod(firstPeriodId);
            dispatch(minWageGetById(firstPeriodId));
        }
    }, [minWagePeriodStateInfo]);


    const handleStateChange = (e) => {
        const stateId = e.target.value;
        setSelectedState(stateId);
        setSelectedPeriod(null); // let the useEffect for minWagePeriodStateInfo handle selection

    };
    console.log("here", minId);

    // useEffect(() => {


    //         setDataSource(minWageByIDInfo); // Set null if no data

    // }, [minWageByIDInfo]);



    const allColumns = {
        slNo: {
            title: "Sl",
            key: "slNo",
            render: (_text, _record, index) => index + 1,
            width: 45,
            // fixed: 'top',
        },
        classOfEmployment: {
            title: "Class of Employment",
            dataIndex: "classOfEmployment",
            key: "classOfEmployment",
        },
        grade: {
            title: "Grade",
            dataIndex: "grade",
            key: "grade",
        },
        subCategory: {
            title: "Sub Category",
            dataIndex: "subCategory",
            key: "subCategory",
        },
        zone: {
            title: "Zone",
            dataIndex: "zone",
            key: "zone",
            width: 60,
        },
        category: {
            title: "Category",
            dataIndex: "category",
            key: "category",
            // width: 150,
        },
        district: {
            title: "District",
            dataIndex: "district",
            key: "district",
        },
        qual_and_exp: {
            title: "Qualification & Experience",
            dataIndex: "qual_and_exp",
            key: "qual_and_exp",
        },
        classOfWorkers: {
            title: "Class of Workers",
            dataIndex: "classOfWorkers",
            key: "classOfWorkers",
        },
        designation: {
            title: "Designation",
            dataIndex: "designation",
            key: "designation",
        },
        BFTP: {
            title: "BFTP",
            dataIndex: "BFTP",
            key: "BFTP",
        },
        basicGeneral: {
            title: "Basic (General)",
            dataIndex: "basicGeneral",
            key: "basicGeneral",
        },
        basicIT: {
            title: "Basic (IT)",
            dataIndex: "basicIT",
            key: "basicIT",
        },
        DAGeneral: {
            title: "DA (General)",
            dataIndex: "DAGeneral",
            key: "DAGeneral",
        },
        DAIT: {
            title: "DA (IT)",
            dataIndex: "DAIT",
            key: "DAIT",
        },
        specialAllowance: {
            title: "Special Allowance",
            dataIndex: "specialAllowance",
            key: "specialAllowance",
        },
        benifitsFoodTeaProvided: {
            title: "Benefits: Food/Tea Provided",
            dataIndex: "benifitsFoodTeaProvided",
            key: "benifitsFoodTeaProvided",
        },
        area: {
            title: "Area",
            dataIndex: "area",
            key: "area",
        },
        minWagesGen: {
            title: "Minimum Wages (General)",
            dataIndex: "minWagesGen",
            key: "minWagesGen",
        },
        minWagesIT: {
            title: "Minimum Wages (IT)",
            dataIndex: "minWagesIT",
            key: "minWagesIT",
        },
        basicPerDay: {
            title: "Basic Wage / Day (₹)",
            dataIndex: "basicPerDay",
            key: "basicPerDay",
        },
        vdaPerDay: {
            title: "VDA / Day (₹)",
            dataIndex: "vdaPerDay",
            key: "vdaPerDay",
        },
        basicPerMonth: {
            title: "Basic Wage / Month (₹)",
            dataIndex: "basicPerMonth",
            key: "basicPerMonth",
        },
        vdaPerMonth: {
            title: "VDA / Month (₹)",
            dataIndex: "vdaPerMonth",
            key: "vdaPerMonth",
        },
        hraPerMonth: {
            title: "HRA / Month (₹)",
            dataIndex: "hraPerMonth",
            key: "hraPerMonth",
        },
        totalPerDay: {
            title: "Total Wage / Day (₹)",
            dataIndex: "totalPerDay",
            key: "totalPerDay",
        },
        totalPerMonth: {
            title: "Total Wage / Month (₹)",
            dataIndex: "totalPerMonth",
            key: "totalPerMonth",
        }
    };
    const stateColumnMap1 = {
        "Andhra Pradesh": ["slNo", "classOfEmployment", "zone", "category", "subCategory", "basicPerMonth",],
        "Karnataka": ["slNo", "classOfEmployment", "zone", "designation", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerMonth"],
        "Tamil Nadu": ["slNo", "classOfEmployment", "zone", "totalPerMonth", "category"],
        "Arunachal Pradesh": ["slNo", "classOfEmployment", "area", "totalPerDay", "totalPerMonth"],
        "Assam": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Bihar": ["slNo", "classOfEmployment", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Chandigarh": ["slNo", "classOfEmployment", "subCategory", "totalPerDay", "totalPerMonth"],
        "Chhattisgarh": ["slNo", "classOfEmployment", "zone", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Dadra and Nagar Haveli & Daman and Diu": ["slNo", "classOfEmployment", "basicPerDay", "vdaPerDay", "totalPerDay", "totalPerMonth"],
        "Delhi": ["slNo", "classOfEmployment", "classOfWorkers", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Goa": ["slNo", "classOfEmployment", "zone", "category", "basicPerDay", "vdaPerDay", "totalPerDay", "totalPerMonth"],
        "Gujarat": ["slNo", "classOfEmployment", "zone", "basicPerDay", "vdaPerDay", "totalPerDay", "totalPerMonth"],
        "Haryana": ["slNo", "classOfEmployment", "qualificationAndExperience", "basicPerDay", "basicPerMonth", "totalPerDay", "totalPerMonth"],
        "Himachal Pradesh": ["slNo", "classOfEmployment", "benifitsFoodTeaProvided", "subCategory", "totalPerDay", "totalPerMonth"],
        "Jammu & Kashmir": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Jharkhand": ["slNo", "classOfEmployment", "area", "category", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Karnataka": ["slNo", "classOfEmployment", "zone", "designation", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerMonth"],
        "Kerala": ["slNo", "grade", "district", "totalPerMonth", "basicGeneral", "basicIT", "DAGeneral", "DAIT", "specialAllowance", "minWagesGen", "minWagesIT"],
        "Ladakh": ["slNo", "classOfEmployment", "totalPerDay"],
        "Madhya Pradesh": ["slNo", "classOfEmployment", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Maharashtra": ["slNo", "classOfEmployment", "zone", "basicPerMonth", "hraPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Manipur": ["slNo", "classOfEmployment", "category", "totalPerDay", "totalPerMonth"],
        "Meghalaya": ["slNo", "classOfEmployment", "totalPerDay"],
        "Mizoram": ["slNo", "classOfEmployment", "category", "totalPerDay"],
        "Nagaland": ["slNo", "classOfEmployment", "category", "totalPerDay", "totalPerMonth"],
        "Odisha": ["slNo", "classOfEmployment", "basicPerDay", "vdaPerDay", "totalPerDay"],
        "Puducherry": ["slNo", "category", "subCategory", "grade", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "Punjab": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Rajasthan": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Sikkim": ["slNo", "classOfEmployment", "category", "totalPerDay"],
        "Tamil Nadu": ["slNo", "classOfEmployment", "zone", "category", "subCategory", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Telangana": ["slNo", "classOfEmployment", "zone", "category", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Tripura": ["slNo", "classOfEmployment", "category", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "Uttar Pradesh": ["slNo", "classOfEmployment", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Uttarakhand": ["slNo", "classOfEmployment", "classOfWorkers", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "West Bengal": ["slNo", "classOfEmployment", "zone", "totalPerDay", "totalPerMonth"],
        "Central": ["slNo", "classOfEmployment", "subCategory", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Default": ["classOfEmployment", "zone", "basicPerMonth", "vdaPerMonth", "totalPerMonth", "category", "subCategory", "grade", "district", "designation", "qual_and_exp", "specialAllowance", "hraPerMonth"]

    };

    const stateColumnMap = {
        "Andhra Pradesh": ["slNo", "classOfEmployment", "zone", "category", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "Andaman and Nicobar Islands": ["slNo", "classOfEmployment", "totalPerDay",  "totalPerMonth"],
        "Karnataka": ["slNo", "classOfEmployment", "zone", "designation", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerMonth"],
        "Tamil Nadu": ["slNo", "classOfEmployment", "zone", "category", "subCategory", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Arunachal Pradesh": ["slNo", "classOfEmployment", "area", "totalPerDay", "totalPerMonth"],
        "Assam": ["slNo", "classOfEmployment","basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Bihar": ["slNo", "classOfEmployment", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Chandigarh": ["slNo", "classOfEmployment", "subCategory", "totalPerDay", "totalPerMonth"],
        "Chhattisgarh": ["slNo", "classOfEmployment", "zone", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Dadra and Nagar Haveli and Daman & Diu": ["slNo", "classOfEmployment", "basicPerDay", "vdaPerDay", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],        "Delhi": ["slNo", "classOfEmployment", "classOfWorkers", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Goa": ["slNo", "classOfEmployment", "zone", "category", "basicPerDay", "vdaPerDay", "totalPerDay", "totalPerMonth"],
        "Gujarat": ["slNo", "classOfEmployment", "zone", "basicPerDay", "vdaPerDay", "totalPerDay", "totalPerMonth"],
        "Haryana": ["slNo", "classOfEmployment", "qualificationAndExperience", "basicPerDay", "basicPerMonth", "totalPerDay", "totalPerMonth"],
        "Himachal Pradesh": ["slNo", "classOfEmployment", "benifitsFoodTeaProvided", "subCategory", "totalPerDay", "totalPerMonth"],
        "Jammu & Kashmir": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Jharkhand": ["slNo", "classOfEmployment", "area", "category", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Kerala": ["slNo", "grade", "district", "totalPerMonth", "basicGeneral", "basicIT", "DAGeneral", "DAIT", "specialAllowance", "minWagesGen", "minWagesIT"],
        "Ladakh": ["slNo", "classOfEmployment", "totalPerDay"],
        "Madhya Pradesh": ["slNo", "classOfEmployment", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Maharashtra": ["slNo", "classOfEmployment", "zone", "basicPerMonth", "hraPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Manipur": ["slNo", "classOfEmployment", "category", "totalPerDay", "totalPerMonth"],
        "Meghalaya": ["slNo", "classOfEmployment", "totalPerDay"],
        "Mizoram": ["slNo", "classOfEmployment", "category", "totalPerDay"],
        "Nagaland": ["slNo", "classOfEmployment", "category", "totalPerDay", "totalPerMonth"],
        "Odisha": ["slNo", "classOfEmployment", "basicPerDay", "vdaPerDay", "totalPerDay"],
        "Puducherry": ["slNo", "category", "subCategory", "grade", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "Punjab": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Rajasthan": ["slNo", "classOfEmployment", "totalPerDay", "totalPerMonth"],
        "Sikkim": ["slNo", "classOfEmployment", "category", "totalPerDay"],
        "Telangana": ["slNo", "classOfEmployment", "zone", "category", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Tripura": ["slNo", "classOfEmployment", "category", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "Uttar Pradesh": ["slNo", "classOfEmployment", "basicPerMonth", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Uttarakhand": ["slNo", "classOfEmployment", "classOfWorkers", "basicPerMonth", "vdaPerMonth", "totalPerMonth"],
        "West Bengal": ["slNo", "classOfEmployment", "zone", "category", "designation", "totalPerDay", "totalPerMonth"],
        "Central": ["slNo", "classOfEmployment","category", "subCategory", "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Lakshadweep": ["slNo", "classOfEmployment",  "basicPerDay", "basicPerMonth", "vdaPerDay", "vdaPerMonth", "totalPerDay", "totalPerMonth"],
        "Default": ["classOfEmployment", "zone", "basicPerMonth", "vdaPerMonth", "totalPerMonth", "category", "subCategory", "grade", "district", "designation", "qual_and_exp", "specialAllowance", "hraPerMonth"]

    };

    const selectedStateObj = stateInfo?.find((state) => state._id === selectedState);
    const stateName = selectedStateObj?.name || "Default";

    const selectedColumnKeys = stateColumnMap[stateName] || stateColumnMap["Default"];

    const columns = Array.isArray(selectedColumnKeys)
        ? selectedColumnKeys.map(key => allColumns[key]).filter(Boolean)
        : [];

    const formatDate = (currentDate) => {
        const dates = new Date(currentDate);
        const year = dates.getFullYear();
        const month = String(dates.getMonth() + 1).padStart(2, "0");
        const date = String(dates.getDate()).padStart(2, "0");
        const hours = String(dates.getHours()).padStart(2, "0");
        const minutes = String(dates.getMinutes()).padStart(2, "0");
        const seconds = String(dates.getSeconds()).padStart(2, "0");
        const formattedDateTime = `${year}`;
        return formattedDateTime;
    };
    const formatDate1 = (currentDate) => {
        const dates = new Date(currentDate);
        const year = dates.getFullYear();
        const month = String(dates.getMonth() + 1).padStart(2, "0");
        const date = String(dates.getDate()).padStart(2, "0");
        const hours = String(dates.getHours()).padStart(2, "0");
        const minutes = String(dates.getMinutes()).padStart(2, "0");
        const seconds = String(dates.getSeconds()).padStart(2, "0");
        const formattedDateTime = `${date}-${month}-${year}`;
        return formattedDateTime;
    };

    // useEffect(() => {
    //     if (
    //         Array.isArray(minWagePeriodStateInfo) &&
    //         selectedState
    //     ) {
    //         if (minWagePeriodStateInfo?.length > 0) {
    //             const firstPeriodId = minWagePeriodStateInfo[0]._id;
    //             setSelectedPeriod(firstPeriodId);
    //             dispatch(minWageGetById(firstPeriodId));
    //         } else {
    //             setSelectedPeriod(null);
    //             // setDataSource([]); // ✅ clear table if no data

    //         }
    //     }
    // }, [minWagePeriodStateInfo, selectedState]);





    const selectedPeriodObj = minWagePeriodStateInfo?.find((p) => p._id === selectedPeriod);

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
            {minWageByIDInfo && (
                <div>
                    <div className="row">
                        <div className="col-2">
                            <button className="btn mb-3 ms-2" onClick={() => navigate(-1)}>
                                <ArrowBackIcon />
                            </button>
                        </div>
                        <div className="col-9" >
                            <h2 className="mb-4 fw-bold headLine" style={{ paddingLeft: '50px !important' }}>
                                Minimum Wage List for {minWageByIDInfo?.state?.name || "State"} - {formatDate(minWageByIDInfo?.effectiveDate)}
                            </h2>
                        </div>


                    </div>

                    {minWagePeriodStateInfo?.length > 0 ? (
                        <>
                            <p >
                                {minWageByIDInfo?.descriptionMain}
                            </p>

                            <div className="row">
                                <div className="col-3">
                                    <p style={{ color: 'red' }}>
                                        Created On:{" "}
                                        {formatDate1(minWageByIDInfo.created_At)}
                                    </p>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-3">
                                    <p style={{ color: 'red' }}>
                                        Effective From:{" "}
                                        {formatDate1(minWageByIDInfo.effectiveDate)}
                                    </p>
                                </div>



                            </div>
                        </>
                    ) : (null)}
                    <div className="row">
                        <div className="col-4 stateFilter1">
                            <label htmlFor="stateFilter" className="myt fw-bold">State:</label>
                            <select
                                id="stateFilter"
                                className="form-select"
                                value={selectedState}
                                onChange={handleStateChange}
                                style={{ width: '250px' }}

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
                        <div className="col-4"></div>
                        {minWagePeriodStateInfo?.length > 0 ? (
                            <div className="col-4 stateFilter1">
                                <label htmlFor="periodFilter" className="myt fw-bold" >Period:</label>
                                <select className="form-select"
                                    value={selectedPeriod || ""}
                                    onChange={handlePeriodChange}
                                    style={{ width: '220px' }}
                                >
                                    {/* <option value="">Select Period</option> */}
                                    {minWagePeriodStateInfo.map((period) => (
                                        <option key={period._id} value={period._id}>
                                            {period.period}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        ) : (
                            // <p className="text-secondary mt-2" style={{ position: 'relative', top: '-8px', left: '10px', fontStyle: 'italic' }}>No data </p>
                            null
                        )}


                    </div>
                    {minWagePeriodStateInfo?.length > 0 ? (
                        <a
                            className="btn btn-primary mb-3"
                            href={minWageByIDInfo.doc}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📄 View Document
                        </a>
                    ) : (null)}
                    {minWagePeriodStateInfo?.length > 0 ? (
                        <Table
                            columns={columns || []}
                            dataSource={dataSource || []}
                            rowKey={(record, index) => index}
                            pagination={false}
                            bordered
                            locale={{ emptyText: "No data available" }}
                        />
                    ) : (
                        <div className="alert alert-warning text-center">
                            No Minimum Wage data available for the selected state and year.
                        </div>
                    )}


                </div>
            )}



        </div>
    );
};

export default MinWagesStateWise;

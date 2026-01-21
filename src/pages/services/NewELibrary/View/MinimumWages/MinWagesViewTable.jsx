import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    stateGets,
    MinWageLibraryPaginatedGetByState,
} from "../../../../../store/actions/otherActions";
import { useNavigate } from "react-router-dom";
// import "./HolidayStateCards.css";
import { DatePicker, message } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import MinWagesViewCreate from "./MinWagesViewCreate";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

dayjs.extend(customParseFormat);

const MinWagesViewTable = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector((state) => state.getState);
    const { data } = useSelector((state) => state.MINWAGELibraryPaginatedRed);
    const {
        minWagePeriodStateInfo = [],
        loading_Min_Period = false,
        error = null,
    } = useSelector((state) => state.minWagePeriodsByStateAndYearGetRed || {});
    console.log("MINWAGELibraryPaginatedRed", data);

    const minimumWageData = Array.isArray(data) ? data : [];
    const [selectedState, setSelectedState] = useState(null);

    const currentYear = dayjs().year();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [showTable, setShowTable] = useState(false);
    const [selectedHolidayId, setSelectedHolidayId] = useState(null);
    const [selectedStateId, setSelectedStateId] = useState(null);

    const fetchData = (filters = {}) => {
        dispatch(MinWageLibraryPaginatedGetByState(filters));
    };

    useEffect(() => {
        dispatch(stateGets());
        fetchData({ year: currentYear });
    }, [dispatch]);

    const handleClick = (state) => {
        const matchedminimumWage = minimumWageData?.find(
            (item) => item.stateId === state._id
        );

        if (!matchedminimumWage) return;

        setSelectedHolidayId(matchedminimumWage._id);
        setSelectedStateId(state._id);
        setShowTable(true);
        setSelectedState(state);
        navigate("/elibrary/View/Minimum_Wages/MinimumWagesList", {
            state: {
                year: selectedYear,
                stateId: state._id,
                minId: matchedminimumWage._id,
                selectedState: state,
            },
        });
    };

    const handleBack = () => {
        if (showTable) {
            // back to list view
            setShowTable(false);
            setSelectedHolidayId(null);
            setSelectedStateId(null);
            setSelectedState(null);
        } else {
            // navigate back in browser history
            navigate(-1);
        }
    };

    return (
        <div className="holiday-container py-4">
            {/* Back button + heading */}
            <div
                className="d-flex align-items-center justify-content-center position-relative mb-4"
                style={{ minHeight: "40px" }}
            >
                <button
                      onClick={() => navigate(-1)}         
                      className="back-button"
                           >
                               <ArrowBackIcon />
                           </button>
                           
                <h2 className="mb-0 fw-bold" style={{ color: "#013879" }}>
                    {!showTable
                        ? `Lists of Latest Minimum Wages in India ${selectedYear}`
                        : `Minimum Wage Details for ${selectedState?.name || ""} (${selectedYear})`}
                </h2>
            </div>

            {!showTable ? (
                <>
                    <p className="text-center mb-4 text-secondary">
                        Minimum Wages refer to the lowest amount that an employer is legally required to pay to workers for their labour, as fixed by the government. In India, minimum wages vary by state, type of work, skill level, and industry, and are revised periodically to ensure fair pay and prevent exploitation.                    </p>
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                        <label htmlFor="selectedYear" className="form-label">
                            Year Filter
                        </label>
                        <DatePicker
                            className="form-select"
                            picker="year"
                            onChange={(date) => {
                                if (!date) {
                                    message.warning("Please select a year.");
                                    return;
                                }
                                const year = date.year();
                                setSelectedYear(year);
                                fetchData({ year });
                            }}
                            value={selectedYear ? dayjs(`${selectedYear}`, "YYYY") : null}
                            placeholder="Select Year"
                            style={{ width: 200 }}
                        />
                    </div>
                      
                    <div className="row g-3 justify-content-center">
                        {stateInfo
                            ?.filter((state) => state.name !== "All States")
                            .map((state) => {
                                const matchingHoliday = minimumWageData?.find(
                                    (item) => item.stateId === state._id
                                );
                                
                                const effectiveDate = matchingHoliday?.effectiveDate
                                    ? new Date(matchingHoliday.effectiveDate).toLocaleDateString(
                                        "en-IN",
                                        {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        }
                                    )
                                    : "N/A";

                                return (
                                    <div
                                        key={state._id}
                                        className="col-sm-6 col-md-4 col-lg-3"
                                        onClick={() => handleClick(state)}
                                    >
                                        <div className="state-card pointer-hover">
                                            <h6 className="state-name">{state.name}</h6>
                                            {matchingHoliday?.effectiveDate ? (
                                                <p className="effective-date">
                                                    Effective date: {effectiveDate}
                                                </p>
                                            ) : (
                                                <span
                                                    style={{
                                                        color: "red",
                                                        fontWeight: "500",
                                                        fontStyle: "italic",
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    No Data Available
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </>
            ) : (
                selectedHolidayId &&
                selectedStateId && (
                    <MinWagesViewCreate
                        year={selectedYear}
                        minId={selectedHolidayId}
                        stateId={selectedStateId}
                        selectedState={selectedState}
                    />
                )
            )}
        </div>
    );
};

export default MinWagesViewTable;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    stateGets,
    holidayLibraryPaginatedGet1,
} from "../../../../store/actions/otherActions";
import { useNavigate } from "react-router-dom";
import "./HolidayStateCards.css";
import { DatePicker, message } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import HolidayElibraryStateDetails from "./HolidayElibraryStateDetails";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // <-- Importing MUI back icon

dayjs.extend(customParseFormat);

const HolidayElibraryCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector((state) => state.getState);
    const { data } = useSelector((state) => state.holidayLibGetRed1);
    const holidayData = Array.isArray(data) ? data : [];
    const [selectedState, setSelectedState] = useState(null);

    const currentYear = dayjs().year();
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [showTable, setShowTable] = useState(false);
    const [selectedHolidayId, setSelectedHolidayId] = useState(null);
    const [selectedStateId, setSelectedStateId] = useState(null);

    const fetchData = (filters = {}) => {
        dispatch(holidayLibraryPaginatedGet1(filters));
    };

    useEffect(() => {
        dispatch(stateGets());
        fetchData({ year: currentYear });
    }, [dispatch]);

    const handleClick = (state) => {
        const matchedHoliday = holidayData?.find(
            (item) => item.stateId === state._id
        );

        if (!matchedHoliday) return;

        setSelectedHolidayId(matchedHoliday._id);
        setSelectedStateId(state._id);
        setShowTable(true);
        setSelectedState(state);
        navigate("/elibrary/View/National_&_Festival_Holidays/HolidayList", {
            state: {
                year: selectedYear,
                stateId: state._id,
                holidayId: matchedHoliday._id,
                selectedState: state,
            },
        });
    };

    // Back button handler
    const handleBack = () => {
        if (showTable) {
            // if currently showing details, go back to list
            setShowTable(false);
            // optionally clear selected state/holiday IDs
            setSelectedHolidayId(null);
            setSelectedStateId(null);
            setSelectedState(null);
        } else {
            // if on list, navigate back in history
            navigate(-1);
        }
    };

    return (
        <div className="holiday-container py-4">
            {/* Back Button + Centered Heading */}
            
                <div className="row ">
                    <div className="col-2">
                        <button
                            onClick={() => navigate(-1)}
                            className="back-button"
                            style={{ position: 'relative', top: '8px', left: '-40px' }}
                            aria-label="Back"
                        >
                            <ArrowBackIcon />
                        </button>
                    </div>
                    <div className="col-10 "
                    // style={{ position: 'relative', top: '0px', left: '40px' }}
                    >
                        <h2 className=" fw-bold" style={{ color: "#013879" }}>
                            {!showTable
                                ? `Lists of Government & Public Holidays in India ${selectedYear}`
                                : `Holiday Details for ${selectedState?.name || ""} (${selectedYear})`}
                        </h2>

                    </div>
                </div>


          

            {!showTable ? (
                <>
                    <p className="text-center mb-4 text-secondary">
                        Lists of Holidays For States Across India
                    </p>
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
                                const matchingHoliday = holidayData?.find(
                                    (item) => item.stateId === state._id
                                );

                                const effectiveDate = matchingHoliday?.effectiveDate
                                    ? new Date(matchingHoliday.effectiveDate).toLocaleDateString("en-IN", {
                                        day: "numeric",
                                        month: "short",
                                        year: "numeric",
                                    })
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
                    <HolidayElibraryStateDetails
                        year={selectedYear}
                        holidayId={selectedHolidayId}
                        stateId={selectedStateId}
                        selectedState={selectedState}
                    />
                )
            )}
        </div>
    );
};

export default HolidayElibraryCreate;

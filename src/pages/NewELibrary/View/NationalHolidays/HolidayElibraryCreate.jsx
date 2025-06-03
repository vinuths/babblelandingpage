import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    stateGets,
    holidayLibraryPaginatedGet1,
} from "../../../../store/actions/otherActions";
import { useNavigate } from "react-router-dom";
import "./HolidayStateCards.css";
import { DatePicker, Button } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { message } from "antd"; // Use Ant Design's message component for alerts

dayjs.extend(customParseFormat);

const HolidayElibraryCreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector((state) => state.getState);
    const { data } = useSelector((state) => state.holidayLibGetRed1);
    const holidayData = Array.isArray(data) ? data : [];
    console.log("holidayData", holidayData);

    // Initialize selectedYear with current year
    const currentYear = dayjs().year();
    const [selectedYear, setSelectedYear] = useState(currentYear);

    const fetchData = (filters = {}) => {
        dispatch(holidayLibraryPaginatedGet1(filters));
    };

    useEffect(() => {
        dispatch(stateGets());

        // On mount, fetch data with the current year filter
        fetchData({ year: currentYear });
    }, [dispatch]);

    const handleClick = (state) => {
        const matchedHoliday = holidayData?.find(
            (item) => item.stateId === state._id
        );

        if (!matchedHoliday) return;

        navigate("/holiday-elibrary-state", {
            state: {
                holidayId: matchedHoliday._id,
                stateData: state,
                holidayData: matchedHoliday,
            },
        });
    };

    // const handleYearChange = (date) => {
    //     if (date) {
    //         const year = date.year();
    //         setSelectedYear(year);
    //     } else {
    //         setSelectedYear(null);
    //         fetchData(); // Fetch all if year cleared
    //     }
    // };

    // const applyYearFilter = () => {
    //     if (selectedYear) {
    //         fetchData({ year: selectedYear });
    //     } else {
    //         fetchData();
    //     }
    // };

    return (
        <div className="holiday-container py-4">
            <h2 className="mb-4 text-center fw-bold text-dark">
                Lists of Government & Public Holidays in India 2025
            </h2>
            <p className="text-center mb-4 text-secondary">
                Lists of Holidays For States Across India
            </p>
            <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                    <DatePicker
                        picker="year"
                        onChange={(date) => {
                            if (!date) {
                                message.warning("Please select a year.");
                                return;
                            }

                            const year = date.year();
                            setSelectedYear(year);
                            fetchData({ year }); // Apply filter immediately
                        }}
                        value={selectedYear ? dayjs(`${selectedYear}`, "YYYY") : null}
                        placeholder="Select Year"
                        style={{ width: 200 }}
                    />
                </div>
            </div>


            <div className="row g-3 justify-content-center">
                {stateInfo?.map((state) => {
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
                                <p className="effective-date">Effective date: {effectiveDate}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HolidayElibraryCreate;

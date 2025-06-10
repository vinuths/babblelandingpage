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
        setSelectedState(state); // <-- store full state object
        navigate("/elibrary/View/National_&_Festival_Holidays/HolidayList", {
            state: {
                year: selectedYear,
                stateId: state._id,
                holidayId: matchedHoliday._id,
                selectedState: state,
            },
        });


    };

    return (
        <div className="holiday-container py-4" >
            {!showTable ? (
                <>
                    <h2 className="mb-4 text-center fw-bold " style={{ color: '#013879' }}>
                        Lists of Government & Public Holidays in India {selectedYear}
                    </h2>
                    <p className="text-center mb-4 text-secondary">
                        Lists of Holidays For States Across India
                    </p>
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-4">
                        <label htmlFor="selectedYear" className="form-label">Year Filter</label>
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
                                                <p className="effective-date">Effective date: {effectiveDate}</p>
                                            ) : (
                                                <span style={{ color: 'red', fontWeight:'500', fontStyle:'italic', fontSize:'14px' }}>No Data Available</span>
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
                        selectedState={selectedState} // <-- pass it here

                    />
                )
            )}
        </div>
    );
};

export default HolidayElibraryCreate;

import React, { useEffect, useState, useMemo } from 'react';
import { OverviewTable } from './OverviewTable';
import { LicenseDetails } from './LicenseDetails';
import RemittanceTable from './RemittanceTable';
import RemittanceDocs from './RemittanceDocs';
import RegisterPanel from './RegisterPanel';
import ReturnsPanel from './ReturnsPanel';
import ReturnDocView from './ReturnDocView';
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { usersGet } from '../../../../store/actions/otherActions';


export default function ComplianceDashboard() {
    const dispatch = useDispatch();

    const [view, setView] = useState("overview");
    const [docDetail, setDocDetail] = useState(null);
    const currentMonth = dayjs().format("YYYY-MM");
    const [fromMonth, setFromMonth] = useState(currentMonth);
    const [toMonth, setToMonth] = useState(currentMonth);
    console.log("docDetail", docDetail);
    const { usersInfo } = useSelector((state) => state.userGet);

    const loggedInUserId = JSON.parse(localStorage.getItem("userInfo"))?._id;

    const loggedInUser = usersInfo?.find((user) => user._id === loggedInUserId);

    useEffect(() => {
        if (!usersInfo || usersInfo.length === 0) {
            dispatch(usersGet());
        }
    }, [dispatch, usersInfo]);


    const handleBack = () => {
        if (docDetail) setDocDetail(null);
        else setView("overview");
    };

    // useEffect(() => {
    //     if (view === "licenses" && loggedInUser && !loggedInUser.isLisRegComp) {
    //         setView("overview"); // or set to null
    //     }
    // }, [view, loggedInUser]);
    // useEffect(() => {
    //     if (view === "remittance" && loggedInUser && !loggedInUser.isLisRegComp) {
    //         setView("overview"); // or set to null
    //     }
    // }, [view, loggedInUser]);
    // useEffect(() => {
    //     if (view === "registers" && loggedInUser && !loggedInUser.isLisRegComp) {
    //         setView("overview"); // or set to null
    //     }
    // }, [view, loggedInUser]);
    // useEffect(() => {
    //     if (view === "returns" && loggedInUser && !loggedInUser.isLisRegComp) {
    //         setView("overview"); // or set to null
    //     }
    // }, [view, loggedInUser]);


    return (
        <div style={{ padding: 24 }}>
            {view === "overview" && (
                <OverviewTable
                    setView={setView}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    setFromMonth={setFromMonth}
                    setToMonth={setToMonth}
                    loggedInUser={loggedInUser}
                />
            )}

            {loggedInUser && view === "licenses" && loggedInUser.isLisRegComp && (
                <LicenseDetails
                    onBack={handleBack}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                />
            )}

            {/* {view === "remittance" && !docDetail && loggedInUser?.isRemmitComp && ( */}
            {loggedInUser && view === "remittance" && loggedInUser.isRemmitComp && !docDetail && (

                <RemittanceTable
                    onBack={handleBack}
                    onViewDoc={setDocDetail}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    setFromMonth={setFromMonth}
                    setToMonth={setToMonth}
                />
            )}

            {loggedInUser && view === "remittance" && loggedInUser.isRemmitComp && docDetail && (
                <RemittanceDocs
                    type={docDetail}
                    onBack={handleBack}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                />
            )}
            {loggedInUser && view === "registers" && loggedInUser.isRegisterComp && (

                // {view === "registers" && loggedInUser?.isRegisterComp && (
                <RegisterPanel
                    onBack={handleBack}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    setFromMonth={setFromMonth}
                    setToMonth={setToMonth}
                />
            )}
            {loggedInUser && view === "returns" && loggedInUser.isReturnsComp && !docDetail && (
                <ReturnsPanel
                    onBack={handleBack}
                    onViewDoc={setDocDetail}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                    setFromMonth={setFromMonth}
                    setToMonth={setToMonth}
                />
            )}

            {loggedInUser && view === "returns" && loggedInUser.isReturnsComp && docDetail && (
                // {view === "returns" && docDetail && loggedInUser?.isReturnsComp && (
                <ReturnDocView
                    returnName={docDetail}
                    onBack={handleBack}
                    fromMonth={fromMonth}
                    toMonth={toMonth}
                />
            )}
        </div>
    );
}
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from "antd";
import {
    usersGet,
    companyTableGet,
    auditorGet,
    checklistGetonCreateAudit,
    ongoingAudits,
    gettingAuditorOverdueDashboard,
    auditCompiledStatusAll,
    auditRegCountAll,
    checklistCalenderGet,
    auditCompiledCountAll,
    CompanyBranchesGet,
} from "../../store/actions/otherActions";

import DashboardTableBranchCount from "./DashboardTableBranchCount";
import NoticeTableCount from "./NoticeTableCount";
import ComplianceBarChart from "./ComplianceBarChart";
import CalendarComponent from "./CalendarComponent";
import ComplianceOfLCAaudit from "./ComplianceOfLCAaudit";
import ComplianceOfPAaudit from "./ComplianceOfPAaudit";
import ComplianceDashboard from "./ComplianceOverView/components/ComplianceDashboard";
import PFTrackerBoard from "./PFTrackerBoard";

import "./DashboardCSS.css"; // create this file to style tabs
import ApplicableComps from "./ApplicableComps";
import ApplicableLicenses from "./ApplicableLicensesStatus";
import { Tooltip } from "antd";

const Dashboard = () => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState(null);

    const { usersInfo } = useSelector((state) => state.userGet);
    const CompanyBranchesInfo = useSelector(
        (state) => state.CompanyBranchesGetRed.CompanyBranchesInfo
    );

    const loggedInUserId = JSON.parse(localStorage.getItem("userInfo"))?._id;

    useEffect(() => {
        dispatch(usersGet());
        dispatch(companyTableGet());
        dispatch(auditorGet());
        dispatch(checklistGetonCreateAudit());
        dispatch(ongoingAudits());
        dispatch(gettingAuditorOverdueDashboard());
        dispatch(auditCompiledStatusAll());
        dispatch(auditRegCountAll());
        dispatch(checklistCalenderGet());
        dispatch(auditCompiledCountAll({ isLBAOrPA: 0 }));
        dispatch(CompanyBranchesGet());
    }, [dispatch]);

    const loggedInUser = usersInfo?.find((user) => user._id === loggedInUserId);

    const tabs = [
        loggedInUser?.applicableCompStatus && {
            key: "complaince-applicable",
            label: <Tooltip placement="bottom" title="Applicable Acts & Rules">Legal Scope</Tooltip>,
            children: <ApplicableComps usersInfo={usersInfo} />,
        },
        loggedInUser?.applicableLicensesStatus && {
            key: "applicable-licenses",
            label: <Tooltip placement="bottom" title="Applicable Licenses, Registrations, Permissions">Licenses & Permits</Tooltip>,
            children: <ApplicableLicenses usersInfo={usersInfo} />,
        },
        loggedInUser?.compOverViewStatus && {
            key: "compliance-dashboard",
            label: <Tooltip placement="bottom" title="Status of registration, remittances, registers, & returns">Compliance Overview</Tooltip>,
            children: <ComplianceDashboard usersInfo={usersInfo} />,
        },
        loggedInUser?.regLisStatus && {
            key: "branch-count",
            label: <Tooltip placement="bottom" title="Details of Registrations & Licenses">RegiTrack </Tooltip>,
            children: <DashboardTableBranchCount usersInfo={usersInfo} />,
        },
        loggedInUser?.compileStatus && {
            key: "bar-chart",
            label: <Tooltip placement="bottom" title="Establishment Audit Summary">Audit Snap</Tooltip>,
            children: <ComplianceBarChart branchesCompany={CompanyBranchesInfo} />,
        },
        loggedInUser?.compileStatusLCA && {
            key: "lca-audit",
            label: <Tooltip placement="bottom" title="Vendor Audit Report">Vendor Review</Tooltip>,
            children: <ComplianceOfLCAaudit branchesCompany={CompanyBranchesInfo} />,
        },
        loggedInUser?.compileStatusPA && {
            key: "pa-audit",
            label: <Tooltip placement="bottom" title="Principal Employer Audit Report">PE Review</Tooltip>,
            children: <ComplianceOfPAaudit branchesCompany={CompanyBranchesInfo} />,
        },
        loggedInUser?.inspectLisStatus && {
            key: "notice-table",
            label: <Tooltip placement="bottom" title="Notice & Inspection Tracker">Inspections Log</Tooltip>,
            children: <NoticeTableCount branchesCompany={CompanyBranchesInfo} />,
        },
        loggedInUser?.pfTrackerStatus && {
            key: "pf-tracker",
            label: <Tooltip placement="bottom" title="PF Grievance Tracker">PF Support</Tooltip>,
            children: <PFTrackerBoard usersInfo={usersInfo} />,
        },
        loggedInUser?.dueDateStatus && {
            key: "calendar",
            label: <Tooltip placement="bottom" title="Compliance Calendar">Due Calendar</Tooltip>,
            children: <CalendarComponent branchesCompany={CompanyBranchesInfo} />,
        },
    ].filter(Boolean);


    return (
        <div className="dashboard_wrapper">
            <div className="container">
                <Tabs
                    activeKey={activeTab || tabs[0]?.key}
                    onChange={setActiveTab}
                    items={tabs}
                    destroyInactiveTabPane
                    className="custom-tabs"
                />
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    usersGet,
    companyTableGet,
    auditGetDataAll,
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

const Dashboard = () => {
    const dispatch = useDispatch();

    // Retrieve users from Redux
    const { usersInfo } = useSelector((state) => state.userGet);
    const CompanyBranchesInfo = useSelector(
        (state) => state.CompanyBranchesGetRed.CompanyBranchesInfo
    );

    // Get logged-in user ID from localStorage
    const loggedInUserId = JSON.parse(localStorage.getItem("userInfo"))?._id;

    useEffect(() => {
        dispatch(usersGet());
        dispatch(companyTableGet());
        // dispatch(auditGetDataAll());
        dispatch(auditorGet());
        dispatch(checklistGetonCreateAudit());
        dispatch(ongoingAudits());
        dispatch(gettingAuditorOverdueDashboard());
        dispatch(auditCompiledStatusAll());
        dispatch(auditRegCountAll());
        dispatch(checklistCalenderGet());
        const postBody = { isLBAOrPA: 0 }
        dispatch(auditCompiledCountAll(postBody));
        dispatch(CompanyBranchesGet());
    }, [dispatch]);

    // Find the logged-in user by ID
    const loggedInUser = usersInfo?.find((user) => user._id === loggedInUserId);

    return (
        <React.Fragment>
            <div className="dashboard_wrapper">
                <div className="container">
                    {loggedInUser?.regLisStatus && (
                        <div className="row">
                            <div className="col-sm-12">
                                <DashboardTableBranchCount usersInfo={usersInfo} />
                            </div>
                        </div>
                    )}
                    <br />

                    {loggedInUser?.compileStatus && (
                        <div className="row">
                            <div className="col-sm-12">
                                <ComplianceBarChart branchesCompany={CompanyBranchesInfo} />
                            </div>
                        </div>
                    )}
                    <br />
                    {loggedInUser?.compileStatusLCA && (
                    <div className="row">
                        <div className="col-sm-12">
                            <ComplianceOfLCAaudit branchesCompany={CompanyBranchesInfo} />
                        </div>
                    </div>
                    )} 
                    <br />
                      {loggedInUser?.compileStatusPA && ( 
                    <div className="row">
                        <div className="col-sm-12">
                            <ComplianceOfPAaudit branchesCompany={CompanyBranchesInfo} />
                        </div>
                    </div>
                     )} 
                    <br />

                    {loggedInUser?.inspectLisStatus && (
                        <div className="row">
                            <div className="col-sm-12">
                                <NoticeTableCount branchesCompany={CompanyBranchesInfo} />
                            </div>
                        </div>
                    )}
                    <br />
                    {loggedInUser?.dueDateStatus && (
                        <div className="row">
                            <div className="col-sm-12">
                                <CalendarComponent branchesCompany={CompanyBranchesInfo} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Dashboard;

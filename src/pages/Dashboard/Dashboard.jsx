import React, { useState, useEffect } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { FormLabel, styled } from '@mui/material';
// import Highlighter from 'react-highlight-words';
// import { Button, Input, Space, Table, Modal, Form, message } from 'antd';
// import { CloudUploadOutlined, UploadOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { usersGet, companyTableGet, auditorGet, auditCompiledCountAll, CompanyBranchesGet, auditRegCountAll, checklistCalenderGet, checklistGetonCreateAudit, auditGetDataAll, ongoingAudits, gettingAuditorOverdueDashboard, auditCompiledStatusAll } from "../../store/actions/otherActions";
import { useDispatch, useSelector } from 'react-redux';
import DashboardTableBranchCount from "./DashboardTableBranchCount";
import DashboardTableAudit from "./DashboardTableAudit";
// import DashboardTableCompany from "./DashboardTableCompany";
// import DashboardTableNotification from "./DashboardTableNotification";
// import { BarChart1, Bar, XAxis, YAxis,LabelList, Tooltip, CartesianGrid, Legend } from 'recharts';
import ComplianceBarChart from './ComplianceBarChart';
import BarChart1 from './BarChart';
import CalendarComponent from './CalendarComponent';
import BarChartReg from './BarchartReg';

const Dashboard = () => {
    const dispatch = useDispatch();
    const userGet = useSelector((state) => state.userGet);
    const { usersInfo } = userGet;
    const getCompanyTable = useSelector(state => state.getCompanyTable);
    const { loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const allAuditGet = useSelector((state) => state.allAuditGet);
    const { getAllAudit } = allAuditGet;
    const getAuditor = useSelector((state) => state.getAuditor);
    const { auditorInfo } = getAuditor;
    const onCreateChecklistAudit = useSelector((state) => state.onCreateChecklistAudit);
    const { auditorChecklistInfoOncreate } = onCreateChecklistAudit;
    const onGoingAudit = useSelector((state) => state.onGoingAudit);
    const { auditOnGoingInfo } = onGoingAudit;
    const overDueAudit = useSelector((state) => state.overDueAudit);
    const { auditOverdueInfos } = overDueAudit;

    const { CompanyBranchesInfo, loadingBranch, error } = useSelector((state) => state.CompanyBranchesGetRed);
    // console.log("CompanyBranchesInfo",CompanyBranchesInfo);

    const companyCount = companyGetTableInfo?.length ? companyGetTableInfo?.length : 0;
    const executiveCount = usersInfo?.length ? usersInfo?.length : 0;
    const auditorCount = auditorInfo?.length ? auditorInfo?.length : 0;
    const auditTotalCount = getAllAudit?.length ? getAllAudit?.length : 0;
    const checklistCount = auditorChecklistInfoOncreate?.length ? auditorChecklistInfoOncreate?.length : 0;
    const auditOnGoingCount = auditOnGoingInfo?.length ? auditOnGoingInfo?.length : 0;
    const auditOverDueCount = auditOverdueInfos ? auditOverdueInfos : 0;

    useEffect(() => {
        dispatch(usersGet());
        dispatch(companyTableGet());
        dispatch(auditGetDataAll());
        dispatch(auditorGet());
        dispatch(checklistGetonCreateAudit());
        dispatch(ongoingAudits());
        dispatch(gettingAuditorOverdueDashboard());
        dispatch(auditCompiledStatusAll());
        dispatch(auditRegCountAll());
        dispatch(checklistCalenderGet());
        dispatch(auditCompiledCountAll());
        dispatch(CompanyBranchesGet());


    }, [dispatch]);

    // Sample data for bar charts


    return (
        <React.Fragment>
            <div className='dashboard_wrapper' style={{ height: "200px" }}>
                <div className="container" >
                    {/* <ComplianceBarChart /> */}
                    <div className="row">

                        <div className="col-sm-12">

                            {/* <CalendarComponent branchesCompany={CompanyBranchesInfo} /> */}

                            {/* <h4>Registrations/Licenses/Permissions</h4> */}
                            <DashboardTableBranchCount branchesCompany={CompanyBranchesInfo} />
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-sm-4" >

                            <BarChart1 branchesCompany={CompanyBranchesInfo} />

                        </div>
                        {/* <div className="col-sm-3"><BarChartReg branchesCompany={CompanyBranchesInfo} /></div> */}
                        <div className="col-sm-4">
                            <ComplianceBarChart branchesCompany={CompanyBranchesInfo} />

                        </div>
                        <div className="col-sm-4">
                            <CalendarComponent branchesCompany={CompanyBranchesInfo} />

                        </div>


                    </div>

                    {/* <DashboardTableAudit /> */}

                </div>
            </div>
        </React.Fragment>
    );
}

export default Dashboard;

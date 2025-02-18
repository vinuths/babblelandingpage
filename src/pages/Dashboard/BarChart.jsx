import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Button, Input, Space, Table, Modal, Menu } from "antd";
import { Autocomplete, TextField } from '@mui/material';
import { auditCompiledStatusAll, stateGets, branchGetByState } from '../../store/actions/otherActions';
import './Graph.css';

const Barchart1 = ({ branchesCompany }) => {
    const dispatch = useDispatch();


    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
        const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
        return `${day}/${month}/${year}`;
    };

    // Fetch data from Redux store
    const statewiseCounts = useSelector((state) => state.auditCompiledStatusAll11.auditData1 || {});
    const noticeData = useSelector((state) => state.auditCompiledStatusAll11.auditData2 || []);
    const loading = useSelector((state) => state.auditCompiledStatusAll11.loadingcompstatus);
    const error = useSelector((state) => state.auditCompiledStatusAll11.error);
    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const getBranchByState = useSelector((state) => state.getBranchByState);
    const { branchByStateInfo1 } = getBranchByState;
    // State for selected filters
    // console.log("Branch Info:", branchByStateInfo1);

    const [selectedState, setSelectedState] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    // Modal state
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNoticeIds, setSelectedNoticeIds] = useState([]);
    const [modalTitle, setModalTitle] = useState('');

    // Dynamically set columns based on the first object in filteredNotices
    const getColumns = (data) => {
        if (data.length === 0) return [];

        return [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                render: (text, record, index) => index + 1, // Serial number based on index
            },
            ...Object.keys(data[0]).map((key) => ({
                title: key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
                dataIndex: key,
                key: key,
            })),
        ];
    };


    // Handle bar click
    const handleBarClick = (data, index) => {
        let filteredNotices = [];
        let title = '';

        if (index === 0) {
            filteredNotices = noticeData.map((notice, idx) => ({
                // slNo: idx + 1, // Serial Number
                branchStateName: notice.branchStateName,
                branch: notice.branchName,
                department: notice.department,
                priority: notice.priority === 'Low' ? <div style={{ color: '#34953D' }}>{notice.priority}</div> : notice.priority === 'High' ? <div style={{ color: 'red' }}>{notice.priority}</div> : notice.priority === 'Medium' ? <div style={{ color: '#D89D13' }}>{notice.priority}</div> : <div style={{ color: 'red' }}>{notice.priority}</div>,
                dateOfNotice: formatDateToInput(notice.dateOfNotice),
                dateOfNoticeClosure: formatDateToInput(notice.dateOfNoticeClosure) || "-",
                noticeStatus: (
                    <div>
                        {notice.noticeStatus === 5 ?
                            (
                                <Button style={{ backgroundColor: "#8155c2", color: "white" }}>Inspection Completed</Button>
                            )
                            : (
                                <Button style={{ backgroundColor: "#eb4034", color: "white" }}>Work In Progress</Button>
                            )}
                    </div>
                ),
                overDays: notice.overDays || "-",
            }));
            title = 'Total Notices';
        } else if (index === 1) {
            filteredNotices = noticeData.filter(notice => notice.noticeStatus === 5)
                .map((notice, idx) => ({
                    // slNo: idx + 1, // Serial Number
                    branchStateName: notice.branchStateName,
                    branch: notice.branchName,
                    department: notice.department,
                    dateOfNotice: formatDateToInput(notice.dateOfNotice),
                    dateOfNoticeClosure: formatDateToInput(notice.dateOfNoticeClosure),
                    priority: notice.priority === 'Low' ? <div style={{ color: '#34953D' }}>{notice.priority}</div> : notice.priority === 'High' ? <div style={{ color: 'red' }}>{notice.priority}</div> : notice.priority === 'Medium' ? <div style={{ color: '#D89D13' }}>{notice.priority}</div> : <div style={{ color: 'red' }}>{notice.priority}</div>,
                    closureAckDoc: (<a href={notice.closureAckDoc} target="_blank" rel="noopener noreferrer">View Acknoweledgement</a>),
                    overDays: notice.overDays || "On Time",
                }));
            title = 'Complied Notices';
        } else if (index === 2) {
            filteredNotices = noticeData.filter(notice => notice.noticeStatus !== 5)
                .map((notice, idx) => ({
                    // slNo: idx + 1, // Serial Number
                    branchStateName: notice.branchStateName,
                    branch: notice.branchName,
                    department: notice.department,
                    dateOfNotice: formatDateToInput(notice.dateOfNotice),
                    createdAt: formatDateToInput(notice.createdAt),
                    closureDeadLine: formatDateToInput(notice.closureDeadLine),
                    priority: notice.priority === 'Low' ? <div style={{ color: '#34953D' }}>{notice.priority}</div> : notice.priority === 'High' ? <div style={{ color: 'red' }}>{notice.priority}</div> : notice.priority === 'Medium' ? <div style={{ color: '#D89D13' }}>{notice.priority}</div> : <div style={{ color: 'red' }}>{notice.priority}</div>,
                    noticeCopy: (<a href={notice.noticeCopy} target="_blank" rel="noopener noreferrer">View Notice</a>),
                    noticeStatus: (
                        <div>
                            {notice.noticeStatus === 0 ? (
                                <Button style={{ backgroundColor: "#4A90E2", color: "white" }}>Notice Assigned</Button>
                            ) : notice.noticeStatus === 1 ? (
                                <Button style={{ backgroundColor: "#eb4034", color: "white" }}>Work In Progress</Button>
                            ) : notice.noticeStatus === 2 ? (
                                <Button style={{ backgroundColor: "#5578c2", color: "black" }}>Documents ready for Attestation</Button>
                            ) : notice.noticeStatus === 3 ? (
                                <Button style={{ backgroundColor: "#2ECC71", color: "white" }}>Submit for Inspection</Button>
                            ) : notice.noticeStatus === 4 ? (
                                <Button style={{ backgroundColor: "#8155c2", color: "white" }}>Inspection Completed</Button>
                            ) : notice.noticeStatus === 5 ? (
                                <Button style={{ backgroundColor: "#34953D", color: "white" }}>Inspection Closed</Button>
                            ) : notice.noticeStatus === 6 ? (
                                <Button style={{ backgroundColor: "red", color: "white" }}>Notice Cancelled</Button>
                            ) : notice.noticeStatus === 7 ? (
                                <Button style={{ backgroundColor: "#55c282", color: "black", height: '60px' }}>Additional Document<br />Requested by Executive</Button>
                            ) : notice.noticeStatus === 8 ? (
                                <Button style={{ backgroundColor: "yellow", color: "black", height: '60px' }}>Additional Document<br />Shared by Matrix</Button>
                            ) : notice.noticeStatus === 9 ? (
                                <Button style={{ backgroundColor: "#68736d", color: "white", height: '60px' }}>Additional Document<br />Requested by Matrix</Button>
                            ) : notice.noticeStatus === 10 ? (
                                <Button style={{ backgroundColor: "#FF7043", color: "white", height: '60px' }}>Additional Document<br />Shared by Executive</Button>
                            ) : null}
                        </div>
                    ),
                    overDueDays: notice.overDueDays || "Check Dates",
                }));
            title = 'Pending Notices';
        }

        setSelectedNoticeIds(filteredNotices);
        setModalTitle(title);
        setModalVisible(true);
    };

    // Fetch data on component mount or when filters change
    useEffect(() => {
        dispatch(stateGets());
    },[dispatch])
    useEffect(() => {
        const postBody = {
            state: selectedState || '',
            branch: selectedBranch || '',
            startDate: startDate || '',
            endDate: endDate || '',
        };
        dispatch(auditCompiledStatusAll(postBody));
    }, [dispatch, selectedState, selectedBranch, startDate, endDate]);

    // Prepare dynamic data for Recharts
    const totalQuestions = Object.values(statewiseCounts).reduce((sum, state) => sum + (state.total || 0), 0);
    const compliedQuestions = Object.values(statewiseCounts).reduce((sum, state) => sum + (state.complied || 0), 0);
    const pendingQuestions = Object.values(statewiseCounts).reduce((sum, state) => sum + (state.pending || 0), 0);

    // Prepare data for Recharts
    const data = [
        { name: 'Total', value: totalQuestions },
        { name: 'Complied', value: compliedQuestions },
        { name: 'Pending', value: pendingQuestions },
    ];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <div className='chart-container' style={{ height: '500px' }}>
                <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#013879' }}>Notice/Inspections</h2>
                <div>
                    <div className="filters" style={{ width: "100%" }}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    <label htmlFor="stateFilter">Filter by State:</label>
                                    <select
                                        id="stateFilter"
                                        value={selectedState}
                                        onChange={(e) => {
                                            const selectedStateName = e.target.value;
                                            setSelectedState(selectedStateName);
                                            dispatch(branchGetByState({ stateIds: selectedStateName }));
                                        }}
                                    >
                                        <option value="">All States</option>
                                        {stateInfo != 'undefind' && stateInfo?.length > 0 && stateInfo.map(item =>
                                            <option value={item.name}>{item.name}</option>
                                        )};
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    <label htmlFor="branchFilter">Filter by Branch:</label>
                                    <select id="branchFilter">
                                        <option value="">All Branches</option>
                                        {branchByStateInfo1?.map(branch => (
                                            <option key={branch._id} value={branch.name}>
                                                {branch.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="startDate">Date Range:</label>
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    <input
                                        type="date"
                                        id="startDate"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="filter-item">
                                    <input
                                        type="date"
                                        id="endDate"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="chart-wrapper">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={data}
                                barSize={30}
                                margin={{ top: 20, right: 0, left: -10, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis tickCount={10} />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#013879" onClick={handleBarClick} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Ant Design Modal with Table */}
            <Modal
                title={modalTitle}
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                width={1100}
            >
                <Table
                    columns={getColumns(selectedNoticeIds)}
                    dataSource={selectedNoticeIds}
                    rowKey="noticeId"
                    pagination={{
                        // pageSize: 10, // Default page size
                        pageSizeOptions: ['10', '20', '50', '100'], // Options for the dropdown
                        showSizeChanger: true, // Enables the dropdown to change page size
                    }}
                />

            </Modal>
        </div>
    );
};

export default Barchart1;

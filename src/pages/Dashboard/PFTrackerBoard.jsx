import React, { useEffect, useState } from 'react';
import { Table, Pagination, Spin, Button, DatePicker } from 'antd';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { pfGetAll } from '../../store/actions/otherActions';
import './PFCss.css';
import ConfirmationNumberTwoToneIcon from '@mui/icons-material/ConfirmationNumberTwoTone';
import FolderOpenTwoToneIcon from '@mui/icons-material/FolderOpenTwoTone';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';
import InsertChartTwoToneIcon from '@mui/icons-material/InsertChartTwoTone'

const { RangePicker } = DatePicker;

const PFTrackerBoard = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [pageSize] = useState(20);

    const [statusFilter, setStatusFilter] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('');
    const [queryTypeFilter, setQueryTypeFilter] = useState('');
    const [dateRangeFilter, setDateRangeFilter] = useState(null);
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const data = useSelector((state) => state.pfTrackerRed?.data || []);
    const total = useSelector((state) => state.pfTrackerRed?.total || 0);
    const stats = useSelector((state) => state.pfTrackerRed?.stats || {});  // ← new line
    const formatDateToInput = (date) => (date ? moment(date).format('DD-MM-YYYY') : '');

    const getStatusLabel = (status) => {
        const labels = ["Work Pending", "Work In Progress", "Awaiting Info", "Resolved", "Closed"];
        return labels[status] || "Unknown";
    };

    const fetchData = (page = 1) => {
        setLoading(true);
        const postBody = {
            page,
            limit: pageSize,
            status: statusFilter !== '' ? parseInt(statusFilter) : '',
            priority: priorityFilter || '',
            queryType: queryTypeFilter || '',
            ...(dateRangeFilter?.length === 2 && {
                startDate: dateRangeFilter[0]?.startOf('day').toISOString(),
                endDate: dateRangeFilter[1]?.endOf('day').toISOString(),
            }),
        };
        dispatch(pfGetAll(postBody)).finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchData(currentPage);
    }, [statusFilter, priorityFilter, queryTypeFilter, dateRangeFilter]);

    const columns = [
        {
            title: 'Sl. No.',
            render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
            width: 80,
        },
        {
            title: 'Ticket ID',
            dataIndex: 'ticketId',
            width: 150,
        },
        {
            title: 'Employee Name',
            dataIndex: 'employeeName',
        },
        {
            title: 'Query Type',
            dataIndex: 'queryType',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            render: (status) => {
                const colors = ["#4A90E2", "#5578c2", "#2ECC71", "#8155c2", "#34953D"];
                const labels = ["Work Pending", "Work In Progress", "Awaiting Info", "Resolved", "Closed"];
                return (
                    <Button style={{ backgroundColor: colors[status], color: 'white' }}>
                        {labels[status]}
                    </Button>
                );
            },
        },
        {
            title: 'Request Date',
            dataIndex: 'dateOfRequest',
            render: formatDateToInput,
        },
        {
            title: 'Last Update',
            dataIndex: 'updatedAt',
            render: formatDateToInput,
        },
        {
            title: 'Action',
            // fixed: 'Right',
            render: (_, record) => (
                <Button type="primary" style={{ backgroundColor: '#013879', color: 'white' }} onClick={() => setSelectedRecord(record)}>
                    View
                </Button>
            ),
        },
    ];

    return (
        <div className="container-fluid pf-container">
            {!selectedRecord ? (
                <>
                    <div className="pf-header">PF Grievance Tracker :</div>

                    {/* Filters */}
                    <div className="pf-filter-row">
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="form-select"
                            style={{ width: 180 }}
                        >
                            <option value="">All Status</option>
                            <option value={0}>Work Pending</option>
                            <option value={1}>Work In Progress</option>
                            <option value={2}>Awaiting Info</option>
                            <option value={3}>Resolved</option>
                            <option value={4}>Closed</option>
                        </select>

                        <select
                            value={priorityFilter}
                            onChange={(e) => setPriorityFilter(e.target.value)}
                            className="form-select"
                            style={{ width: 180 }}
                        >
                            <option value="">All Priorities</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>

                        <select
                            value={queryTypeFilter}
                            onChange={(e) => setQueryTypeFilter(e.target.value)}
                            className="form-select"
                            style={{ width: 220 }}
                        >
                            <option value="">All Query Types</option>
                            <option value="PF Transfer">PF Transfer</option>
                            <option value="KYC Update">KYC Update</option>
                            <option value="Withdrawal">Withdrawal</option>
                            <option value="UAN Generation">UAN Generation</option>
                            <option value="Joint Declaration">Joint Declaration</option>
                            <option value="ECR Correction">ECR Correction</option>
                            <option value="Contribution">Contribution</option>
                            <option value="Others">Others</option>
                        </select>

                        <RangePicker
                            format="DD-MM-YYYY"
                            onChange={(dates) => setDateRangeFilter(dates)}
                            style={{ minWidth: 250, width: '550px' }}
                            placeholder={["From Request Date", "To Request Date"]}
                        />
                    </div>

                    {/* Stats */}
                    <div className="pf-stats-box">
                        <div className="pf-stat">
                            <ConfirmationNumberTwoToneIcon style={{ color: '#013879', marginRight: 8 }} />
                            <strong>Total Tickets:</strong> {stats.totalTickets ?? '—'}
                        </div>
                        <div className="pf-stat">
                            <FolderOpenTwoToneIcon style={{ color: '#013879', marginRight: 8 }} />
                            <strong>Open Tickets:</strong> {stats.openTickets ?? '—'}
                        </div>
                        <div className="pf-stat">
                            <CheckCircleTwoToneIcon style={{ color: '#4CAF50', marginRight: 8 }} />
                            <strong>Resolved:</strong> {stats.ticketsResolved ?? '—'}
                        </div>
                        <div className="pf-stat">
                            <AccessTimeTwoToneIcon style={{ color: '#f39c12', marginRight: 8 }} />
                            <strong>Long Pending:</strong> {stats.longPending ?? '—'}
                        </div>
                        <div className="pf-stat">
                            <InsertChartTwoToneIcon style={{ color: '#673ab7', marginRight: 8 }} />
                            <strong>Avg. Resolution Time:</strong> {stats.avgResTime ?? '—'} days
                        </div>
                    </div>

                    {/* Table */}
                    {loading ? (
                        <Spin size="large" className="d-flex justify-content-center" />
                    ) : (
                        <Table
                            className="pf-table"
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            rowKey="_id"
                            scroll={{ x: 1150 }}
                        />
                    )}

                    {/* Pagination */}
                    <div className="d-flex justify-content-center mt-4">
                        <Pagination
                            current={currentPage}
                            total={total}
                            pageSize={pageSize}
                            onChange={(page) => setCurrentPage(page)}
                            showSizeChanger={false}
                        />
                    </div>
                </>
            ) : (
                <>
                    <Button style={{ backgroundColor: '#013879', color: 'white' }} onClick={() => setSelectedRecord(null)} className="mb-3">
                        ← Back
                    </Button>

                    <div className="table-responsive px-2">
                        <table className="table table-bordered align-middle">
                            <tbody>
                                <tr>
                                    <th style={{ width: "20%" }}>Employee Name</th>
                                    <td style={{ width: "30%" }}>{selectedRecord.employeeName}</td>
                                    <th style={{ width: "20%" }}>Ticket ID</th>
                                    <td style={{ width: "30%" }}>{selectedRecord.ticketId}</td>
                                </tr>
                                <tr>
                                    <th>Status</th>
                                    <td>{getStatusLabel(selectedRecord.status)}</td>
                                    <th>Initial Document</th>
                                    <td>
                                        {selectedRecord.doc ? (
                                            <a href={selectedRecord.doc} target="_blank" rel="noopener noreferrer">
                                                View Document
                                            </a>
                                        ) : (
                                            "N/A"
                                        )}
                                    </td>
                                </tr>
                                {selectedRecord.dateOfClosure && (
                                    <tr>
                                        <th>Date of Closure</th>
                                        <td>{formatDateToInput(selectedRecord.dateOfClosure)}</td>
                                        <th></th>
                                        <td></td>
                                    </tr>
                                )}
                                {selectedRecord.closureDoc && (
                                    <tr>
                                        <th>Closure Document</th>
                                        <td colSpan={3}>
                                            <a href={selectedRecord.closureDoc} target="_blank" rel="noopener noreferrer">
                                                View Closure Document
                                            </a>
                                        </td>
                                    </tr>
                                )}
                                {selectedRecord.remarks && (
                                    <tr>
                                        <th>Remarks</th>
                                        <td colSpan={3}>{selectedRecord.remarks}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        <h5 className="text-center my-4" style={{ color: '#013879' }}>Resolution Time Line</h5>
                        <table className="table table-bordered align-middle text-center">
                            <thead className="table-secondary">
                                <tr>
                                    <th>Sl. No.</th>
                                    <th>Action Taken</th>
                                    <th>File</th>
                                    <th>Remarks</th>
                                    <th>Updated At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <pre>{JSON.stringify(selectedRecord.multiDocs)}</pre> */}

                                {(selectedRecord.multiDocs || []).map((doc, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{doc.pfActions || "—"}</td>
                                        <td>
                                            {doc.pfDocs ? (
                                                <a href={doc.pfDocs} target="_blank" rel="noopener noreferrer">
                                                    {doc.pfTypes || "View File"}
                                                </a>
                                            ) : (
                                                "—"
                                            )}
                                        </td>
                                        <td>{doc.pfRemarks || "—"}</td>
                                        <td>
                                            {doc.pfUpdateDates
                                                ? new Date(doc.pfUpdateDates).toLocaleDateString("en-IN", {
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                })
                                                : "—"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </>
            )}
        </div>
    );
};

export default PFTrackerBoard;

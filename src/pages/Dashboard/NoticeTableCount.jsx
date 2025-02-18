import React, { useEffect, useState, useRef } from 'react';
import './Notice.css';
import { Table, Input, Button, Space, Tooltip, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { noticeCompanyCounts, noticeCompanyCountsDetails } from '../../store/actions/otherActions'; // Assuming your action is in this file
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
import Select from 'react-select';


const NoticeTableCount = ({ branchesCompany }) => {

    const dispatch = useDispatch();
    const searchInput = useRef(null); // Define the useRef hook here
    const navigate = useNavigate();

    const noticeWiseDataRed = useSelector((state) => state.noticeWiseDataRed);
    const { loadingNoticeWiseData, NoticeWiseDataInfo, error } = noticeWiseDataRed;
    // console.log("NoticeWiseDataInfo", NoticeWiseDataInfo);
    const dashStateWiseNoticeRed = useSelector((state) => state.dashStateWiseNoticeRed);
    const { loadingDashStateWiseNotice, dashStateWiseNoticeInfo, errorDNB } = dashStateWiseNoticeRed;
    console.log("dashStateWiseNoticeInfo", dashStateWiseNoticeInfo);

    const [selectedRegion, setSelectedRegion] = useState('AllRegions');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [dataSource, setDataSource] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [modalPayload, setModalPayload] = useState(null);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [dataSource1, setDataSource1] = useState([]);
    // const [fieldName, setFieldName] = useState('notices_count'); // Default selection
    const [fieldName, setFieldName] = useState('');
    const [modalVisible, setModalVisible] = useState(false);


    const openExportModal = () => {
        setModalVisible(true);
    };

    const downloadFile = (data) => {
        try {
            const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            saveAs(blob, 'Notices_Report.xlsx');
        } catch (error) {
            console.error("Error downloading the file:", error);
        }
    };

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };
    const handleBranchChange = (event) => {
        setSelectedBranch(event.target.value);
    };

    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
        const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        dispatch(noticeCompanyCounts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(noticeCompanyCounts(
            selectedRegion,
            selectedBranch || "",
            from || "",
            to || ""));
    }, [dispatch, selectedRegion, selectedBranch, from, to]);


    useEffect(() => {
        let allRegionNoticeArr = [];
        if (typeof (NoticeWiseDataInfo) !== 'undefined' && NoticeWiseDataInfo?.length > 0) {
            NoticeWiseDataInfo.map((item, index) => {
                allRegionNoticeArr.push({
                    key: index + 1,
                    state: item.state,
                    notices_count: item.notices_count,
                    complied_count: item.complied_count,
                    pending_count: item.pending_count,
                    percentage: item.percentage + "%",

                })
            });
        }
        setDataSource(allRegionNoticeArr);
    }, [NoticeWiseDataInfo])

    const branchOptions = [
        { value: "", label: "All Branches" }, // Default empty option
        ...(branchesCompany
            ? branchesCompany.map(branch => ({
                value: branch._id,
                label: branch.name
            }))
            : []) // Default to an empty array if branchByStateInfo1 is undefined
    ];


    useEffect(() => {
        let allStateArr = [];
        if (typeof (dashStateWiseNoticeInfo) !== 'undefined' && dashStateWiseNoticeInfo?.length > 0) {

            dashStateWiseNoticeInfo.map((notice, index) => {
                allStateArr.push({
                    key: index + 1,
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

                })
            });
        }
        setDataSource1(allStateArr);
    }, [dashStateWiseNoticeInfo])


    const filteredData = selectedRegion
        ? dataSource.filter((data) => data.region === selectedRegion)
        : dataSource;

    const openModal1 = (payload, fetchedData) => {
        setModalPayload(payload); // Save the payload to state
        console.log("setModalPayload", payload);

        setModalVisible1(true); // Open the modal
        setFetchedData(fetchedData)
    };
    const openModal2 = (payload, fetchedData) => {
        setModalPayload(payload); // Save the payload to state
        console.log("setModalPayload", payload);

        setModalVisible2(true); // Open the modal
        setFetchedData(fetchedData)
    };
    const openModal3 = (payload, fetchedData) => {
        setModalPayload(payload); // Save the payload to state
        console.log("setModalPayload", payload);

        setModalVisible3(true); // Open the modal
        setFetchedData(fetchedData)
    };

    const handleCellClick1 = (record, column) => {
        console.log("record11", record);

        const { state } = record;
        const region = selectedRegion;
        const payload = {
            state,
            fieldName: column,
            branch: selectedBranch, // Derived from filter
            region,
            from,
            to,
        };

        dispatch(noticeCompanyCountsDetails(state, region, column, selectedBranch, from, to))
            .then((fetchedData) => {
                openModal1(fetchedData, payload);
                console.log("Fetched Data:", fetchedData);
                setFetchedData(fetchedData, payload);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    const handleCellClick2 = (record, column) => {
        console.log("record11", record);

        const { state } = record;
        const region = selectedRegion;
        const payload = {
            state,
            fieldName: column,
            branch: selectedBranch, // Derived from filter
            region,
            from,
            to,
        };

        dispatch(noticeCompanyCountsDetails(state, region, column, selectedBranch, from, to))
            .then((fetchedData) => {
                openModal2(fetchedData, payload);
                console.log("Fetched Data:", fetchedData);
                setFetchedData(fetchedData, payload);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    const handleCellClick3 = (record, column) => {
        console.log("record11", record);

        const { state } = record;
        const region = selectedRegion;
        const payload = {
            state,
            fieldName: column,
            branch: selectedBranch, // Derived from filter
            region,
            from,
            to,
        };

        dispatch(noticeCompanyCountsDetails(state, region, column, selectedBranch, from, to))
            .then((fetchedData) => {
                openModal3(fetchedData, payload);
                console.log("Fetched Data:", fetchedData);
                setFetchedData(fetchedData, payload);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };


    const closeModal1 = () => {
        setModalVisible1(false);
        setModalPayload(null); // Clear payload after modal close
    };
    const closeModal2 = () => {
        setModalVisible2(false);
        setModalPayload(null); // Clear payload after modal close
    };
    const closeModal3 = () => {
        setModalVisible3(false);
        setModalPayload(null); // Clear payload after modal close
    };





    const columns = [
        {
            title: (
                <Tooltip title="State of the Notice Branches">State</Tooltip>
            ),
            dataIndex: 'state',
            key: 'state',
            width: 100,
            align: 'center',
            // onCell: (record) => ({
            //   onClick: () => handleCellClick(record, 'state'),
            // }),
        },
        {
            title: (
                <Tooltip title="Total count of notices">Total Notices</Tooltip>
            ),
            dataIndex: 'notices_count',
            key: 'notices_count',
            align: 'center',
            width: 60,
            onCell: (record) => ({
                onClick: () => handleCellClick1(record, 'notices_count'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },
        {
            title: (
                <Tooltip title="Complied count of notices">Complied</Tooltip>
            ),
            dataIndex: 'complied_count',
            key: 'complied_count',
            align: 'center',
            width: 60,

            onCell: (record) => ({
                onClick: () => handleCellClick2(record, 'complied_count'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },
        {
            title: (
                <Tooltip title="Pending count of notices">Pending</Tooltip>
            ),
            dataIndex: 'pending_count',
            key: 'pending_count',
            align: 'center',
            width: 60,

            onCell: (record) => ({
                onClick: () => handleCellClick3(record, 'pending_count'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },

        {
            title: (
                <Tooltip title="Percentage of completion">Score</Tooltip>
            ),
            dataIndex: 'percentage',
            key: 'percentage',
            align: 'center',
            width: 80,

            // onCell: (record) => ({
            //   onClick: () => handleCellClick(record, 'per_completed'),
            // }),
        },
    ];
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div style={{ padding: 8 }}>
                <Input
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => confirm()}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && clearFilters()}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) => {
            // Filter based on the column's dataIndex
            return record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '';
        },
    });

    const renderModalContent1 = () => {
        // Define a default set of columns
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                render: (text, record, index) => index + 1, // Serial number based on index
            },
            {
                title: 'State',
                dataIndex: 'branchStateName',
                key: 'branchStateName',
                width: 120,
                ...getColumnSearchProps("branchStateName"),

            },
            {
                title: 'Branch',
                dataIndex: 'branchName',
                key: 'branchName',
                ...getColumnSearchProps("branchName"),

            },
            {
                title: 'Department',
                dataIndex: 'department',
                key: 'department',
                ...getColumnSearchProps("department"),

            },

            {
                title: 'Priority',
                dataIndex: 'priority',
                key: 'priority',
                ...getColumnSearchProps("priority"),

            },

            {
                title: 'Notice Date',
                dataIndex: 'dateOfNotice',
                key: 'dateOfNotice',
                ...getColumnSearchProps("dateOfNotice"),

            },
            {
                title: 'Closure Date',
                dataIndex: 'dateOfNoticeClosure',
                key: 'dateOfNoticeClosure',
                ...getColumnSearchProps("dateOfNoticeClosure"),

            },
            {
                title: 'Status',
                dataIndex: 'noticeStatus',
                key: 'noticeStatus',
                align: 'center',
                ...getColumnSearchProps("noticeStatus"),

            },
            {
                title: 'Notice Copy',
                dataIndex: 'noticeCopy',
                key: 'noticeCopy',
                align: 'center',
                ...getColumnSearchProps("noticeCopy"),

            },
            {
                title: 'Delay Days',
                dataIndex: 'overDays',
                key: 'overDays',
                ...getColumnSearchProps("overDays"),

            },

        ];



        // Check if modalPayload (DashStateWiseDataInfo) is defined and has data
        if (!Array.isArray(fetchedData) || fetchedData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                dataSource={fetchedData?.map((notice) => ({
                    ...notice,
                    key: notice._id,
                    branchStateName: notice.branchStateName,
                    branch: notice.branchName,
                    department: notice.department,
                    priority: notice.priority === 'Low' ? <div style={{ color: '#34953D' }}>{notice.priority}</div> : notice.priority === 'High' ? <div style={{ color: 'red' }}>{notice.priority}</div> : notice.priority === 'Medium' ? <div style={{ color: '#D89D13' }}>{notice.priority}</div> : <div style={{ color: 'red' }}>{notice.priority}</div>,
                    dateOfNotice: formatDateToInput(notice.dateOfNotice),
                    dateOfNoticeClosure: formatDateToInput(notice.dateOfNoticeClosure) || "-",
                    noticeCopy: (<a href={notice.noticeCopy} target="_blank" rel="noopener noreferrer">Download</a>),
                    noticeStatus: (
                        <div>
                            {notice.noticeStatus === 5 ?
                                (
                                    <Button style={{ backgroundColor: "#34953D", color: "white" }}>Inspection Closed</Button>
                                )
                                : (
                                    <Button style={{ backgroundColor: "#eb4034", color: "white" }}>Work In Progress</Button>
                                )}
                        </div>
                    ),
                    overDays: notice.overDays || "-", // Set the unique key for each row
                }))}
                pagination={false} // Enable pagination with 5 rows per page
            // scroll={{ y: 500, x: 800 }}
            />
        );
    };

    const renderModalContent2 = () => {
        // Define a default set of columns
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                render: (text, record, index) => index + 1, // Serial number based on index
            },
            {
                title: 'State',
                dataIndex: 'branchStateName',
                key: 'branchStateName',
                ...getColumnSearchProps("branchStateName"),

            },
            {
                title: 'Branch',
                dataIndex: 'branchName',
                key: 'branchName',
                ...getColumnSearchProps("branchName"),

            },
            {
                title: 'Department',
                dataIndex: 'department',
                key: 'department',
                ...getColumnSearchProps("department"),

            },

            {
                title: 'Priority',
                dataIndex: 'priority',
                key: 'priority',
                ...getColumnSearchProps("priority"),

            },

            {
                title: 'Notice Date',
                dataIndex: 'dateOfNotice',
                key: 'dateOfNotice',
                ...getColumnSearchProps("dateOfNotice"),

            },
            {
                title: 'Closure Date',
                dataIndex: 'dateOfNoticeClosure',
                key: 'dateOfNoticeClosure',
                ...getColumnSearchProps("dateOfNoticeClosure"),

            },
            {
                title: 'Status',
                dataIndex: 'noticeStatus',
                key: 'noticeStatus',
                ...getColumnSearchProps("noticeStatus"),

            },
            {
                title: 'Acknowledgement',
                dataIndex: 'closureAckDoc',
                key: 'closureAckDoc',
                ...getColumnSearchProps("closureAckDoc"),

            },
            {
                title: 'Delays Daya',
                dataIndex: 'overDays',
                key: 'overDays',
                ...getColumnSearchProps("overDays"),

            },

        ];



        // Check if modalPayload (DashStateWiseDataInfo) is defined and has data
        if (!Array.isArray(fetchedData) || fetchedData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                dataSource={fetchedData?.map((notice) => ({
                    ...notice,
                    key: notice._id,
                    branchStateName: notice.branchStateName,
                    branch: notice.branchName,
                    department: notice.department,
                    dateOfNotice: formatDateToInput(notice.dateOfNotice),
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
                    dateOfNoticeClosure: formatDateToInput(notice.dateOfNoticeClosure),
                    priority: notice.priority === 'Low' ? <div style={{ color: '#34953D' }}>{notice.priority}</div> : notice.priority === 'High' ? <div style={{ color: 'red' }}>{notice.priority}</div> : notice.priority === 'Medium' ? <div style={{ color: '#D89D13' }}>{notice.priority}</div> : <div style={{ color: 'red' }}>{notice.priority}</div>,
                    closureAckDoc: (<a href={notice.closureAckDoc} target="_blank" rel="noopener noreferrer">Download</a>),
                    overDays: notice.overDays || "On Time",
                }))}
                pagination={false} // Enable pagination with 5 rows per page
            // scroll={{ y: 500, x: 800 }}
            />
        );
    };

    const renderModalContent3 = () => {
        // Define a default set of columns
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                render: (text, record, index) => index + 1, // Serial number based on index
            },
            {
                title: 'State',
                dataIndex: 'branchStateName',
                key: 'branchStateName',
                ...getColumnSearchProps("branchStateName"),

            },
            {
                title: 'Branch',
                dataIndex: 'branchName',
                key: 'branchName',
                ...getColumnSearchProps("branchName"),

            },
            {
                title: 'Department',
                dataIndex: 'department',
                key: 'department',
                ...getColumnSearchProps("department"),

            },

            {
                title: 'Priority',
                dataIndex: 'priority',
                key: 'priority',
                ...getColumnSearchProps("priority"),

            },

            {
                title: 'Notice Date',
                dataIndex: 'dateOfNotice',
                key: 'dateOfNotice',
                ...getColumnSearchProps("dateOfNotice"),

            },
            {
                title: 'Closure Date',
                dataIndex: 'dateOfNoticeClosure',
                key: 'dateOfNoticeClosure',
                ...getColumnSearchProps("dateOfNoticeClosure"),

            },
            {
                title: 'Status',
                dataIndex: 'noticeStatus',
                key: 'noticeStatus',
                ...getColumnSearchProps("noticeStatus"),

            },
            
            {
                title: 'Delay Days',
                dataIndex: 'overDueDays',
                key: 'overDueDays',
                ...getColumnSearchProps("overDueDays"),

            },

        ];



        // Check if modalPayload (DashStateWiseDataInfo) is defined and has data
        if (!Array.isArray(fetchedData) || fetchedData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                dataSource={fetchedData?.map((notice) => ({
                    ...notice,
                    key: notice._id,
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
                }))}
                pagination={false} // Enable pagination with 5 rows per page
            // scroll={{ y: 500, x: 800 }}
            />
        );
    };


    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2 className="chart-heading">
                        Notices/Inspection
                    </h2>
                </div>
                <div className="dashboard-content">
                    <div className="filters-section">
                        {/* Region Filter */}
                        <div className="filter-group">
                            <label htmlFor="region" className="filter-label">Select Region:</label>
                            <select
                                id="region"
                                className="filter-select"
                                value={selectedRegion}
                                onChange={handleRegionChange}
                            >
                                <option value="">All Regions</option>
                                <option value="SouthRegion">South Region</option>
                                <option value="NorthRegion">North Region</option>
                                <option value="WestRegion">West Region</option>
                                <option value="EastRegion">East Region</option>
                            </select>
                        </div>

                        {/* Branch Filter */}
                        <div className="filter-group">
                            <label htmlFor="branchFilter" className="filter-label">Filter by Branch:</label>
                            <Select
                                id="branchFilter"
                                className="filter-select"
                                options={branchOptions}
                                isSearchable
                                value={branchOptions.find(option => option.value === selectedBranch) || null}
                                onChange={(selectedOption) => setSelectedBranch(selectedOption ? selectedOption.value : '')}
                                placeholder="Select Branch..."
                            />
                        </div>

                        {/* Start Date Filter */}
                        <div className="filter-group">
                            <label htmlFor="from" className="filter-label">Start Date:</label>
                            <input
                                type="date"
                                id="from"
                                className="filter-select"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                            />
                        </div>

                        {/* End Date Filter */}
                        <div className="filter-group">
                            <label htmlFor="to" className="filter-label">End Date:</label>
                            <input
                                type="date"
                                id="to"
                                className="filter-select"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="data-section">
                    {loadingNoticeWiseData ? (
                        <div className="loading-indicator">Loading...</div>
                    ) : error ? (
                        <div className="error-message">Error: {error}</div>
                    ) : (
                        <div className="table-wrapper">
                            <Table
                                columns={columns}
                                // columns={columns.map(col => ({
                                //   ...col,
                                //   onCell: (record) => ({
                                //     onClick: () => handleCellClick(record, col.dataIndex), // Handle cell click
                                //   }),
                                // }))}
                                dataSource={dataSource}
                                pagination={false}
                                position={["center"]}
                                scroll={{ y: 800, x: 400 }}
                                className="data-table"
                                summary={() => {
                                    const totalNotices = dataSource.reduce((sum, row) => sum + row.notices_count, 0);
                                    const totalComplied = dataSource.reduce((sum, row) => sum + row.complied_count, 0); //
                                    const totalPending = dataSource.reduce((sum, row) => sum + row.pending_count, 0); // 

                                    const totalPercentageCompleted = dataSource.reduce(
                                        (sum, row) => sum + parseFloat(row.percentage || 0),
                                        0
                                    );
                                    const averagePerCompleted = ((totalComplied / totalNotices) * 100 || 0).toFixed(2);

                                    return (
                                        <Table.Summary.Row style={{ fontWeight: 'bold', backgroundColor: 'lightGrey', textAlign: 'center !important', fontSize: 'small' }}>
                                            <Table.Summary.Cell index={0} className='centered-cell' >Total</Table.Summary.Cell>
                                            <Table.Summary.Cell index={1} className='centered-cell' >{totalNotices}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={2} className='centered-cell' >{totalComplied}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={3} className='centered-cell' >{totalPending}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={4} className='centered-cell'>
                                                {averagePerCompleted + '%'}
                                            </Table.Summary.Cell>
                                        </Table.Summary.Row>
                                    );
                                }}
                            />
                            <Modal
                                className="dashboard_wrapper11 container"
                                title="Branch Details"
                                visible={modalVisible1}
                                onCancel={closeModal1}
                                footer={null}
                                width={1000}
                                bodyStyle={{ height: '300px', overflowY: 'auto' }}  // Set height of the body content
                            >
                                {renderModalContent1()}
                            </Modal>
                            <Modal
                                className="dashboard_wrapper11 container"
                                title="Branch Details"
                                visible={modalVisible2}
                                onCancel={closeModal2}
                                footer={null}
                                width={1100}
                                bodyStyle={{ height: '300px', overflowY: 'auto' }}  // Set height of the body content
                            >
                                {renderModalContent2()}
                            </Modal>
                            <Modal
                                className="dashboard_wrapper11 container"
                                title="Branch Details"
                                visible={modalVisible3}
                                onCancel={closeModal3}
                                footer={null}
                                width={1000}
                                bodyStyle={{ height: '300px', overflowY: 'auto' }}  // Set height of the body content
                            >
                                {renderModalContent3()}
                            </Modal>

                        </div>
                    )}

                </div>
            </div>

        </>
    )
}

export default NoticeTableCount;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Input, Button, Space, Tooltip, Modal } from 'antd';
import { auditCompiledCountAllLCA, getLabourContractAgreementNames, stateGets,getContractorName, branchGetByState, auditCompiledCountDataAllLCA } from '../../store/actions/otherActions'; // Adjust based on your project structure
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import './Region1.css';
import Loading from '../../components/layout/Loading';
import Select from 'react-select';

const ComplianceOfPAaudit = () => {
    const dispatch = useDispatch();

    const branches = useSelector((state) => state.auditCompCountRedLCA?.branchesLCA || []);
    const loadingPA = useSelector((state) => state.auditCompCountRedLCA?.loadingcompCountLCA);
    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const loading = useSelector((state) => state.auditCompCountRedLCA?.loadingcompCountLCA);
    const error = useSelector((state) => state.auditCompCountRedLCA?.error);
    const getBranchByState = useSelector((state) => state.getBranchByState);
    const { branchByStateInfo1 } = getBranchByState;
    console.log("branchByStateInfo1", branchByStateInfo1);

    const auditCompCountDataRedLCA = useSelector((state) => state.auditCompCountDataRedLCA);
    const { loadingAuditCountLCA, branchesData } = auditCompCountDataRedLCA;
    const getLabourContractAgreementNameRed = useSelector((state) => state.getLabourContractAgreementNameRed);
    const { loadingLCAN, LCAN_NameInfo } = getLabourContractAgreementNameRed;
    console.log("LCAN_NameInfo", LCAN_NameInfo);
    const { contractorNameInfo } = useSelector((state) => state.ContractorNameRed);


    const branchOptions = [
        { value: "", label: "All Branches" }, // Default option
        ...(branchByStateInfo1
            ? branchByStateInfo1.map(branch => ({
                value: branch.id,   // ✅ Use `id` instead of `_id`
                label: branch.name  // ✅ Show branch name
            }))
            : []
        )
    ];




    const [selectedState, setSelectedState] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    console.log("selectedBranch", selectedBranch);
    const [selectedBranches, setSelectedBranches] = useState([]);

    const [startDate, setStartDate] = useState('');
    // const [isLBAOrPA, setIsLBAOrPA] = useState(0);
    const [endDate, setEndDate] = useState('');
    const [risk, setRisk] = useState('');
    const [dataSource, setDataSource] = useState([]);
    const [contractorName, setContractorName] = useState(null);

    const [fetchedData, setFetchedData] = useState([]);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalPayload, setModalPayload] = useState(null);


    useEffect(() => {
        let allRegionNoticeArr = [];
        if (typeof (branches) !== 'undefined' && branches?.length > 0) {
            branches.map((item, index) => {
                allRegionNoticeArr.push({
                    key: index + 1,
                    branch: item.branch,
                    total: item.total,
                    CQ: item.CQ,
                    PC: item.PC,
                    PPdNc: item.PPdNc,
                    NCVhH: item.NCVhH,
                    Percent: item.Percent,

                })
            });
        }
        setDataSource(allRegionNoticeArr);
    }, [branches])

    const handleAuditTypeChange = (branchIds) => {
        if (!branchIds || branchIds.length === 0) {
            console.log("No branches selected, skipping API call.");
            return; // ✅ Prevent unnecessary API call
        }

        const flattenedBranches = branchIds.flat(); // ✅ Flatten nested arrays
        dispatch(getContractorName({ branches: flattenedBranches }));
        // dispatch(getContractorName());

    };




    useEffect(() => {
        const postBody = {
            state: selectedState || '',
            branch: selectedBranches.length > 0 ? selectedBranches : '', // ✅ Send multiple branches
            fromDate: startDate || '',
            toDate: endDate || '',
            risk: risk || '',
            contractorName: contractorName || null
        };

        dispatch(auditCompiledCountAllLCA(postBody));
        dispatch(stateGets());
    }, [dispatch, selectedState, selectedBranches, startDate, endDate, risk, contractorName]);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;


    const handleCellClick = (record, column) => {
        console.log("record", record);
        const { branch } = record; // Extract branch from clicked row

        const postBody = {
            state: selectedState || '',
            branch: branch || '',
            column: column || '',  // Use the column passed (e.g., 'CQ')
            fromDate: startDate || '',
            toDate: endDate || '',
            risk: risk || '',
            // isLBAOrPA: isLBAOrPA || 0,
            contractorName: contractorName || null

        };

        console.log("Updated Payload", postBody);

        dispatch(auditCompiledCountDataAllLCA(postBody))
            .then(() => {
                // Pass branchesData instead of fetchedData
                openModal1(branchesData);
                console.log("Branches Data:", branchesData);
                setFetchedData(branchesData); // Set branchesData to fetchedData state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    const handleCellClick2 = (record, column) => {
        console.log("record", record);
        const { branch } = record; // Extract branch from clicked row

        const postBody = {
            state: selectedState || '',
            branch: branch || '',
            column: column || '',  // Use the column passed (e.g., 'CQ')
            fromDate: startDate || '',
            toDate: endDate || '',
            risk: risk || '',
            // isLBAOrPA: isLBAOrPA || 0,
            contractorName: contractorName || null

        };

        console.log("Updated Payload2", postBody);

        dispatch(auditCompiledCountDataAllLCA(postBody))
            .then(() => {
                // Pass branchesData instead of fetchedData
                openModal2(branchesData);
                console.log("Branches Data2:", branchesData);
                setFetchedData(branchesData); // Set branchesData to fetchedData state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };
    const handleCellClick3 = (record, column) => {
        console.log("record", record);
        const { branch } = record; // Extract branch from clicked row

        const postBody = {
            state: selectedState || '',
            branch: branch || '',
            column: column || '',  // Use the column passed (e.g., 'CQ')
            fromDate: startDate || '',
            toDate: endDate || '',
            risk: risk || '',
            // isLBAOrPA: isLBAOrPA || 0,
            contractorName: contractorName || null
        };

        console.log("Updated Payload3", postBody);

        dispatch(auditCompiledCountDataAllLCA(postBody))
            .then(() => {
                // Pass branchesData instead of fetchedData
                openModal3(branchesData);
                console.log("Branches Data3:", branchesData);
                setFetchedData(branchesData); // Set branchesData to fetchedData state
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const TruncatedText = ({ text, limit }) => {
        const [expanded, setExpanded] = useState(false);

        if (!text) return null; // Handle empty cases

        const toggleExpand = () => setExpanded(!expanded);

        return (
            <div>
                {expanded ? text : `${text.slice(0, limit)}... `}
                {text.length > limit && (
                    <span
                        onClick={toggleExpand}
                        style={{ color: "blue", cursor: "pointer" }}
                    >
                        {expanded ? ">>View Less<<" : "<<View More>>"}
                    </span>
                )}
            </div>
        );
    };


    const columns = [
        {
            title: (
                <Tooltip title="State of the Branches">Branch</Tooltip>
            ),
            dataIndex: 'branch',
            key: 'branch',
            width: 100,
            align: 'center',

        },
        {
            title: (
                <Tooltip title="Total Applicable Compliances">Total</Tooltip>
            ),
            dataIndex: 'total',
            key: 'total',
            align: 'center',
            width: 40,

        },
        {
            title: (
                <Tooltip title="Complied Compliances">Complied</Tooltip>
            ),
            dataIndex: 'CQ',
            key: 'CQ',
            align: 'center',
            width: 60,

            // onCell: (record) => ({
            //     onClick: () => handleCellClick(record, 'CQ'),
            // }),
        },
        {
            title: (
                <Tooltip title="Partially Complied">Partially Complied</Tooltip>
            ),
            dataIndex: 'PC',
            key: 'PC',
            align: 'center',
            width: 100,

            onCell: (record) => ({
                onClick: () => handleCellClick(record, 'PC'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },
        {
            title: (
                <Tooltip title="Not Complied Compliances">Not Complied</Tooltip>
            ),
            dataIndex: 'PPdNc',
            key: 'PPdNc',
            align: 'center',
            width: 80,

            onCell: (record) => ({
                onClick: () => handleCellClick2(record, 'PPdNc'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },
        {
            title: (
                <Tooltip title=" High and Very High Risk Not Complied">High Risk Cases NC</Tooltip>
            ),
            dataIndex: 'NCVhH',
            key: 'NCVhH',
            align: 'center',
            width: 90,

            onCell: (record) => ({
                onClick: () => handleCellClick3(record, 'NCVhH'),
                className: 'clickable-cell', // Styling for pointer cursor and clickable effect
            }),
        },

        {
            title: (
                <Tooltip title="Percentage of completion">Score</Tooltip>
            ),
            dataIndex: 'Percent',
            key: 'Percent',
            align: 'center',
            width: 50,

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


    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        return date.toLocaleString("en-US", { month: "short", year: "numeric" }); // Example: "Feb 2024"
    };


    const openModal1 = (payload, fetchedData) => {
        setModalPayload(payload);
        console.log("setModalPayload", payload);

        setModalVisible1(true);
        setFetchedData(fetchedData)
    };

    const closeModal1 = () => {
        setModalVisible1(false);
        setModalPayload(null);
    };
    const openModal2 = (payload, fetchedData) => {
        setModalPayload(payload);
        console.log("setModalPayload", payload);

        setModalVisible2(true);
        setFetchedData(fetchedData)
    };

    const closeModal2 = () => {
        setModalVisible2(false);
        setModalPayload(null);
    };
    const openModal3 = (payload, fetchedData) => {
        setModalPayload(payload);
        console.log("setModalPayload", payload);

        setModalVisible3(true);
        setFetchedData(fetchedData)
    };

    const closeModal3 = () => {
        setModalVisible3(false);
        setModalPayload(null);
    };

    const renderModalContent1 = () => {
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                width: 10,
                render: (text, record, index) => index + 1,
            },
            {
                title: 'Act',
                dataIndex: 'act',
                key: 'act',
                width: 120,
                ...getColumnSearchProps("act"),
            },
            {
                title: 'Questions',
                dataIndex: 'question',
                key: 'question',
                width: 120,
                ...getColumnSearchProps("question"),
            },
            {
                title: 'Status',
                dataIndex: 'compliedStatus',
                key: 'compliedStatus',
                width: 120,
                ...getColumnSearchProps("compliedStatus"),
            },
            {
                title: 'LCAgreement',
                dataIndex: 'LCAgreement',
                key: 'LCAgreement',
                width: 120,
                ...getColumnSearchProps("LCAgreement"),
            },
            {
                title: 'labourContractor',
                dataIndex: 'labourContractor',
                key: 'labourContractor',
                width: 120,
                ...getColumnSearchProps("labourContractor"),
            },
            {
                title: 'Risk',
                dataIndex: 'risk',
                key: 'risk',
                width: 120,
                ...getColumnSearchProps("risk"),
            },
            // {
            //     title: 'Rule',
            //     dataIndex: 'rule',
            //     key: 'rule',
            //     width: 120,
            //     ...getColumnSearchProps("rule"),
            // },


            {
                title: 'Month',
                dataIndex: 'end_date',
                key: 'end_date',
                width: 120,
                ...getColumnSearchProps("end_date"),
            },
        ];
        if (loadingAuditCountLCA) {
            return <Loading />; // Show loading spinner while data is being fetched
        }

        // Check if branchesData is defined and has data
        if (!Array.isArray(branchesData) || branchesData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                dataSource={branchesData?.map((audit) => ({
                    ...audit,
                    key: audit._id,
                    act: audit.act,
                    rule: audit.rule,
                    question: audit.question,
                    LCAgreement: audit.LCAgreement,
                    labourContractor: audit.labourContractor,
                    risk: audit.risk,
                    end_date: formatDateToInput(audit.end_date),
                    compliedStatus: audit.compliedStatus,
                }))}
                pagination={false}
                className="small-font-table"
            />
        );
    };
    const renderModalContent2 = () => {
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                width: 10,
                render: (text, record, index) => index + 1,
            },
            {
                title: 'Act',
                dataIndex: 'act',
                key: 'act',
                width: 120,
                ...getColumnSearchProps("act"),
            },
            {
                title: 'Questions',
                dataIndex: 'question',
                key: 'question',
                width: 120,
                ...getColumnSearchProps("question"),
            },
            {
                title: 'Status',
                dataIndex: 'compliedStatus',
                key: 'compliedStatus',
                width: 120,
                ...getColumnSearchProps("compliedStatus"),
            },
            {
                title: 'Risk',
                dataIndex: 'risk',
                key: 'risk',
                width: 70,
                ...getColumnSearchProps("risk"),
            },
            // {
            //     title: 'Rule',
            //     dataIndex: 'rule',
            //     key: 'rule',
            //     width: 120,
            //     ...getColumnSearchProps("rule"),
            // },


            {
                title: "Consequences",
                dataIndex: "consequences",
                key: "consequences",
                align: "center",
                width: 250,
                render: (text) => <TruncatedText text={text} limit={100} />,
            },

            {
                title: 'Month',
                dataIndex: 'end_date',
                key: 'end_date',
                width: 70,
                ...getColumnSearchProps("end_date"),
            },
        ];

        if (loadingAuditCountLCA) {
            return <Loading />; // Show loading spinner while data is being fetched
        }
        // Check if branchesData is defined and has data
        if (!Array.isArray(branchesData) || branchesData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                dataSource={branchesData?.map((audit) => ({
                    ...audit,
                    key: audit._id,
                    act: audit.act,
                    rule: audit.rule,
                    question: audit.question,
                    risk: audit.risk,
                    consequences: audit.consequences,
                    end_date: formatDateToInput(audit.end_date),
                    compliedStatus: audit.compliedStatus,
                }))}
                pagination={false}
                className="small-font-table"
            />
        );
    };
    const renderModalContent3 = () => {
        let columns = [
            {
                title: "Sl No",
                dataIndex: "slNo",
                key: "slNo",
                width: 10,
                render: (text, record, index) => index + 1,
            },
            {
                title: 'Act',
                dataIndex: 'act',
                key: 'act',
                width: 120,
                ...getColumnSearchProps("act"),
            },
            {
                title: 'Questions',
                dataIndex: 'question',
                key: 'question',
                width: 120,
                ...getColumnSearchProps("question"),
            },
            {
                title: 'Status',
                dataIndex: 'compliedStatus',
                key: 'compliedStatus',
                width: 120,
                ...getColumnSearchProps("compliedStatus"),
            },
            {
                title: 'Risk',
                dataIndex: 'risk',
                key: 'risk',
                width: 120,
                ...getColumnSearchProps("risk"),
            },
            // {
            //     title: 'Rule',
            //     dataIndex: 'rule',
            //     key: 'rule',
            //     width: 120,
            //     ...getColumnSearchProps("rule"),
            // },


            {
                title: "Consequences",
                dataIndex: "consequences",
                key: "consequences",
                align: "center",
                width: 200,
                render: (text) => <TruncatedText text={text} limit={100} />,
            },

            {
                title: 'Month',
                dataIndex: 'end_date',
                key: 'end_date',
                width: 120,
                ...getColumnSearchProps("end_date"),
            },
        ];
        if (loadingAuditCountLCA) {
            return <Loading />; // Show loading spinner while data is being fetched
        }

        // Check if branchesData is defined and has data
        if (!Array.isArray(branchesData) || branchesData.length === 0) {
            return <p>No data available.</p>;
        }

        return (
            <Table
                columns={columns}
                scroll={{ y: 800 }}
                dataSource={branchesData?.map((audit) => ({
                    ...audit,
                    key: audit._id,
                    act: audit.act,
                    rule: audit.rule,
                    question: audit.question,
                    risk: audit.risk,
                    consequences: audit.consequences,
                    end_date: formatDateToInput(audit.end_date),
                    compliedStatus: audit.compliedStatus,
                }))}
                pagination={false}
                className="small-font-table"
            />
        );
    };


    return (
        <>
            <div className="dashboard-container">
                <div className="dashboard-header">
                    <h2 className="chart-heading">
                        LCA Compliance Summary
                    </h2>
                </div>
                <div className="dashboard-content">
                    <div className="filters-container">

                        <div className="filter-group">
                            <label htmlFor="states" className="form-label">Select State</label>
                            <select className="filter-select" id="states" value={selectedState} name="state"
                                onChange={(e) => {
                                    const selectedStateName = e.target.value;
                                    setSelectedState(selectedStateName);
                                    dispatch(branchGetByState({ stateIds: selectedStateName }));
                                }} required>
                                <option value="">All States</option>
                                {stateInfo && stateInfo.length > 0 && stateInfo.map(item => (
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="branchFilter">Filter by Branch:</label>
                            <Select
                                id="branchFilter"
                                className="filter-select"
                                options={branchOptions}
                                isMulti
                                isSearchable
                                getOptionLabel={(option) => option.label}
                                value={branchOptions.filter(option => selectedBranches.includes(option.value))}
                                onChange={(selectedOptions) => {
                                    const branchIds = selectedOptions ? selectedOptions.map(option => option.value) : [];

                                    setSelectedBranches(branchIds);

                                    if (branchIds.length > 0) {
                                        handleAuditTypeChange(branchIds); // ✅ Call only if branches exist
                                    }
                                }}
                                placeholder="Select Branch(es)..."
                                isDisabled={!selectedState} // ✅ Disable when no state is selected
                            />

                        </div>
                        <div className="filter-group">
                            <label for="" className="form-label">Select Contractor</label>

                            <select
                                className="form-select"
                                name='contractorName'
                                id='contractorName'
                                value={contractorName}
                                required
                                disabled={selectedBranches.length === 0} // ✅ Disable when no branch is selected
                                onChange={(e) => {
                                    const selectedContractorName = e.target.value;
                                    setContractorName(selectedContractorName);
                                }}
                            >
                                <option value="">Select Contractor</option> {/*onBlur={handlestateChange}*/}
                                {contractorNameInfo != 'undefind' && contractorNameInfo?.length > 0 && contractorNameInfo.map(item =>
                                    <option value={item._id}>{item.contractorName}</option>
                                )};
                            </select>
                        </div>
                        <div className="filter-group">
                            <label htmlFor="from">Start Date:</label>
                            <input
                                type="date"
                                id="from"
                                className="filter-select"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="filter-group">
                            <label htmlFor="to">End Date:</label>
                            <input
                                type="date"
                                id="to"
                                className="filter-select"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>


                </div>
                <div className="data-section">
                    {loadingPA ? (
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
                                    const totalCount = dataSource.reduce((sum, row) => sum + row.total, 0);
                                    const totalComplied = dataSource.reduce((sum, row) => sum + row.CQ, 0); //
                                    const totalPartial = dataSource.reduce((sum, row) => sum + row.PC, 0); // 
                                    const totalPending = dataSource.reduce((sum, row) => sum + row.PPdNc, 0); // 
                                    const totalRisks = dataSource.reduce((sum, row) => sum + row.NCVhH, 0); // 

                                    // const totalPercentageCompleted = dataSource.reduce(
                                    //     (sum, row) => sum + parseFloat(row.Percent || 0),
                                    //     0
                                    // );
                                    const averagePerCompleted = (totalComplied / totalCount * 100 || 0).toFixed(2);

                                    return (
                                        <Table.Summary.Row style={{ fontWeight: 'bold', backgroundColor: '#013879', color:'white', textAlign: 'center !important', fontSize: 'small' }}>
                                            <Table.Summary.Cell index={0} className='centered-cell' >Total</Table.Summary.Cell>
                                            <Table.Summary.Cell index={1} className='centered-cell' >{totalCount}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={2} className='centered-cell' >{totalComplied}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={3} className='centered-cell' >{totalPartial}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={3} className='centered-cell' >{totalPending}</Table.Summary.Cell>
                                            <Table.Summary.Cell index={3} className='centered-cell' >{totalRisks}</Table.Summary.Cell>
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
                                width={1000}
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
                                // scroll={{ x: 2000 }}
                                bodyStyle={{ height: '300px', overflowY: 'auto' }}  // Set height of the body content
                            >
                                {renderModalContent3()}
                            </Modal>
                        </div>

                    )}

                </div>
            </div>

        </>
    );
};

export default ComplianceOfPAaudit;

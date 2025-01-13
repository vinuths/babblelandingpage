import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Menu } from "antd";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Popup from "../../components/Popup";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { categoryCreate, categoryGet, AllbranchesGet, TableBranchesGet, TableNoticesGet, NoticesDeleteById, NoticesUpdateById } from '../../store/actions/otherActions';
import NoticeEdit from "./NoticeEdit";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import '../../css/Pop.css'

const NoticeTables = () => {
    const searchInput = useRef(null);
    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState("");
    const [modalWidth, setModalWidth] = useState();
    const [loadingDelete, setLoadingDelete] = useState(false);
    const [modalIndex, setModalIndex] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [dataSource, setDataSource] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const { tableNoticesInfo, loadingNoticesTable, error } = useSelector((state) => state.TableNoticesGetRed);
    console.log("tableNoticesInfo", tableNoticesInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TableNoticesGet());
    }, [dispatch]);
    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
        const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
        return `${day}/${month}/${year}`;
    };

    const getMenu = (noticeId, status) => {
        console.log("noticeStatus", status);  // Log the noticeStatus value

        return (
            <Menu style={{backgroundColor:'lightgray'}}>
                {/* {status === 3 && ( */}
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 3)}>
                        <Button style={{ backgroundColor: "#2ECC71", color: "white" }}>
                        Documents ready for Submission
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 5)}>
                        <Button style={{ backgroundColor: "#34953D", color: "white" }}>
                            Inspection Closed
                        </Button>
                    </Menu.Item>
                {/* )} */}
                <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 6)}>
                    <Button style={{ backgroundColor: "yellow", color: "black" }}>
                        Notice cancelled
                    </Button>
                </Menu.Item>
                <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 8)}>
                    <Button style={{ backgroundColor: "red", color: "white" }}>
                        Additional Document Shared
                    </Button>
                </Menu.Item>
                <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 10)}>
                    <Button style={{ backgroundColor: "orange", color: "white" }}>
                        Clarification needed
                    </Button>
                </Menu.Item>
            </Menu>
        );
    };



    const NoticeUploadStatus = async (noticeId, status) => {
        try {
            // Prepare the postBody with noticeId and status
            const postBody = {
                noticeId: noticeId,    // Ensure you're passing the correct noticeId
                noticeStatus: status,  // Pass the numeric status value
            };

            console.log("Payload being sent:", postBody);  // Debugging log

            // Dispatch the update action with the correct body
            await dispatch(NoticesUpdateById(postBody, noticeId));

            // Optionally, trigger table reload or other actions
            dispatch(TableNoticesGet());
        } catch (error) {
            console.error("Error updating Notice status:", error.message);
        }
    };




    useEffect(() => {
        // Check if tableNoticesInfo is defined and has length
        if (Array.isArray(tableNoticesInfo) && tableNoticesInfo.length > 0) {
            // Directly map the data into an array without redeclaring 'noticeArrAll'
            const noticeArrAll = tableNoticesInfo?.map((notice, index) => ({
                key: index + 1,
                id: notice?._id,
                noticeNumber: notice?.noticeNumber,
                companyId: notice?.company._id,
                company: notice?.company.companyname,
                branchId: notice?.branch._id,
                branch: notice?.branch.name,
                dateOfNotice: formatDateToInput(notice?.dateOfNotice),
                typeOfNotice: notice?.typeOfNotice,
                issuingAuthority: notice?.issuingAuthority,
                contactAuthority: notice?.contactAuthority,
                closureDeadLine: notice?.closureDeadLine,
                department: notice?.department,
                priority: notice?.priority,
                actionDeadline: notice?.actionDeadline,
                noticeCopy: notice?.noticeCopy,
                noticeReplyDoc: notice?.noticeReplyDoc,
                attestedDoc: notice?.attestedDoc,
                closureAckDoc: notice?.closureAckDoc,
                supportingDocuments: notice?.supportingDocuments,
                descriptionNotice: notice?.descriptionNotice,
                remarksNotice: notice?.remarksNotice,
                closureDeadLine: formatDateToInput(notice?.closureDeadLine),
                createdAt: formatDateToInput(notice?.createdAt),
                remarksNoticeReply: notice.remarksNoticeReply,
                remarksNoticeAttested: notice.remarksNoticeAttested,
                remarksNoticeClosureAck: notice.remarksNoticeClosureAck,
                noticeStatus: (
                    <div>
    {notice.noticeStatus === 0 ? (
        <Button style={{ backgroundColor: "#4A90E2", color: "white" }}> {/* Soft Blue */}
            Notice Assigned
        </Button>
    ) : notice.noticeStatus === 1 ? (
        <Button style={{ backgroundColor: "#00B74A", color: "white" }}> {/* Bright Green */}
            Work In Progress
        </Button>
    ) : notice.noticeStatus === 2 ? (
        <Button style={{ backgroundColor: "#F1C40F", color: "black" }}> {/* Light Yellow */}
            Attest the Documents
        </Button>
    ) : notice.noticeStatus === 3 ? (
        <Button style={{ backgroundColor: "#2ECC71", color: "white", height:'60px'}}> {/* Light Green */}
            Documents Ready<br/>for Submission
        </Button>
    ) : notice.noticeStatus === 4 ? (
        <Button style={{ backgroundColor: "#E74C3C", color: "white" }}> {/* Soft Red */}
            Verify Acknowledgement
        </Button>
    ) : notice.noticeStatus === 5 ? (
        <Button style={{ backgroundColor: "#2ECC71", color: "white" }}> {/* Light Green */}
            Inspection Closed
        </Button>
    ) : notice.noticeStatus === 6 ? (
        <Button style={{ backgroundColor: "#D9534F", color: "white" }}> {/* Dark Red */}
            Notice Cancelled
        </Button>
    ) : notice.noticeStatus === 7 ? (
        <Button style={{ backgroundColor: "#FFB347", color: "black",height:'60px' }}> {/* Amber */}
            Additional Document<br/>
            Requested
        </Button>
    ) : notice.noticeStatus === 8 ? (
        <Button style={{ backgroundColor: "#FF7F50", color: "white",height:'60px' }}> {/* Dark Orange */}
            Additional Document<br/>
            Shared
        </Button>
    ) : notice.noticeStatus === 9 ? (
        <Button style={{ backgroundColor: "#FFEB3B", color: "black" }}> {/* Light Yellow */}
            Clarification Requested
        </Button>
    ) : notice.noticeStatus === 10 ? (
        <Button style={{ backgroundColor: "#FF7043", color: "white" }}> {/* Dark Orange */}
            Clarification Needed
        </Button>
    ) : null}

    {/* <div>
        <br />
        <Dropdown overlay={getMenu(notice._id, notice.noticeStatus)} trigger={["click"]}>
            <Button>
                Update Status <DownOutlined />
            </Button>
        </Dropdown>
    </div> */}
</div>

                ),
            }));

            setDataSource(noticeArrAll);
            setFilteredData(noticeArrAll);
        }
    }, [tableNoticesInfo]);




    const formatDate = (currentDate) => {
        const date = new Date(currentDate);
        return date.toLocaleString();
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => clearFilters && handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle("Edit Notice");
        setModalWidth("800px");
    };


    const openInPopupForDelete = (recordForEdit) => {
        dispatch(NoticesDeleteById(recordForEdit.id))
            .then(() => {
                // Directly remove the deleted notice from the local dataSource state
                const updatedDataSource = dataSource.filter((item) => item.id !== recordForEdit.id);
                setDataSource(updatedDataSource);
                setFilteredData(updatedDataSource);

                // Optionally, you can still dispatch to get the latest data
                dispatch(TableNoticesGet());
            })
            .catch((error) => {
                console.error("Error deleting notice:", error);
            });
    };



    const addOrEdit = (values) => {
        const updatedData = dataSource.map((branch) =>
            branch.id === values.id ? { ...branch, ...values } : branch
        );
        setDataSource(updatedData);
        setFilteredData(updatedData);
        setOpenPopup(false);
    };

    const columns = [
        {
            title: "Sr. No.",
            dataIndex: "key",
            key: "key",
            width: 80,
        },
        {
            title: "Notice Number",
            dataIndex: "noticeNumber",
            key: "noticeNumber",
            ...getColumnSearchProps("noticeNumber"),
        },
        {
            title: "Status",
            dataIndex: "noticeStatus",
            key: "noticeStatus",
            width: 250,
            // ...getColumnSearchProps("noticeStatus"),
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
            ...getColumnSearchProps("company"),
        },
        {
            title: "Branch",
            dataIndex: "branch",
            key: "branch",
            ...getColumnSearchProps("branch"),
        },
        {
            title: "Date Of Notice",
            dataIndex: "dateOfNotice",
            key: "dateOfNotice",
            ...getColumnSearchProps("dateOfNotice"),
        },
        {
            title: "Department",
            dataIndex: "department",
            key: "department",
            ...getColumnSearchProps("department"),
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            ...getColumnSearchProps("priority"),
        },
        {
            title: "Closure Dead Line",
            dataIndex: "closureDeadLine",
            key: "closureDeadLine",
            ...getColumnSearchProps("closureDeadLine"),
        },

        {
            title: "Created Date",
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            key: "action",
            title: "Actions",
            width: 250,
            render: (record) => {
                return (
                    <>
                        <Link
                            className="text-white btn btn-primary text-decoration-none mx-2"
                            onClick={() => openInPopupForUpdate(record)}
                        >
                            View <EditOutlined />
                        </Link>
                        {/* <Link
                            className="text-white btn btn-danger text-decoration-none mx-2"
                            onClick={() => openInPopupForDelete(record)}
                        >
                            <DeleteOutlined /> 
                        </Link> */}
                    </>
                );
                
            },
        },
    ];

    return (
        <React.Fragment>
            <div className="card p-3">
                <div className="table-responsive">
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        pagination={{ pageSize: 50, showSizeChanger: false, position: ["bottomCenter"] }}
                        scroll={{ x: 1750 }}
                        sticky={true}
                    />
                </div>
            </div>
            <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}  >
                {openPopup && <NoticeEdit addOrEdit={addOrEdit} recordForEdit={recordForEdit} setOpenPopup={setOpenPopup} />}
            </Popup>
        </React.Fragment>
    );
};

export default NoticeTables;

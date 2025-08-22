import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table, Menu } from "antd";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Popup from "../../components/Popup";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { categoryCreate, AllbranchesGet, TableBranchesGet, TableNoticesGet, NoticesDeleteById, NoticesUpdateById } from '../../store/actions/otherActions';
import NoticeEdit from "./NoticeEdit";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
    const { tableNoticesInfo, totalRecords, currentPage, pageSize } = useSelector(
        (state) => state.TableNoticesGetRed
    );    // console.log("tableNoticesInfo", tableNoticesInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TableNoticesGet(1, 20)); // initial load
    }, [dispatch]);

    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
        const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
        return `${day}/${month}/${year}`;
    };

    const getMenu = (noticeId, status, dateOfNoticeClosure) => {
        // console.log("noticeStatus", status);  // Log the noticeStatus value
        // console.log("dateOfNoticeClosure", dateOfNoticeClosure);  // Log the noticeStatus value

        return (
            <div style={{ maxHeight: '200px', overflowY: 'auto', backgroundColor: 'lightgray', zIndex: '99' }}>
                <Menu>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 1)}>
                        <Button style={{ backgroundColor: "#eb4034", color: "white" }}>
                            Work In Progress
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 2)}>
                        <Button style={{ backgroundColor: "#5578c2", color: "white" }}>
                            Documents ready for Attestation
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 3)}>
                        <Button style={{ backgroundColor: "#2ECC71", color: "white" }}>
                            Submit for Inspection
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 4)}>
                        <Button style={{ backgroundColor: "#8155c2", color: "white" }}>
                            Inspection Completed
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 5, dateOfNoticeClosure)}>
                        <Button style={{ backgroundColor: "#34953D", color: "white" }}>
                            Inspection Closed
                        </Button>
                    </Menu.Item>

                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 6)}>
                        <Button style={{ backgroundColor: "red", color: "white" }}>
                            Notice Cancelled
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 7)}>
                        <Button style={{ backgroundColor: "#55c282", color: "black" }}>
                            Request Additional Document Executive
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 8)}>
                        <Button style={{ backgroundColor: "yellow", color: "black" }}>
                            Share Additional Document Matrix
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 9)}>
                        <Button style={{ backgroundColor: "#68736d", color: "white" }}>
                            Request Additional Document Matrix
                        </Button>
                    </Menu.Item>
                    <Menu.Item onClick={() => NoticeUploadStatus(noticeId, 10)}>
                        <Button style={{ backgroundColor: "orange", color: "white" }}>
                            Share Additional Document Executive
                        </Button>
                    </Menu.Item>
                </Menu>
            </div>

        );
    };



    const NoticeUploadStatus = async (noticeId, status, dateOfNoticeClosure) => {
        try {
            // Check if the status is 5 and dateOfNoticeClosure is empty
            if (status === 5 && (!dateOfNoticeClosure || dateOfNoticeClosure === "")) {
                // Show error toast if dateOfNoticeClosure is empty or null
                toast.error("Please select a Notice Close Date.");
                return; // Stop further execution
            }

            // Prepare the postBody with noticeId and status
            const postBody = {
                noticeId: noticeId,    // Ensure you're passing the correct noticeId
                noticeStatus: status,  // Pass the numeric status value
            };

            // console.log("Payload being sent:", postBody);  // Debugging log

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
            // console.log("tableNoticesInfo", tableNoticesInfo);

            // Directly map the data into an array without redeclaring 'noticeArrAll'
            const noticeArrAll = tableNoticesInfo?.map((notice, index) => ({
                key: (currentPage - 1) * pageSize + (index + 1),
                id: notice?._id,
                noticeNumber: notice?.noticeNumber,
                companyId: notice?.company?._id,
                company: notice?.company?.companyname,
                branchId: notice?.branch?._id,
                branch: notice?.branch?.name,
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
                dateOfNoticeClosure: formatDateToInput(notice?.dateOfNoticeClosure),
                noticeStatus: (
                    <div>
                        {notice.noticeStatus === 0 ? (
                            <Button style={{ backgroundColor: "#4A90E2", color: "white" }}> {/* Soft Blue */}
                                Notice Assigned
                            </Button>
                        ) : notice.noticeStatus === 1 ? (
                            <Button style={{ backgroundColor: "#eb4034", color: "white" }}> {/* Bright Green */}
                                Work In Progress
                            </Button>
                        ) : notice.noticeStatus === 2 ? (
                            <Button style={{ backgroundColor: "#5578c2", color: "white" }}> {/* Light Yellow */}
                                Documents ready for Attestation
                            </Button>
                        ) : notice.noticeStatus === 3 ? (
                            <Button style={{ backgroundColor: "#2ECC71", color: "white" }}> {/* Light Green */}
                                Submit for Inspection
                            </Button>
                        ) : notice.noticeStatus === 4 ? (
                            <Button style={{ backgroundColor: "#8155c2", color: "white" }}> {/* Soft Red */}
                                Inspection Completed
                            </Button>
                        ) : notice.noticeStatus === 5 ? (
                            <Button style={{ backgroundColor: "#34953D", color: "white" }}> {/* Light Green */}
                                Inspection Closed
                            </Button>
                        ) : notice.noticeStatus === 6 ? (
                            <Button style={{ backgroundColor: "red", color: "white" }}> {/* Dark Red */}
                                Notice Cancelled
                            </Button>
                        ) : notice.noticeStatus === 7 ? (
                            <Button style={{ backgroundColor: "#55c282", color: "black", height: '60px' }}> {/* Amber */}
                                Additional Document<br />
                                Requested by Executive
                            </Button>
                        ) : notice.noticeStatus === 8 ? (
                            <Button style={{ backgroundColor: "yellow", color: "black", height: '60px' }}> {/* Dark Orange */}
                                Additional Document<br />
                                Shared by Matrix
                            </Button>
                        ) : notice.noticeStatus === 9 ? (
                            <Button style={{ backgroundColor: "#68736d", color: "white", height: '60px' }}> {/* Light Yellow */}
                                Additional Document<br />
                                Requested by Matrix
                            </Button>
                        ) : notice.noticeStatus === 10 ? (
                            <Button style={{ backgroundColor: "#FF7043", color: "white", height: '60px' }}> {/* Dark Orange */}
                                Additional Document<br />
                                Shared by Executive
                            </Button>
                        ) : null}

                        <div>
                            <br />
                            <Dropdown overlay={getMenu(notice._id, notice.noticeStatus, notice?.dateOfNoticeClosure)} trigger={["click"]}>
                                <Button>
                                    Update Status <DownOutlined />
                                </Button>
                            </Dropdown>
                        </div>
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
        const searchText = selectedKeys[0] || "";
        // Build filters object - keep previous filters if you track them in a ref/state.
        const filters = { [dataIndex]: searchText };
        // jump to page 1 for new search
        dispatch(TableNoticesGet(1, pageSize || 20, filters));
        setSearchText(searchText);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
        // clear filters on server
        dispatch(TableNoticesGet(1, pageSize || 20, {}));
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



    const openInPopupForDelete = (recordForEdit, pagination, filters) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(NoticesDeleteById(recordForEdit.id))
                    .then(() => {
                        // Directly remove the deleted notice from the local dataSource state
                        const updatedDataSource = dataSource.filter((item) => item.id !== recordForEdit.id);
                        setDataSource(updatedDataSource);
                        setFilteredData(updatedDataSource);

                        // Optionally, you can still dispatch to get the latest data
                        dispatch(TableNoticesGet());
                        // dispatch(TableNoticesGet(pagination.current, pagination.pageSize, filters));


                        Swal.fire("Deleted!", "The notice has been deleted.", "success");
                    })
                    .catch((error) => {
                        console.error("Error deleting notice:", error);
                        Swal.fire("Error!", "Failed to delete the notice.", "error");
                    });
            }
        });
    };
    const handleTableChange = (pagination, filters, sorter) => {
        // transform antd filters (object of arrays) into simple values (take first)
        const simpleFilters = {};
        Object.keys(filters || {}).forEach((k) => {
            if (filters[k] && filters[k].length > 0) {
                // For text filters (search inputs) you probably send them as strings
                simpleFilters[k] = filters[k][0];
            }
        });

        // add sorter if present
        let sort = {};
        if (sorter && sorter.field) {
            sort[sorter.field] = sorter.order === "ascend" ? 1 : -1;
        } else {
            sort = { createdAt: -1 };
        }

        dispatch(TableNoticesGet(pagination.current, pagination.pageSize, simpleFilters, sort));
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
            width: 300,
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
                // console.log("record", record);

                return (
                    <>
                        <Link
                            className="text-white btn btn-primary text-decoration-none mx-2"
                            onClick={() => openInPopupForUpdate(record)}
                        >
                            <EditOutlined />
                        </Link>
                        <Link
                            className="text-white btn btn-danger text-decoration-none mx-2"
                            onClick={() => openInPopupForDelete(record)}
                        >
                            <DeleteOutlined /> {/* Delete Icon */}
                        </Link>
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
                        dataSource={dataSource}
                        loading={loadings || getState.loading || false}
                        pagination={{
                            current: currentPage,
                            pageSize,
                            total: totalRecords,
                            showSizeChanger: true,
                            position: ["bottomCenter"],
                        }}
                        onChange={handleTableChange}
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

import React, { useEffect, useState } from "react";
import { Table, Pagination, DatePicker, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { stateGets, labourWelfareLibraryDelete, labourWelfareLibraryPaginatedGet } from "../../../../store/actions/otherActions";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Popup from "../../../../components/Popup";
import moment from "moment";
import { updateLabourWelFundLibraryStatus } from "../../../../routes/api";
import { Switch } from "antd";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LabourWelfareCreate from "./LabourWelfareCreate";
import { Typography, FormGroup, styled } from '@mui/material';
dayjs.extend(customParseFormat);


const { RangePicker } = DatePicker;

const LabourWelfareTable = ({ localPage, setLocalPage }) => {
    const dispatch = useDispatch();

    const { data, totalCount, loading } = useSelector(
        (state) => state.labourWelfareLibraryPaginatedRed
    );
    // console.log("labourWelfareLibraryPaginatedRed",data);
    const { stateInfo } = useSelector((state) => state.getState);

    const [pageSize] = useState(20);
    // const [localPage, setLocalPage] = useState(1);
    const [selectedState, setSelectedState] = useState("");
    const [dateRange, setDateRange] = useState("");

    const [openPopup, setOpenPopup] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [modalWidth, setModalWidth] = useState();
    const [recordForEdit, setRecordForEdit] = useState(null);

    const addOrEdit = () => {
        relodreport();
        setRecordForEdit(null);
        setOpenPopup(false);
    };

    const relodreport = () => {
        fetchData(localPage);
    };

    const fetchData = (page = localPage) => {
        const filters = {};

        if (selectedState) filters.state = selectedState;
        if (dateRange?.length === 2) {
            filters.fromDate = dateRange[0].toISOString();
            filters.toDate = dateRange[1].toISOString();
        }
        dispatch(labourWelfareLibraryPaginatedGet({ page, limit: pageSize, filters }));
    };


    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        fetchData(localPage);
    }, [localPage, selectedState, dateRange]);

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true,
        });

        if (result.isConfirmed) {
            await dispatch(labourWelfareLibraryDelete(id));
            fetchData(localPage);

            Swal.fire('Deleted!', 'Labour Welfare deleted successfully.', 'success');
        }
    };


    const formatDateToInput = (isoDate) => {
        if (!isoDate) return "";
        return moment(isoDate).format("DD-MM-YYYY");
    };

    const openInPopupForUpdate = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
        setPageTitle('Edit Labour Welfare E-Library');
        setModalWidth('400px');
    };

    const onSwitchChange = (id, currentStatus) => {
        // Add a slight delay to allow animation to complete
        setTimeout(() => {
            handleStatusToggle(id, currentStatus);
        }, 400);
    };


    const handleStatusToggle = async (id, currentStatus) => {
        try {
            await updateLabourWelFundLibraryStatus(id, !currentStatus);
            toast.success("Status updated successfully!");
            fetchData(localPage); // reloads the table correctly with filters
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

    const columns = [
        {
            title: "Sr. No.",
            key: "key",
            width: 80,
            render: (_, __, index) => (localPage - 1) * pageSize + index + 1,
        },
        {
            title: "State",
            dataIndex: "stateData",
            key: "state",
            render: (stateData) => stateData?.name || "N/A",
            width: 150,

        },
        {
            title: "Applicability",
            dataIndex: "applicability",
            key: "applicability",
            width: 120,
            render: (value) => (
                <span
                    style={{
                        backgroundColor: value === true ? '#d4edda' : '#f8d7da',
                        color: value === true ? '#155724' : '#721c24',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        display: 'inline-block',
                        textAlign: 'center',
                        fontWeight: '500'
                    }}
                >
                    {value === true ? 'Yes' : 'No'}
                </span>
            )
        },
        {
            title: "Act",
            dataIndex: "act",
            key: "act",
            width: 150,
            render: (act) => (
                <div>
                    {act ? act :
                        <NotApplicaple>N/A</NotApplicaple>}
                </div>
            ),
        },

        {
            title: "Rule",
            dataIndex: "rule",
            key: "rule",
            width: 150,
            render: (rule) => (
                <div>
                    {rule ? rule :
                        <NotApplicaple>N/A</NotApplicaple>}
                </div>
            ),
        },

        {
            title: "Document",
            dataIndex: "doc",
            key: "doc",
            render: (doc, record) => (
                doc ? (
                    <a href={doc} target="_blank" rel="noopener noreferrer">
                        {record.act || "View Document"}
                    </a>
                ) : (
                    <NotApplicaple>N/A</NotApplicaple>
                )
            ),
            width: 200,

        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status, record) => (
                <Switch
                    checked={status}
                    onChange={() => onSwitchChange(record._id, status)}
                    style={{
                        backgroundColor: status ? '#013879' : '#dc3545',
                    }}
                    checkedChildren="Active"
                    unCheckedChildren="In-Active"
                />

            ),
            width: 120,


        },
        {
            title: "Created Date",
            dataIndex: "created_At",
            // key: "created_At",
            render: (created_At) => formatDateToInput(created_At),
            width: 100,

        },
        {
            title: "Last Updated",
            dataIndex: "updated_at",
            key: "updated_at",
            render: (updated_at, record) => (<div>
                {record.updated_at ? (
                    <div>
                        {formatDateToInput(record.updated_at)}
                    </div>
                ) : (
                    <div style={{ fontStyle: 'italic', color: 'red', }}> No Updates</div>
                )}
            </div>
            ),
            width: 100,

        },
        {
            key: "action",
            title: "Actions",
            width: 170,
            render: (record) => (
                <>
                    <Link className="btn btn-primary mx-2" onClick={() => openInPopupForUpdate(record)}>
                        <EyeOutlined /> / <EditOutlined />
                    </Link>
                    <Link className="btn btn-danger mx-2" onClick={() => handleDelete(record._id)}>
                        <DeleteOutlined />
                    </Link>
                </>
            ),
        },
    ];

    return (
        <div className="container-fluid">
            <div className="row g-3 mb-3 pt-1 align-items-end">
                <div className="col-md-6">
                    <label className="form-label fw-semibold">State Filter</label>
                    <select
                        className="form-select"
                        value={selectedState}
                        onChange={(e) => {
                            setSelectedState(e.target.value);
                            setLocalPage(1); // Reset to page 1
                        }}
                    >
                        <option value="">Select State</option>
                        {stateInfo?.map((item) => (
                            <option key={item._id} value={item._id}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label fw-semibold">Date Filter</label>
                    <RangePicker
                        className="w-100"
                        value={dateRange}
                        onChange={(dates) => {
                            setDateRange(dates || []);
                            setLocalPage(1);
                        }}
                    />
                </div>


            </div>

            <div className="table-responsive">
                {loading ? (
                    <Spin size="large" className="d-flex justify-content-center" />
                ) : data && data.length > 0 ? (
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        rowKey="_id"
                        scroll={{ x: 1000 }}
                        sticky
                    />
                ) : (
                    <div style={{ backgroundColor: 'whitesmoke', borderRadius: '8px', textAlign: 'center', paddingTop: '25px', height: '100px' }}>
                        <h1 style={{ color: 'darkgray', fontStyle: 'italic' }}>No Labour Welfare E-Library Available</h1>
                    </div>
                )}
            </div>

            {/* {loading ? (
                <Spin size="large" className="d-flex justify-content-center" />
            ) : data && data.length > 0 ? ( */}
            <div className="d-flex justify-content-center mt-3">
                <Pagination
                    current={localPage}
                    total={totalCount}
                    pageSize={pageSize}
                    onChange={(page) => setLocalPage(page)}
                    showSizeChanger={false}
                />
            </div>
            {/* ) : (
                null
            )} */}
            <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                {openPopup && <LabourWelfareCreate addOrEdit={addOrEdit} recordForEdit={recordForEdit} setLocalPage={setLocalPage} />}
            </Popup>
        </div>
    );
};

const NotApplicaple = styled(FormGroup)`
font-style: Italic;
font-weight: 400;
color: #888;
`


export default LabourWelfareTable;

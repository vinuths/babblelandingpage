import React, { useEffect, useState } from "react";
import { Table, Pagination, DatePicker, Select, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { categoryGetComplianceList, compQandALibraryPaginatedGet, compQandALibraryDelete } from "../../../../../store/actions/otherActions";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import Popup from "../../../../../components/Popup";
import moment from "moment";
import { updateCompQandALibraryStatus } from "../../../../../routes/api";
import { Switch } from "antd";
import { toast } from "react-toastify";
import CompQACreate from "./CompQACreate";

const { RangePicker } = DatePicker;

const CompQATable = ({ localPage, setLocalPage }) => {
  const dispatch = useDispatch();

  const { data, totalCount, loading } = useSelector(
    (state) => state.compQandALibraryPaginatedRed
  );
  const { compCategoryInfo } = useSelector((state) => state.complianceCategoryGetRed);
  // console.log("compCategoryInfo", compCategoryInfo);

  const [pageSize] = useState(20);
  // const [localPage, setLocalPage] = useState(1);
  const [selectedState, setSelectedState] = useState("");
  const [dateRange, setDateRange] = useState([]);

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

    if (selectedState) filters.complianceCategory = selectedState;

    if (dateRange?.length === 2) {
      filters.fromDate = dateRange[0].toISOString();
      filters.toDate = dateRange[1].toISOString();
    }

    dispatch(compQandALibraryPaginatedGet({ page, limit: pageSize, filters }));
  };

  useEffect(() => {
    dispatch(categoryGetComplianceList());
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
      await dispatch(compQandALibraryDelete(id));
      fetchData(localPage);

      Swal.fire('Deleted!', 'Compliance FAQ E-Library deleted successfully.', 'success');
    }
  };


  const formatDateToInput = (isoDate) => {
    if (!isoDate) return "";
    return moment(isoDate).format("DD-MM-YYYY");
  };

  const openInPopupForUpdate = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
    setPageTitle('Edit Compliance FAQ E-Library');
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
      await updateCompQandALibraryStatus(id, !currentStatus);
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
      title: "Category",
      dataIndex: "complianceCategoryData",
      key: "complianceCategory",
      render: (complianceCategoryData) => complianceCategoryData?.name || "N/A",
      width: 150,

    },
    {
      title: "Topic",
      dataIndex: "topic",
      key: "topic",
      width: 200,
    },
    {
      title: "Question",
      dataIndex: "question",
      key: "question",
      width: 200,
    },
    {
      title: "Answer",
      dataIndex: "answer",
      key: "answer",
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
          <label className="form-label fw-semibold">Category Filter</label>
          <select
            className="form-select"
            value={selectedState}
            onChange={(e) => {
              setSelectedState(e.target.value);
              setLocalPage(1); // Reset to page 1
            }}
          >
            <option value="">Select Category</option>
            {compCategoryInfo?.map((item) => (
              <option key={item._id} value={item._id}>{item.name}</option>
            ))}
          </select>
        </div>
        {/* {JSON.stringify(compCategoryInfo)} */}
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
            <h1 style={{ color: 'darkgray', fontStyle: 'italic' }}>No Compliance FAQ E-Library Available</h1>
          </div>
        )}
      </div>

      {loading ? (
        <Spin size="large" className="d-flex justify-content-center" />
      ) : data && data.length > 0 ? (
        <div className="d-flex justify-content-center mt-3">
          <Pagination
            current={localPage}
            total={totalCount}
            pageSize={pageSize}
            onChange={(page) => setLocalPage(page)}
            showSizeChanger={false}
          />
        </div>
      ) : (
        null
      )}
      <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
        {openPopup && <CompQACreate addOrEdit={addOrEdit} recordForEdit={recordForEdit} setLocalPage={setLocalPage} />}
      </Popup>
    </div>
  );
};


export default CompQATable;

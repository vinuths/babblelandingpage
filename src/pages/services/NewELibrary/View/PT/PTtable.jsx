import React, { useEffect, useState } from "react";
import { Table, Pagination, DatePicker, Spin, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    stateGets,
    labourWelfareLibraryDelete,
    professionalTaxLibraryPaginatedGet
} from "../../../../../store/actions/otherActions";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Popup from "../../../../../components/Popup";
import moment from "moment";
import { updateLabourWelFundLibraryStatus } from "../../../../../routes/api";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import FormGroup from '@mui/material/FormGroup';    // default import
import { styled } from '@mui/material/styles';      // styled from styles
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // <-- Importing MUI back icon
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const PTtable = ({ localPage, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, totalCount, loading } = useSelector(
        (state) => state.professionalTaxLibraryPaginatedRed
    );

    const { stateInfo } = useSelector((state) => state.getState);

    const [pageSize] = useState(1000);
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
        dispatch(professionalTaxLibraryPaginatedGet({ page, limit: pageSize, filters }));
    };

    useEffect(() => {
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        fetchData(localPage);
    }, [localPage, selectedState, dateRange]);

    const handleStatusToggle = async (id, currentStatus) => {
        try {
            await updateLabourWelFundLibraryStatus(id, !currentStatus);
            toast.success("Status updated successfully!");
            fetchData(localPage);
        } catch (error) {
            toast.error("Failed to update status");
        }
    };

  const handleStateClick = (stateName) => {
    const item = data.find(el => el.stateData?.name === stateName);
    if (!item) return;

    navigate(`/services/elibrary/professional-tax/${encodeURIComponent(item.stateData.name)}`, {
        state: { stateId: item.stateData._id } // ✅ pass as object
    });
};


    const applicableStates = [...new Set(data.filter(item => item.applicability === true).map(item => item.stateData?.name))].sort();
    const notApplicableStates = [...new Set(data.filter(item => item.applicability === false).map(item => item.stateData?.name))].sort();

    const buildRows = (data, columns, isClickable = false) => {
        const rows = Math.ceil(data.length / columns);
        const result = [];

        for (let i = 0; i < rows; i++) {
            const cells = [];

            for (let j = 0; j < columns; j++) {
                const item = data[i + j * rows];
                if (item) {
                    cells.push(
                        <td key={`${i}-${j}`}>
                            <span
                                className={isClickable ? 'clickable' : ''}
                                onClick={isClickable ? () => handleStateClick(item) : null}
                            >
                                {item}
                            </span>
                        </td>
                    );
                } else {
                    cells.push(<td key={`${i}-${j}`}></td>);
                }
            }

            result.push(<tr key={i}>{cells}</tr>);
        }

        return result;
    };

    return (
        <div className="container-fluid">
            <div className="row g-3 mb-3 pt-1 align-items-end">
                <div className="card p-4 mb-4">
                    
                    <div
                        className="headContain d-flex align-items-center justify-content-center position-relative"
                        style={{ minHeight: '40px' }}
                    >
                        <button
                            onClick={() => navigate(-1)}
                            style={{
                                position: 'absolute',
                                left: 0,
                                background: "none",
                                border: "none",
                                color: "#333",
                                fontSize: "20px",
                                cursor: "pointer",
                                padding: 0,
                                opacity: 0.6,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            aria-label="Back"
                        >
                            <ArrowBackIcon />
                        </button>

                        <h3 className="mb-3 heads m-0">Professional Tax</h3>
                    </div>

                    <br />
                    <p>
                        Professional Tax is a state-level tax levied on individuals earning income through employment, profession, or trade. It is deducted monthly by the employer from the employee’s salary and paid to the respective state government.
                    </p>

                    <div className="state-container">
                        {applicableStates.length > 0 && (
                            <div className="table-box">
                                <div className="table-title">Applicable States</div>
                                <table className="state-table">
                                    <tbody>
                                        {buildRows(applicableStates, 5, true)}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {notApplicableStates.length > 0 && (
                            <div className="table-box">
                                <div className="table-title">Not Applicable States</div>
                                <table className="state-table">
                                    <tbody>
                                        {buildRows(notApplicableStates, 5)}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <p className="mt-3" style={{ fontStyle: "italic" }}>
                        Professional Tax is not applicable to all category of employees...
                    </p>
                </div>
            </div>
        </div>
    );
};

const NotApplicaple = styled(FormGroup)`
    font-style: Italic;
    font-weight: 400;
    color: #888;
`;

export default PTtable;

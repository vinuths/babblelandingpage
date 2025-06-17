import React, { useEffect, useState } from "react";
import { Table, Pagination, DatePicker, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { stateGets, labourWelfareLibraryDelete, labourWelfareLibraryPaginatedGet } from "../../../../store/actions/otherActions";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Popup from "../../../../components/Popup";
import moment from "moment";
import { updateLabourWelFundLibraryStatus } from "../../../../routes/api";
import { Switch } from "antd";
import { toast } from "react-toastify";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LabourWelfareState from "./LabourWelfareState";
import { Typography, FormGroup, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const LabourWelfareTable = ({ localPage, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { data, totalCount, loading } = useSelector(
        (state) => state.labourWelfareLibraryPaginatedRed
    );

    const { stateInfo } = useSelector((state) => state.getState);

    const [pageSize] = useState(150);
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
        if (item) {
            navigate(`/elibrary/View/Labour_Welfare_Fund/${item.stateData.name}`, {
                state: item.stateData._id,
            });
        }
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

                    {/* Back Button + Centered Heading */}
                    <div className="row headContain">
                        <div className="col-4">
                            <button
                                onClick={() => navigate(-1)}
                                className="back-button"
                                style={{ position: 'relative', top: '0px', left: '-40px' }}
                                aria-label="Back"
                            >
                                <ArrowBackIcon />
                            </button>
                        </div>
                        {/* <div className="col-2"></div> */}
                        <div className="col-8 "
                            style={{ position: 'relative', top: '0px', left: '40px' }}

                        >
                            <h3>Labour Welfare Fund</h3>

                        </div>
                    </div>
                    {/* <div
                        className="headContain d-flex align-items-center justify-content-center position-relative"
                        style={{ minHeight: "40px" }}
                    >


                    </div> */}

                    <br />

                    <p>
Labour Welfare Fund (LWF) is a statutory contribution made by employers and employees to support the welfare of workers. It is used to provide facilities such as housing, education, medical care, recreation, and other social security benefits. The contribution rates and applicability vary by state, and it is applicable to establishments employing a minimum number of workers as defined under respective state laws.                    </p>

                    <div className="state-container">
                        {/* Applicable */}
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

                        {/* Not Applicable */}
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
                        The Labour Welfare Fund Act is not applicable to all category of employees...
                    </p>
                </div>

                <Popup openPopup={openPopup} pageTitle={pageTitle} setOpenPopup={setOpenPopup} modalWidth={modalWidth}>
                    {openPopup && (
                        <LabourWelfareState
                            data={data}
                        />
                    )}
                </Popup>
            </div>
        </div>
    );
};

const NotApplicaple = styled(FormGroup)`
font-style: Italic;
font-weight: 400;
color: #888;
`

export default LabourWelfareTable;

import React, { useState, useEffect } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateGets, labourWelfareLibraryUpdate, labourWelfareLibraryCreate } from '../../../../store/actions/otherActions';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
dayjs.extend(weekday);
dayjs.extend(localeData);


const LabourWelfareCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector(state => state.getState);

    const [state, setState] = useState('');
    const [act, setAct] = useState('');
    const [rule, setRule] = useState('');
    const [applicability, setApplicability] = useState(null);
    const [frequency, setFrequency] = useState('');
    const [form, setForm] = useState('');
    const [modeOfRemittance, setModeOfRemittance] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [category, setCategory] = useState('');
    const [employee_Contribution, setEmployee_Contribution] = useState('');
    const [employer_Contribution, setEmployer_Contribution] = useState('');
    const [total_Contribution, setTotal_Contribution] = useState('');
    const [date_deduction, setDate_Deduction] = useState('');
    const [last_date_remittance, setLast_Date_Remittance] = useState('');
    const [applicableData, setApplicableData] = useState('');
    const [doc, setDoc] = useState(null);
    const [docUrl, setDocUrl] = useState(''); // For preview or download
    const [status, setStatus] = useState(true);


    useEffect(() => {
        dispatch(stateGets());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setState(recordForEdit.state || '');
            setAct(recordForEdit.act || '');
            setRule(recordForEdit.rule || '');
            setApplicability(recordForEdit.applicability || '');
            setFrequency(recordForEdit.frequency || '');
            setForm(recordForEdit.form || '');
            setModeOfRemittance(recordForEdit.modeOfRemittance || '');
            setWebsiteLink(recordForEdit.websiteLink || '');
            setCategory(recordForEdit.category || '');
            setEmployee_Contribution(recordForEdit.employee_Contribution || '');
            setEmployer_Contribution(recordForEdit.employer_Contribution || '');
            setTotal_Contribution(recordForEdit.total_Contribution || '');
            setDate_Deduction(recordForEdit.date_deduction || null);
            setLast_Date_Remittance(recordForEdit.last_date_remittance || null);
            setApplicableData(recordForEdit.applicableData || null);
            setStatus(recordForEdit.status || false);

            if (recordForEdit.doc) {
                setDocUrl(recordForEdit.doc); // For preview/download
            }

            // Optional if you are displaying timestamps
            // setCreatedAt(recordForEdit.created_At || null);
            // setUpdatedAt(recordForEdit.updated_at || null);
        }
    }, [recordForEdit]);


    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const allowedTypes = [
                'image/jpeg',
                'image/png',
                'image/jpg',
                'image/bmp',
                'application/pdf',
            ];
            if (!allowedTypes.includes(file.type)) {
                alert('Only JPG, JPEG, PNG, BMP, or PDF files are allowed.');
                return;
            }
            setDoc(file);
            setDocUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
        }
    };

    // const handleClose = () => {
    //     if (typeof setLocalPage === "function") {
    //         addOrEdit();
    //         setLocalPage(0); // go back to list view
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('state', state);
        formData.append('act', act);
        formData.append('rule', rule);
        formData.append('applicability', applicability);
        formData.append('applicableData', applicableData);
        formData.append('frequency', frequency);
        formData.append('form', form);
        formData.append('modeOfRemittance', modeOfRemittance);
        formData.append('websiteLink', websiteLink);
        formData.append('category', category);
        formData.append('total_Contribution', total_Contribution);
        formData.append('date_deduction', date_deduction);
        formData.append('last_date_remittance', last_date_remittance);
        formData.append('employee_Contribution', employee_Contribution);
        formData.append('employer_Contribution', employer_Contribution);
        formData.append('status', status);

        if (doc) {
            formData.append('doc', doc);
        }

        if (recordForEdit?._id) {
            dispatch(labourWelfareLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(labourWelfareLibraryCreate(formData));
            // console.log("payload",formData);

        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);
        setAct('');
        setRule('');
        setState('');
        setDoc(null);
        setDocUrl(''); // Reset file URL
        setApplicability(false);
        setFrequency('');
        setForm('');
        setWebsiteLink('');
        setCategory('');
        setEmployee_Contribution('');
        setEmployer_Contribution('');
        setTotal_Contribution('');
        setDate_Deduction('');
        setLast_Date_Remittance('');
        setApplicableData('');
        setStatus(true);
        // handleClose();
    };

    const tocategorypage = () => {
        addOrEdit();
    };
    const colClass =
        applicability === true
            ? "col-lg-6"
            : (applicability === false || applicability === '' || applicability === null)
                ? "col-lg-12"
                : "col-lg-6";

    return (
        <Container style={{ marginLeft: '-20px' }}>
            <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: 'auto' }}>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                        {!recordForEdit ? (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Create New Labour Welfare E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Labour Welfare E-Library
                            </h2>
                        )}
                        {/* {recordForEdit && (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Rule E-Library
                            </h2>
                        )} */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">State *</label>
                            <select
                                className="form-select"
                                id="state"
                                name="state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}

                            >
                                <option value="">Select State</option>
                                {stateInfo?.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Applicability *</label>
                            <select
                                className="form-select"
                                id="applicability"
                                name="applicability"
                                value={String(applicability)} // convert boolean to string for <select>
                                onChange={(e) => setApplicability(e.target.value === "true")} // convert string to boolean
                                required
                            >
                                <option>Select Applicability</option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        {(applicability === true) && (
                            <>
                                <div className={`${colClass} md-12`}>
                                    <label className="form-label">Act *</label>
                                    <input
                                        type="text"
                                        id="act"
                                        name="act"
                                        className="form-control"
                                        placeholder="Enter Act"
                                        value={act}
                                        onChange={(e) => setAct(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Rule *</label>
                                    <input
                                        type="text"
                                        id="rule"
                                        name="rule"
                                        className="form-control"
                                        placeholder="Enter Rule"
                                        value={rule}
                                        onChange={(e) => setRule(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Frequency *</label>
                                    <input
                                        type="text"
                                        id="frequency"
                                        name="frequency"
                                        className="form-control"
                                        placeholder="Enter Frequency"
                                        value={frequency}
                                        onChange={(e) => setFrequency(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Form *</label>
                                    <input
                                        id="form"
                                        name="form"
                                        className="form-control"
                                        placeholder="Enter Form"
                                        value={form}
                                        onChange={(e) => setForm(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Mode Of Remittance *</label>
                                    <input
                                        id="modeOfRemittance"
                                        name="modeOfRemittance"
                                        className="form-control"
                                        placeholder="Enter Mode Of Remittance"
                                        value={modeOfRemittance}
                                        onChange={(e) => setModeOfRemittance(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Website Link *</label>
                                    <input
                                        id="websiteLink"
                                        name="websiteLink"
                                        className="form-control"
                                        placeholder="Enter Website Link"
                                        value={websiteLink}
                                        onChange={(e) => setWebsiteLink(e.target.value)}
                                        required
                                    />

                                </div>

                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Category *</label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        className="form-control"
                                        placeholder="Enter category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>

                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Employee Contribution *</label>
                                    <input
                                        type="number"
                                        id="employee_Contribution"
                                        name="employee_Contribution"
                                        className="form-control"
                                        placeholder="Enter Employee Contribution"
                                        value={employee_Contribution}
                                        onChange={(e) => setEmployee_Contribution(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Employer Contribution *</label>
                                    <input
                                        type="number"
                                        id="employer_Contribution"
                                        name="employer_Contribution"
                                        className="form-control"
                                        placeholder="Enter Employer Contribution"
                                        value={employer_Contribution}
                                        onChange={(e) => setEmployer_Contribution(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Total Contribution *</label>
                                    <input
                                        type="number"
                                        id="total_Contribution"
                                        name="total_Contribution"
                                        className="form-control"
                                        placeholder="Enter Total Contribution"
                                        value={total_Contribution}
                                        onChange={(e) => setTotal_Contribution(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Deduction Date *</label>
                                    <DatePicker
                                        id="date_deduction"
                                        name="date_deduction"
                                        className="form-control"
                                        value={date_deduction ? dayjs(date_deduction) : null}
                                        onChange={(date, dateString) => setDate_Deduction(dateString)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Last Date For Remittance *</label>
                                    <DatePicker
                                        id="last_date_remittance"
                                        name="last_date_remittance"
                                        className="form-control"
                                        value={last_date_remittance ? dayjs(last_date_remittance) : null}
                                        onChange={(date, dateString) => setLast_Date_Remittance(dateString)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Upload Document *</label>
                                    <input
                                        type="file"
                                        name="doc"
                                        className="form-control"
                                        accept="image/*,application/pdf"
                                        onChange={handleFileUpload}
                                        required={!recordForEdit}
                                    />

                                    {recordForEdit && docUrl && (
                                        <div>
                                            <a href={docUrl} target="_blank" rel="noopener noreferrer">
                                                View File
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        {(applicability === true) && (
                            <div className="col-lg-12 col-md-12">
                                <label className="form-label">Applicable Data</label>
                                <textarea
                                    type="text"
                                    id="applicableData"
                                    name="applicableData"
                                    className="form-control"
                                    placeholder="Enter applicableData"
                                    value={applicableData}
                                    onChange={(e) => setApplicableData(e.target.value)}
                                />
                            </div>
                        )}
                        {!recordForEdit ? (
                            <div className="col-md-12">
                                <button type="submit" className="w-100 btn btn-primary">Save</button>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <div className="col-md-6">
                                    <button type="submit" className="w-100 btn btn-dark" id="cancel" onClick={tocategorypage}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button type="submit" className="w-100 btn btn-primary">Update</button>
                                </div>
                            </div>

                        )}
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default LabourWelfareCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

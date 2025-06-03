import React, { useState, useEffect } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateGets, professionalTaxLibraryUpdate, professionalTaxLibraryCreate } from '../../../../store/actions/otherActions';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
dayjs.extend(weekday);
dayjs.extend(localeData);


const PTCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector(state => state.getState);
    console.log("recordForEdit", recordForEdit);

    const [state, setState] = useState('');
    const [act, setAct] = useState('');
    const [rule, setRule] = useState('');
    const [applicability, setApplicability] = useState(null);
    const [exemption, setExemption] = useState('');
    const [registrationForm, setRegistrationForm] = useState('');
    const [registrationProcess, setRegistrationProcess] = useState('');
    const [activity, setActivity] = useState('');
    const [note, setNote] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');
    const [dateOfDeduction, setDateOfDeduction] = useState('');
    const [lastDateRemittance, setLastDateRemittance] = useState('');
    const [salary, setSalary] = useState('');
    const [ptAmount, setPtAmount] = useState('');
    const [remarks, setRemarks] = useState('');
    const [doc, setDoc] = useState(null);
    const [regFormDoc, setRegFormDoc] = useState(null);
    const [docUrl, setDocUrl] = useState(''); // For preview or download
    const [regFormDocUrl, setRegFormDocUrl] = useState(''); // For preview or download
    const [status, setStatus] = useState(true);

    const [salaryInfo, setSalaryInfo] = useState([
        { salary: '', ptAmount: '', remarks: '' }
    ]);
    const handleSalaryChange = (index, field, value) => {
        const updatedInfo = [...salaryInfo];
        updatedInfo[index][field] = value;
        setSalaryInfo(updatedInfo);
    };

    const addSalaryField = () => {
        setSalaryInfo([...salaryInfo, { salary: '', ptAmount: '', remarks: '' }]);
    };

    const removeSalaryField = (index) => {
        const updatedInfo = [...salaryInfo];
        updatedInfo.splice(index, 1);
        setSalaryInfo(updatedInfo);
    };

    useEffect(() => {
        dispatch(stateGets());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setState(recordForEdit.state || '');
            setAct(recordForEdit.act || '');
            setRule(recordForEdit.rule || '');
            setApplicability(recordForEdit.applicability || false);
            setRegistrationForm(recordForEdit.registrationForm || '');
            setWebsiteLink(recordForEdit.websiteLink || '');
            setExemption(recordForEdit.exemption || '');
            setRegistrationProcess(recordForEdit.registrationProcess || '');
            setActivity(recordForEdit.activity || '');
            setNote(recordForEdit.note || '');
            setSalary(recordForEdit.salary || '');
            setPtAmount(recordForEdit.ptAmount || '');
            setRemarks(recordForEdit.remarks || '');
            setDateOfDeduction(recordForEdit.dateOfDeduction || '');
            setLastDateRemittance(recordForEdit.lastDateRemittance || '');
            setStatus(recordForEdit.status || false);
            if (recordForEdit.salaryInfo && Array.isArray(recordForEdit.salaryInfo)) {
                setSalaryInfo(recordForEdit.salaryInfo);
            } else {
                setSalaryInfo([{ salary: '', ptAmount: '', remarks: '' }]);
            }
            if (recordForEdit.professionalRates && Array.isArray(recordForEdit.professionalRates)) {
                setSalaryInfo(recordForEdit.professionalRates);
            } else {
                setSalaryInfo([{ salary: '', ptAmount: '', remarks: '' }]);
            }

            if (recordForEdit.doc) {
                setDocUrl(recordForEdit.doc); // For preview/download
            }
            if (recordForEdit.regFormDoc) {
                setRegFormDocUrl(recordForEdit.regFormDoc); // For preview/download
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
            setRegFormDoc(file);
            setDocUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
            setRegFormDocUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
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
        formData.append('registrationForm', registrationForm);
        formData.append('websiteLink', websiteLink);
        formData.append('dateOfDeduction', dateOfDeduction);
        formData.append('lastDateRemittance', lastDateRemittance);
        formData.append('exemption', exemption);
        formData.append('registrationProcess', registrationProcess);
        formData.append('activity', activity);
        formData.append('note', note);
        formData.append('salary', salary);
        formData.append('ptAmount', ptAmount);
        formData.append('remarks', remarks);
        formData.append('status', status);
        formData.append('salaryInfo', JSON.stringify(salaryInfo));

        if (doc) {
            formData.append('doc', doc);
        }
        if (regFormDoc) {
            formData.append('regFormDoc', regFormDoc);
        }

        if (recordForEdit?._id) {
            dispatch(professionalTaxLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(professionalTaxLibraryCreate(formData));
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
        setRegFormDoc(null);
        setRegFormDocUrl(''); // Reset file URL
        setApplicability('');
        setWebsiteLink('');
        setDateOfDeduction('');
        setLastDateRemittance('');
        setExemption('');
        setRegistrationForm('');
        setRegistrationProcess('');
        setActivity('');
        setNote('');
        setSalary('');
        setPtAmount('');
        setRemarks('');
        setStatus(true);
        setSalaryInfo([
            { salary: '', ptAmount: '', remarks: '' }
        ])
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
                                Create New Professional Tax E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Professional Tax E-Library
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
                                <option value="">Select Applicability</option>
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
                                    <label className="form-label">Exemption *</label>
                                    <input
                                        type="text"
                                        id="exemption"
                                        name="exemption"
                                        className="form-control"
                                        placeholder="Enter exemption"
                                        value={exemption}
                                        onChange={(e) => setExemption(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Registration Form *</label>
                                    <input
                                        id="registrationForm"
                                        name="registrationForm"
                                        className="form-control"
                                        placeholder="Enter Form"
                                        value={registrationForm}
                                        onChange={(e) => setRegistrationForm(e.target.value)}
                                        required
                                    />

                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Registration Form Upload *</label>
                                    <input
                                        type="file"
                                        name="regFormDoc"
                                        className="form-control"
                                        accept="image/*,application/pdf"
                                        onChange={handleFileUpload}
                                        required={!recordForEdit}
                                    />

                                    {recordForEdit && regFormDocUrl && (
                                        <div>
                                            <a href={regFormDocUrl} target="_blank" rel="noopener noreferrer">
                                                View File
                                            </a>
                                        </div>
                                    )}
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
                                    <label className="form-label">Registration Process *</label>
                                    <input
                                        type="text"
                                        id="registrationProcess"
                                        name="registrationProcess"
                                        className="form-control"
                                        placeholder="Enter Registration Process"
                                        value={registrationProcess}
                                        onChange={(e) => setRegistrationProcess(e.target.value)}
                                    />
                                </div>

                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Activity *</label>
                                    <input
                                        type="text"
                                        id="activity"
                                        name="activity"
                                        className="form-control"
                                        placeholder="Enter Activity"
                                        value={activity}
                                        onChange={(e) => setActivity(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-12 md-12">
                                    <label className="form-label">Note *</label>
                                    <textarea
                                        type="number"
                                        id="note"
                                        name="note"
                                        className="form-control"
                                        placeholder="Enter Note"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        required
                                    />
                                </div>


                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Deduction Date *</label>
                                    <DatePicker
                                        id="dateOfDeduction"
                                        name="dateOfDeduction"
                                        className="form-control"
                                        value={dateOfDeduction ? dayjs(dateOfDeduction) : null}
                                        onChange={(date, dateString) => setDateOfDeduction(dateString)}
                                        required
                                    />
                                </div>
                                <div className="col-lg-6 md-12">
                                    <label className="form-label">Last Date For Remittance *</label>
                                    <DatePicker
                                        id="lastDateRemittance"
                                        name="lastDateRemittance"
                                        className="form-control"
                                        value={lastDateRemittance ? dayjs(lastDateRemittance) : null}
                                        onChange={(date, dateString) => setLastDateRemittance(dateString)}
                                        required
                                    />
                                </div>
                                {/* {JSON.stringify(salaryInfo)} */}
                                {salaryInfo.map((entry, index) => (
                                    <div key={index} className="row align-items-end mb-3">
                                        <div className="col-md-4">
                                            <label className="form-label">Salary *</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={entry.salary}
                                                onChange={(e) => handleSalaryChange(index, 'salary', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Professional Tax Amount *</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={entry.ptAmount}
                                                onChange={(e) => handleSalaryChange(index, 'ptAmount', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label">Remarks *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={entry.remarks}
                                                onChange={(e) => handleSalaryChange(index, 'remarks', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-1">
                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    className="btn btn-danger"
                                                    onClick={() => removeSalaryField(index)}
                                                >
                                                    &times;
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <div className="mb-4">
                                    <button type="button" className="btn btn-primary" onClick={addSalaryField}>
                                        + Add Another
                                    </button>
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

export default PTCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

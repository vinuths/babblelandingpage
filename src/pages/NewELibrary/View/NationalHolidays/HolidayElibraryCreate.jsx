import React, { useState, useEffect } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateGets, holidayLibraryCreate, holidayLibraryUpdate } from '../../../../store/actions/otherActions';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
dayjs.extend(weekday);
dayjs.extend(localeData);


const HolidayElibraryCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector(state => state.getState);

    const [state, setState] = useState('');
    const [year, setYear] = useState('');
    const [effectiveDate, setEffectiveDate] = useState('');
    const [holidayDate, setHolidayDate] = useState('');
    const [holiday, setHoliday] = useState('');
    const [holidayDay, setHolidayDay] = useState('');
    const [holidaytype, setHolidaytype] = useState('');
    const [holidayRemarks, setHolidayRemarks] = useState('');
    const [description, setDescription] = useState('');
    const [doc, setDoc] = useState(null);
    const [docUrl, setDocUrl] = useState(''); // Store the file URL here
    const [status, setStatus] = useState(true);

    const [holidayDetails, setHolidayDetails] = useState([
        { holiday: '', ptAmount: '', holidayDay: '', holidaytype: '', holidayDate: '', holidayRemarks: '' }
    ]);
    const handleHolidayChange = (index, field, value) => {
        const updatedInfo = [...holidayDetails];
        updatedInfo[index][field] = value;
        setHolidayDetails(updatedInfo);
    };

    const addHolidayField = () => {
        setHolidayDetails([...holidayDetails, { holiday: '', ptAmount: '', holidayDay: '', holidaytype: '', holidayDate: '', holidayRemarks: '' }]);
    };

    const removeHolidayField = (index) => {
        const updatedInfo = [...holidayDetails];
        updatedInfo.splice(index, 1);
        setHolidayDetails(updatedInfo);
    };

    useEffect(() => {
        dispatch(stateGets());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setState(recordForEdit.state || '');
            setYear(recordForEdit.year || '');
            setEffectiveDate(recordForEdit.effectiveDate || '');
            setDescription(recordForEdit.description || '');
            setStatus(recordForEdit.status || false);
            setHolidayDate(recordForEdit.holidayDate || '');
            setHoliday(recordForEdit.holiday || '');
            setHolidayDay(recordForEdit.holidayDay || '');
            setHolidaytype(recordForEdit.holidaytype || '');
            setHolidayRemarks(recordForEdit.holidayRemarks || '');
            if (recordForEdit.doc) {
                setDocUrl(recordForEdit.doc); // If recordForEdit contains doc, set the URL
            }
            if (recordForEdit.holidayDetails && Array.isArray(recordForEdit.holidayDetails)) {
                setHolidayDetails(recordForEdit.holidayDetails);
            } else {
                setHolidayDetails([{ holiday: '', ptAmount: '', holidayDay: '', holidaytype: '', holidayDate: '', holidayRemarks: '' }]);
            }

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
        formData.append('year', year);
        formData.append('effectiveDate', effectiveDate);
        formData.append('description', description);
        formData.append('status', status);
        // formData.append('holidayDate', holidayDate);
        // formData.append('holiday', holiday);
        // formData.append('holidayDay', holidayDay);
        // formData.append('holidaytype', holidaytype);
        // formData.append('holidayRemarks', holidayRemarks);
        formData.append('holidayDetails', JSON.stringify(holidayDetails));


        if (doc) {
            formData.append('doc', doc);
        }

        if (recordForEdit?._id) {
            dispatch(holidayLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(holidayLibraryCreate(formData));
            // console.log("payload",formData);

        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);

        setState('');
        setYear('');
        setEffectiveDate('');
        setDescription('');
        setStatus(true);
        setDoc(null);
        setDocUrl(''); // Reset file URL
        setHolidayDate('');
        setHoliday('');
        setHolidayDay('');
        setHolidaytype('');
        setHolidayRemarks('');
        setHolidayDetails([
            {
                holiday: '',
                holidayDate: '',
                ptAmount: '',
                holidayDay: '',
                holidaytype: '',
                holidayRemarks: ''
            }
        ]);
        // handleClose();
    };

    const tocategorypage = () => {
        addOrEdit();
    };

    return (
        <Container style={{ marginLeft: '-20px' }}>
            <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: 'auto' }}>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                        {!recordForEdit ? (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Create New National Holiday E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit National Holiday E-Library
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

                        <div className="col-lg-6 md-12">
                            <label className="form-label">Year *</label>
                            <DatePicker
                                id="year"
                                name="year"
                                className="form-control"
                                // placeholder="Enter Act Or Rule "
                                value={year ? dayjs(year) : null}
                                onChange={(date, dateString) => setYear(dateString)}
                                picker="year"
                                required
                            />

                        </div>
                        <div className="col-lg-6 md-12">
                            <label className="form-label">Effective Date *</label>
                            <DatePicker
                                id="effectiveDate"
                                name="effectiveDate"
                                className="form-control"
                                value={effectiveDate ? dayjs(effectiveDate) : null}
                                onChange={(date, dateString) => setEffectiveDate(dateString)}
                                required
                            />

                        </div>

                        <div className="col-lg-6 md-12">
                            <label className="form-label">Description *</label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                className="form-control"
                                placeholder="Enter Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>


                        {holidayDetails.map((entry, index) => (
                            <div style={{ border: 'solid 1px #d2d2d2', borderRadius: '10px', backgroundColor: '#f2f2f2', marginTop: '15px', padding: '10px' }}><h5 style={{ textAlign: 'center', marginTop: '10px', color: '#013879', textDecoration: 'underline' }}>Holiday set-{index + 1}</h5>
                                <div key={index} className="row">
                                    <div className="col-lg-6 md-12">
                                        <label className="form-label">Holiday *</label>
                                        <input
                                            type="text"
                                            id="holiday"
                                            name="holiday"
                                            className="form-control"
                                            placeholder="Enter Holiday"
                                            value={entry.holiday}
                                            // onChange={(e) => setHoliday(e.target.value)}
                                            onChange={(e) => handleHolidayChange(index, 'holiday', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-4 md-12">
                                        <label className="form-label">Holiday Date *</label>
                                        <DatePicker
                                            className="form-control"
                                            value={entry.holidayDate ? dayjs(entry.holidayDate) : null}
                                            onChange={(date, dateString) => {
                                                const updatedDetails = [...holidayDetails];
                                                if (date) {
                                                    updatedDetails[index].holidayDate = dateString;
                                                    updatedDetails[index].holidayDay = dayjs(date).format('dddd');
                                                } else {
                                                    updatedDetails[index].holidayDate = '';
                                                    updatedDetails[index].holidayDay = '';
                                                }
                                                setHolidayDetails(updatedDetails);
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 md-12">
                                        <label className="form-label">Holiday Day *</label>
                                        <input
                                            type="text"
                                            id="holidayDay"
                                            name="holidayDay"
                                            className="form-control"
                                            placeholder="Select Holiday Date"
                                            value={entry.holidayDay}
                                            onChange={(e) => handleHolidayChange(index, 'holidayDay', e.target.value)}

                                        />
                                    </div>
                                    <div className="col-lg-6 md-12">
                                        <label className="form-label">Holiday Type *</label>
                                        <input
                                            type="text"
                                            id="holidaytype"
                                            name="holidaytype"
                                            className="form-control"
                                            placeholder="Enter Type of Holiday"
                                            value={entry.holidaytype}
                                            onChange={(e) => handleHolidayChange(index, 'holidaytype', e.target.value)}

                                        />
                                    </div>
                                    <div className="col-lg-6 md-12">
                                        <label className="form-label">Holiday Remarks *</label>
                                        <textarea
                                            type="text"
                                            id="holidayRemarks"
                                            name="holidayRemarks"
                                            className="form-control"
                                            placeholder="Enter Remarks for Holiday"
                                            value={entry.holidayRemarks}
                                            onChange={(e) => handleHolidayChange(index, 'holidayRemarks', e.target.value)}

                                        />
                                    </div>
                                    <div className="col-md-1" style={{ marginTop: '40px', marginLeft: '120px' }}>
                                        {index > 0 && (
                                            <button
                                                type="button"
                                                className="btn btn-danger"
                                                style={{ width: '200px' }}
                                                onClick={() => removeHolidayField(index)}
                                            >
                                                Remove &times;
                                            </button>
                                        )}
                                    </div>

                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12 md-12">
                            <button type="button" className="btn btn-primary col-lg-12 md-12" onClick={addHolidayField}>
                                + Add Another
                            </button>
                        </div>
                        <div className="col-lg-12 md-12">
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
                                        {year}
                                    </a>
                                </div>
                            )}
                        </div>

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

export default HolidayElibraryCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

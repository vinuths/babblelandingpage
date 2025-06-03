import React, { useState, useEffect } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateGets, WHAndLRLibraryPaginatedGet, WHAndLRLibraryUpdate, WHAndLRLibraryCreate } from '../../../../store/actions/otherActions';

const WH_LRCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector(state => state.getState);

    const [state, setState] = useState('');
    const [TypeOfLeave, setTypeOfLeave] = useState('');
    const [leaveEntitlement, setLeaveEntitlement] = useState('');
    const [MaxCarryFowDays, setMaxCarryFowDays] = useState('');
    const [normalWorkingHours, setNormalWorkingHours] = useState('');
    const [intervalForRest, setIntervalForRest] = useState('');
    const [maximumOverTimeHours, setMaximumOverTimeHours] = useState('');
    const [spreadOverHours, setSpreadOverHours] = useState('');
    const [rateOfOTWages, setRateOfOTWages] = useState('');
    const [descriptionMain, setDescriptionMain] = useState('');
    // const [doc, setDoc] = useState(null);
    // const [docUrl, setDocUrl] = useState(''); // Store the file URL here
    const [status, setStatus] = useState(true);

    useEffect(() => {
        dispatch(stateGets());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setState(recordForEdit.state || '');
            setTypeOfLeave(recordForEdit.TypeOfLeave || '');
            setLeaveEntitlement(recordForEdit.leaveEntitlement || '');
            setMaxCarryFowDays(recordForEdit.MaxCarryFowDays || '');
            setNormalWorkingHours(recordForEdit.normalWorkingHours || '');
            setIntervalForRest(recordForEdit.intervalForRest || '');
            setMaximumOverTimeHours(recordForEdit.maximumOverTimeHours || '');
            setSpreadOverHours(recordForEdit.spreadOverHours || '');
            setRateOfOTWages(recordForEdit.rateOfOTWages || '');
            setDescriptionMain(recordForEdit.descriptionMain || '');
            setStatus(recordForEdit.status || false);
            // if (recordForEdit.doc) {
                // setDocUrl(recordForEdit.doc); // If recordForEdit contains doc, set the URL
            // }
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
            // setDoc(file);
            // setDocUrl(URL.createObjectURL(file)); // Create a temporary URL for the uploaded file
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
        formData.append('TypeOfLeave', TypeOfLeave);
        formData.append('MaxCarryFowDays', MaxCarryFowDays);
        formData.append('normalWorkingHours', normalWorkingHours);
        formData.append('intervalForRest', intervalForRest);
        formData.append('maximumOverTimeHours', maximumOverTimeHours);
        formData.append('spreadOverHours', spreadOverHours);
        formData.append('rateOfOTWages', rateOfOTWages);
        formData.append('leaveEntitlement', leaveEntitlement);
        formData.append('descriptionMain', descriptionMain);
        formData.append('status', status);
        // if (doc) {
        //     formData.append('doc', doc);
        // }

        if (recordForEdit?._id) {
            dispatch(WHAndLRLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(WHAndLRLibraryCreate(formData));
        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);

        setState('');
        setLeaveEntitlement('');
        setMaxCarryFowDays('');
        setNormalWorkingHours('');
        setIntervalForRest('');
        setMaximumOverTimeHours('');
        setSpreadOverHours('');
        setRateOfOTWages('');
        setDescriptionMain('');
        setTypeOfLeave('');
        setStatus('');
        // setDoc(null);
        // setDocUrl(''); // Reset file URL
        // handleClose();
    };

        const tocategorypage = () => {
        addOrEdit();
       // navigate('/elibrary/View/Acts');
    };

    return (
        <Container style={{ marginLeft: '-20px' }}>
            <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: 'auto' }}>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data">
                        {!recordForEdit ? (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Create New Working Hours & Leave Rules E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit New Working Hours & Leave Rules E-Library
                            </h2>
                        )}

                        <div className="col-md-12 mb-2">
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

                        <div className="col-12 mb-2">
                            <label className="form-label">Type of Leave *</label>
                            <input
                                type="text"
                                id="TypeOfLeave"
                                name="TypeOfLeave"
                                className="form-control"
                                placeholder="Enter Type of Leave"
                                value={TypeOfLeave}
                                onChange={(e) => setTypeOfLeave(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Leave Entitlement *</label>
                            <input
                                type="text"
                                id="leaveEntitlement"
                                name="leaveEntitlement"
                                className="form-control"
                                placeholder="Enter Type of Leave"
                                value={leaveEntitlement}
                                onChange={(e) => setLeaveEntitlement(e.target.value)}
                                required
                            />
                        </div>

                        {/* <div className="col-12 mb-2">
                            <label className="form-label">Description *</label>
                            <input
                                type="text"
                                id="descriptionMain"
                                name="descriptionMain"
                                className="form-control"
                                placeholder="Enter Description"
                                value={descriptionMain}
                                onChange={(e) => setDescriptionMain(e.target.value)}
                                required
                            />
                        </div> */}
                        <div className="col-12 mb-2">
                            <label className="form-label">Maximum Carry Forward Days *</label>
                            <input
                                type="text"
                                id="MaxCarryFowDays"
                                name="MaxCarryFowDays"
                                className="form-control"
                                placeholder="Enter Days"
                                value={MaxCarryFowDays}
                                onChange={(e) => setMaxCarryFowDays(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Normal Working Hours *</label>
                            <input
                                type="text"
                                id="normalWorkingHours"
                                name="normalWorkingHours"
                                className="form-control"
                                placeholder="Enter Hours"
                                value={normalWorkingHours}
                                onChange={(e) => setNormalWorkingHours(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Interval For Rest *</label>
                            <input
                                type="text"
                                id="intervalForRest"
                                name="intervalForRest"
                                className="form-control"
                                placeholder="Enter Interval For Rest"
                                value={intervalForRest}
                                onChange={(e) => setIntervalForRest(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Maximum Over-Time Hours *</label>
                            <input
                                type="text"
                                id="maximumOverTimeHours"
                                name="maximumOverTimeHours"
                                className="form-control"
                                placeholder="Enter Hours"
                                value={maximumOverTimeHours}
                                onChange={(e) => setMaximumOverTimeHours(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Spread Over Hours *</label>
                            <input
                                type="text"
                                id="spreadOverHours"
                                name="spreadOverHours"
                                className="form-control"
                                placeholder="Enter Hours"
                                value={spreadOverHours}
                                onChange={(e) => setSpreadOverHours(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Rate Of OT-Wages *</label>
                            <input
                                type="text"
                                id="rateOfOTWages"
                                name="rateOfOTWages"
                                className="form-control"
                                placeholder="Enter OT-Wages"
                                value={rateOfOTWages}
                                onChange={(e) => setRateOfOTWages(e.target.value)}
                                required
                            />
                        </div>

                        {/* <div className="col-12 mb-2">
                            <label className="form-label">Upload Document *</label>
                            <input
                                type="file"
                                name="doc"
                                className="form-control"
                                accept="image/*,application/pdf"
                                onChange={handleFileUpload}
                                required={!recordForEdit}
                            />
                        </div> */}

                        {/* {recordForEdit && docUrl && (
                            <div>
                                <a href={docUrl} target="_blank" rel="noopener noreferrer">
                                    {TypeOfLeave}
                                </a>
                            </div>
                        )} */}

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

export default WH_LRCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

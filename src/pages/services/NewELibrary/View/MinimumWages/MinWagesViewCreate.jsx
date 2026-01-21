import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';    // default import
import { styled } from '@mui/material/styles';      // styled from styles
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { stateGets, minimumWagesLibraryCreate, minimumWagesLibraryUpdate } from '../../../../../store/actions/otherActions';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
dayjs.extend(weekday);
dayjs.extend(localeData);


const MinWagesViewCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { stateInfo } = useSelector(state => state.getState);

    const [state, setState] = useState('');
    const [effectiveDate, setEffectiveDate] = useState(null);
    const [classOfEmployment, setClassOfEmployment] = useState('');
    const [grade, setGrade] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [descriptionMain, setDescriptionMain] = useState('');
    const [zone, setZone] = useState('');
    const [category, setCategory] = useState('');
    const [district, setDistrict] = useState('');
    const [qual_and_exp, setQualAndExp] = useState('');
    const [classOfWorkers, setClassOfWorkers] = useState('');
    const [designation, setDesignation] = useState('');
    const [BFTP, setBFTP] = useState('');
    const [basicGeneral, setBasicGeneral] = useState('');
    const [basicIT, setBasicIT] = useState('');
    const [DAGeneral, setDAGeneral] = useState('');
    const [DAIT, setDAIT] = useState('');
    const [specialAllowance, setSpecialAllowance] = useState('');
    const [minWagesGen, setMinWagesGen] = useState('');
    const [minWagesIT, setMinWagesIT] = useState('');
    const [basicPerDay, setBasicPerDay] = useState('');
    const [vdaPerDay, setVdaPerDay] = useState('');
    const [basicPerMonth, setBasicPerMonth] = useState('');
    const [vdaPerMonth, setVdaPerMonth] = useState('');
    const [hraPerMonth, setHraPerMonth] = useState('');
    const [totalPerDay, setTotalPerDay] = useState('');
    const [totalPerMonth, setTotalPerMonth] = useState('');
    const [doc, setDoc] = useState(null);
    const [docUrl, setDocUrl] = useState('');
    const [status, setStatus] = useState(true);



    useEffect(() => {
        dispatch(stateGets());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setState(recordForEdit.state || '');
            setEffectiveDate(recordForEdit.effectiveDate || null);
            setClassOfEmployment(recordForEdit.classOfEmployment || '');
            setGrade(recordForEdit.grade || '');
            setSubCategory(recordForEdit.subCategory || '');
            setDescriptionMain(recordForEdit.descriptionMain || '');
            setZone(recordForEdit.zone || '');
            setCategory(recordForEdit.category || '');
            setDistrict(recordForEdit.district || '');
            setQualAndExp(recordForEdit.qual_and_exp || '');
            setClassOfWorkers(recordForEdit.classOfWorkers || '');
            setDesignation(recordForEdit.designation || '');
            setBFTP(recordForEdit.BFTP || '');
            setBasicGeneral(recordForEdit.basicGeneral || '');
            setBasicIT(recordForEdit.basicIT || '');
            setDAGeneral(recordForEdit.DAGeneral || '');
            setDAIT(recordForEdit.DAIT || '');
            setSpecialAllowance(recordForEdit.specialAllowance || '');
            setMinWagesGen(recordForEdit.minWagesGen || '');
            setMinWagesIT(recordForEdit.minWagesIT || '');
            setBasicPerDay(recordForEdit.basicPerDay || '');
            setVdaPerDay(recordForEdit.vdaPerDay || '');
            setBasicPerMonth(recordForEdit.basicPerMonth || '');
            setVdaPerMonth(recordForEdit.vdaPerMonth || '');
            setHraPerMonth(recordForEdit.hraPerMonth || '');
            setTotalPerDay(recordForEdit.totalPerDay || '');
            setTotalPerMonth(recordForEdit.totalPerMonth || '');
            setStatus(recordForEdit.status || false);

            if (recordForEdit.doc) {
                setDocUrl(recordForEdit.doc);
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
        formData.append('effectiveDate', effectiveDate);
        formData.append('classOfEmployment', classOfEmployment);
        formData.append('grade', grade);
        formData.append('subCategory', subCategory);
        formData.append('descriptionMain', descriptionMain);
        formData.append('zone', zone);
        formData.append('category', category);
        formData.append('district', district);
        formData.append('qual_and_exp', qual_and_exp);
        formData.append('classOfWorkers', classOfWorkers);
        formData.append('designation', designation);
        formData.append('BFTP', BFTP);
        formData.append('basicGeneral', basicGeneral);
        formData.append('basicIT', basicIT);
        formData.append('DAGeneral', DAGeneral);
        formData.append('DAIT', DAIT);
        formData.append('specialAllowance', specialAllowance);
        formData.append('minWagesGen', minWagesGen);
        formData.append('minWagesIT', minWagesIT);
        formData.append('basicPerDay', basicPerDay);
        formData.append('vdaPerDay', vdaPerDay);
        formData.append('basicPerMonth', basicPerMonth);
        formData.append('vdaPerMonth', vdaPerMonth);
        formData.append('hraPerMonth', hraPerMonth);
        formData.append('totalPerDay', totalPerDay);
        formData.append('totalPerMonth', totalPerMonth);
        formData.append('status', status);

        if (doc) {
            formData.append('doc', doc);
        }

        if (recordForEdit?._id) {
            dispatch(minimumWagesLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(minimumWagesLibraryCreate(formData));

            //   dispatch(minimumWagesLibraryCreate(formData));
        }

        if (typeof setLocalPage === "function") {
            setLocalPage(1);
        }

        // Reset all fields
        setState('');
        setEffectiveDate(null);
        setClassOfEmployment('');
        setGrade('');
        setSubCategory('');
        setDescriptionMain('');
        setZone('');
        setCategory('');
        setDistrict('');
        setQualAndExp('');
        setClassOfWorkers('');
        setDesignation('');
        setBFTP('');
        setBasicGeneral('');
        setBasicIT('');
        setDAGeneral('');
        setDAIT('');
        setSpecialAllowance('');
        setMinWagesGen('');
        setMinWagesIT('');
        setBasicPerDay('');
        setVdaPerDay('');
        setBasicPerMonth('');
        setVdaPerMonth('');
        setHraPerMonth('');
        setTotalPerDay('');
        setTotalPerMonth('');
        setDoc(null);
        setDocUrl('');
        setStatus(true);
    };


        const tocategorypage = () => {
        addOrEdit();
       // navigate('/elibrary/View/Minimum_Wages');
    };
    // const colClass =
    //     applicability === true
    //         ? "col-lg-6"
    //         : (applicability === false || applicability === '' || applicability === null)
    //             ? "col-lg-12"
    //             : "col-lg-6";

    return (
        <Container style={{ marginLeft: '-20px' }}>
            <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: 'auto' }}>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit} encType="multipart/form-data" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault(); // Prevent Enter from submitting
                        }
                    }}>
                        {!recordForEdit ? (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Create New Minimum Wage E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Minimum Wage E-Library
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
                        {/* Effective Date */}
                        <div className="col-md-12 col-lg-6 md-12">
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

                        {/* Minimum Wage Notification */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Minimum Wage Notification *</label>
                            <input
                                type="file"
                                className="form-control"
                                name='doc'
                                // value={doc}
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

                        {/* Class of Employment */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Class of Employment *</label>
                            <input
                                type="text"
                                name='classOfEmployment'
                                className="form-control"
                                value={classOfEmployment}
                                onChange={(e) => setClassOfEmployment(e.target.value)}
                                required
                            />
                        </div>

                        {/* Grade */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Grade *</label>
                            <select
                                type="text"
                                name='grade'
                                className="form-select"
                                value={grade}
                                onChange={(e) => setGrade(e.target.value)}
                                required
                            >
                                <option value="">Select Grade</option>
                                <option value="No Grade">No Grade </option>
                                <option value="Grade A">Grade A</option>
                                <option value="Grade C">Grade C</option>
                                <option value="Grade D">Grade D</option>
                                <option value="Grade E">Grade E</option>
                                <option value="Grade F">Grade F</option>
                                <option value="Grade G">Grade G</option>
                                <option value="Grade H">Grade H</option>
                                <option value="Grade I">Grade I</option>
                                <option value="Special">Special</option>

                            </select>
                        </div>

                        {/* Sub Category */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Sub Category *</label>
                            <input
                                type="text"
                                name='subCategory'
                                className="form-control"
                                value={subCategory}
                                onChange={(e) => setSubCategory(e.target.value)}
                                required
                            />
                        </div>

                        {/* Description Main */}
                        <div className="col-md-12">
                            <label className="form-label">Description *</label>
                            <textarea
                                className="form-control"
                                name='descriptionMain'
                                value={descriptionMain}
                                onChange={(e) => setDescriptionMain(e.target.value)}
                                required
                            />
                        </div>

                        {/* Zone */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Zone *</label>
                            <select
                                type="text"
                                name='zone'
                                className="form-select"
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                                required
                            >
                                <option value="">Select Zone</option>
                                <option value="Zone I">Zone I</option>
                                <option value="Zone II">Zone II</option>
                                <option value="Zone III">Zone III</option>
                                <option value="Zone IV">Zone IV</option>
                            </select>
                        </div>

                        {/* Category */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Category *</label>
                            <input
                                type="text"
                                name='category'
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </div>

                        {/* District */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">District *</label>
                            <input
                                type="text"
                                name='district'
                                className="form-control"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                required
                            />
                        </div>

                        {/* Qualification and Experience */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Qualification and Experience *</label>
                            <input
                                type="text"
                                name='qual_and_exp'
                                className="form-control"
                                value={qual_and_exp}
                                onChange={(e) => setQualAndExp(e.target.value)}
                                required
                            />
                        </div>

                        {/* Class of Workers */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Class of Workers *</label>
                            <input
                                type="text"
                                name='classOfWorkers'
                                className="form-control"
                                value={classOfWorkers}
                                onChange={(e) => setClassOfWorkers(e.target.value)}
                                required
                            />
                        </div>

                        {/* Designation */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Designation *</label>
                            <input
                                type="text"
                                name='designation'
                                className="form-control"
                                value={designation}
                                onChange={(e) => setDesignation(e.target.value)}
                                required
                            />
                        </div>

                        {/* BFTP */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">BFTP *</label>
                            <input
                                type="text"
                                name='BFTP'
                                className="form-control"
                                value={BFTP}
                                onChange={(e) => setBFTP(e.target.value)}
                                required
                            />
                        </div>

                        {/* Basic General */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Basic General *</label>
                            <input
                                type="number"
                                name='basicGeneral'
                                className="form-control"
                                value={basicGeneral}
                                onChange={(e) => setBasicGeneral(e.target.value)}
                                required
                            />
                        </div>

                        {/* Basic IT */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Basic IT *</label>
                            <input
                                type="number"
                                name='basicIT'
                                className="form-control"
                                value={basicIT}
                                onChange={(e) => setBasicIT(e.target.value)}
                                required
                            />
                        </div>

                        {/* DA General */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">DA General *</label>
                            <input
                                type="number"
                                name='DAGeneral'
                                className="form-control"
                                value={DAGeneral}
                                onChange={(e) => setDAGeneral(e.target.value)}
                                required
                            />
                        </div>

                        {/* DA IT */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">DA IT *</label>
                            <input
                                type="number"
                                name='DAIT'
                                className="form-control"
                                value={DAIT}
                                onChange={(e) => setDAIT(e.target.value)}
                                required
                            />
                        </div>

                        {/* Special Allowance */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Special Allowance *</label>
                            <input
                                type="number"
                                name='specialAllowance'
                                className="form-control"
                                value={specialAllowance}
                                onChange={(e) => setSpecialAllowance(e.target.value)}
                                required
                            />
                        </div>

                        {/* Minimum Wages General */}
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Minimum Wages General *</label>
                            <input
                                type="number"
                                name='minWagesGen'
                                className="form-control"
                                value={minWagesGen}
                                onChange={(e) => setMinWagesGen(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Minimum Wages IT *</label>
                            <input
                                type="number"
                                name='minWagesIT'
                                className="form-control"
                                value={minWagesIT}
                                onChange={(e) => setMinWagesIT(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Basic Per Day *</label>
                            <input
                                type="number"
                                name='basicPerDay'
                                className="form-control"
                                value={basicPerDay}
                                onChange={(e) => setBasicPerDay(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">VDA Per Day *</label>
                            <input
                                type="number"
                                name='vdaPerDay'
                                className="form-control"
                                value={vdaPerDay}
                                onChange={(e) => setVdaPerDay(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Basic Per Month *</label>
                            <input
                                type="number"
                                name='basicPerMonth'
                                className="form-control"
                                value={basicPerMonth}
                                onChange={(e) => setBasicPerMonth(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">VDA Per Month *</label>
                            <input
                                type="number"
                                name='vdaPerMonth'
                                className="form-control"
                                value={vdaPerMonth}
                                onChange={(e) => setVdaPerMonth(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">HRA Per Month *</label>
                            <input
                                type="number"
                                name='hraPerMonth'
                                className="form-control"
                                value={hraPerMonth}
                                onChange={(e) => setHraPerMonth(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Total Per Day *</label>
                            <input
                                type="number"
                                name='totalPerDay'
                                className="form-control"
                                value={totalPerDay}
                                onChange={(e) => setTotalPerDay(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-md-12 col-lg-6 md-12">
                            <label className="form-label">Total Per Month *</label>
                            <input
                                type="number"
                                name='totalPerMonth'
                                className="form-control"
                                value={totalPerMonth}
                                onChange={(e) => setTotalPerMonth(e.target.value)}
                                required
                            />
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

export default MinWagesViewCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

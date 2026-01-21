import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';    // default import
import { styled } from '@mui/material/styles';      // styled from styles
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { complianceCategoryCreate, complianceCategoryUpdate } from '../../../../../../store/actions/otherActions';

const CompCatCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [name, setName] = useState('');

    const [status, setStatus] = useState(true);

    useEffect(() => {
        if (recordForEdit) {
            setName(recordForEdit.name || '');
            setStatus(recordForEdit.status || false);

        }
    }, [recordForEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('status', status);
        if (recordForEdit?._id) {
            dispatch(complianceCategoryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(complianceCategoryCreate(formData));
        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);

        setName('');
        setStatus(true);

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
                                Create New Category
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Category
                            </h2>
                        )}


                        <div className="col-12 mb-2">
                            <label className="form-label">Category *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-control"
                                placeholder="Enter Category"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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

export default CompCatCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

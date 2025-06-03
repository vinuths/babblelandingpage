import React, { useState, useEffect } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generalUpdateLibraryCreate, generalUpdateLibraryUpdate } from '../../../../store/actions/otherActions';

const OthersCreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [topic, setTopic] = useState('');
    const [description, setDescription] = useState('');
    const [doc, setDoc] = useState(null);
    const [docUrl, setDocUrl] = useState(''); // Store the file URL here
    const [status, setStatus] = useState(true);


    useEffect(() => {
        if (recordForEdit) {
            setTopic(recordForEdit.topic || '');
            setDescription(recordForEdit.description || '');
            setStatus(recordForEdit.status || false);
            if (recordForEdit.doc) {
                setDocUrl(recordForEdit.doc); // If recordForEdit contains doc, set the URL
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
        formData.append('topic', topic);
        formData.append('description', description);
        formData.append('status', status);
        if (doc) {
            formData.append('doc', doc);
        }

        if (recordForEdit?._id) {
            dispatch(generalUpdateLibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(generalUpdateLibraryCreate(formData));
        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);

        setTopic('');
        setDescription('');
        setStatus(true);
        setDoc(null);
        setDocUrl(''); // Reset file URL
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
                                Create New General E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit General E-Library
                            </h2>
                        )}
                    
                

                        <div className="col-12 mb-2">
                            <label className="form-label">Topic *</label>
                            <input
                                type="text"
                                id="topic"
                                name="topic"
                                className="form-control"
                                placeholder="Enter Topic"
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12 mb-2">
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

                        <div className="col-12 mb-2">
                            <label className="form-label">Upload Document *</label>
                            <input
                                type="file"
                                name="doc"
                                className="form-control"
                                accept="image/*,application/pdf"
                                onChange={handleFileUpload}
                                required={!recordForEdit}
                            />
                        </div>

                        {recordForEdit && docUrl && (
                            <div>
                                <a href={docUrl} target="_blank" rel="noopener noreferrer">
                                    {topic}
                                </a>
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

export default OthersCreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';    // default import
import { styled } from '@mui/material/styles';      // styled from styles
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { categoryGetComplianceList, compQandALibraryCreate, compQandALibraryUpdate } from '../../../../../../store/actions/otherActions';

const CompQACreate = ({ addOrEdit, recordForEdit, setLocalPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const { compCategoryInfo } = useSelector((state) => state.complianceCategoryGetRed);

    const [complianceCategory, setComplianceCategory] = useState('');
    const [topic, setTopic] = useState('');
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    
    const [status, setStatus] = useState(true);

    useEffect(() => {
        dispatch(categoryGetComplianceList());
    }, []);

    useEffect(() => {
        if (recordForEdit) {
            setComplianceCategory(recordForEdit.complianceCategory || '');
            setTopic(recordForEdit.topic || '');
            setQuestion(recordForEdit.question || '');
            setAnswer(recordForEdit.answer || '');
            setStatus(recordForEdit.status || false);
            
        }
    }, [recordForEdit]);


    // const handleClose = () => {
    //     if (typeof setLocalPage === "function") {
    //         addOrEdit();
    //         setLocalPage(0); // go back to list view
    //     }
    // };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('complianceCategory', complianceCategory);
        formData.append('topic', topic);
        formData.append('question', question);
        formData.append('answer', answer);
        formData.append('status', status);
       
        if (recordForEdit?._id) {
            dispatch(compQandALibraryUpdate(formData, recordForEdit._id));
            addOrEdit();
        } else {
            dispatch(compQandALibraryCreate(formData));
        }
        // console.log("hello",typeof setLocalPage, setLocalPage);
        if (typeof setLocalPage === "function") {
            setLocalPage(1); // go back to list view
        }
        // setLocalPage(1);

        setComplianceCategory('');
        setTopic('');
        setQuestion('');
        setAnswer('');
        setStatus('');
       
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
                                Create New Compliance FAQ E-Library
                            </h2>
                        ) : (
                            <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                                Edit Compliance FAQ E-Library
                            </h2>
                        )}
                    
                        <div className="col-md-12 mb-2">
                            <label className="form-label">Category *</label>
                            <select
                                className="form-select"
                                id="complianceCategory"
                                name="complianceCategory"
                                value={complianceCategory}
                                onChange={(e) => setComplianceCategory(e.target.value)}

                            >
                                <option value="">Select Category</option>
                                {compCategoryInfo?.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>

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
                            <label className="form-label">Question *</label>
                            <textarea
                                type="text"
                                id="question"
                                name="question"
                                className="form-control"
                                placeholder="Enter Question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </div>
                        <div className="col-12 mb-2">
                            <label className="form-label">Answer *</label>
                            <textarea
                                type="text"
                                id="answer"
                                name="answer"
                                className="form-control"
                                placeholder="Enter Answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
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

export default CompQACreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top:10px;
    }
`;

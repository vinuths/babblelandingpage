import React, { useState } from 'react';
import { FormGroup, styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HelpAndSupportMail } from '../../store/actions/otherActions';

const Formcreate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // ✅ Added

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('organization', organization);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('message', message);
        
        
        dispatch(HelpAndSupportMail(formData)).then(() => {

        setName('');
        setOrganization('');
        setEmail('');
        setMobile('');
        setMessage('');
        setSuccessMessage('Thank you! Our team will contact you shortly.'); // ✅ Set message

        // Automatically clear message after 5 seconds
        setTimeout(() => {
            setSuccessMessage('');
        }, 5000);
          
        }).catch((error) => {
            console.error('Error submitting form:',error);
        });
    };

    const handleCancel = () => {
        navigate('/');
    };


    return (
        <Container style={{ marginLeft: '70px' }}>
            <div className="dashboard_wrapper col-10" style={{ background: '#f4f6f9', padding: '40px 20px', height: 'auto' }}>
                <div className="container">
                    {/* ✅ Display Success Message */}
                    {successMessage && (
                        <div className="alert alert-success text-center" role="alert">
                            {successMessage}
                        </div>
                    )}

                    <form className="row g-3 " onSubmit={handleSubmit}>
                        <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
                            Help & Support
                        </h2>

                        <div className="col-12 mb-2">
                            <label className="form-label">Your Name *</label>
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12 mb-2">
                            <label className="form-label">Organization Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={organization}
                                onChange={(e) => setOrganization(e.target.value)}
                            />
                        </div>

                        <div className="col-12 mb-2">
                            <label className="form-label">Email *</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12 mb-2">
                            <label className="form-label">Mobile Number *</label>
                            <input
                                type="text"
                                className="form-control"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-12 mb-2">
                            <label className="form-label">Message *</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        {/* <div className="col-md-6">
                            <button type="button" className="w-100 btn btn-dark" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div> */}
                        <div className="col-md-12">
                            <button type="submit" className="w-100 btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Formcreate;

const Container = styled(FormGroup)`
    width: 90%;
    margin: 3% auto 0 0%;
    & > div {
        margin-top: 10px;
    }
`;

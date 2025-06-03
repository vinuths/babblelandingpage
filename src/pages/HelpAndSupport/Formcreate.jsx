// import React, { useState } from 'react';
// import { FormGroup, styled } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { HelpAndSupportMail } from '../../../../store/actions/otherActions';

// const Formcreate = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [name, setName] = useState('');
//     const [organization, setOrganization] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [message, setMessage] = useState('');
    
//     const handleSubmit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('organization', organization);
//         formData.append('email', email);
//         formData.append('mobile', mobile);
//         formData.append('message', message);
//         dispatch(HelpAndSupportMail(formData));
//         setName('');
//         setOrganization('');
//         setEmail('');
//         setMobile('');
//         setMessage('');
//     };

//     const handleCancel = () => {
//         navigate('/elibrary/View'); 
//     };
   
//    return (
//   <Container>
//     <div className="form-wrapper">
//       <form onSubmit={handleSubmit}>
//         <h2>Help & Support</h2>

//         <label className="form-label">Your Name *</label>
//         <input
//           type="text"
//           className="form-control"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <label className="form-label">Organization Name</label>
//         <input
//           type="text"
//           className="form-control"
//           value={organization}
//           onChange={(e) => setOrganization(e.target.value)}
//         />

//         <label className="form-label">Email *</label>
//         <input
//           type="email"
//           className="form-control"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <label className="form-label">Mobile Number *</label>
//         <input
//           type="text"
//           className="form-control"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           required
//         />
//          <label className="form-label">Message *</label>
    
//         <textarea
//           className="form-control"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
             
//         <button type="button" className="btn btn-dark" onClick={handleCancel}>
//           Cancel
//         </button>
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>

          
//             {/* ✅ WhatsApp Floating Chat Button */}
//             {/* <a
//   href="https://wa.me/919876543210?text=Hello%2C%20I%20need%20support%20with%20your%20application"
//   target="_blank"
//   rel="noopener noreferrer"
//   style={{
//     position: 'fixed',
//     bottom: '20px',
//     right: '20px',
//     backgroundColor: 'white',
//     borderRadius: '50%',
//     width: '60px',
//     height: '60px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 1000,
//     boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
//   }}
//   title="Chat with us on WhatsApp"
// >
//   <img
//     src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//     alt="WhatsApp"
//     style={{ width: '50px', height: '50px' }}
//   />
// </a> */}


//             {/* Gmail Floating Contact Button */}
// {/* <a
//   href="mailto:support@yourcompany.com?subject=Help%20and%20Support%20Request&body=Hi%20Team%2C%0A%0AI%20need%20help%20with%20your%20application.%20Here%20are%20the%20details%3A%0A%0A-%20Name%3A%20%0A-%20Issue%3A%20%0A-%20Steps%20to%20Reproduce%3A%20%0A%0AThanks%2C%0A[Your%20Name]"
//   style={{
//     position: 'fixed',
//     bottom: '90px',
//     right: '20px',
//     backgroundColor: '#EA4335',
//     color: 'white',
//     padding: '14px',
//     borderRadius: '50%',
//     fontSize: '20px',
//     textAlign: 'center',
//     zIndex: 1000,
//     boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
//     textDecoration: 'none',
//   }}
//   title="Email us"
// >
//   📧
// </a> */}

//         </Container>
//     );          
// };

// export default Formcreate;

// const Container = styled('div')`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   background: linear-gradient(35deg, #0f2027, #203a43, #2c5364); /* dark gradient */
 

//   .form-wrapper {
//     background: rgba(0, 0, 0, 0.5);
//     backdrop-filter: blur(12px);
//     border-radius: 20px;
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
//     padding: 50px 40px;
//     width: 100%;
//     max-width: 600px;
//     animation: fadeIn 0.5s ease;
//     font-family: 'Poppins', sans-serif;
//     color:rgb(253, 251, 251);
//   }

//   h2 {
//     text-align: center;
//     color: #64ffda;
//     font-weight: 700;
//    font-size:28px;
//   }
//   .form-label {
//     font-weight: 500;
//     color: #b0bec5;
//     margin-bottom: 8px;
//     display: block;
//   }

//   .form-control {
//     width: 100%;
//     padding: 14px;
//     margin-bottom: 20px;
//     border-radius: 10px;
//     border: 1px solid #455a64;
//     font-size: 16px;
//     background-color: #1c1c1c;
//     color: #ffffff;
//     transition: border 0.3s ease, box-shadow 0.3s ease;
//   }

//   .form-control:focus {
//     border-color: #64ffda;
//     box-shadow: 0 0 8px #64ffda80;
//     outline: none;
//     background-color: #222;
//   }

//   textarea.form-control {
//     min-height: 120px;
//     resize: vertical;
//   }

//   .btn {
//     width: 100%;
//     padding: 14px;
//     font-size: 16px;
//     border: none;
//     border-radius: 10px;
//     font-weight: bold;
//     margin-top: 10px;
//     transition: 0.3s ease;
//     text-transform: uppercase;
//     letter-spacing: 1px;
//   }

//   .btn-dark {
//     background-color: #37474f;
//     color: #fff;
//   }

//   .btn-dark:hover {
//     background-color: #263238;
//   }

//   .btn-primary {
//     background: linear-gradient(to right, #00c6ff, #0072ff);
//     color: #fff;
//     box-shadow: 0 0 10px #00c6ff80;
//   }

//   .btn-primary:hover {
//     background: linear-gradient(to right, #0072ff, #005bea);
//     box-shadow: 0 0 15px #00c6ffb3;
//   }

//   @media (max-width: 768px) {
//     .form-wrapper {
//       padding: 30px 20px;
//     }
//   }

//   @keyframes fadeIn {
//     from {
//       transform: translateY(20px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0);
//       opacity: 1;
//     }
//   }

//   .input-with-icon {
//     position: relative;
//   }

//   .input-with-icon .input-icon {
//     position: absolute;
//     top: 50%;
//     left: 14px;
//     transform: translateY(-50%);
//     font-size: 18px;
//     color: #78909c;
//   }
   
//   .input-with-icon .form-control {
//     padding-left: 44px; /* space for icon */
//   }
// `;

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('organization', organization);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('message', message);

        dispatch(HelpAndSupportMail(formData));

        setName('');
        setOrganization('');
        setEmail('');
        setMobile('');
        setMessage('');
    };

    const handleCancel = () => {
        navigate('/elibrary');
    };

    return (
        <Container style={{ marginLeft: '-20px' }}>
            <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: '85vh' }}>
                <div className="container">
                    <form className="row g-3" onSubmit={handleSubmit}>
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

                        <div className="col-md-6">
                            <button type="button" className="w-100 btn btn-dark" onClick={handleCancel}>
                                Cancel
                            </button>
                        </div>
                        <div className="col-md-6">
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

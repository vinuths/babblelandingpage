import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { categoryGetComplianceList } from "../../../../../store/actions/otherActions";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CompQACato = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { compCategoryInfo } = useSelector((state) => state.complianceCategoryGetRed);

    useEffect(() => {
        dispatch(categoryGetComplianceList());
    }, [dispatch]);

    return (
        <div style={{ background: '#f4f6f9', padding: '40px 20px', marginLeft: '50px', marginTop: '0px', width: '92%' }}>
            <div className="container">
                <div className="row">
                    <div className="col-1">
                        <button onClick={() => navigate("/elibrary/View")} className="back-button" style={{ position: 'relative', top: '0px', marginLeft: '-10px' }}>
                            <ArrowBackIcon />
                        </button>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-6"><h3 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '30px', textDecoration: 'underline' }}>
                        Search By Categories
                    </h3></div>
                </div>



                <div className="row justify-content-center">
                    {compCategoryInfo?.map((cat) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={cat._id}>
                            <button
                                onClick={() => navigate(`/elibrary/View/Compliance/${cat._id}`)}
                                style={{
                                    width: '100%',
                                    padding: '4px 2px',
                                    backgroundColor: 'white',
                                    color: '#013879',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    border: '2px solid #013879',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#013879';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'White';
                                    e.currentTarget.style.color = '#013879';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                {cat.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompQACato;

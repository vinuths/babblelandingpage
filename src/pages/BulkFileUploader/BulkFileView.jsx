import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import BulkFileTable from './BulkFileTable';
import { bulkZipsGetAll } from "../../store/actions/otherActions";

function BulkFileView() {
    const [localPage, setLocalPage] = useState(1);


    const [showModal, setShowModal] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(AllbranchesGet());
        // dispatch(TableBranchesGet());
    }, [dispatch]);

    const calling = () => {
        setTimeout(() => {
            dispatch(bulkZipsGetAll());
        }, 200);
    }

    return (
        <React.Fragment>


            {showModal && (
                <>
                    <div className="modal fade show d-block" style={{ marginLeft: '95px' }} tabIndex="-1" role="dialog">
                        <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" style={{ fontWeight: '700' }}>Important Notice!</h5>
                                </div>
                                <div className="modal-body">
                                    <p>
                                        Files will be saved only for <strong style={{ color: 'red' }}>30 days</strong> from  the Date of Upload. Files above 30+ days will be <b>Deleted Automatically</b> and cannot be recovered.
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}

            {/* ⬇️ EXISTING CODE (UNCHANGED) */}
            <div className='dashboard_wrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul class="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                                <li class="nav-item col-md-12 col-lg-12 col-12" role="presentation">
                                    <button
                                        class="nav-link w-100 active"
                                        id="pills-home-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-home"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        onClick={calling}
                                    >
                                        File Sharing View
                                    </button>
                                </li>
                                {/* <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                                    <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">File Create</button>
                                </li> */}
                            </ul>

                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div class="row">
                                        <div class="col-12 col-lg-12">
                                            <BulkFileTable localPage={localPage} setLocalPage={setLocalPage} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default BulkFileView;

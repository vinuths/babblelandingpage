
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { stateGets, minimumWagesLibraryPaginatedGet } from "../../../../../store/actions/otherActions";
import MinWagesViewTable from './MinWagesViewTable';
import MinWagesViewCreate from './MinWagesViewCreate';



function MinWagesView() {
  const [localPage, setLocalPage] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    // dispatch(AllbranchesGet());
    // dispatch(TableBranchesGet());
  }, [dispatch]);


  const calling = () => {
    setTimeout(() => {
      dispatch(minimumWagesLibraryPaginatedGet(1, 20));
      // setLocalPage(1)
      dispatch(stateGets());

    }, 200);

  }

  return (

    <React.Fragment>
      <div className='dashboard_wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul class="nav nav-pills mb-3 bg-light" id="pills-tab" role="tablist">
                {/* <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={calling}>View All Minimum Wages</button>
                </li>
                <li class="nav-item col-md-6 col-lg-6 col-12" role="presentation">
                  <button class="nav-link w-100" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Create New Minimum Wage</button>
                </li> */}

              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <div class="row">
                    <div class="col-12 col-lg-12" >
                      <MinWagesViewTable localPage={localPage} setLocalPage={setLocalPage} />
                    </div>
                  </div>
                </div>
                {/* <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                  <MinWagesViewCreate setLocalPage={setLocalPage} />
                </div> */}

              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default MinWagesView;

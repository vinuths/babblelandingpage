import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewElibrary = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Acts", path: "/elibrary/View/Acts" },
    { label: "Rules", path: "/elibrary/View/Rules" },
    { label: "Labour Forms", path: "/elibrary/View/Labour_Forms" },
    { label: "National & Festival Holidays", path: "/elibrary/View/National_&_Festival_Holidays" },
    
    { label: "Labour Welfare Fund", path: "/elibrary/View/Labour_Welfare_Fund" },
    { label: "Minimum Wages", path: "/elibrary/View/Minimum_Wages" },
    { label: "Working Hours & Leave Rules", path: "/elibrary/View/Working_Hours_&_leave_Rules" },
    { label: "Professional Tax", path: "/elibrary/View/Professional_Tax" },
    
    { label: "Compliance Q&A Hub", path: "/elibrary/View/Compliance" },
    { label: "Policy Templates", path: "/elibrary/View/Policy_Templates" },
    { label: "Recent Legal Updates", path: "/elibrary/View/Recent_Legal_Updates" },
    { label: "General", path: "/elibrary/View/Others" },
  ];

  return (
    // <div className='dashboard_wrapper'>
    //   <div className="row" style={{ width: '1300px' }}>
    //     <div className="col-lg-12 col-md-12 col-sm-12">
    //       {/* <div className="table-responsive" style={{width:'1200px'}}> */}
    //       <div className="table  creat_tbl">
    //         <div className="form-group">
    //           <div className="row" >
    //             <div className="elibrary-wrapper" style={{ padding: '40px 20px', background: '#f4f6f9', height: '83vh', width: '1200px', marginLeft: '78px' }}>
    //               <div className="container">
    //                 <h2 style={{ color: '#013879', marginBottom: '30px', fontWeight: '700', textAlign: 'center' }}>
    //                   E-Library Sections
    //                 </h2>
    //                 <div
    //                   className="button-grid"
    //                   style={{
    //                     display: 'flex',
    //                     flexWrap: 'wrap',
    //                     justifyContent: 'center',
    //                     gap: '20px'
    //                   }}
    //                 >
    //                   {buttons.map((btn, index) => (
    //                     <div key={index} style={{ flex: '1 1 250px', maxWidth: '250px' }}>
    //                       <button
    //                         onClick={() => navigate(btn.path)}
    //                         style={{
    //                           width: '100%',
    //                           padding: '30px 20px',
    //                           backgroundColor: '#013879',
    //                           color: '#fff',
    //                           fontSize: '18px',
    //                           fontWeight: '600',
    //                           border: 'none',
    //                           borderRadius: '12px',
    //                           cursor: 'pointer',
    //                           transition: 'all 0.3s ease',
    //                           boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)'
    //                         }}
    //                         onMouseEnter={(e) => {
    //                           e.currentTarget.style.backgroundColor = '#025197';
    //                           e.currentTarget.style.transform = 'translateY(-3px)';
    //                         }}
    //                         onMouseLeave={(e) => {
    //                           e.currentTarget.style.backgroundColor = '#013879';
    //                           e.currentTarget.style.transform = 'translateY(0)';
    //                         }}
    //                       >
    //                         {btn.label}
    //                       </button>
    //                     </div>
    //                   ))}
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="dashboard_wrapper" style={{ background: '#f4f6f9', padding: '40px 20px', height: '75vh !important' }}>
      <div className="container">
        <h2 style={{ color: '#013879', fontWeight: '700', textAlign: 'center', marginBottom: '40px' }}>
          E-Library Sections
        </h2>

        <div className="row justify-content-center">
          {buttons.map((btn, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" key={index}>
              <button
                onClick={() => navigate(btn.path)}
                style={{
                  width: '100%',
                  padding: '30px 20px',
                  backgroundColor: 'white',
                  // backgroundColor: '#013879',
                  // color: '#fff',
                  color: '#013879',
                  fontSize: '17px',
                  fontWeight: '600',
                  border: '2px solid #013879',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#025197';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'White';
                  e.currentTarget.style.color = '#013879';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {btn.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewElibrary;

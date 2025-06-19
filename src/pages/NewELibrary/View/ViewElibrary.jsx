import React from 'react';
import { useNavigate } from 'react-router-dom';

const ViewElibrary = () => {
  const navigate = useNavigate();

  const buttons = [
    { label: "Acts", path: "/elibrary/View/Acts", icon: "📜" },
    { label: "Rules", path: "/elibrary/View/Rules", icon: "⚖️" },
    { label: "Labour Forms", path: "/elibrary/View/Labour_Forms", icon: "📝" },
    { label: "National & Festival Holidays", path: "/elibrary/View/National_&_Festival_Holidays", icon: "🎉" },
    { label: "Labour Welfare Fund", path: "/elibrary/View/Labour_Welfare_Fund", icon: "💰" },
    { label: "Minimum Wages", path: "/elibrary/View/Minimum_Wages", icon: "💵" },
    { label: "Working Hours & Leave Rules", path: "/elibrary/View/Working_Hours_&_leave_Rules", icon: "⏰" },
    { label: "Professional Tax", path: "/elibrary/View/Professional_Tax", icon: "🏛️" },
    { label: "Compliance Q&A Hub", path: "/elibrary/View/Compliance", icon: "❓" },
    { label: "Policy Templates", path: "/elibrary/View/Policy_Templates", icon: "📑" },
    { label: "Recent Legal Updates", path: "/elibrary/View/Recent_Legal_Updates", icon: "🆕" },
    { label: "General", path: "/elibrary/View/Others", icon: "📚" },
  ];

  return (
    <div className="dashboard_wrapper" style={{ 
      background: '#f8fafc', 
      padding: '40px 20px', 
      minHeight: 'calc(100vh - 80px)'
    }}>
      <div className="container">
        <h2 style={{ 
          color: '#013879', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '50px',
          fontSize: '2.2rem',
          letterSpacing: '0.5px'
        }}>
          E-Library Sections
        </h2>

        <div className="row justify-content-center g-4">
          {buttons.map((btn, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div 
                onClick={() => navigate(btn.path)}
                style={{
                  width: '100%',
                  height: '100%',
                  padding: '25px 15px',
                  backgroundColor: 'white',
                  color: '#013879',
                  fontSize: '1rem',
                  fontWeight: '600',
                  border: '2px solid #013879',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '140px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#013879';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(1, 56, 121, 0.2)';
                  e.currentTarget.style.borderColor = '#013879';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#013879';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
                  e.currentTarget.style.borderColor = '2px solid #013879';
                }}
              >
                <span style={{
                  fontSize: '2rem',
                  marginBottom: '12px',
                  transition: 'transform 0.3s ease'
                }}>
                  {btn.icon}
                </span>
                <div style={{
                  fontSize: '1rem',
                  lineHeight: '1.4',
                  transition: 'all 0.3s ease'
                }}>
                  {btn.label}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  height: '4px',
                  backgroundColor: 'transparent',
                  transition: 'background-color 0.3s ease'
                }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewElibrary;
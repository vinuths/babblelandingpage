'use strict';
import React from "react";
import Navbar from "./components/navbar/Navbar";
//auth user
import Login from "./components/auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./components/auth/Logout";
import DashbordTables from "./pages/Dashboard/DashbordTables";
import Compliance from "./pages/Compliance/Compliances";
import Audit from "./pages/Audit/Audit";
// import Branch from "./pages/Branch/Branch";
// import Company from "./pages/Company/Company";
// import Category from  "./pages/Category/Category";
import Checklist from "./pages/Checklist/Checklist";
import Licsregs from "./pages/Licsregs/LisRegs";
import Notifications from "./pages/Notifications/Notifications";
import ELibrary from "./pages/ELibrary/ELibrary";
import Companies from "./pages/Company/Companies";
// import ElibraryEdit from './pages/ELibrary/ElibraryEdit';
// import Companies from  "./pages/Company/Companiesdevendra";
// import Users from "./pages/Users/Users";
// import Replicate from "./pages/Audit/Replicate";
import PrivateRoutes from './routes/PrivateRoutes';
import PublicRoutes from './routes/PublicRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';
import Notice from "./pages/Notice/Notice";

import ViewElibrary from "./pages/NewELibrary/View/ViewElibrary";
import CreateElibrary from "./pages/NewELibrary/Create/CreateElibrary";

import ActView from "./pages/NewELibrary/View/Act/ActView";
import CompQAHubView from "./pages/NewELibrary/View/ComplianceQA/QandAHub/CompQAHubView";
import HolidaysView from "./pages/NewELibrary/View/NationalHolidays/HolidaysView";

import LabourFormsView from "./pages/NewELibrary/View/LabourForms/LabourFormsView";
import LabourWelfareView from "./pages/NewELibrary/View/LabourWelfare/LabourWelfareView";
import LegalUpds from "./pages/NewELibrary/View/LegalUpdates/LegalUpds";

import MinWagesView from "./pages/NewELibrary/View/MinimumWages/MinWagesView";
import PolicyTempView from "./pages/NewELibrary/View/PolicyTemplates/PolicyTempView";
import PTView from "./pages/NewELibrary/View/PT/PTView";

import RulesView from "./pages/NewELibrary/View/Rules/RulesView";
import WH_LR from "./pages/NewELibrary/View/WH_LR/WH_LR";
import OthersView from "./pages/NewELibrary/View/Others/OthersView";
import CompOptions from "./pages/NewELibrary/View/ComplianceQA/CompOptions";
import CompCatView from "./pages/NewELibrary/View/ComplianceQA/CompCategory/CompCatView";
import Formcreate from "./pages/HelpAndSupport/Formcreate";

import HolidayElibraryStateDetails from "./pages/NewELibrary/View/NationalHolidays/HolidayElibraryStateDetails";
import LabourWelfareState from "./pages/NewELibrary/View/LabourWelfare/LabourWelfareState";


function App() {
  return (
    <Router basename="/company">
      <Navbar />
      <Routes>

        <Route
          path="/holiday-elibrary-state"
          element={<HolidayElibraryStateDetails />}
        />

        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        <Route path="/dashboard" element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
        {/* <Route path="/replicate" element={<Replicate />} />  */}
        <Route path="/notice" element={<PrivateRoutes><Notice /></PrivateRoutes>} />

        {/* <Route path="/dashbordTables" element={<PrivateRoutes><DashbordTables /></PrivateRoutes>} /> */}
        <Route path="/logout" element={<PrivateRoutes><Logout /></PrivateRoutes>} />
        <Route path="/compliances" element={<PrivateRoutes><Compliance /></PrivateRoutes>} />
        <Route path="/audit" element={<PrivateRoutes><Audit /></PrivateRoutes>} />
        <Route path="/checklist" element={<PrivateRoutes><Checklist /></PrivateRoutes>} />
        <Route path="/companies" element={<PrivateRoutes><Companies /></PrivateRoutes>} />
        <Route path="/notification" element={<PrivateRoutes><Notifications /></PrivateRoutes>} />
        <Route path="/elibrary" element={<PrivateRoutes><ELibrary /></PrivateRoutes>} />
        {/* <Route path="/companies" element={<PrivateRoutes><ELibrary /></PrivateRoutes>} /> */}
        <Route path="/licsregs" element={<PrivateRoutes><Licsregs /></PrivateRoutes>} />
        {/* <Route path="/usercreate" element={<PrivateRoutes><Users /></PrivateRoutes>} /> */}

        <Route path="/elibrary/View" element={<PrivateRoutes><ViewElibrary /></PrivateRoutes>} />
        <Route path="/elibrary/Create" element={<PrivateRoutes><CreateElibrary /></PrivateRoutes>} />

        <Route path="/elibrary/View/Acts" element={<PrivateRoutes><ActView /></PrivateRoutes>} />
        <Route path="/elibrary/View/National_&_Festival_Holidays" element={<PrivateRoutes><HolidaysView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Minimum_Wages" element={<PrivateRoutes><MinWagesView /></PrivateRoutes>} />

        <Route path="/elibrary/View/Rules" element={<PrivateRoutes><RulesView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Labour_Welfare_Fund" element={<PrivateRoutes><LabourWelfareView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Labour_Welfare_Fund/:stateName" element={<PrivateRoutes><LabourWelfareState /></PrivateRoutes>} />
        <Route path="/elibrary/View/Working_Hours_&_leave_Rules" element={<PrivateRoutes><WH_LR /></PrivateRoutes>} />

        <Route path="/elibrary/View/Labour_Forms" element={<PrivateRoutes><LabourFormsView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Professional_Tax" element={<PrivateRoutes><PTView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Compliance/Compliance_Q&A_Hub" element={<PrivateRoutes><CompQAHubView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Compliance/ComplianceCategory" element={<PrivateRoutes><CompCatView /></PrivateRoutes>} />

        <Route path="/elibrary/View/Policy_Templates" element={<PrivateRoutes><PolicyTempView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Recent_Legal_Updates" element={<PrivateRoutes><LegalUpds /></PrivateRoutes>} />
        <Route path="/elibrary/View/Others" element={<PrivateRoutes><OthersView /></PrivateRoutes>} />
        <Route path="/elibrary/View/Compliance" element={<PrivateRoutes><CompOptions /></PrivateRoutes>} />

        <Route path="/HelpAndSupport/Form" element={<PrivateRoutes><Formcreate /></PrivateRoutes>} />
        <Route path="/elibrary/View/National_&_Festival_Holidays/HolidayList" element={<PrivateRoutes><HolidayElibraryStateDetails /></PrivateRoutes>} />



      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Router>
  );
}

export default App;

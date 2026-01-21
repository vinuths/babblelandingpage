import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
// import Resume from "./components/Resume/ResumeNew";
import Contact from "./components/Contact/Contact";

// ✅ Login (ALL logic inside Login.jsx)
import Login from "./pages/services/Login/Login";

// ✅ Services Pages
import ComplianceMgmt from "./pages/services/ComplianceMgmt";
import Payroll from "./pages/services/Payroll";
import FactoryLicense from "./pages/services/FactoryLicense";
import CLRA from "./pages/services/CLRA";
import Audits from "./pages/services/Audits";
import HRSharedServices from "./pages/services/HRSharedServices";
import StatutoryReturns from "./pages/services/StatutoryReturns";
import SocialSecurity from "./pages/services/SocialSecurity";
import VendorCompliance from "./pages/services/VendorCompliance";
import InspectionReadiness from "./pages/services/InspectionReadiness";
import MultiStateCompliance from "./pages/services/MultiStateCompliance";
import ComplianceTracking from "./pages/services/ComplianceTracking";
import RiskManagement from "./pages/services/RiskManagement";
import Demo from "./pages/services/demo/Demo";
import ELibrary from "./pages/services/NewELibrary/View/ViewElibrary";
import CreateElibrary from "./pages/services/NewELibrary/Create/CreateElibrary";
import ActView from "./pages/services/NewELibrary/View/Act/ActView";
import RulesView from "./pages/services/NewELibrary/View/Rules/RulesView";
import LabourFormsView from "./pages/services/NewELibrary/View/LabourForms/LabourFormsView";
import HolidaysView from "./pages/services/NewELibrary/View/NationalHolidays/HolidaysView";
import LabourWelfareView from "./pages/services/NewELibrary/View/LabourWelfare/LabourWelfareView";
import MinWagesView from "./pages/services/NewELibrary/View/MinimumWages/MinWagesView";
import WH_LR from "./pages/services/NewELibrary/View/WH_LR/WH_LR";
import PTView from "./pages/services/NewELibrary/View/PT/PTView";
import PolicyTempView from "./pages/services/NewELibrary/View/PolicyTemplates/PolicyTempView";
import LegalUpds from "./pages/services/NewELibrary/View/LegalUpdates/LegalUpds";
import OthersView from "./pages/services/NewELibrary/View/Others/OthersView";

import CompOptions from "./pages/services/NewELibrary/View/ComplianceQA/CompOptions";
import CompCatView from "./pages/services/NewELibrary/View/ComplianceQA/CompCategory/CompCatView";
import CompQAHubView from "./pages/services/NewELibrary/View/ComplianceQA/QandAHub/CompQAHubView";
import CompQATable from "./pages/services/NewELibrary/View/ComplianceQA/QandAHub/CompQATable";

import HolidayElibraryStateDetails from "./pages/services/NewELibrary/View/NationalHolidays/HolidayElibraryStateDetails";
import LabourWelfareState from "./pages/services/NewELibrary/View/LabourWelfare/LabourWelfareState";
import MinWagesStateWise from "./pages/services/NewELibrary/View/MinimumWages/MinWagesStateWise";
import WH_LR_State from "./pages/services/NewELibrary/View/WH_LR/WH_LR_State";
import PTState from "./pages/services/NewELibrary/View/PT/PTState";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Typewriter from "typewriter-effect";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />

        <Routes>
          {/* ================= MAIN PAGES ================= */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />

          {/* ================= LOGIN & DASHBOARD (SAME COMPONENT) ================= */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/:role" element={<Login />} />

          {/* ================= SERVICES ================= */}
          <Route path="/services/compliance-mgmt" element={<ComplianceMgmt />} />
          <Route path="/services/payroll" element={<Payroll />} />
          <Route path="/services/factory-license" element={<FactoryLicense />} />
          <Route path="/services/clra" element={<CLRA />} />
          <Route path="/services/audits" element={<Audits />} />
          <Route path="/services/hr-shared-services" element={<HRSharedServices />} />
          <Route path="/services/statutory-returns" element={<StatutoryReturns />} />
          <Route path="/services/social-security" element={<SocialSecurity />} />
          <Route path="/services/vendor-compliance" element={<VendorCompliance />} />
          <Route path="/services/inspection-readiness" element={<InspectionReadiness />} />
          <Route path="/services/multi-state-compliance" element={<MultiStateCompliance />} />
          <Route path="/services/compliance-tracking" element={<ComplianceTracking />} />
          <Route path="/services/risk-management" element={<RiskManagement />} />
         
          {/* ================= FALLBACK ================= */}
          <Route path="*" element={<Navigate to="/" />} />
           <Route path="/demo" element={<Demo />} />
          
           {/* ===== ELIBRARY ===== */}
        <Route path="/elibrary" element={<ELibrary />} />
        
<Route path="/services/elibrary/create" element={<CreateElibrary />} />

<Route path="/services/elibrary/acts" element={<ActView />} />
<Route path="/services/elibrary/rules" element={<RulesView />} />
<Route path="/services/elibrary/labour-forms" element={<LabourFormsView />} />
<Route path="/services/elibrary/holidays" element={<HolidaysView />} />
<Route path="/services/elibrary/labour-welfare" element={<LabourWelfareView />} />
<Route path="/services/elibrary/minimum-wages" element={<MinWagesView />} />
<Route path="/services/elibrary/working-hours" element={<WH_LR />} />
<Route path="/services/elibrary/professional-tax" element={<PTView />} />
<Route path="/services/elibrary/policy-templates" element={<PolicyTempView />} />
<Route path="/services/elibrary/legal-updates" element={<LegalUpds />} />
<Route path="/services/elibrary/compliance-qa" element={<CompOptions />} />
<Route path="/services/elibrary/general" element={<OthersView />} />

<Route path="/services/elibrary/holidays/:state" element={<HolidayElibraryStateDetails />} />
<Route path="/services/elibrary/labour-welfare/:state" element={<LabourWelfareState />} />
<Route path="/services/elibrary/minimum-wages/:state" element={<MinWagesStateWise />} />
<Route path="/services/elibrary/working-hours/:state" element={<WH_LR_State />} />
<Route path="/services/elibrary/professional-tax/:state" element={<PTState />} />

<Route path="/services/elibrary/compliance-qa/category" element={<CompCatView />} />
<Route path="/services/elibrary/compliance-qa/hub" element={<CompQAHubView />} />
<Route path="/services/elibrary/compliance-qa/table" element={<CompQATable  />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

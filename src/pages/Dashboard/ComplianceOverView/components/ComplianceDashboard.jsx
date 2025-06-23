import React, { useEffect, useState, useMemo } from 'react';
import { OverviewTable } from './OverviewTable';
import { LicenseDetails } from './LicenseDetails';
import RemittanceTable from './RemittanceTable';
import RemittanceDocs from './RemittanceDocs';
import { RegisterPanel } from './RegisterPanel';
import ReturnsPanel from './ReturnsPanel';
import ReturnDocView from './ReturnDocView';


export default function ComplianceDashboard() {
    const [view, setView] = useState("overview");
    const [docDetail, setDocDetail] = useState(null);

    const handleBack = () => {
        if (docDetail) setDocDetail(null);
        else setView("overview");
    };

    return (
        <div style={{ padding: 24 }}>
            {view === "overview" && <OverviewTable setView={setView} />}
            {view === "licenses" && <LicenseDetails onBack={handleBack} />}
            {view === "remittance" && !docDetail && <RemittanceTable onBack={handleBack} onViewDoc={setDocDetail} />}
            {view === "remittance" && docDetail && <RemittanceDocs type={docDetail} onBack={handleBack} />}
            {view === "registers" && <RegisterPanel onBack={handleBack} />}
            {view === "returns" && !docDetail && <ReturnsPanel onBack={handleBack} onViewDoc={setDocDetail} />}
            {view === "returns" && docDetail && <ReturnDocView returnName={docDetail} onBack={handleBack} />}
        </div>
    );
}
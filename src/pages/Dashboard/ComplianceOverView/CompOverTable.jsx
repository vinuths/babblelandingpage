import React, { useState } from "react";

const CompOverTable = () => {
  const [view, setView] = useState("overview"); // 'overview' or 'registrations'

  const handleViewChange = (viewType) => setView(viewType);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "100%" }}>
      {view === "overview" ? (
        <table border="1" width="100%">
          <thead>
            <tr>
              <th colSpan="3" style={{ textAlign: "center", fontWeight: "bold" }}>
                Compliance Overview: May 2025
              </th>
            </tr>
            <tr>
              <th>Module</th>
              <th>Status</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Registrations & Licenses</td>
              <td>Complete/Partially Complete/Pending</td>
              <td>
                <a href="#" onClick={() => handleViewChange("registrations")}>
                  All active licenses in place / (1,2,3,4) Licenses not renewed
                </a>
              </td>
            </tr>
            <tr>
              <td>Remittance Tracker</td>
              <td>Complete/Partially Complete/Pending</td>
              <td>All Remittance are done in Time / 1 Remittance after due date</td>
            </tr>
            <tr>
              <td>Registers Maintenance</td>
              <td>Complete/Partially Complete/Pending</td>
              <td>2 documents are uploaded / Not uploaded</td>
            </tr>
            <tr>
              <td>Returns Filing</td>
              <td>Complete/Partially Complete/Pending</td>
              <td>Some returns filed after due date</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div>
          <button onClick={() => handleViewChange("overview")}>← Back</button>
          <h3>Registrations & Licenses Detailed View</h3>
          <table border="1" width="100%">
            <thead>
              <tr>
                <th>License Type</th>
                <th>License Number</th>
                <th>Valid Upto</th>
                <th>Due date for Renewal</th>
                <th>Status</th>
                <th>Action</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shops & Establishment</td>
                <td>KAE123456</td>
                <td>31-Mar-26</td>
                <td>30-Oct-25</td>
                <td>Active/Expiring</td>
                <td><a href="#">View Document</a></td>
                <td></td>
              </tr>
              <tr>
                <td>Factory License</td>
                <td>MAH456789</td>
                <td>30-Jun-25</td>
                <td>30-Oct-25</td>
                <td>Active/Expiring</td>
                <td><a href="#">View Document</a></td>
                <td></td>
              </tr>
              <tr>
                <td>CLRA Contractor License</td>
                <td>TN789123</td>
                <td>31-Dec-25</td>
                <td>30-Oct-25</td>
                <td>Active/Expiring</td>
                <td><a href="#">View Document</a></td>
                <td></td>
              </tr>
              <tr>
                <td>Trade License</td>
                <td>BBMP987654</td>
                <td>31-Mar-25</td>
                <td>30-Oct-25</td>
                <td>Active/Expiring</td>
                <td><a href="#">View Document</a></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompOverTable;

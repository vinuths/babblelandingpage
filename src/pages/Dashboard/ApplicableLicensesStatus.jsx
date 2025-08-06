import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import Select from "react-select";
import {
    branchGetByState,
    licnesesApplicable,
    stateGets,
} from "../../store/actions/otherActions";

const ApplicableLicenses = () => {
    const dispatch = useDispatch();
    const { loading, data } = useSelector((state) => state.applicableLicensesRed);
    const { branchByStateInfo1 } = useSelector((state) => state.getBranchByState);
    const { stateInfo } = useSelector((state) => state.getState);

    const [selectedState, setSelectedState] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [yesFields, setYesFields] = useState([]);

    const branchOptions = [
        { value: "", label: "All Branches" },
        ...(branchByStateInfo1 || []).map((branch) => ({
            value: branch.id,
            label: branch.name,
        })),
    ];

    useEffect(() => {
        dispatch(licnesesApplicable({ branchId: "" }));
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.name) {
            // filter only fields with YES
            const labels = {
                isTradeLicense: "Trade License",
                isFactory: "Factory License",
                isSE: "Shops & Establishment Registration",
                isContracorsYesorNo: "Contract Labour License",
                isNightShiftPermission: "Night Shift Permission",
                isOTPermission: "Over-Time Permission",
                isWeeklyOffExemption: "Weekly Off Exemption",
                isPF: "Provident Fund Registration",
                isESI: "Employees' State Insurance Registration",
                isLWF: "Labour Welfare Fund Registration",
                isPTR: "Professional Tax Registration",
                isPTE: "Professional Tax Enrollment",
                isMSME: "Micro, Small and Medium Enterprises Registration",
                isBOCW: "Building and Other Construction Workers License",
                isISMW: "Interstate Migrant Workmen License",
                isFASSAI: "Food Safety and Standards Authority of India License",
                isSB: "Signage Board License",
                is_contract: "Contract Labour Registration",
            };

            const yesList = Object.entries(labels)
                .filter(([key]) => data[key] === "YES")
                .map(([, label]) => label);

            setYesFields(yesList);
        } else {
            setYesFields([]);
        }
    }, [data]);

    return (
        <div className="container-fluid pf-container" style={{ minHeight: '500px' }}>
            <div className="dashboard-header">
                <h2 className="chart-heading">Applicable Licenses</h2>
            </div>

            <div className="row mb-4">
                <div className="col-4">
                    <label htmlFor="states" className="form-label">
                        Select State
                    </label>
                    <select
                        className="filter-select"
                        id="states"
                        value={selectedState}
                        onChange={(e) => {
                            const stateId = e.target.value;
                            setSelectedState(stateId);
                            setSelectedBranch("");
                            dispatch(branchGetByState({ stateIds: stateId }));
                            dispatch(licnesesApplicable({ branchId: "" }));
                        }}
                    >
                        <option value="">Select State</option>
                        {stateInfo
                            ?.filter((state) => state.name !== "All States")
                            .map((item) => (
                                <option key={item._id} value={item._id}>
                                    {item.name}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="col-4"></div>
                <div className="col-4">
                    <label htmlFor="branchFilter" className="form-label">
                        Filter by Branch
                    </label>
                    <Select
                        id="branchFilter"
                        className="filter-select"
                        options={branchOptions}
                        isSearchable
                        value={branchOptions.find((o) => o.value === selectedBranch) || null}
                        onChange={(option) => {
                            const branchId = option ? option.value : "";
                            setSelectedBranch(branchId);
                            dispatch(licnesesApplicable({ branchId }));
                        }}
                        placeholder="Select Branch..."
                        isDisabled={!selectedState}
                    />
                </div>
            </div>

            <div className="license-results">
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <Spin size="large" />
                    </div>
                ) : !yesFields.length ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                        <p className="text-muted fs-5">
                            No applicable licenses (or select a branch to view).
                        </p>
                    </div>
                ) : (
                    <div className="custom-license-list card p-4 shadow-sm">
                        <h5 className="mb-4" style={{ color: "#013879", fontWeight: "600" }}>
                            Branch: <span style={{ backgroundColor: '#013879', color: 'white', borderRadius: '8px', border: 'none', padding: '8px' }}>{data.name}</span>
                        </h5>
                        <ul className="list-unstyled">
                            {yesFields.map((label, idx) => (
                                <li key={idx} className="mb-2" style={{ color: '#013879', fontSize: '16px', fontWeight: 500 }}>
                                    • {label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <style>
                {`
          .custom-license-list {
            background: #fff;
            border-radius: 16px;
            border: 1px solid #e0e0e0;
          }
          .filter-select {
            width: 100%;
            padding: 6px 10px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
        `}
            </style>
        </div>
    );
};

export default ApplicableLicenses;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Spin } from "antd";
import Select from "react-select";
import {
    branchGetByState,
    compliancesApplicable,
    stateGets,
} from "../../store/actions/otherActions";

const ApplicableComps = () => {
    const dispatch = useDispatch();

    const applicableCompRed = useSelector((state) => state.applicableCompRed);
    const { loadingAC, data, errorAC } = applicableCompRed;
    console.log("data", data);

    const getBranchByState = useSelector((state) => state.getBranchByState);
    const { branchByStateInfo1 } = getBranchByState;

    const getState = useSelector((state) => state.getState);
    const { stateInfo } = getState;

    const [selectedState, setSelectedState] = useState("");
    const [selectedBranch, setSelectedBranch] = useState("");
    const [flattenedData, setFlattenedData] = useState([]);

    const branchOptions = [
        { value: "", label: "Select Branch" },
        ...(branchByStateInfo1 || []).map((branch) => ({
            value: branch.id,
            label: branch.name,
        })),
    ];

    useEffect(() => {
        dispatch(compliancesApplicable());
        dispatch(stateGets());
    }, [dispatch]);

    useEffect(() => {
        if (data && Array.isArray(data)) {
            const flat = [];
            const seen = new Set();

            data.forEach((branch) => {
                if (selectedBranch && branch.branchId !== selectedBranch) return;

                branch.checklists.forEach((checklist) => {
                    checklist.rules.forEach((rule) => {
                        const key = `${branch.branchName}|${checklist.act}|${rule.rule}`;

                        if (!seen.has(key)) {
                            seen.add(key);
                            flat.push({
                                branchName: branch.branchName,
                                act: checklist.act,
                                rule: rule.rule,
                            });
                        }
                    });
                });
            });

            const flatWithSlNo = flat.map((item, index) => ({
                ...item,
                slno: index + 1,
            }));

            setFlattenedData(flatWithSlNo);
        }
    }, [data, selectedBranch]);

    const columns = [
        {
            title: 'Sl. No',
            dataIndex: 'slno',
            key: 'slno',
            width: 100, // same width as rule

        },
        {
            title: "Act",
            dataIndex: "act",
            key: "act",
            width: 650, // same width as rule
            filters: [
                ...new Set(flattenedData?.map((item) => item?.act)),
            ].map((act) => ({ text: act, value: act })),
            onFilter: (value, record) => record?.act === value,
        },
        {
            title: "Rule",
            dataIndex: "rule",
            key: "rule",
            width: 650, // same width as act
        },
    ];


    return (
        <div className="container-fluid pf-container" style={{ minHeight: '500px' }}>
            <div className="dashboard-header">
                <h2 className="chart-heading">
                    Applicable Acts & Rules
                </h2>
            </div>
            <div>
                <div className="card p-3 mb-4">
                    <div className="row align-items-end">
                        <div className="col-md-4">
                            <label htmlFor="states" className="form-label">
                                Select State
                            </label>
                            <select
                                className="form-select"
                                id="states"
                                value={selectedState}
                                onChange={(e) => {
                                    const selectedStateName = e.target.value;
                                    setSelectedState(selectedStateName);
                                    // setSelectedBranch(""); // reset
                                    dispatch(branchGetByState({ stateIds: selectedStateName }));
                                    dispatch(compliancesApplicable({ branchId: "" }));
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
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <label htmlFor="branchFilter" className="form-label">
                                Filter by Branch
                            </label>
                            <Select
                                id="branchFilter"
                                className="react-select-container"
                                classNamePrefix="react-select"
                                options={branchOptions}
                                isSearchable
                                isDisabled={!selectedState}
                                value={
                                    branchOptions.find((option) => option.value === selectedBranch) || null
                                }
                                onChange={(selectedOption) => {
                                    const branchId = selectedOption ? selectedOption.value : "";
                                    setSelectedBranch(branchId);
                                    dispatch(compliancesApplicable({ branchId }));
                                }}
                                placeholder="Select Branch..."
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-4">
                {loadingAC ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                        <Spin size="large" />
                    </div>
                ) : flattenedData.length === 0 ? (
                    <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                        <p className="text-muted fs-5">Select a Branch to View the Applicable Compliances</p>
                    </div>
                ) : (
                    <Table
                        columns={columns}
                        dataSource={flattenedData}
                        scroll={{ x: true }}
                        bordered
                        pagination={{ pageSize: 15 }}
                    />
                )}
            </div>
            <style>
                {`
    .ant-table-thead > tr > th {
      background-color: #013879 !important;
      color: white !important;
    }

    .ant-dropdown-trigger.ant-table-filter-trigger {
      color: white !important;
    }
  `}
            </style>


        </div >

    );
};

export default ApplicableComps;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Table } from "antd";
import moment from "moment";

const HolidayElibraryStateDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { stateData, holidays } = location.state || {};

    if (!stateData || !holidays) {
        return <p className="text-danger">No data available. Please go back and select a state.</p>;
    }

    const columns = [
        {
            title: "Sr. No.",
            render: (_, __, index) => index + 1,
        },
        {
            title: "Act / Rule",
            dataIndex: "actOrRule",
        },
        {
            title: "Form Number",
            dataIndex: "formNumber",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Holiday File",
            dataIndex: "doc",
            render: (url) => (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    View File
                </a>
            ),
        },
        {
            title: "Created",
            dataIndex: "created_At",
            render: (date) => moment(date).format("DD-MM-YYYY"),
        },
    ];

    return (
        <div className="container py-4">
            <h2 className="mb-4 fw-bold">Holiday List – {stateData.name}</h2>

            <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
                ← Back
            </button>

            <Table
                columns={columns}
                dataSource={holidays}
                rowKey="_id"
                pagination={{ pageSize: 10 }}
            />
        </div>
    );
};

export default HolidayElibraryStateDetails;

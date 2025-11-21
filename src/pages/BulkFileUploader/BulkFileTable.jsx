import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bulkZipsGetAll } from "../../store/actions/otherActions";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const BulkFileTable = () => {
    const dispatch = useDispatch();

    const bulkFilesShareGetRed = useSelector(
        (state) => state.bulkFilesShareGetRed
    );

    const { loading_BULK_FILES_SHARE_DATA, bulkFilesShareGetInfo } =
        bulkFilesShareGetRed;

    useEffect(() => {
        dispatch(bulkZipsGetAll());
    }, [dispatch]);

    const columns = [
        {
            title: "S.No",
            key: "sno",
            render: (text, record, index) => index + 1,
        },
        // {
        //   title: "Client",
        //   dataIndex: "client",
        //   key: "client",
        //   render: (client) => (
        //     <span>
        //       {client?.firstName} {client?.lastName}
        //     </span>
        //   ),
        // },
        {
            title: "Uploaded By",
            dataIndex: "createdBy",
            key: "createdBy",
            render: (createdBy) => (
                <span>
                    {createdBy?.firstName} {createdBy?.lastName}
                </span>
            ),
        },
        {
            title: "Region",
            dataIndex: "region",
            key: "region",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Uploaded On",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (date) => new Date(date).toLocaleString(),
        },
        {
            title: "File Size (MB)",
            dataIndex: "fileSize",
            key: "fileSize",
            render: (size) => (size / (1024 * 1024)).toFixed(2),
        },
        {
            title: "Download",
            key: "download",
            render: (_, record) => (
                <Button
                    style={{ color: "white", backgroundColor: '#013879' }}

                >
                    <a
                        href={record.fileUrl}
                        download={record.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", backgroundColor: '#013879', textDecoration: 'none' }}
                    >
                        {record.fileName}
                    </a>
                </Button>
            ),
        },
       
    ];

    return (
        <div style={{ padding: "20px" }}>
            {/* <h2>Bulk File Sharing</h2> */}

            <Table
                columns={columns}
                dataSource={bulkFilesShareGetInfo || []}
                rowKey={(record) => record._id}
                loading={loading_BULK_FILES_SHARE_DATA}
                bordered
            />
        </div>
    );
};

export default BulkFileTable;

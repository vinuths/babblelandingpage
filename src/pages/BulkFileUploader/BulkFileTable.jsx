import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bulkFileShareDownload, bulkZipsGetAll } from "../../store/actions/otherActions";
import { Table, Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { downloadBulkFile } from "../../routes/api";
import { CircularProgress } from "@mui/material";

const BulkFileTable = () => {
    const dispatch = useDispatch();

    const bulkFilesShareGetRed = useSelector(
        (state) => state.bulkFilesShareGetRed
    );

    const { loading_BULK_FILES_SHARE_DATA, bulkFilesShareGetInfo } =
        bulkFilesShareGetRed;

    const bulkFilesShareDownloadRed = useSelector(
        (state) => state.bulkFilesShareDownloadRed
    );

    const { loading_BULK_FILES_SHARE_DOWNLOAD_DATA } =
        bulkFilesShareDownloadRed;

    useEffect(() => {
        dispatch(bulkZipsGetAll());
    }, [dispatch]);




    const [downloadingId, setDownloadingId] = useState(null);

    const handleSecureDownload = async (fileId, fileName) => {
        setDownloadingId(fileId);   // 🔥 only that row becomes loading

        try {
            await dispatch(bulkFileShareDownload(fileId, fileName));
        } catch (err) {
            console.log(err);
        } finally {
            setDownloadingId(null);   // reset loading only for that row
        }
    };


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
                <button
                    style={{
                        color: "white",
                        backgroundColor: '#013879',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                    disabled={downloadingId === record._id}
                    onClick={() => handleSecureDownload(record._id, record.fileName)}
                >
                    {downloadingId === record._id ? (
                        <CircularProgress color="success" size={20} thickness={5} />
                    ) : (
                        'Download'
                    )}
                </button>

            ),
        }

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

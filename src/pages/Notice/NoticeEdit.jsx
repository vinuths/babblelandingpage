import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Select, Form, Upload, message, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import {
    CreatingNotice,
    BranchesUpdateById,
    companyTableGet,
    BranchesGetByCompany,
    stateGets,
    CompanyBranchesGet,
    NoticeNewGetById,
    NoticesUpdateById,
} from "../../store/actions/otherActions"; // Redux actions
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './NoticeCss.css';

const { Option } = Select;

const NoticeEdit = ({ addOrEdit, recordForEdit, setOpenPopup }) => {
    // console.log("recordForEdit", recordForEdit);

    const dispatch = useDispatch();
    const getCompanyTable = useSelector((state) => state.getCompanyTable);
    const { loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    const stateInfo = useSelector((state) => state.getState.stateInfo || []);
    const [selectedState, setSelectedState] = useState("");
    const { BranchesByCompanyInfo, loadingBranchByC, error1 } = useSelector((state) => state.BranchesByCompanyGetRed);
    const { noticeByIDInfo, loadingNotices, error } = useSelector((state) => state.NoticesGetByIDRed);
    // console.log("noticeByIDInfo", noticeByIDInfo);

    const [formData, setFormData] = useState({
        department: '',
        dateOfNotice: '',
        noticeNumber: '',
        typeOfNotice: '',
        issuingAuthority: '',
        contactAuthority: '',
        closureDeadLine: '',
        priority: '',
        descriptionNotice: '',
        actionDeadline: '',
        remarksNotice: '',
        remarksNoticeReply: '',
        remarksNoticeAttested: '',
        remarksNoticeClosureAck: '',
        noticeCopy: '',
        supportingDocuments: '',
        noticeReplyDoc: '',
        attestedDoc: '',
        closureAckDoc: '',
        noticeStatus: 0
    });
    // console.log("formData", formData);

    const [loading, setLoading] = useState(false);
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        // Fetch state and company data only once
        dispatch(stateGets());
        dispatch(companyTableGet());
    }, [dispatch ]);

    useEffect(() => {
        // Prefill form when editing
        if (recordForEdit) {
            setFormData({
                ...recordForEdit,
                branchstate: recordForEdit.branchstate?._id || recordForEdit.branchstate || "",
            });
        }
    }, [recordForEdit]);

    useEffect(() => {
        if (recordForEdit && recordForEdit.id) {
            dispatch(NoticeNewGetById(recordForEdit.id));
        }
    }, [dispatch, recordForEdit]);

    // useEffect(() => {
    //     if (recordForEdit) {
    //         setFormData({
    //             ...recordForEdit,
    //             company: recordForEdit.company,
    //             branch: recordForEdit.branch,
    //             department: recordForEdit.department || '',
    //         });

    //         handleCompanySelect(recordForEdit.companyId); // Fetch branches for the selected company
    //         handleBranchSelect(recordForEdit.branchId); // Set the branch if available
    //     }
    // }, [recordForEdit]);

    const handleCompanySelect = (companyId) => {
        const selectedCompany = companyGetTableInfo?.find(company => company._id === companyId);

        if (selectedCompany) {
            setFormData((prev) => ({ ...prev, company: selectedCompany }));
        }
    };



    const handleBranchSelect = (branchId) => {
        const selectedBranch = BranchesByCompanyInfo?.find(branch => branch._id === branchId);

        if (selectedBranch) {
            setFormData((prev) => ({ ...prev, branch: selectedBranch }));
        }
    };

    const handleDepartmentSelect = (value) => {
        setFormData((prev) => ({ ...prev, department: value }));
    };

    // const handleSubmit = async () => {
    //     const form = new FormData();
    //     Object.keys(formData).forEach((key) => {
    //         form.append(key, formData[key]);
    //     });

    //     try {
    //         setLoading(true);
    //         let response;
    //         if (recordForEdit) {
    //             response = await dispatch(NoticesUpdateById(form, recordForEdit.id));
    //         } else {
    //             response = await dispatch(CreatingNotice(form));
    //         }

    //         if (
    //             (recordForEdit && response?.type === "NOTICE_UPDATE_SUCCESS") ||
    //             (!recordForEdit && response?.type === "NOTICES_ADD_SUCCESS")
    //         ) {
    //             toast.success("Form submitted successfully!", {
    //                 position: "bottom-right",
    //             });
    //             // resetForm();
    //             addOrEdit({ ...formData, id: recordForEdit ? recordForEdit.id : undefined });
    //         }
    //     } catch (error) {
    //         toast.error("Failed to submit form.", { position: "bottom-right" });
    //     } finally {
    //         setOpenPopup(false);
    //         setLoading(false);
    //     }
    // };



    const formatDateToInput = (isoDate) => {
        if (!isoDate) return ""; // Return an empty string for empty or invalid dates
        const date = new Date(isoDate);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Add leading zero
        const day = String(date.getDate()).padStart(2, "0"); // Add leading zero
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        // If the noticeByIDInfo is available, update the form data
        if (noticeByIDInfo) {
            // console.log("CreatingNotice", CreatingNotice);

            setFormData({
                ...noticeByIDInfo,
                department: noticeByIDInfo.department || '',
                dateOfNotice: noticeByIDInfo.dateOfNotice || '',
                noticeNumber: noticeByIDInfo.noticeNumber || '',
                noticeStatus: noticeByIDInfo.noticeStatus || 0,
                priority: noticeByIDInfo.priority || '',
                closureDeadLine: noticeByIDInfo.closureDeadLine || '',
                descriptionNotice: noticeByIDInfo.descriptionNotice || '',
                actionDeadline: noticeByIDInfo.actionDeadline || '',
                noticeReplyDoc: noticeByIDInfo.noticeReplyDoc || '',
                attestedDoc: noticeByIDInfo.attestedDoc || '',
                closureAckDoc: noticeByIDInfo.closureAckDoc || '',
                supportingDocuments: noticeByIDInfo.supportingDocuments || '',
                noticeCopy: noticeByIDInfo.noticeCopy || '',
                remarksNotice: noticeByIDInfo.remarksNotice || '',
                remarksNoticeReply: noticeByIDInfo.remarksNoticeReply || '',
                remarksNoticeAttested: noticeByIDInfo.remarksNoticeAttested || '',
                remarksNoticeClosureAck: noticeByIDInfo.remarksNoticeClosureAck || '',
            });

        }
    }, [noticeByIDInfo]);

    const resetForm = () => {
        setFormData({
            department: '',
            dateOfNotice: '',
            noticeNumber: '',
            typeOfNotice: '',
            issuingAuthority: '',
            contactAuthority: '',
            closureDeadLine: '',
            priority: '',
            descriptionNotice: '',
            actionDeadline: '',
            remarksNotice: '',
            remarksNoticeReply: '',
            remarksNoticeAttested: '',
            remarksNoticeClosureAck: '',
            noticeCopy: '',
            supportingDocuments: '',
            noticeReplyDoc: '',
            attestedDoc: '',
            closureAckDoc: '',
            noticeStatus: 0
        });
        setImagePreview("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, [fieldName]: file }));

            // Generate preview for images
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const formatDate = (date) => {
        // Ensure the date is in a valid format (MM/DD/YYYY)
        const dateParts = date?.split('/');

        if (dateParts?.length === 3) {
            const [month, day, year] = dateParts;

            // Ensure month, day, and year are valid
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
        }

        // Return an empty string or a fallback date if the format is not correct
        return '';
    };



    const handleSubmit = async () => {
        const form = new FormData();

        // Loop through formData and append to FormData, excluding company and branch
        Object.keys(formData).forEach((key) => {
            // Skip company and branch keys
            if (key !== 'company' && key !== 'branch') {
                if (Array.isArray(formData[key])) {
                    formData[key].forEach((item) => form.append(`${key}[]`, item));
                } else {
                    form.append(key, formData[key]);
                }
            }
        });

        console.log("Payload being sent:", Object.fromEntries(form.entries()));  // Debugging the payload

        try {
            setLoading(true);
            let response;
            if (recordForEdit) {
                response = await dispatch(NoticesUpdateById(form, recordForEdit.id));
            } else {
                response = await dispatch(CreatingNotice(form));
            }

            if (
                (recordForEdit && response?.type === "NOTICE_UPDATE_SUCCESS") ||
                (!recordForEdit && response?.type === "NOTICES_ADD_SUCCESS")
            ) {
                toast.success("Form submitted successfully!", { position: "bottom-right" });
                addOrEdit({ ...formData, id: recordForEdit ? recordForEdit.id : undefined });
            }
        } catch (error) {
            toast.error("Failed to submit form.", { position: "bottom-right" });
        } finally {
            // setOpenPopup(false);
            // setLoading(false);
        }
    };



    return (
        <Form layout="vertical" onFinish={handleSubmit}>
            <table className="table  creat_tbl">
                <tbody>
                    <tr>
                        <td colSpan="3">
                            <label>Select Company</label>
                            <select
                                className="form-control"
                                value={formData.company}
                                disabled // Entire dropdown is disabled
                                required
                            >
                                <option value="" disabled>Select a Company</option>
                                {companyGetTableInfo?.map((company) => (
                                    <option key={company._id} value={company._id}>
                                        {company.companyname}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td colSpan="3">
                            <>
                                <label>Select Branch</label>
                                <input type="text" name="branch" class="form-control" value={formData.branch?.name || ''} disabled />
                                {/* <select
                                    className="form-control"
                                    value={formData.branch?._id || ''}
                                    disabled // Entire dropdown is disabled
                                    required
                                >
                                    <option value="" disabled>Select a Branch</option>
                                    {BranchesByCompanyInfo?.map((branch) => (
                                        <option key={branch._id} value={branch._id}>
                                            {branch.name}
                                        </option>
                                    ))}
                                </select> */}
                            </>
                        </td>

                    </tr>
                    <tr>
                        <td colSpan="8">

                            <>
                                <label>Select Department</label>
                                <select
                                    className="form-control"

                                    value={formData.department}
                                    onChange={(e) => handleDepartmentSelect(e.target.value)}
                                    disabled
                                >
                                    {/* Default option */}
                                    <option value="" disabled>
                                        Select a Department
                                    </option>
                                    <option value="PF">PF</option>
                                    <option value="ESIC">ESIC</option>
                                    <option value="PT">PT</option>
                                    <option value="S&E">S&E</option>
                                    <option value="Factory">Factory</option>
                                    <option value="CLRA">CLRA</option>
                                    <option value="BOCW">BOCW</option>
                                    <option value="PCB">PCB</option>
                                    <option value="Local Bodies">Local Bodies</option>
                                </select>
                            </>

                        </td>
                    </tr>

                    <tr>
                        <td colSpan="3">
                            <label className="form-label">Notice Number:</label>
                            <input type="text" name="noticeNumber" disabled class="form-control" placeholder="Enter Number" value={formData.noticeNumber} onChange={handleChange} required />
                        </td>
                        <td colSpan="3">
                            <label className="form-label">Date of Notice:</label>
                            <input
                                type="date"
                                className="form-control"
                                placeholder="Date of Notice"
                                name="dateOfNotice"
                                id="dateOfNotice"
                                // Convert dateOfNotice to YYYY-MM-DD format
                                // value={formData?.dateOfNotice ? formatDate(formData.dateOfNotice) : ''}
                                value={formData?.dateOfNotice ? formData?.dateOfNotice.split("T")[0] : ''}
                                onChange={handleChange}
                                disabled
                            />
                        </td>


                    </tr>
                    <tr>
                        <td colSpan="2">
                            <label className="form-label">Type of Notice:</label>
                            <input type="text" name="typeOfNotice" class="form-control" disabled placeholder="Enter Type of Notice" value={formData.typeOfNotice} onChange={handleChange} />
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Issuing Authority:</label>
                            <input type="text" class="form-control" disabled placeholder=" Enter Issuing Authority" name="issuingAuthority" value={formData.issuingAuthority} onChange={handleChange} />
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Contact No. Authority:</label>
                            <input type="number" class="form-control" disabled placeholder="Enter Contact Number of Authority" name="contactAuthority" value={formData.contactAuthority} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <label className="form-label">Dead Line for Closure:</label>
                            <input type="date" name="closureDeadLine" disabled class="form-control" placeholder="Dead Line for Closure" value={formData?.closureDeadLine ? formData?.closureDeadLine.split("T")[0] : ''} onChange={handleChange} />
                        </td>
                        <td colSpan="3">
                            <label className="form-label">Priority:</label>
                            <select
                                value={formData.priority}
                                className="form-control"
                                placeholder="Select Priority"
                                name="priority"
                                onChange={handleChange}
                                disabled
                            ><option>Select Prority</option>
                                <option value="High" style={{ backgroundColor: 'red', color: 'white' }}>
                                    High
                                </option>
                                <option value="Medium" style={{ backgroundColor: 'green', color: 'white' }}>
                                    Medium
                                </option>
                                <option value="Low" style={{ backgroundColor: 'yellow', color: 'black' }}>
                                    Low
                                </option>
                            </select>
                        </td>

                    </tr>

                    <tr>
                        <td colSpan="8">
                            <label className="form-label">Description Of Notice:</label>

                            <textarea name="descriptionNotice" disabled className="form-control" placeholder="Enter the Details" value={formData.descriptionNotice} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <label className="form-label">Deadline for Action:</label>
                            <input
                                type="date"
                                name="actionDeadline"
                                className="form-control"
                                value={formData?.actionDeadline ? formData?.actionDeadline.split("T")[0] : ''}  // Correct the format to YYYY-MM-DD
                                
                                onChange={handleChange}
                                disabled
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="8">
                            <div className="fixed-checklist">
                                {formData.department === "" && (
                                    <div style={{ textAlign: 'center' }}>
                                        <h5>Select Department for Instructions and Uploads</h5>
                                    </div>
                                )}
                                {formData.department === "PF" && (
                                    <div className="checklist-section">
                                        <h4>PF File Upload Instructions</h4>
                                        <ol>
                                            <li>The PF Registration Certificate.</li>
                                            <li>Form 5A.</li>
                                            <li>The PF ECR and paid challan for the period specified in the notice.</li>
                                            <li>The Wages register for the period specified in the notice (if it is an inspection).</li>
                                            <li>The Balance sheet for the period specified in the notice (if it is an inspection).</li>
                                            <li>Documents from the contractors listed in 1-5 for the period specified if it is an inspection.</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "ESIC" && (
                                    <div className="checklist-section">
                                        <h4>ESIC File Upload Instructions</h4>
                                        <ol>
                                            <li>The ESIC Registration Certificate.</li>
                                            <li>The ESIC ECR and paid challan for the period specified in the notice.</li>
                                            <li>The Wages register for the period specified in the notice (if it is an inspection).</li>
                                            <li>The Balance sheet for the period specified in the notice (if it is an inspection).</li>
                                            <li>Documents from the contractors listed in 1-4 for the period specified if it is an inspection.</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "PT" && (
                                    <div className="checklist-section">
                                        <h4>PT File Upload Instructions</h4>
                                        <ol>
                                            <li>The PT Registration Certificate.</li>
                                            <li>The PT paid challan for the period specified in the notice.</li>
                                            <li>The Wages register for the period specified in the notice (if it is an inspection).</li>
                                            <li>The Balance sheet for the period specified in the notice (if it is an inspection).</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "S&E" && (
                                    <div className="checklist-section">
                                        <h4>S&E File Upload Instructions</h4>
                                        <ol>
                                            <li>The S&E Registration Certificate.</li>
                                            <li>Attendance/Wages/Deduction/Fines/Damages/OT Registers.</li>
                                            <li>Employee Master Details</li>
                                            <li>Salary Slips.</li>
                                            <li>Leave Registers.</li>
                                            <li>Copies of Returns.</li>
                                            <li>Any other documents specified in the notice.</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "Factory" && (
                                    <div className="checklist-section">
                                        <h4>Fatory File Upload Instructions</h4>
                                        <ol>
                                            <li>The Factory License.</li>
                                            <li>Attendance/Wages/Deduction/Fines/Damages/OT Registers.</li>
                                            <li>Employee Master Details</li>
                                            <li>Details of Contractors</li>
                                            <li>Salary Slips.</li>
                                            <li>Leave Registers.</li>
                                            <li>Copies of Returns.</li>
                                            <li>Any other documents specified in the notice.</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "CLRA" && (
                                    <div className="checklist-section">
                                        <h4>CLRA File Upload Instructions</h4>
                                        <ol>
                                            <li>Principal Employer:</li>
                                            <ol>
                                                <li>CLRA Registration Certificate.</li>
                                                <li>Register of Contractors.</li>
                                                <li>Annual Returns.</li>
                                                <li>Copy of Notice of Commencement.</li>
                                                <li>Any other document as specified in the notice.</li>
                                            </ol>
                                            <li>Contractor:</li>
                                            <ol>
                                                <li>CLRA License.</li>
                                                <li>Copy of HY Returns.</li>
                                                <li>The Notice of Commencement.</li>
                                                <li>Attendance/Wages/Deduction/Fines/Damages/OT Registers.</li>
                                                <li>Employee Master Details</li>
                                                <li>Salary Slips.</li>
                                                <li>Register of Workers.</li>
                                                <li>Leave Registers.</li>
                                                <li>Any other document as specified in the notice.</li>
                                            </ol>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "BOCW" && (
                                    <div className="checklist-section">
                                        <h4>BOCW File Upload Instructions</h4>
                                        <ol>
                                            <li>Principal Employer:</li>
                                            <ol>
                                                <li>BOCW Registration Certificate.</li>
                                                <li>CESS Paid Challan.</li>
                                                <li>Annual Returns.</li>
                                                <li>Any other document as specified in the notice.</li>
                                            </ol>
                                            <li>Contractor:</li>
                                            <ol>
                                                <li>BOCW Registration Certificate.</li>
                                                <li>Copy of HY Returns.</li>
                                                <li>Attendance/Wages/Deduction/Fines/Damages/OT Registers.</li>
                                                <li>Employee Master Details</li>
                                                <li>Salary Slips.</li>
                                                <li>Any other document as specified in the notice.</li>
                                            </ol>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "PCB" && (
                                    <div className="checklist-section">
                                        <h4>PCB File Upload Instructions</h4>
                                        <ol>
                                            <li>Consent for Establishment.</li>
                                            <li>Consent for Operation.</li>
                                            <li>Waste Management Agreement with Certified Dealers.</li>
                                            <li>Any other document as specified in the notice.</li>
                                        </ol>
                                    </div>
                                )}
                                {formData.department === "Local Bodies" && (
                                    <div className="checklist-section">
                                        <h4>Local Bodies File UploadInstructions</h4>
                                        <ol>
                                            <li>Trade License.</li>
                                            <li>Property Tax Paid Receipt.</li>
                                            <li>Rental Agreement.</li>
                                            <li>Any other document as specified in the notice.</li>
                                        </ol>
                                    </div>
                                )}
                            </div>

                        </td>
                    </tr>
                    <>
                        <tr>
                            <td colSpan="3">
                                <div>
                                    <label className="form-label"> Notice Copy:</label><br />
                                    {/* <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}>
                                        <textarea>*</textarea>Only accepts .png, .jpg, .jpeg, .pdf, .zip
                                    </p> */}

                                    {/* <div className="form-group files1">
                                        <input
                                            type="file"
                                            name="noticeCopy"
                                            id="noticeCopy"
                                            className="form-control"
                                            multiple
                                            accept=".png, .jpg, .jpeg, .pdf, .zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) => handleFileChange(e, "noticeCopy")}
                                        />
                                    </div> */}
                                    {formData.noticeCopy && formData.noticeCopy.length > 0 ? (
                                        <a href={formData.noticeCopy} target="_blank" rel="noopener noreferrer">
                                            View Notice Copy
                                        </a>
                                    ) : (
                                        <div style={{ color: 'red' }}>Not Uploaded Yet</div>

                                    )}
                                </div>
                            </td>
                            <td colSpan="3">
                                <div>
                                    <label className="form-label">Supporting Documents:</label>
                                    {/* <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}>
                                        <textarea>*</textarea>Only accepts .png, .jpg, .jpeg, .pdf, .zip
                                    </p> */}
                                    {/* <div className="form-group files1">
                                        <input
                                            type="file"
                                            name="supportingDocuments"
                                            id="supportingDocuments"
                                            className="form-control"
                                            multiple
                                            accept=".png, .jpg, .jpeg, .pdf, .zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) => handleFileChange(e, "supportingDocuments")}
                                        />
                                    </div> */}<br />
                                    {formData.supportingDocuments && formData.supportingDocuments.length > 0 ? (
                                        <a href={formData.supportingDocuments[0]} target="_blank" rel="noopener noreferrer">
                                            View Supporting Document
                                        </a>
                                    ) : (
                                        <div style={{ color: 'red' }}>Not Uploaded Yet</div>

                                    )}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="8">
                                <label className="form-label">Remarks:</label>
                                <textarea
                                    type="text"
                                    name="remarksNotice"
                                    className="form-control"
                                    placeholder="Enter Remarks"
                                    value={formData.remarksNotice}
                                    onChange={handleChange}
                                    disabled
                                />
                            </td>
                        </tr>
                    </>
                    <tr >
                        <td colSpan="3">
                            <div>
                                <label className="form-label"> Notice Reply Document:</label><br />
                                {/* <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}> <textarea>*</textarea>Only accepts .png, .jpg, .jpeg$ .pdf, .zip</p> */}

                                {/* <div class="form-group files1">
                                        <input
                                            type="file"
                                            name="noticeReplyDoc"
                                            id="noticeReplyDoc"
                                            class="form-control"
                                            multiple=""
                                            accept="image/*,application/pdf,.zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) =>
                                                handleFileChange(e, "noticeReplyDoc")
                                            }
                                        />
                                    </div> */}
                                {formData.noticeReplyDoc && formData.noticeReplyDoc.length > 0 ? (
                                    <a href={formData.noticeReplyDoc} target="_blank" rel="noopener noreferrer">
                                        View Notice Reply Document
                                    </a>
                                ) : (
                                    <div style={{ color: 'red' }}>Not Uploaded Yet</div>

                                )}
                            </div>
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Remarks:</label>
                            <textarea disabled type="text" name="remarksNoticeReply" class="form-control" placeholder="Enter Remarks" value={formData.remarksNoticeReply} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="3">
                            <div>
                                <label className="form-label"> Attested Document:</label><br />
                                {/* <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}> <textarea>*</textarea>Only accepts .png, .jpg, .jpeg$ .pdf, .zip</p> */}

                                {/* <div class="form-group files1">
                                    <input
                                        type="file"
                                        name="attestedDoc"
                                        id="attestedDoc"
                                        class="form-control"
                                        multiple=""
                                        accept="image/*,application/pdf,.zip"
                                        style={{ height: "10px" }}
                                        onChange={(e) =>
                                            handleFileChange(e, "attestedDoc")
                                        }
                                    />
                                </div> */}
                                {formData.attestedDoc && formData.attestedDoc.length > 0 ? (
                                    <a href={formData.attestedDoc} target="_blank" rel="noopener noreferrer">
                                        View Attested Document
                                    </a>
                                ) : (
                                    <div style={{ color: 'red' }}>Not Uploaded Yet</div>

                                )}
                            </div>
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Remarks:</label>
                            <textarea disabled type="text" name="remarksNoticeAttested" class="form-control" placeholder="Enter Remarks" value={formData.remarksNoticeAttested} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr >
                        <td colSpan="3">
                            <div>
                                <label className="form-label"> Closure Acknowledgement Document:</label><br />
                                {/* <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}> <textarea>*</textarea>Only accepts .png, .jpg, .jpeg$ .pdf, .zip</p> */}

                                {/* <div class="form-group files1">
                                        <input
                                            type="file"
                                            name="closureAckDoc"
                                            id="closureAckDoc"
                                            class="form-control"
                                            multiple=""
                                            accept="image/*,application/pdf,.zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) =>
                                                handleFileChange(e, "closureAckDoc")
                                            }
                                        />
                                    </div> */}
                                {formData.closureAckDoc && formData.closureAckDoc.length > 0 ? (
                                    <a href={formData.closureAckDoc} target="_blank" rel="noopener noreferrer">
                                        View Closure Acknowledged Document
                                    </a>
                                ) : (
                                    <div style={{ color: 'red' }}>Not Uploaded Yet</div>
                                )}
                            </div>
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Remarks:</label>
                            <textarea disabled type="text" name="remarksNoticeClosureAck" class="form-control" placeholder="Enter Remarks" value={formData.remarksNoticeClosureAck} onChange={handleChange} />
                        </td>
                    </tr>


                </tbody>
                {/* <button
                    style={{
                        backgroundColor: "#013879",
                        color: "white",
                        width: "300%",
                        borderRadius: "4px",
                        height: "40px",
                    }}
                    // type="primary"
                    onSubmit="submit"
                    loading={loading}
                    disabled={loading}
                >
                    Submit
                </button> */}
            </table>
        </Form >
    );
};

export default NoticeEdit;

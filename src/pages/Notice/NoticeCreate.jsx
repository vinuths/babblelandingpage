// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
// import './NoticeCreate.css'; // Add a CSS file for styling
import { Button, Input, Select, Form, Upload, message, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
    stateGets,
    CompanyBranchesGet,
    BranchesGetByCompany,
    companyTableGet,
    CreatingNotice,
    TableNoticesGet,
} from "../../store/actions/otherActions"; // Redux actions
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import './NoticeCss.css';

const { Option } = Select;


const NoticeCreate = () => {

    const navigate = useNavigate(); // Initialize useNavigate
    const getCompanyTable = useSelector((state) => state.getCompanyTable);
    const { loadingcompanytable, companyGetTableInfo } = getCompanyTable;
    // console.log("companyGetTableInfo", companyGetTableInfo);
    const { CompanyBranchesInfo, loadingBranch, error } = useSelector((state) => state.CompanyBranchesGetRed);
    const { BranchesByCompanyInfo, loadingBranchByC, error1 } = useSelector((state) => state.BranchesByCompanyGetRed);

    const getState = useSelector((state) => state.getState);
    const { loadings, stateInfo } = getState;
    const dispatch = useDispatch();
    // const [selectedOption, setSelectedOption] = useState(""); // "Factory" or "S&E"
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(companyTableGet());
        dispatch(stateGets());
        dispatch(CompanyBranchesGet());
        // dispatch(BranchesGetByCompany());

    }, [dispatch]);

    const [imagePreview, setImagePreview] = useState("");
    const [formData, setFormData] = useState({
        company: '',
        branch: '',
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
        noticeCopy: '',
        supportingDocuments: '',
        noticeReplyDoc: '',
        attestedDoc: '',
        closureAckDoc: '',
        noticeStatus: 0,
        remarksNoticeReply: '',
        remarksNoticeAttested: '',
        remarksNoticeClosureAck: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCompanySelect = async (value) => {
        setFormData((prev) => ({ ...prev, company: value }));
        console.log("value", value);

        // Dispatch action to fetch branches for the selected company
        try {
            await dispatch(BranchesGetByCompany({ companyId: value }));
        } catch (error) {
            console.error("Error fetching branches:", error);
        }
    };
    const handleBranchSelect = (value) => {
        setFormData((prev) => ({ ...prev, branch: value }));
    };
    const handleDepartmentSelect = (value) => {
        setFormData((prev) => ({ ...prev, department: value }));
    };

    const resetForm = () => {
        setFormData({
            company: '',
            branch: '',
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
            noticeCopy: '',
            supportingDocuments: '',
            noticeReplyDoc: '',
            attestedDoc: '',
            closureAckDoc: '',
            noticeStatus: 0,
            remarksNoticeReply: '',
            remarksNoticeAttested: '',
            remarksNoticeClosureAck: '',
        });
        setImagePreview("");
        // Reset file inputs explicitly
        // const fileInputs = document.querySelectorAll("input[type='file']");
        // fileInputs.forEach((input) => {
        //   input.value = ""; // Clear the file input
        // });
    };

    // const handleFileChange = (e, fieldName) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //       // Set binary file in formData
    //       setFormData((prev) => ({ ...prev, [fieldName]: file }));

    //       // Generate preview for images
    //       if (file.type.startsWith("image/")) {
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //           setImagePreview((prev) => ({ ...prev, [fieldName]: reader.result }));
    //         };
    //         reader.readAsDataURL(file);
    //       } else {
    //         setImagePreview((prev) => ({ ...prev, [fieldName]: "" })); // No preview for non-image files
    //       }
    //     }
    //   };
    // Form submission

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        if (file) {
            // Set binary file in formData
            setFormData((prev) => ({ ...prev, [fieldName]: file }));

            // Handle image files to generate previews
            if (file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = () => {
                    setImagePreview((prev) => ({ ...prev, [fieldName]: reader.result }));
                };
                reader.readAsDataURL(file);
            }
            // Handle zip files: no preview but you can store their information
            else if (file.type === "application/zip") {
                setImagePreview((prev) => ({ ...prev, [fieldName]: "ZIP file selected, no preview available" }));
            }
            // No preview for other file types
            else {
                setImagePreview((prev) => ({ ...prev, [fieldName]: "" }));
            }
        }
    };

    const handleSubmit = async () => {
        const form = new FormData();
        // Append form fields
        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });
        try {
            setLoading(true);
            // console.log("dtat", formData);
            await dispatch(CreatingNotice(form)); // Dispatch your existing action
            resetForm();
            dispatch(TableNoticesGet());

            // Redirect to BranchForm component
            navigate("/notice"); // Replace with the actual route for redirection
        } catch (error) {
            toast.error("Failed to submit form.", {
                position: "bottom-right",
            });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form layout="vertical" onFinish={handleSubmit}>
            <table className="table  creat_tbl">
                <tbody>

                    <tr>
                        <td colSpan="3">
                            <Form.Item label="Select Company" required>
                                <Select
                                    value={formData.company}
                                    placeholder="Select a company"
                                    onChange={handleCompanySelect}
                                    required
                                >
                                    {/* Default option */}
                                    <Option value="" disabled>
                                        Select a Company
                                    </Option>
                                    {/* Map through companies */}
                                    {companyGetTableInfo?.map((company) => (
                                        <Option key={company._id} value={company._id}>
                                            {company.companyname}
                                        </Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </td>
                        <td colSpan="3">
                            {formData.company ? (
                                <Form.Item label="Select Branch" required>
                                    <Select
                                        value={formData.branch}
                                        placeholder="Select a Branch"
                                        onChange={handleBranchSelect}
                                        required
                                    >
                                        {/* Default option */}
                                        <Option value="" disabled>
                                            Select a Branch
                                        </Option>
                                        {/* Map through branches */}
                                        {BranchesByCompanyInfo?.map((branch) => (
                                            <Option key={branch._id} value={branch._id}>
                                                {branch.name}
                                            </Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <br />
                                    Select Company for Branches
                                </div>
                            )}
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="8">
                            {formData.branch ? (
                                <Form.Item label="Select department" required>
                                    <Select
                                        value={formData.department}
                                        placeholder="Select a department"
                                        onChange={handleDepartmentSelect}
                                        required
                                    >
                                        {/* Default option */}
                                        <Option value="" disabled>
                                            Select a Department
                                        </Option>
                                        <Option value="PF">
                                            PF
                                        </Option>
                                        <Option value="ESIC">
                                            ESIC
                                        </Option>
                                        <Option value="PT">
                                            PT
                                        </Option>
                                        <Option value="S&E">
                                            S&E
                                        </Option>
                                        <Option value="Factory">
                                            Factory
                                        </Option>
                                        <Option value="CLRA">
                                            CLRA
                                        </Option>
                                        <Option value="BOCW">
                                            BOCW
                                        </Option>
                                        <Option value="PCB">
                                            PCB
                                        </Option>
                                        <Option value="Local Bodies">
                                            Local Bodies
                                        </Option>
                                    </Select>
                                </Form.Item>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <br />
                                    Select Branch for Department
                                </div>
                            )}
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="3">
                            <label className="form-label">Notice Number:</label>
                            <input type="text" name="noticeNumber" class="form-control" placeholder="Enter Number" value={formData.noticeNumber} onChange={handleChange} required />
                        </td>
                        <td colSpan="3">
                            <label className="form-label">Date of Notice:</label>
                            <input type="date" class="form-control" placeholder="Date of Notice" name="dateOfNotice" id="dateOfNotice" value={formData?.dateOfNotice} onChange={handleChange} required />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <label className="form-label">Type of Notice:</label>
                            <input type="text" name="typeOfNotice" class="form-control" placeholder="Enter Type of Notice" value={formData.typeOfNotice} onChange={handleChange} />
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Issuing Authority:</label>
                            <input type="text" class="form-control" placeholder=" Enter Issuing Authority" name="issuingAuthority" value={formData.issuingAuthority} onChange={handleChange} />
                        </td>
                        <td colSpan="2">
                            <label className="form-label">Contact No. Authority:</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Enter Contact Number of Authority"
                                name="contactAuthority"
                                value={formData.contactAuthority}
                                onChange={handleChange}
                                maxLength="10"  // Limit to 10 digits
                                pattern="\d{10}" // Ensure only digits are entered
                                required // Make it a required field
                            />
                        </td>

                    </tr>
                    <tr>
                        <td colSpan="3">
                            <label className="form-label">Dead Line for Closure:</label>
                            <input type="date" name="closureDeadLine" class="form-control" placeholder="Dead Line for Closure" value={formData.closureDeadLine} onChange={handleChange} />
                        </td>
                        <td colSpan="3">
                            <label className="form-label">Priority:</label>
                            <select
                                value={formData.priority}
                                className="form-control"
                                placeholder="Select Priority"
                                name="priority"
                                onChange={handleChange}
                                required
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

                            <textarea name="descriptionNotice" className="form-control" placeholder="Enter the Details" value={formData.descriptionNotice} onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="8">
                            <label className="form-label">Deadline for Action:</label>
                            <input type="date" name="actionDeadline" class="form-control" value={formData.actionDeadline} onChange={handleChange} />
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
                    {formData.department !== "" && (
                        <tr >
                            <td colSpan="3">
                                <div>
                                    <label className="form-label"> Notice Copy:</label><br />
                                    <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}> <span>*</span>Only accepts .png, .jpg, .jpeg$ .pdf, .zip</p>

                                    <div class="form-group files1">
                                        <input
                                            type="file"
                                            name="noticeCopy"
                                            id="noticeCopy"
                                            class="form-control"
                                            multiple=""
                                            accept="image/*,application/pdf,.zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) =>
                                                handleFileChange(e, "noticeCopy")
                                            }
                                            required
                                        />
                                    </div>
                                </div>
                            </td>
                            <td colSpan="3">
                                <div>
                                    <label className="form-label">Supporting Documents:</label>
                                    <p className="form-label" style={{ fontSize: '12px', color: 'red', fontStyle: 'italic' }}> <span>*</span>Only accepts .png, .jpg, .jpeg$ .pdf, .zip</p>
                                    <div class="form-group files1">
                                        <input
                                            type="file"
                                            name="supportingDocuments"
                                            id="supportingDocuments"
                                            class="form-control"

                                            multiple=""
                                            accept="image/*,application/pdf,.zip"
                                            style={{ height: "10px" }}
                                            onChange={(e) =>
                                                handleFileChange(e, "supportingDocuments")
                                            }
                                        />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}

                    <tr>
                        <td colSpan="8">
                            <label className="form-label">Remarks:</label>
                            <textarea type="text" name="remarksNotice" class="form-control" placeholder="Enter Remarks" value={formData.remarksNotice} onChange={handleChange} />
                        </td>
                    </tr>


                </tbody>
                <button
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
                </button>
            </table>
        </Form >
    );
};

export default NoticeCreate;

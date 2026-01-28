import {
  auditoreGet,
  getExecutive,
  catCreate,
  catGet,
  catEdit,
  catDelete,
  gettingState,
  gettingUser,
  NotificationCreate,
  gettingNotification,
  userCreate,
  editUser,
  userDelete,
  createChecklist,
  gettingChecklist,
  gettingCompany,
  gettingCompanyTable,
  gettingBranch,
  createBranch,
  createCompany,
  createCompliances,
  gettingCompliances,
  gettingCompliancesById,
  gettingCompliancesOnCreate,
  complianceApporve,
  gettingCompliancesReject,
  complianceReject,
  updateCompliancesById,
  gettingCompliancesAll,
  gettingCompliancesFilter,
  gettingCompliancesAllFilter,
  gettingCompliancesRejetFilter,
  updateChecklistsById,
  checklistOnCreateegetting,
  gettingchecklistById,
  checklistAllgetting,
  checklistApporve,
  gettingchecklistAllFilter,
  gettingchecklistOnCreateFilter,
  checklistApprovegetting,
  gettingchecklistOnApproveFilter,
  checklistOnRejectegetting,
  rejectChecklist,
  gettingchecklistOnrejectFilter,
  gettingchecklistAllCompliance,
  gettingcomplianceOnApproveFilter,
  gettingChecklistOnCreate,
  createLiseReg,
  gettingAuditDetail,
  getttingReg,
  regsApporve,
  liseRegGettingByIds,
  liseregsFilters,
  liseRegUpdateByIds,
  regsReject,
  auditCreate,
  auditoreFilterChecklist,
  auditchecklistGetonCreate,
  auditAllFilter,
  gettingOnGoingAuditDetail,
  gettingOverviewAuditDetail,
  ElibraryCreate,
  ElibraryGet,
  elibraryGetById,
  elibraryUpdateById,
  elibraryReject,
  elibrarySaveandApprove,
  elibraryRejectedDocs,
  companytab1,
  companytab2,
  companytab3,
  companytab4,
  companytab5,
  companytab6,
  companytab7,
  companyL,
  gettingCompanyById,
  companyLcreate,
  companyLById,
  companyLUpdateById,
  apporveCompanyL,
  companyLicenseFilter,
  gettingCompliaceCSById,
  companySaveandApprove,
  createcompanyinteraction,
  gettingComppanyInterationById,
  updatecompanyinteractionById,
  gettingCompanyInractionTable,
  apporveCompanyInteraction,
  companyProfileFilter,
  licenseCompanyInteractcreate,
  licenseCompanyInteractGetOnCreate,
  companyinteractLicGetByid,
  companyinteractLicUpdateById,
  apporveCompanyInteractionLicense,
  companyLicenseIntractFilter,
  createAssign,
  getAssignid,
  assignsUpdateById,
  assignTableGet,
  getAssignOnCreate,
  viewAllAssignedCompanyFilter,
  assignedCompanyFilter,
  AuditUploadStatusValue,
  DueDaysNotification,
  updateDueDates,
  auditFieldsUpdate,
  // checklistAddInAudit,
  // fileUploadInAuditQuestion as 
  BranchesCreate,
  AllBranchesGetting,
  TableBranchesGetting,
  BranchUpdateById,
  BranchGetById,
  CompanyBranchesGetting,
  BranchesGettingByCompany,
  NoticeCreate,
  TableNoticesGetting,
  NoticeGetById,
  NoticeUpdateById,
  NoticeDeleteById,
  getLabourContractAgreementName,
  getPrincipleAgreementName,
  gettingAuditDetailLCA,
  gettingAuditDetailPA,
  auditAllFilterLCA,
  auditAllFilterPA,
  AuditUploadStatusValueLCA,
  AuditUploadStatusValuePA,
  fileUploadInAuditQuestionLCA,
  fileUploadInAuditQuestionPA,




  createActLibrary,
  getActLibraryPaginated,
  updateActLibrary,
  deleteActLibrary,
  createRulesLibrary,
  getRulesLibraryPaginated,
  updateRulesLibrary,
  deleteRulesLibrary,
  createLabourFormsLibrary,
  getLabourFormsLibraryPaginated,
  updateLabourFormsLibrary,
  deleteLabourFormsLibrary,
  createHolidayLibrary,
  getHolidayLibraryPaginated,
  updateHolidayLibrary,
  deleteHolidayLibrary,
  createLabourWelFundLibrary,
  getLabourWelFundLibraryPaginated,
  updateLabourWelFundLibrary,
  deleteLabourWelFundLibrary,
  createMinimumWagesLibrary,
  getMinimumWagesLibraryPaginated,
  updateMinimumWagesLibrary,
  deleteMinimumWagesLibrary,
  createWHAndLRLibrary,
  getWHAndLRLibraryPaginated,
  updateWHAndLRLibrary,
  deleteWHAndLRLibrary,
  createProfessionalTaxLibrary,
  getProfessionalTaxLibraryPaginated,
  updateProfessionalTaxLibrary,
  deleteProfessionalTaxLibrary,
  createComplianceCategory,
  getComplianceCategoryPaginated,
  deleteComplianceCategory,
  updateComplianceCategory,
  ComplianceCategoryListGettting,
  createCompQandALibrary,
  getCompQandALibraryPaginated,
  updateCompQandALibrary,
  deleteCompQandALibrary,
  createPolicyTemplateLibrary,
  getPolicyTemplateLibraryPaginated,
  updatePolicyTemplateLibrary,
  deletePolicyTemplateLibrary,
  createReLeagalUpdateLibrary,
  getReLeagalUpdateLibraryPaginated,
  updateReLeagalUpdateLibrary,
  deleteReLeagalUpdateLibrary,
  createGeneralELibrary,
  getGeneralELibraryPaginated,
  updateGeneralELibrary,
  deleteGeneralELibrary,
  getAllHolidayLibraries,
  HelpSupportMailer,
  getAllHolidayByStateLibraries,
  getAllLabourWelfareByStateLibraries,
  getAllMinWagesLibraries,
  getMinWagePeriodsByStateAndYear,
  getMinimumWageById,
  getAllWHAndLRByStateLibraries,
  getAllPTByStateLibraries,
  createRemittanceTracker,
  getAllRemittanceTrackers,
  updateRemittanceTracker,
  deleteRemittanceTracker,
  getRemmitanceTrackerById,
  createRegisterComp,
  getAllRegisters,
  getRegisterById,
  updateRegisterById,
  deleteRegisterById,
  createReturnsTracker,
  getAllReturnsTrackers,
  updateReturnsTracker,
  deleteReturnsTracker,
  getReturnsTrackerById,
  catGetComp,
  getChecklistByCategory,
  deleteBranches,
  companyexecutiveEGet,
  getBranchRequests,
  getBranchRequestById,
  checkBranchNameExists,
  deleteBranchLicenseRequest,
  exportForm13Templates,
  exportForm13TemplatesPDF,
  exportForm13TemplatesAuto,
  generateFormFRegisters,
  generateFormFRegistersPDF,
  exportFormDExcel,
  exportFormDPDF,
  formCExcel,
  formCPDF,
  exportFormAExcel,
  stridesAttendanceData,
  regiIntigrateCreate,
  regiIntigrateFetchAll,
   ContactMailer,
} from "../../routes/api";

import { checklistAddInAudit as apiChecklistAddInAudit } from "../../routes/api";
import { fileUploadInAuditQuestion as fileUploadInAuditQuestions } from "../../routes/api";


import { toast } from "react-toastify";
import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CATEGORY_REQUEST_GET,
  CATEGORY_SUCCESS_GET,
  AUDITOR_REQUEST_GET,
  AUDITOR_SUCCESS_GET,
  AUDITOR_GET_FAIL,
  EXECUTIVE_REQUEST_GET,
  EXECUTIVE_SUCCESS_GET,
  EXECUTIVE_GET_FAIL,
  AUDITOR_REQUEST_GET_FILTER,
  AUDITOR_SUCCESS_GET_FILTER,
  AUDITOR_GET_FAIL_FILTER,
  AUDITOR_REQUEST_GET_ALL_FILTER,
  AUDITOR_SUCCESS_GET_ALL_FILTER,
  AUDITOR_GET_FAIL_ALL_FILTER,
  CHECKLIST_REQUEST_GET_CREATE_AUDIT,
  CHECKLIST_SUCCESS_GET_CREATE_AUDIT,
  CHECKLIST_GET_FAIL_CREATE_AUDIT,
  CATEGORY_GET_FAIL,
  CATEGORY_REQUEST_EDIT,
  CATEGORY_SUCCESS_EDIT,
  CATEGORY_EDIT_FAIL,
  CATEGORY_DELETE_REQUEST,
  CATEGORY_DELETE_SUCCESS,
  CATEGORY_DELETE_FAIL,
  STATE_REQUEST_GET,
  STATE_SUCCESS_GET,
  STATE_GET_FAIL,
  USER_REQUEST_GET,
  USER_SUCCESS_GET,
  USER_GET_FAIL,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  NOTFICATION_CREATE_REQUEST,
  NOTFICATION_CREATE_SUCCESS,
  NOTFICATION_CREATE_FAIL,
  NOTFICATION_REQUEST_GET,
  NOTFICATION_SUCCESS_GET,
  NOTFICATION_GET_FAIL,
  USER_CREATE_REQUEST,
  USER_CREATE_SUCCESS,
  USER_CREATE_FAIL,
  USER_REQUEST_EDIT,
  USER_SUCCESS_EDIT,
  USER_EDIT_FAIL,
  CHECKLIST_CREATE_REQUEST,
  CHECKLIST_CREATE_SUCCESS,
  CHECKLIST_CREATE_FAIL,
  CHECKLIST_REQUEST_GET,
  CHECKLIST_SUCCESS_GET,
  CHECKLIST_GET_FAIL,
  CHECKLIST_REQUEST_UPDATE_BYID,
  CHECKLIST_SUCCESS_UPDATE_BYID,
  CHECKLIST_FAIL_UPDATE_BYID,
  CHECKLIST_REQUEST_GET_CREATE,
  CHECKLIST_SUCCESS_GET_CREATE,
  CHECKLIST_GET_FAIL_CREATE,
  CHECKLIST_REQUEST_GET_BYID,
  CHECKLIST_SUCCESS_GET_BYID,
  CHECKLIST_FAIL_GET_BYID,
  CHECKLIST_REQUEST_GET_ALL,
  CHECKLIST_SUCCESS_GET_ALL,
  CHECKLIST_GET_FAIL_ALL,
  CHECKLIST_REQUEST_GET_APPROVE_PAGE,
  CHECKLIST_SUCCESS_GET_APPROVE_PAGE,
  CHECKLIST_GET_FAIL_APPROVE_PAGE,
  CHECKLIST_REQUEST_GET_APPROVE,
  CHECKLIST_SUCCESS_GET_APPROVE,
  CHECKLIST_REQUEST_GET_APPROVE_FAIL,
  CHECKLIST_REQUEST_ALL_FILTER,
  CHECKLIST_SUCCESS_ALL_FILTER,
  CHECKLIST_ALL_FAIL_FILTER,
  CHECKLIST_REQUEST_CREATE_FILTER,
  CHECKLIST_SUCCESS_CREATE_FILTER,
  CHECKLIST_ALL_CREATE_FILTER,
  CHECKLIST_REQUEST_APPROVE_FILTER,
  CHECKLIST_SUCCESS_APPROVE_FILTER,
  CHECKLIST_ALL_APPROVE_FILTER,
  CHECKLIST_REQUEST_GET_REJECT,
  CHECKLIST_SUCCESS_GET_REJECT,
  CHECKLIST_GET_FAIL_REJECT,
  CHECKLIST_REQUEST_REJECT,
  CHECKLIST_SUCCESS_REJECT,
  CHECKLIST_REQUEST_REJECT_FAIL,
  CHECKLIST_REQUEST_REJECT_FILTER,
  CHECKLIST_SUCCESS_REJECT_FILTER,
  CHECKLIST_ALL_REJECT_FILTER,
  CHECKLIST_REQUEST_All_COMPLIANCE,
  CHECKLIST_SUCCESS_All_COMPLIANCE,
  CHECKLIST_FAIL_All_COMPLIANCE,
  AUDIT_REQUEST_All_DETAIL,
  AUDIT_SUCCESS_All_DETAIL,
  AUDIT_FAIL_All_DETAIL,
  AUDIT_REQUEST_CREATE,
  AUDIT_SUCCESS_CREATE,
  AUDIT_FAIL_CREATE,
  AUDIT_REQUEST_ONGOING_DETAIL,
  AUDIT_SUCCESS_ONGOING_DETAIL,
  AUDIT_FAIL_ONGOING_DETAIL,
  BRANCH_REQUEST_GET,
  BRANCH_SUCCESS_GET,
  BRANCH_GET_FAIL,
  COMPANY_REQUEST_GET,
  COMPANY_SUCCESS_GET,
  COMPANY_GET_FAIL,
  COMPLIANCE_REQUEST_GET,
  COMPLIANCE_SUCCESS_GET,
  COMPLIANCE_GET_FAIL,
  COMPLIANCE_REQUEST_GET_ALL,
  COMPLIANCE_SUCCESS_GET_ALL,
  COMPLIANCE_GET_FAIL_ALL,
  COMPLIANCE_REQUEST_GET_CREATE,
  COMPLIANCE_SUCCESS_GET_CREATE,
  COMPLIANCE_GET_FAIL_CREATE,
  COMPLIANCE_REQUEST_GET_BYID,
  COMPLIANCE_SUCCESS_GET_BYID,
  COMPLIANCE_FAIL_GET_BYID,
  COMPLIANCE_REQUEST_UPDATE_BYID,
  COMPLIANCE_SUCCESS_UPDATE_BYID,
  COMPLIANCE_FAIL_UPDATE_BYID,
  COMPLIANCE_REQUEST_GET_APPROVE,
  COMPLIANCE_SUCCESS_GET_APPROVE,
  COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
  COMPLIANCE_REQUEST_GET_REJECT,
  COMPLIANCE_SUCCESS_GET_REJECT,
  COMPLIANCE_REQUEST_GET_REJECT_FAIL,
  COMPLIANCE_REQUEST_REJECT_FILTER,
  COMPLIANCE_SUCCESS_REJECT_FILTER,
  COMPLIANCE_REJECT_FAIL_FILTER,
  COMPLIANCE_REQUEST_APPROVE_FILTER,
  COMPLIANCE_SUCCESS_APPROVE_FILTER,
  COMPLIANCE_APPROVE_FAIL_FILTER,
  COMPLIANCE_REQUEST_GET_FILTER,
  COMPLIANCE_SUCCESS_GET_FILTER,
  COMPLIANCE_GET_FAIL_FILTER,
  COMPLIANCE_REQUEST_REJECT,
  COMPLIANCE_SUCCESS_REJECT,
  COMPLIANCE_REQUEST_REJECT_FAIL,
  COMPLIANCE_SUCCESS_GET_ALL_FILTER,
  COMPLIANCE_REQUEST_GET_ALL_FILTER,
  COMPLIANCE_GET_FAIL_ALL_FILTER,
  BRANCH_CREATE_REQUEST,
  BRANCH_CREATE_SUCCESS,
  BRANCH_CREATE_FAIL,
  COMPANY_CREATE_REQUEST,
  COMPANY_CREATE_SUCCESS,
  COMPANY_CREATE_FAIL,
  COMPLIANCE_CREATE_REQUEST,
  COMPLIANCE_CREATE_SUCCESS,
  COMPLIANCE_CREATE_FAIL,
  NAMERATE_CREATE_REQUEST,
  NAMERATE_CREATE_SUCCESS,
  NAMERATE_CREATE_FAIL,
  DOC_CREATE_REQUEST,
  DOC_CREATE_SUCCESS,
  DOC_CREATE_FAIL,
  APPDETAILS_CREATE_REQUEST,
  APPDETAILS_CREATE_SUCCESS,
  APPDETAILS_CREATE_FAIL,
  EXPENSE_CREATE_REQUEST,
  EXPENSE_CREATE_SUCCESS,
  EXPENSE_CREATE_FAIL,
  LICENSE_CREATE_REQUEST,
  LICENSE_CREATE_SUCCESS,
  LICENSE_CREATE_FAIL,
  INVOICE_CREATE_REQUEST,
  INVOICE_CREATE_SUCCESS,
  INVOICE_CREATE_FAIL,
  COMPANYINFO_CREATE_REQUEST,
  COMPANYINFO_CREATE_SUCCESS,
  COMPANYINFO_CREATE_FAIL,
  REGSGET_REQUEST,
  REGSGET_SUCCESS,
  REGSGET_FAIL,
  LISEREGS_REQUEST_GET_APPROVE,
  LISEREGS_SUCCESS_GET_APPROVE,
  LISEREGS_REQUEST_GET_APPROVE_FAIL,
  LISEREGS_REQUEST_GET_FILTER,
  LISEREGS_SUCCESS_GET_FILTER,
  LISEREGS_REQUEST_GET_FILTER_FAIL,
  LISEREGS_REQUEST_GET_BYID,
  LISEREGS_SUCCESS_GET_BYID,
  LISEREGS_REQUEST_GET_BYID_FAIL,
  LISEREGS_REQUEST_GET_REJECT,
  LISEREGS_SUCCESS_GET_REJECT,
  LISEREGS_REQUEST_GET_REJECT_FAIL,
  NAMERATE_UPDATE_REQUEST,
  NAMERATE_UPDATE_SUCCESS,
  NAMERATE_UPDATE_FAIL,
  DOC_UPDATE_REQUEST,
  DOC_UPDATE_SUCCESS,
  DOC_UPDATE_FAIL,
  APPDETAILS_UPDATE_REQUEST,
  APPDETAILS_UPDATE_SUCCESS,
  APPDETAILS_UPDATE_FAIL,
  EXPENSE_UPDATE_REQUEST,
  EXPENSE_UPDATE_SUCCESS,
  EXPENSE_UPDATE_FAIL,
  LICENSE_UPDATE_REQUEST,
  LICENSE_UPDATE_SUCCESS,
  LICENSE_UPDATE_FAIL,
  INVOICE_UPDATE_REQUEST,
  INVOICE_UPDATE_SUCCESS,
  INVOICE_UPDATE_FAIL,
  COMPANYINFO_UPDATE_REQUEST,
  COMPANYINFO_UPDATE_SUCCESS,
  COMPANYINFO_UPDATE_FAIL,
  ELIBRARY_CREATE_REQUEST,
  ELIBRARY_CREATE_SUCCESS,
  ELIBRARY_CREATE_FAIL,
  ELIBRARY_GET_REQUEST,
  ELIBRARY_GET_SUCCESS,
  ELIBRARY_GET_FAIL,
  ELIBRARY_REQUEST_GET_BYID,
  ELIBRARY_SUCCESS_GET_BYID,
  ELIBRARY_REQUEST_GET_BYID_FAIL,
  ELIBRARY_GET_REQUEST_UPDATE_BY_ID,
  ELIBRARY_GET_SUCCESS_UPDATE_BY_ID,
  ELIBRARY_GET_FAIL_UPDATE_BY_ID,
  ELIBRARY_REQUEST_GET_REJECT,
  ELIBRARY_SUCCESS_GET_REJECT,
  ELIBRARY_REQUEST_GET_REJECT_FAIL,
  ELIBRARY_REQUEST_SAVE_APPROVE,
  ELIBRARY_SUCCESS_SAVE_APPROVE,
  ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
  ELIBRARY_REQUEST_GET_REJECT_LIST,
  ELIBRARY_SUCCESS_GET_REJECT_LIST,
  ELIBRARY_GET_FAIL_REJECT_LIST,
  AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD,
  AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD,
  AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
  COMPANYTAB1_CREATE_REQUEST,
  COMPANYTAB1_CREATE_SUCCESS,
  COMPANYTAB1_CREATE_FAIL,
  COMPANYTAB2_CREATE_REQUEST,
  COMPANYTAB2_CREATE_SUCCESS,
  COMPANYTAB2_CREATE_FAIL,
  COMPANYTAB3_CREATE_REQUEST,
  COMPANYTAB3_CREATE_SUCCESS,
  COMPANYTAB3_CREATE_FAIL,
  COMPANYTAB4_CREATE_REQUEST,
  COMPANYTAB4_CREATE_SUCCESS,
  COMPANYTAB4_CREATE_FAIL,
  COMPANYTAB5_CREATE_REQUEST,
  COMPANYTAB5_CREATE_SUCCESS,
  COMPANYTAB5_CREATE_FAIL,
  COMPANYTAB6_CREATE_REQUEST,
  COMPANYTAB6_CREATE_SUCCESS,
  COMPANYTAB6_CREATE_FAIL,
  COMPANYTAB7_CREATE_REQUEST,
  COMPANYTAB7_CREATE_SUCCESS,
  COMPANYTAB7_CREATE_FAIL,
  COMPANYL_CREATE_REQUEST,
  COMPANYL_CREATE_SUCCESS,
  COMPANYL_CREATE_FAIL,
  COMPANYL_GET_REQUEST,
  COMPANYL_GET_SUCCESS,
  COMPANYL_GET_FAIL,
  COMPANY_GET_TABLE_REQUEST,
  COMPANY_GET_TABLE_SUCCESS,
  COMPANY_GET_TABLE_FAIL,
  COMPANY_REQUEST_GET_BYID,
  COMPANY_SUCCESS_GET_BYID,
  COMPANY_REQUEST_GET_BYID_FAIL,
  COMPANYL_GET_REQUEST_BY_ID,
  COMPANYL_GET_SUCCESS_BY_ID,
  COMPANYL_GET_FAIL_BY_ID,
  COMPANY_LICENSE_REQUEST_GET_APPROVE,
  COMPANY_LICENSE_SUCCESS_GET_APPROVE,
  COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
  COMPANY_LICENSE_REQUEST_GET_FILTER,
  COMPANY_LICENSE_SUCCESS_GET_FILTER,
  COMPANY_LICENSE_GET_FAIL_FILTER,
  COMPANY_REQUEST_SAVE_APPROVE,
  COMPANY_SUCCESS_SAVE_APPROVE,
  COMPANY_REQUEST_SAVE_APPROVE_FAIL,
  COMLIANCE_REQUEST_GET_BY_CSID,
  COMLIANCE_SUCCESS_GET_BY_CSID,
  COMLIANCE_GET_BY_CSID_FAIL,
  COMPANY_INERACTION_CREATE_REQUEST,
  COMPANY_INERACTION_CREATE_SUCCESS,
  COMPANY_INERACTION_CREATE_FAIL,
  COMPANY_INTERACTION_REQUEST_GET_BYID,
  COMPANY_INTERACTION_SUCCESS_GET_BYID,
  COMPANY_INTERACTION_FAIL_GET_BYID,
  COMPANY_INTERACTION_REQUEST_UPDATE_BYID,
  COMPANY_INTERACTION_SUCCESS_UPDATE_BYID,
  COMPANY_INTERACTION_FAIL_UPDATE_BYID,
  COMPANY_INTERACTION_GET_TABLE_REQUEST,
  COMPANY_INTERACTION_GET_TABLE_SUCCESS,
  COMPANY_INTERACTION_GET_TABLE_FAIL,
  COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE,
  COMPANY_PROFILE_INERACTION_SUCCESS_GET_APPROVE,
  COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
  COMPANY_INTERACT_REQUEST_GET_FILTER,
  COMPANY_INTERACT_SUCCESS_GET_FILTER,
  COMPANY_INTERACT_GET_FAIL_FILTER,
  COMPANY_INTERACTION_LICENSE_GET_REQUEST,
  COMPANY_INTERACTION_LICENSE_GET_SUCCESS,
  COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
  COMPANY_INTERACTION_LIC_CREATE_REQUEST,
  COMPANY_INTERACTION_LIC_CREATE_SUCCESS,
  COMPANY_INTERACTION_LIC_CREATE_FAIL,
  COMPANY_INTERACTION_LIC_REQUEST_GET_BYID,
  COMPANY_INTERACTION_LIC_SUCCESS_GET_BYID,
  COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
  COMPANY_INTERACTION_LIC_REQUEST_UPDATE_BYID,
  COMPANY_INTERACTION_LIC_SUCCESS_UPDATE_BYID,
  COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
  COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE,
  COMPANY_LICENSE_INERACTION_SUCCESS_GET_APPROVE,
  COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
  COMPANY_LICENSE_INTERACT_REQUEST_GET_FILTER,
  COMPANY_LICENSE_INTERACT_SUCCESS_GET_FILTER,
  COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
  COMPANY_ASSIGN_CREATE_REQUEST,
  COMPANY_ASSIGN_CREATE_SUCCESS,
  COMPANY_ASSIGN_CREATE_FAIL,
  COMPANY_ASSIGNREQUEST_GET_BYID,
  COMPANY_ASSIGNSUCCESS_GET_BYID,
  COMPANY_ASSIGNFAIL_GET_BYID,
  COMPANY_ASSIGN_GET_REQUEST,
  COMPANY_ASSIGN_GET_SUCCESS,
  COMPANY_ASSIGN_TABLE_FAIL,
  COMPANY_ASSIGN_REQUEST_UPDATE_BYID,
  COMPANY_ASSIGN_SUCCESS_UPDATE_BYID,
  COMPANY_ASSIGN_FAIL_UPDATE_BYID,
  COMPANY_ASSIGN_ON_CREATE_GET_REQUEST,
  COMPANY_ASSIGN_ON_CREATE_GET_SUCCESS,
  COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
  COMPANY_ASSIGN_REQUEST_GET_FILTER,
  COMPANY_ASSIGN_SUCCESS_GET_FILTER,
  COMPANY_ASSIGN_GET_FAIL_FILTER,
  COMPANY_ASSIGNA_REQUEST_GET_FILTER,
  COMPANY_ASSIGNA_SUCCESS_GET_FILTER,
  COMPANY_ASSIGNA_GET_FAIL_FILTER,
  CHECKLIST_ADD_IN_AUDIT_REQUEST,
  CHECKLIST_ADD_IN_AUDIT_SUCCESS,
  CHECKLIST_ADD_IN_AUDIT_FAILURE,
  FILE_UPLOADS_REQUEST,
  FILE_UPLOADS_SUCCESS,
  FILE_UPLOADS_FAIL,
  AUDIT_UPLOAD_STATUS_REQUEST,
  AUDIT_UPLOAD_STATUS_SUCCESS,
  AUDIT_UPLOAD_STATUS_FAILURE,
  NOTIFICATION_REQUEST,
  NOTIFICATION_SUCCESS,
  NOTIFICATION_FAILURE,
  UPDATE_AUDIT_FIELDS_REQUEST,
  UPDATE_AUDIT_FIELDS_SUCCESS,
  UPDATE_AUDIT_FIELDS_FAILURE,
  UPDATE_DUE_DATES_REQUEST,
  UPDATE_DUE_DATES_SUCCESS,
  UPDATE_DUE_DATES_FAILURE,
  BRANCHES_ADD_REQUEST,
  BRANCHES_ADD_SUCCESS,
  BRANCHES_ADD_FAILURE,
  BRANCHES_EDIT_REQUEST,
  BRANCHES_EDIT_SUCCESS,
  BRANCHES_EDIT_FAILURE,
  BRANCHES_GET_REQUEST,
  BRANCHES_GET_SUCCESS,
  BRANCHES_GET_FAIL,
  BRANCHES_GET_BY_ID_REQUEST,
  BRANCHES_GET_BY_ID_SUCCESS,
  BRANCHES_GET_BY_ID_FAILURE,
  BRANCHES_TABLE_GET_REQUEST,
  BRANCHES_TABLE_GET_SUCCESS,
  BRANCHES_TABLE_GET_FAIL,
  COMPANY_BRANCHES_GET_REQUEST,
  COMPANY_BRANCHES_GET_SUCCESS,
  COMPANY_BRANCHES_GET_FAIL,
  COMPANY_BRANCHES_BY_CREATE_REQUEST,
  COMPANY_BRANCHES_BY_CREATE_SUCCESS,
  COMPANY_BRANCHES_BY_CREATE_FAIL,
  NOTICE_ADD_REQUEST,
  NOTICE_ADD_SUCCESS,
  NOTICE_ADD_FAILURE,
  NOTICES_TABLE_GET_REQUEST,
  NOTICES_TABLE_GET_SUCCESS,
  NOTICES_TABLE_GET_FAIL,
  NOTICES_EDIT_REQUEST,
  NOTICES_EDIT_SUCCESS,
  NOTICES_EDIT_FAILURE,
  NOTICES_GET_BY_ID_REQUEST,
  NOTICES_GET_BY_ID_SUCCESS,
  NOTICES_GET_BY_ID_FAILURE,
  NOTICES_DELETE_REQUEST,
  NOTICES_DELETE_SUCCESS,
  NOTICES_DELETE_FAILURE,
  LABOUR_AGREEMENT_NAME_GET_REQUEST,
  LABOUR_AGREEMENT_NAME_GET_SUCCESS,
  LABOUR_AGREEMENT_NAME_GET_FAIL,
  PRINCIPLE_AGREEMENT_NAME_GET_REQUEST,
  PRINCIPLE_AGREEMENT_NAME_GET_SUCCESS,
  PRINCIPLE_AGREEMENT_NAME_GET_FAIL,
  AUDIT_LCA_REQUEST_All_DETAIL,
  AUDIT_LCA_SUCCESS_All_DETAIL,
  AUDIT_LCA_FAIL_All_DETAIL,
  AUDIT_PA_REQUEST_All_DETAIL,
  AUDIT_PA_SUCCESS_All_DETAIL,
  AUDIT_PA_FAIL_All_DETAIL,
  AUDITOR_LCA_REQUEST_GET_ALL_FILTER,
  AUDITOR_LCA_SUCCESS_GET_ALL_FILTER,
  AUDITOR_LCA_GET_FAIL_ALL_FILTER,
  AUDITOR_PA_REQUEST_GET_ALL_FILTER,
  AUDITOR_PA_SUCCESS_GET_ALL_FILTER,
  AUDITOR_PA_GET_FAIL_ALL_FILTER,
  AUDIT_UPLOAD_STATUS_REQUEST_LCA,
  AUDIT_UPLOAD_STATUS_SUCCESS_LCA,
  AUDIT_UPLOAD_STATUS_FAILURE_LCA,
  AUDIT_UPLOAD_STATUS_REQUEST_PA,
  AUDIT_UPLOAD_STATUS_SUCCESS_PA,
  AUDIT_UPLOAD_STATUS_FAILURE_PA,
  FILE_UPLOADS_SUCCESS_LCA,
  FILE_UPLOADS_FAIL_LCA,
  FILE_UPLOADS_REQUEST_LCA,
  FILE_UPLOADS_FAIL_PA,
  FILE_UPLOADS_SUCCESS_PA,
  FILE_UPLOADS_REQUEST_PA,


  ACT_LIBRARY_CREATE_REQUEST,
  ACT_LIBRARY_CREATE_SUCCESS,
  ACT_LIBRARY_CREATE_FAILURE,
  ACT_LIBRARY_GET_FAILURE,
  ACT_LIBRARY_GET_SUCCESS,
  ACT_LIBRARY_GET_REQUEST,
  ACT_LIBRARY_EDIT_REQUEST,
  ACT_LIBRARY_EDIT_SUCCESS,
  ACT_LIBRARY_EDIT_FAILURE,
  ACT_LIBRARY_DELETE_REQUEST,
  ACT_LIBRARY_DELETE_SUCCESS,
  ACT_LIBRARY_DELETE_FAILURE,
  RULE_LIBRARY_CREATE_REQUEST,
  RULE_LIBRARY_CREATE_SUCCESS,
  RULE_LIBRARY_CREATE_FAILURE,
  RULE_LIBRARY_GET_FAILURE,
  RULE_LIBRARY_GET_SUCCESS,
  RULE_LIBRARY_GET_REQUEST,
  RULE_LIBRARY_EDIT_REQUEST,
  RULE_LIBRARY_EDIT_SUCCESS,
  RULE_LIBRARY_EDIT_FAILURE,
  RULE_LIBRARY_DELETE_REQUEST,
  RULE_LIBRARY_DELETE_SUCCESS,
  RULE_LIBRARY_DELETE_FAILURE,
  LABOUR_FORMS_LIBRARY_CREATE_REQUEST,
  LABOUR_FORMS_LIBRARY_CREATE_SUCCESS,
  LABOUR_FORMS_LIBRARY_CREATE_FAILURE,
  LABOUR_FORMS_LIBRARY_GET_REQUEST,
  LABOUR_FORMS_LIBRARY_GET_SUCCESS,
  LABOUR_FORMS_LIBRARY_GET_FAILURE,
  LABOUR_FORMS_LIBRARY_EDIT_REQUEST,
  LABOUR_FORMS_LIBRARY_EDIT_SUCCESS,
  LABOUR_FORMS_LIBRARY_EDIT_FAILURE,
  LABOUR_FORMS_LIBRARY_DELETE_REQUEST,
  LABOUR_FORMS_LIBRARY_DELETE_SUCCESS,
  LABOUR_FORMS_LIBRARY_DELETE_FAILURE,
  HOLIDAY_LIBRARY_CREATE_REQUEST,
  HOLIDAY_LIBRARY_CREATE_SUCCESS,
  HOLIDAY_LIBRARY_CREATE_FAILURE,
  HOLIDAY_LIBRARY_GET_REQUEST,
  HOLIDAY_LIBRARY_GET_SUCCESS,
  HOLIDAY_LIBRARY_GET_FAILURE,
  HOLIDAY_LIBRARY_EDIT_REQUEST,
  HOLIDAY_LIBRARY_EDIT_SUCCESS,
  HOLIDAY_LIBRARY_EDIT_FAILURE,
  HOLIDAY_LIBRARY_DELETE_REQUEST,
  HOLIDAY_LIBRARY_DELETE_SUCCESS,
  HOLIDAY_LIBRARY_DELETE_FAILURE,
  LABOUR_WELFARE_LIBRARY_CREATE_REQUEST,
  LABOUR_WELFARE_LIBRARY_CREATE_SUCCESS,
  LABOUR_WELFARE_LIBRARY_CREATE_FAILURE,
  LABOUR_WELFARE_LIBRARY_GET_REQUEST,
  LABOUR_WELFARE_LIBRARY_GET_SUCCESS,
  LABOUR_WELFARE_LIBRARY_GET_FAILURE,
  LABOUR_WELFARE_LIBRARY_EDIT_REQUEST,
  LABOUR_WELFARE_LIBRARY_EDIT_SUCCESS,
  LABOUR_WELFARE_LIBRARY_EDIT_FAILURE,
  LABOUR_WELFARE_LIBRARY_DELETE_REQUEST,
  LABOUR_WELFARE_LIBRARY_DELETE_SUCCESS,
  LABOUR_WELFARE_LIBRARY_DELETE_FAILURE,
  MINIMUM_WAGE_LIBRARY_CREATE_REQUEST,
  MINIMUM_WAGE_LIBRARY_CREATE_SUCCESS,
  MINIMUM_WAGE_LIBRARY_CREATE_FAILURE,
  MINIMUM_WAGE_LIBRARY_GET_REQUEST,
  MINIMUM_WAGE_LIBRARY_GET_SUCCESS,
  MINIMUM_WAGE_LIBRARY_GET_FAILURE,
  MINIMUM_WAGE_LIBRARY_EDIT_REQUEST,
  MINIMUM_WAGE_LIBRARY_EDIT_SUCCESS,
  MINIMUM_WAGE_LIBRARY_EDIT_FAILURE,
  MINIMUM_WAGE_LIBRARY_DELETE_REQUEST,
  MINIMUM_WAGE_LIBRARY_DELETE_SUCCESS,
  MINIMUM_WAGE_LIBRARY_DELETE_FAILURE,
  WH_LR_LIBRARY_CREATE_REQUEST,
  WH_LR_LIBRARY_CREATE_SUCCESS,
  WH_LR_LIBRARY_CREATE_FAILURE,
  WH_LR_LIBRARY_GET_REQUEST,
  WH_LR_LIBRARY_GET_SUCCESS,
  WH_LR_LIBRARY_GET_FAILURE,
  WH_LR_LIBRARY_EDIT_REQUEST,
  WH_LR_LIBRARY_EDIT_SUCCESS,
  WH_LR_LIBRARY_EDIT_FAILURE,
  WH_LR_LIBRARY_DELETE_REQUEST,
  WH_LR_LIBRARY_DELETE_SUCCESS,
  WH_LR_LIBRARY_DELETE_FAILURE,
  PT_LIBRARY_CREATE_REQUEST,
  PT_LIBRARY_CREATE_SUCCESS,
  PT_LIBRARY_CREATE_FAILURE,
  PT_LIBRARY_GET_REQUEST,
  PT_LIBRARY_GET_SUCCESS,
  PT_LIBRARY_GET_FAILURE,
  PT_LIBRARY_EDIT_REQUEST,
  PT_LIBRARY_EDIT_SUCCESS,
  PT_LIBRARY_EDIT_FAILURE,
  PT_LIBRARY_DELETE_REQUEST,
  PT_LIBRARY_DELETE_SUCCESS,
  PT_LIBRARY_DELETE_FAILURE,
  COMP_CAT_CREATE_REQUEST,
  COMP_CAT_CREATE_SUCCESS,
  COMP_CAT_CREATE_FAILURE,
  COMP_CAT_GET_REQUEST,
  COMP_CAT_GET_SUCCESS,
  COMP_CAT_GET_FAILURE,
  COMP_CAT_EDIT_REQUEST,
  COMP_CAT_EDIT_SUCCESS,
  COMP_CAT_EDIT_FAILURE,
  COMP_CAT_DELETE_REQUEST,
  COMP_CAT_DELETE_SUCCESS,
  COMP_CAT_DELETE_FAILURE,
  COMP_LIST_CAT_GET_REQUEST,
  COMP_LIST_CAT_GET_SUCCESS,
  COMP_LIST_CAT_GET_FAILURE,
  COMP_Q_A_CREATE_REQUEST,
  COMP_Q_A_CREATE_SUCCESS,
  COMP_Q_A_CREATE_FAILURE,
  COMP_Q_A_GET_REQUEST,
  COMP_Q_A_GET_SUCCESS,
  COMP_Q_A_GET_FAILURE,
  COMP_Q_A_EDIT_REQUEST,
  COMP_Q_A_EDIT_SUCCESS,
  COMP_Q_A_EDIT_FAILURE,
  COMP_Q_A_DELETE_REQUEST,
  COMP_Q_A_DELETE_SUCCESS,
  COMP_Q_A_DELETE_FAILURE,
  POLICY_TEMPLATE_CREATE_REQUEST,
  POLICY_TEMPLATE_CREATE_SUCCESS,
  POLICY_TEMPLATE_CREATE_FAILURE,
  POLICY_TEMPLATE_GET_REQUEST,
  POLICY_TEMPLATE_GET_SUCCESS,
  POLICY_TEMPLATE_GET_FAILURE,
  POLICY_TEMPLATE_EDIT_REQUEST,
  POLICY_TEMPLATE_EDIT_SUCCESS,
  POLICY_TEMPLATE_EDIT_FAILURE,
  POLICY_TEMPLATE_DELETE_REQUEST,
  POLICY_TEMPLATE_DELETE_SUCCESS,
  POLICY_TEMPLATE_DELETE_FAILURE,
  RE_LEGAL_CREATE_REQUEST,
  RE_LEGAL_CREATE_SUCCESS,
  RE_LEGAL_CREATE_FAILURE,
  RE_LEGAL_GET_REQUEST,
  RE_LEGAL_GET_SUCCESS,
  RE_LEGAL_GET_FAILURE,
  RE_LEGAL_EDIT_REQUEST,
  RE_LEGAL_EDIT_SUCCESS,
  RE_LEGAL_EDIT_FAILURE,
  RE_LEGAL_DELETE_REQUEST,
  RE_LEGAL_DELETE_SUCCESS,
  RE_LEGAL_DELETE_FAILURE,
  GENERAL_CREATE_REQUEST,
  GENERAL_CREATE_SUCCESS,
  GENERAL_CREATE_FAILURE,
  GENERAL_GET_REQUEST,
  GENERAL_GET_SUCCESS,
  GENERAL_GET_FAILURE,
  GENERAL_EDIT_REQUEST,
  GENERAL_EDIT_SUCCESS,
  GENERAL_EDIT_FAILURE,
  GENERAL_DELETE_REQUEST,
  GENERAL_DELETE_SUCCESS,
  GENERAL_DELETE_FAILURE,
  HOLIDAY_LIBRARY_GET_REQUEST1,
  HOLIDAY_LIBRARY_GET_SUCCESS1,
  HOLIDAY_LIBRARY_GET_FAILURE1,
  HELP_MAIL_REQUEST,
  HELP_MAIL_SUCCESS,
  HELP_MAIL_FAILURE,
  HOLIDAY_STATE_GET_FAILURE,
  HOLIDAY_STATE_GET_REQUEST,
  HOLIDAY_STATE_GET_SUCCESS,
  LABOUR_WELFARE_STATE_GET_REQUEST,
  LABOUR_WELFARE_STATE_GET_SUCCESS,
  LABOUR_WELFARE_STATE_GET_FAILURE,
  MINWAGE_LIBRARY_GET_REQUEST,
  MINWAGE_LIBRARY_GET_SUCCESS,
  MINWAGE_LIBRARY_GET_FAILURE,
  MINWAGE_PERIOD_LIBRARY_GET_REQUEST,
  MINWAGE_PERIOD_LIBRARY_GET_SUCCESS,
  MINWAGE_PERIOD_LIBRARY_GET_FAILURE,
  MINWAGE_LIBRARY_GET_BY_ID_REQUEST,
  MINWAGE_LIBRARY_GET_BY_ID_SUCCESS,
  MINWAGE_LIBRARY_GET_BY_ID_FAILURE,
  WH_LR_STATE_GET_REQUEST,
  WH_LR_STATE_GET_SUCCESS,
  WH_LR_STATE_GET_FAILURE,
  PT_STATE_GET_REQUEST,
  PT_STATE_GET_SUCCESS,
  PT_STATE_GET_FAILURE,
  REMITTANCE_CREATE_REQUEST,
  REMITTANCE_CREATE_SUCCESS,
  REMITTANCE_CREATE_FAILURE,
  REMITTANCE_GET_REQUEST,
  REMITTANCE_GET_SUCCESS,
  REMITTANCE_GET_FAILURE,
  REMITTANCE_EDIT_REQUEST,
  REMITTANCE_EDIT_SUCCESS,
  REMITTANCE_EDIT_FAILURE,
  REMITTANCE_DELETE_REQUEST,
  REMITTANCE_DELETE_SUCCESS,
  REMITTANCE_DELETE_FAILURE,
  REMITTANCE_GET_BY_ID_REQUEST,
  REMITTANCE_GET_BY_ID_SUCCESS,
  REMITTANCE_GET_BY_ID_FAILURE,
  REGISTER_COMP_CREATE_REQUEST,
  REGISTER_COMP_CREATE_SUCCESS,
  REGISTER_COMP_CREATE_FAILURE,
  REGISTER_COMP_GET_REQUEST,
  REGISTER_COMP_GET_SUCCESS,
  REGISTER_COMP_GET_FAILURE,
  REGISTER_COMP_EDIT_REQUEST,
  REGISTER_COMP_EDIT_SUCCESS,
  REGISTER_COMP_EDIT_FAILURE,
  REGISTER_COMP_DELETE_REQUEST,
  REGISTER_COMP_DELETE_SUCCESS,
  REGISTER_COMP_DELETE_FAILURE,
  REGISTER_COMP_GET_BY_ID_REQUEST,
  REGISTER_COMP_GET_BY_ID_SUCCESS,
  REGISTER_COMP_GET_BY_ID_FAILURE,
  RETURNS_CREATE_REQUEST,
  RETURNS_CREATE_SUCCESS,
  RETURNS_CREATE_FAILURE,
  RETURNS_GET_REQUEST,
  RETURNS_GET_SUCCESS,
  RETURNS_GET_FAILURE,
  RETURNS_EDIT_REQUEST,
  RETURNS_EDIT_SUCCESS,
  RETURNS_EDIT_FAILURE,
  RETURNS_DELETE_REQUEST,
  RETURNS_DELETE_SUCCESS,
  RETURNS_DELETE_FAILURE,
  RETURNS_GET_BY_ID_REQUEST,
  RETURNS_GET_BY_ID_SUCCESS,
  RETURNS_GET_BY_ID_FAILURE,
  CATEGORY_COMPANY_GET_FAIL,
  CATEGORY_COMPANY_REQUEST_GET,
  CATEGORY_COMPANY_SUCCESS_GET,
  CHECKLIST_BY_CATEO_REQUEST,
  CHECKLIST_BY_CATEO_SUCCESS,
  CHECKLIST_BY_CATEO_FAILURE,
  BRANCHES_DELETE_REQUEST,
  BRANCHES_DELETE_SUCCESS,
  BRANCHES_DELETE_FAILURE,
  EXECUTIVECOMPANY_REQUEST_GET,
  EXECUTIVECOMPANY_SUCCESS_GET,
  EXECUTIVECOMPANY_GET_FAIL,
  BRANCHREQUEST_REQUEST,
  BRANCHREQUEST_SUCCESS,
  BRANCHREQUEST_FAILURE,
  BRANCHREQUEST_ID_REQUEST,
  BRANCHREQUEST_ID_SUCCESS,
  BRANCHREQUEST_ID_FAILURE,
  BRANCH_CHECK_REQUEST,
  BRANCH_CHECK_SUCCESS,
  BRANCH_CHECK_FAILURE,
  BRANCHREQUEST_DELETE_REQUEST,
  BRANCHREQUEST_DELETE_SUCCESS,
  BRANCHREQUEST_DELETE_FAILURE,
  TEMPLATE_REGI_GET_REQUEST,
  TEMPLATE_REGI_GET_SUCCESS,
  TEMPLATE_REGI_GET_FAILURE,
  TEMPLATE_REGI_PDF_GET_REQUEST,
  TEMPLATE_REGI_PDF_GET_SUCCESS,
  TEMPLATE_REGI_PDF_GET_FAILURE,
  TEMPLATE_REGI_UP_GET_REQUEST,
  TEMPLATE_REGI_UP_GET_SUCCESS,
  TEMPLATE_REGI_UP_GET_FAILURE,
  TEMPLATE_FORM_F_GET_REQUEST,
  TEMPLATE_FORM_F_GET_SUCCESS,
  TEMPLATE_FORM_F_GET_FAILURE,
  TEMPLATE_FORM_D_GET_REQUEST,
  TEMPLATE_FORM_D_GET_SUCCESS,
  TEMPLATE_FORM_D_GET_FAILURE,
  TEMPLATE_FORM_F_PDF_GET_REQUEST,
  TEMPLATE_FORM_F_PDF_GET_SUCCESS,
  TEMPLATE_FORM_F_PDF_GET_FAILURE,
  TEMPLATE_FORM_D_PDF_GET_SUCCESS,
  TEMPLATE_FORM_D_PDF_GET_FAILURE,
  TEMPLATE_FORM_D_PDF_GET_REQUEST,
  TEMPLATE_FORM_C_GET_REQUEST,
  TEMPLATE_FORM_C_GET_SUCCESS,
  TEMPLATE_FORM_C_GET_FAILURE,
  TEMPLATE_FORM_C_PDF_GET_REQUEST,
  TEMPLATE_FORM_C_PDF_GET_SUCCESS,
  TEMPLATE_FORM_C_PDF_GET_FAILURE,
  TEMPLATE_FORM_A_GET_REQUEST,
  TEMPLATE_FORM_A_GET_SUCCESS,
  TEMPLATE_FORM_A_GET_FAILURE,
  REGI_INTIGRATE_REQUEST,
  REGI_INTIGRATE_SUCCESS,
  REGI_INTIGRATE_FAILURE,
  REGI_INTIGRATE_CREATE_REQUEST,
  REGI_INTIGRATE_CREATE_SUCCESS,
  REGI_INTIGRATE_CREATE_FAILURE,
  REGI_INTIGRATE_GET_ALL_REQUEST,
  REGI_INTIGRATE_GET_ALL_SUCCESS,
  REGI_INTIGRATE_GET_ALL_FAILURE,
  CONTACT_MAIL_REQUEST,
  CONTACT_MAIL_SUCCESS,
  CONTACT_MAIL_FAILURE,
} from "../actiontypes/otherConstants";
export const categoryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST });

  await catCreate(postbody)
    .then((response) => {
      dispatch({ type: CATEGORY_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Category is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else if (response.data === 409) {
        dispatch({
          type: CATEGORY_FAIL,
          payload: "Category is already exists!",
        });
        toast.error("Category is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CATEGORY_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const categoryEdit = (postbody, id) => async (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST_EDIT });
  await catEdit(postbody, id)
    .then((response) => {
      dispatch({ type: CATEGORY_SUCCESS_EDIT, payload: response.data });
      //   alert(response.data); return;
      if (response.status === 201 && response.data !== 409) {
        toast.success("Category is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: CATEGORY_EDIT_FAIL,
          payload: "Category is already exists!",
        });
        toast.error("Category is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CATEGORY_EDIT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const ongoingAudits = () => async (dispatch) => {
  dispatch({ type: AUDIT_REQUEST_ONGOING_DETAIL });

  await gettingOnGoingAuditDetail()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: AUDIT_SUCCESS_ONGOING_DETAIL, payload: response.data });
      // alert(response.status)
      if (response.status === 201) {
        // toast.success('Audit is Created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: AUDIT_FAIL_ONGOING_DETAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_FAIL_ONGOING_DETAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const gettingAuditorOverdueDashboard = () => async (dispatch) => {
  dispatch({ type: AUDIT_REQUEST_OVERDUE_DETAIL_DASHBOARD });

  await gettingOverviewAuditDetail()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: AUDIT_SUCCESS_OVERDUE_DETAIL_DASHBOARD,
        payload: response.data,
      });
      // alert(response.status)
      if (response.status === 200) {
        // toast.success('Audit is Created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_FAIL_OVERDUE_DETAIL_DASHBOARD,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const auditGetDataAll = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_REQUEST_All_DETAIL });

  await gettingAuditDetail(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: AUDIT_SUCCESS_All_DETAIL, payload: response.data });
      // alert(response.status)
      if (response.status === 200) {
        // toast.success('Audit is Created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: AUDIT_FAIL_All_DETAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_FAIL_All_DETAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const auditOnCreate = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_REQUEST_CREATE });

  await auditCreate(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: AUDIT_SUCCESS_CREATE, payload: response.data });
      if (response.status === 201) {
        toast.success("Audit is Created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: AUDIT_FAIL_CREATE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_FAIL_CREATE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const auditChecklistFilter = (postBody) => async (dispatch) => {
  dispatch({ type: AUDITOR_REQUEST_GET_FILTER });
  await auditoreFilterChecklist(postBody)
    .then((response) => {
      dispatch({ type: AUDITOR_SUCCESS_GET_FILTER, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: AUDITOR_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDITOR_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const auditAllFilters = (postBody) => async (dispatch) => {
  dispatch({ type: AUDITOR_REQUEST_GET_ALL_FILTER });
  await auditAllFilter(postBody)
    .then((response) => {
      // console.log(response.data);
      dispatch({
        type: AUDITOR_SUCCESS_GET_ALL_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
      } else {
        dispatch({
          type: AUDITOR_GET_FAIL_ALL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDITOR_GET_FAIL_ALL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const auditorGet = () => async (dispatch) => {
  dispatch({ type: AUDITOR_REQUEST_GET });
  await auditoreGet()
    .then((response) => {
      dispatch({ type: AUDITOR_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: AUDITOR_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDITOR_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const executiveGet = () => async (dispatch) => {
  dispatch({ type: EXECUTIVE_REQUEST_GET });
  await getExecutive()
    .then((response) => {
      dispatch({ type: EXECUTIVE_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: EXECUTIVE_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: EXECUTIVE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const categoryGet = () => async (dispatch) => {
  dispatch({ type: CATEGORY_REQUEST_GET });
  await catGet()
    .then((response) => {
      dispatch({ type: CATEGORY_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: CATEGORY_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const deleteCategory = (id) => async (dispatch) => {
  dispatch({ type: CATEGORY_DELETE_REQUEST });
  await catDelete(id)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CATEGORY_DELETE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CATEGORY_DELETE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_DELETE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const stateGets = () => async (dispatch) => {
  dispatch({ type: STATE_REQUEST_GET });

  await gettingState()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: STATE_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: STATE_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: STATE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const usersCreates = (postbody) => async (dispatch) => {
  dispatch({ type: USER_CREATE_REQUEST });

  await userCreate(postbody)
    .then((response) => {
      dispatch({ type: USER_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("User is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else if (response.data === 409) {
        dispatch({
          type: USER_CREATE_FAIL,
          payload: "User is already exists!",
        });
        toast.error("User is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: USER_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const usersGet = () => async (dispatch) => {
  dispatch({ type: USER_REQUEST_GET });

  await gettingUser()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: USER_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: USER_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const userEdit = (postbody, id) => async (dispatch) => {
  dispatch({ type: USER_REQUEST_EDIT });
  await editUser(postbody, id)
    .then((response) => {
      dispatch({ type: USER_SUCCESS_EDIT, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("User is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: USER_EDIT_FAIL,
          payload: "Email is already exists!",
        });
        toast.error("Email is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: USER_EDIT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_EDIT_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const deleteUser = (id) => async (dispatch) => {
  // alert(id);return;
  dispatch({ type: USER_DELETE_REQUEST });
  await userDelete(id)
    .then((response) => {
      dispatch({ type: USER_DELETE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: USER_DELETE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_DELETE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const createNotification = (postbody) => async (dispatch) => {
  dispatch({ type: NOTFICATION_CREATE_REQUEST });

  await NotificationCreate(postbody)
    .then((response) => {
      dispatch({ type: NOTFICATION_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Notification is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: NOTFICATION_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NOTFICATION_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const getNotification = () => async (dispatch) => {
  dispatch({ type: NOTFICATION_REQUEST_GET });

  await gettingNotification()
    .then((response) => {
      dispatch({ type: NOTFICATION_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: NOTFICATION_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NOTFICATION_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const branchGet = (postBody) => async (dispatch) => {
  dispatch({ type: BRANCH_REQUEST_GET });
  await gettingBranch(postBody)
    .then((response) => {
      dispatch({ type: BRANCH_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: BRANCH_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANCH_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyGet = () => async (dispatch) => {
  dispatch({ type: COMPANY_REQUEST_GET });
  await gettingCompany()
    .then((response) => {
      dispatch({ type: COMPANY_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const branchCreates = (postbody) => async (dispatch) => {
  dispatch({ type: BRANCH_CREATE_REQUEST });
  await createBranch(postbody)
    .then((response) => {
      dispatch({ type: BRANCH_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Branch is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: USER_CREATE_FAIL,
          payload: "Branch is already exists!",
        });
        toast.error("Branch is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: BRANCH_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANCH_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyCreates = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANY_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANY_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Company is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: COMPANY_CREATE_FAIL,
          payload: "Company is already exists!",
        });
        toast.error("Company is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANY_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const complianceCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_CREATE_REQUEST });

  await createCompliances(postbody)
    .then((response) => {
      dispatch({ type: COMPLIANCE_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Compliance is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });

        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else if (response.data === 409) {
        dispatch({
          type: COMPLIANCE_CREATE_FAIL,
          payload: "Compliance for this Act is already exists!",
        });
        toast.error("Compliance for this Act is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPLIANCE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesGet = () => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET });
  await gettingCompliances()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: COMPLIANCE_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET_FILTER });
  await gettingCompliancesFilter(postBody)
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_GET_FILTER, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const complianceAllFiltering = (postBody) => async (dispatch) => {
  // alert('all')
  dispatch({ type: COMPLIANCE_REQUEST_GET_ALL_FILTER });

  await gettingCompliancesAllFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPLIANCE_SUCCESS_GET_ALL_FILTER,
        payload: response.data,
      });
      // alert(JSON.stringify(response.data))
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_GET_FAIL_ALL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_GET_FAIL_ALL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesGetAll = () => async (dispatch) => {
  console.log("get data");
  dispatch({ type: COMPLIANCE_REQUEST_GET_ALL });

  await gettingCompliancesAll()
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_GET_ALL, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_GET_FAIL_ALL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesGetonCreate = () => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET_CREATE });

  await gettingCompliancesOnCreate()
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_GET_CREATE, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_GET_FAIL_CREATE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_GET_FAIL_CREATE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesGetByid = (id) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET_BYID });

  await gettingCompliancesById(id)
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_GET_BYID, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_FAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_FAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const complianceUpdateById = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_UPDATE_BYID });
  await updateCompliancesById(postbody, id)
    .then((response) => {
      dispatch({
        type: COMPLIANCE_SUCCESS_UPDATE_BYID,
        payload: response.data,
      });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Compliance is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: COMPLIANCE_FAIL_UPDATE_BYID,
          payload: "Compliance is already exists!",
        });
        toast.error("Compliance is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPLIANCE_FAIL_UPDATE_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_FAIL_UPDATE_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesSaveandApprove = (data) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET_APPROVE });

  await complianceApporve(data)
    .then((response) => {
      dispatch({
        type: COMPLIANCE_SUCCESS_GET_APPROVE,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success("Compliace is Approved Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesGetOnreject = () => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_GET_REJECT });

  await gettingCompliancesReject()
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_GET_REJECT, payload: response.data });
      if (response.status === 201) {
        // toast.success('All Compliace is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPLIANCE_REQUEST_GET_REJECT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesReject = (data) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_REJECT });

  await complianceReject(data)
    .then((response) => {
      dispatch({ type: COMPLIANCE_SUCCESS_REJECT, payload: response.data });
      if (response.status === 201) {
        toast.success("Compliace is Rejected Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPLIANCE_REQUEST_REJECT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_REQUEST_REJECT_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const compliancesRejectFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_REJECT_FILTER });

  await gettingCompliancesRejetFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: COMPLIANCE_SUCCESS_REJECT_FILTER,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: COMPLIANCE_REJECT_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_REJECT_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const compliancesApproveFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_REQUEST_APPROVE_FILTER });

  await gettingcomplianceOnApproveFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: COMPLIANCE_SUCCESS_APPROVE_FILTER,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: COMPLIANCE_APPROVE_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPLIANCE_APPROVE_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistCreate = (postbody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_CREATE_REQUEST });

  await createChecklist(postbody)
    .then((response) => {
      dispatch({ type: CHECKLIST_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Check List is Added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else if (response.data === 409) {
        dispatch({
          type: CHECKLIST_CREATE_FAIL,
          payload: "Check List for this Act is already exists!",
        });
        toast.error("Check List for this Act is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CHECKLIST_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetonCreateAudit = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_CREATE_AUDIT });

  await auditchecklistGetonCreate()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: CHECKLIST_SUCCESS_GET_CREATE_AUDIT,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL_CREATE_AUDIT,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL_CREATE_AUDIT,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetonCreate = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_CREATE });

  await checklistOnCreateegetting()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_GET_CREATE, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL_CREATE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL_CREATE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGettting = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET });

  await gettingChecklist()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistUpdateById = (postbody, id) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_UPDATE_BYID });
  await updateChecklistsById(postbody, id)
    .then((response) => {
      dispatch({ type: CHECKLIST_SUCCESS_UPDATE_BYID, payload: response.data });
      //   alert(response.data); return;
      if (response.status === 200 && response.data !== 409) {
        toast.success("Checklist is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: CHECKLIST_FAIL_UPDATE_BYID,
          payload: "Checklist is already exists!",
        });
        toast.error("Checklist is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CHECKLIST_FAIL_UPDATE_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_FAIL_UPDATE_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetByid = (id) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_BYID });

  await gettingchecklistById(id)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_GET_BYID, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_FAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_FAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetAll = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_ALL });

  await checklistAllgetting()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_GET_ALL, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL_ALL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetApprove = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE_PAGE });

  await checklistApprovegetting()
    .then((response) => {
      dispatch({
        type: CHECKLIST_SUCCESS_GET_APPROVE_PAGE,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL_APPROVE_PAGE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistsReject = (data) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_REJECT });

  await rejectChecklist(data)
    .then((response) => {
      dispatch({ type: CHECKLIST_SUCCESS_REJECT, payload: response.data });
      if (response.status === 201) {
        toast.success("Checklist is Rejected Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_REQUEST_REJECT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_REQUEST_REJECT_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistSaveandApprove = (data) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_APPROVE });

  await checklistApporve(data)
    .then((response) => {
      dispatch({ type: CHECKLIST_SUCCESS_GET_APPROVE, payload: response.data });
      if (response.status === 201) {
        toast.success("Selected data is Approved Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistsAllFilter = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_ALL_FILTER });

  await gettingchecklistAllFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_ALL_FILTER, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_ALL_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_ALL_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistCreateFilters = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_CREATE_FILTER });

  await gettingchecklistOnCreateFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: CHECKLIST_SUCCESS_CREATE_FILTER,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_ALL_CREATE_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_ALL_CREATE_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistsApproveFilter = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_APPROVE_FILTER });

  await gettingchecklistOnApproveFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: CHECKLIST_SUCCESS_APPROVE_FILTER,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_ALL_APPROVE_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_ALL_APPROVE_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistGetOnreject = () => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_REJECT });

  await checklistOnRejectegetting()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: CHECKLIST_SUCCESS_GET_REJECT, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_GET_FAIL_REJECT,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL_REJECT,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const checklistRejectFilter = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_REJECT_FILTER });

  await gettingchecklistOnrejectFilter(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: CHECKLIST_SUCCESS_REJECT_FILTER,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: CHECKLIST_ALL_REJECT_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_ALL_REJECT_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const compliancesAllForChecklist = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_All_COMPLIANCE });

  await gettingchecklistAllCompliance(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: CHECKLIST_SUCCESS_All_COMPLIANCE,
        payload: response.data,
      });
      if (response.status === 201) {
      } else {
        dispatch({
          type: CHECKLIST_FAIL_All_COMPLIANCE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_FAIL_All_COMPLIANCE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const nameRateCreate = (postbody) => async (dispatch) => {
  dispatch({ type: NAMERATE_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: NAMERATE_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Licence/Registration data is added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: NAMERATE_CREATE_FAIL,
          payload: "Licence/Registration Name already exists!",
        });
        toast.error("Licence/Registration Name is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: NAMERATE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NAMERATE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const documentCollection = (postbody) => async (dispatch) => {
  dispatch({ type: DOC_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: DOC_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Document Colletion data is added Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: DOC_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: DOC_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const appDetailsDispatch = (postbody) => async (dispatch) => {
  dispatch({ type: APPDETAILS_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: APPDETAILS_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Application Details data is added Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: APPDETAILS_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: APPDETAILS_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const expenseDispatch = (postbody) => async (dispatch) => {
  dispatch({ type: EXPENSE_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: EXPENSE_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Lise/Regs Expense Details data is added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: EXPENSE_CREATE_FAIL,
          payload: "Challan Number is already exists!",
        });
        toast.error("Challan Number is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: EXPENSE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: EXPENSE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseInfoDispatch = (postbody) => async (dispatch) => {
  dispatch({ type: LICENSE_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: LICENSE_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Lise/Regs Licence Details data is added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LICENSE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LICENSE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const invoiceInfoDispatch = (postbody) => async (dispatch) => {
  dispatch({ type: INVOICE_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: INVOICE_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("Lise/Regs Invoice Details data is added Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: INVOICE_CREATE_FAIL,
          payload: "Invoice Number is already exists!",
        });
        toast.error("Invoice Number is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: INVOICE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: INVOICE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyInfoDispatch = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYINFO_CREATE_REQUEST });

  await createLiseReg(postbody)
    .then((response) => {
      dispatch({ type: COMPANYINFO_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Company Information data is added Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: COMPANYINFO_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYINFO_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const regsGets = (postbody) => async (dispatch) => {
  dispatch({ type: REGSGET_REQUEST });

  await getttingReg(postbody)
    .then((response) => {
      dispatch({ type: REGSGET_SUCCESS, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: REGSGET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGSGET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const lisregsSaveandApprove = (data) => async (dispatch) => {
  dispatch({ type: LISEREGS_REQUEST_GET_APPROVE });

  await regsApporve(data)
    .then((response) => {
      dispatch({ type: LISEREGS_SUCCESS_GET_APPROVE, payload: response.data });
      if (response.status === 201) {
        toast.success("License/Registration is Approved Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LISEREGS_REQUEST_GET_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LISEREGS_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const lisregsRejects = (data) => async (dispatch) => {
  dispatch({ type: LISEREGS_REQUEST_GET_REJECT });

  await regsReject(data)
    .then((response) => {
      dispatch({ type: LISEREGS_SUCCESS_GET_REJECT, payload: response.data });
      if (response.status === 201) {
        toast.success("License/Registration is Rejected Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LISEREGS_REQUEST_GET_REJECT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LISEREGS_REQUEST_GET_REJECT_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const liseregAllFilter = (data) => async (dispatch) => {
  dispatch({ type: LISEREGS_REQUEST_GET_FILTER });

  await liseregsFilters(data)
    .then((response) => {
      dispatch({ type: LISEREGS_SUCCESS_GET_FILTER, payload: response.data });
      if (response.status === 201) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: LISEREGS_REQUEST_GET_FILTER_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LISEREGS_REQUEST_GET_FILTER_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const liseRegGettingById = (id) => async (dispatch) => {
  dispatch({ type: LISEREGS_REQUEST_GET_BYID });

  await liseRegGettingByIds(id)
    .then((response) => {
      dispatch({ type: LISEREGS_SUCCESS_GET_BYID, payload: response.data });
      if (response.status === 201) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: LISEREGS_REQUEST_GET_BYID_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LISEREGS_REQUEST_GET_BYID_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const nameRateUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: NAMERATE_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: NAMERATE_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Licence/Registration data is updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        dispatch({
          type: NAMERATE_UPDATE_FAIL,
          payload: "Licence/Registration Name already exists!",
        });
        toast.error("Licence/Registration Name is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: NAMERATE_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NAMERATE_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const documentCollectionUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: DOC_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: DOC_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Document Colletion data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: DOC_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: DOC_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const appDetailsDispatchUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: APPDETAILS_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: APPDETAILS_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Application Details data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: APPDETAILS_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: APPDETAILS_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const expenseDispatchUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: EXPENSE_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: EXPENSE_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Expense Details data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else if (response.data === 409) {
        dispatch({
          type: EXPENSE_UPDATE_FAIL,
          payload: "Challan Number is already exists!",
        });
        toast.error("Challan Number is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: EXPENSE_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: EXPENSE_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseInfoDispatchUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: LICENSE_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: LICENSE_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Licence Details data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: LICENSE_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LICENSE_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const invoiceInfoDispatchUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: INVOICE_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: INVOICE_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success(
          "Lise/Regs Invoice Details data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else if (response.data === 409) {
        dispatch({
          type: INVOICE_UPDATE_FAIL,
          payload: "Invoice Number is already exists!",
        });
        toast.error("Invoice Number is already exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        return false;
      } else {
        dispatch({
          type: INVOICE_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: INVOICE_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyInfoDispatchUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMPANYINFO_UPDATE_REQUEST });

  await liseRegUpdateByIds(postbody, id)
    .then((response) => {
      dispatch({ type: COMPANYINFO_UPDATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Lise/Regs Company Information data is updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: COMPANYINFO_UPDATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYINFO_UPDATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const createElibrary = (postbody) => async (dispatch) => {
  dispatch({ type: ELIBRARY_CREATE_REQUEST });

  await ElibraryCreate(postbody)
    .then((response) => {
      dispatch({ type: ELIBRARY_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Elibrary is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: ELIBRARY_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const getElibrary = (postbody) => async (dispatch) => {
  dispatch({ type: ELIBRARY_GET_REQUEST });

  await ElibraryGet(postbody)
    .then((response) => {
      dispatch({ type: ELIBRARY_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
      } else {
        dispatch({
          type: ELIBRARY_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const eLibraryGettingById = (id) => async (dispatch) => {
  dispatch({ type: ELIBRARY_REQUEST_GET_BYID });

  await elibraryGetById(id)
    .then((response) => {
      dispatch({ type: ELIBRARY_SUCCESS_GET_BYID, payload: response.data });
      if (response.status === 200) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: ELIBRARY_REQUEST_GET_BYID_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_REQUEST_GET_BYID_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const updateElibraryById = (postbody, id) => async (dispatch) => {
  dispatch({ type: ELIBRARY_GET_REQUEST_UPDATE_BY_ID });

  await elibraryUpdateById(postbody, id)
    .then((response) => {
      dispatch({
        type: ELIBRARY_GET_SUCCESS_UPDATE_BY_ID,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success("Elibrary is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ELIBRARY_GET_FAIL_UPDATE_BY_ID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_GET_FAIL_UPDATE_BY_ID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const elibrarySaveandApproved = (postBody) => async (dispatch) => {
  dispatch({ type: ELIBRARY_REQUEST_SAVE_APPROVE });

  await elibrarySaveandApprove(postBody)
    .then((response) => {
      dispatch({ type: ELIBRARY_SUCCESS_SAVE_APPROVE, payload: response.data });
      if (response.status === 201) {
        toast.success("Elibrary is Approved Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_REQUEST_SAVE_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const rejectsElibrary = (data) => async (dispatch) => {
  dispatch({ type: ELIBRARY_REQUEST_GET_REJECT });

  await elibraryReject(data)
    .then((response) => {
      dispatch({ type: ELIBRARY_SUCCESS_GET_REJECT, payload: response.data });
      if (response.status === 201) {
        toast.success("Elibrary is Rejected Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ELIBRARY_REQUEST_GET_REJECT_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_REQUEST_GET_REJECT_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const rejectedElibraryDocs = () => async (dispatch) => {
  dispatch({ type: ELIBRARY_REQUEST_GET_REJECT_LIST });

  await elibraryRejectedDocs()
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({
        type: ELIBRARY_SUCCESS_GET_REJECT_LIST,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
        /*swal({
                        title: "Successful!",
                        text: 'User Addes Successfully !',
                        icon: "success",
                        button: "OK!",
                });*/
      } else {
        dispatch({
          type: ELIBRARY_GET_FAIL_REJECT_LIST,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // document.getElementById("submitting").innerText = "Save";
        // document.getElementById("submitting").disabled  = false;
      }
    })
    .catch((error) => {
      dispatch({
        type: ELIBRARY_GET_FAIL_REJECT_LIST,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      // document.getElementById("submitting").innerText = "Save";
      // document.getElementById("submitting").disabled  = false;
    });
};
export const companytab1create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB1_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB1_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201 && response.data !== 409) {
        toast.success("General Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else if (response.data === 409) {
        toast.error("Company is alreay Exists!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB1_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB1_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab2create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB2_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB2_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Registratiion Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB2_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB2_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab3create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB3_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB3_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Client Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB3_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB3_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab4create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB4_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB4_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Other Registration Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB4_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB4_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab5create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB5_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB5_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Labour Contractor Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB5_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB5_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab6create = (postbody) => async (dispatch) => {
  console.log(JSON.stringify(postbody));
  dispatch({ type: COMPANYTAB6_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB6_CREATE_SUCCESS, payload: response.data });
      // alert(response.status+'='+response.data);return;
      if (response.status === 201 /*&& response.data!==408*/) {
        toast.success("Branch Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
      // else if(response.data===408)
      // {
      //         dispatch({
      //                 type: COMPANYTAB6_CREATE_FAIL,
      //                 payload:
      //                 'No data to save for branch!!'});
      //         toast.error('No data to save for branch!!', {
      //                 position: "bottom-right",
      //                 hideProgressBar: false,
      //                 progress: undefined,
      //         });
      // }
      else {
        dispatch({
          type: COMPANYTAB6_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB6_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companytab7create = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYTAB7_CREATE_REQUEST });

  await createCompany(postbody)
    .then((response) => {
      dispatch({ type: COMPANYTAB7_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Company Contractor Details is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYTAB7_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYTAB7_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyTableGet = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANY_GET_TABLE_REQUEST });

  await gettingCompanyTable(postbody)
    .then((response) => {
      dispatch({ type: COMPANY_GET_TABLE_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Company Contractor Details is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_GET_TABLE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_GET_TABLE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const getComplianceBycandsId = (cid, sid) => async (dispatch) => {
  ///getting compliance by state and category id
  dispatch({ type: COMLIANCE_REQUEST_GET_BY_CSID });

  await gettingCompliaceCSById(cid, sid)
    .then((response) => {
      dispatch({ type: COMLIANCE_SUCCESS_GET_BY_CSID, payload: response.data });
      if (response.status === 201) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMLIANCE_GET_BY_CSID_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMLIANCE_GET_BY_CSID_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyGettingById = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_REQUEST_GET_BYID });

  await gettingCompanyById(id)
    .then((response) => {
      dispatch({ type: COMPANY_SUCCESS_GET_BYID, payload: response.data });
      if (response.status === 201) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_REQUEST_GET_BYID_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_REQUEST_GET_BYID_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const SaveandApproveCompany = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_REQUEST_SAVE_APPROVE });

  await companySaveandApprove(postBody)
    .then((response) => {
      dispatch({ type: COMPANY_SUCCESS_SAVE_APPROVE, payload: response.data });
      if (response.status === 201) {
        // toast.success('License/Registration is Approved Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_REQUEST_SAVE_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_REQUEST_SAVE_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYL_CREATE_REQUEST });

  await companyLcreate(postbody)
    .then((response) => {
      dispatch({ type: COMPANYL_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success("Company License is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYL_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYL_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseGetonCreate = () => async (dispatch) => {
  dispatch({ type: COMPANYL_GET_REQUEST });

  await companyL()
    .then((response) => {
      dispatch({ type: COMPANYL_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Company License is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANYL_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYL_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseGetByid = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANYL_GET_REQUEST_BY_ID });

  await companyLById(postbody)
    .then((response) => {
      dispatch({ type: COMPANYL_GET_SUCCESS_BY_ID, payload: response.data });
      if (response.status === 201) {
        // toast.success('Company License is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANYL_GET_FAIL_BY_ID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYL_GET_FAIL_BY_ID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseUpdateByid = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMPANYL_GET_REQUEST_BY_ID });

  await companyLUpdateById(postbody, id)
    .then((response) => {
      dispatch({ type: COMPANYL_GET_SUCCESS_BY_ID, payload: response.data });
      if (response.status === 201) {
        toast.success("Company License is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANYL_GET_FAIL_BY_ID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANYL_GET_FAIL_BY_ID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companylicenseSaveandApprove = (data) => async (dispatch) => {
  dispatch({ type: COMPANY_LICENSE_REQUEST_GET_APPROVE });

  await apporveCompanyL(data)
    .then((response) => {
      dispatch({
        type: COMPANY_LICENSE_SUCCESS_GET_APPROVE,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success("Company Licenses is Approved Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_LICENSE_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseCompanyFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_LICENSE_REQUEST_GET_FILTER });
  await companyLicenseFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPANY_LICENSE_SUCCESS_GET_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_LICENSE_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_LICENSE_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyinteractionCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANY_INERACTION_CREATE_REQUEST });

  await createcompanyinteraction(postbody)
    .then((response) => {
      dispatch({
        type: COMPANY_INERACTION_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success("Company Interaction is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMPANY_INERACTION_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INERACTION_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyinteractionGetByid = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACTION_REQUEST_GET_BYID });

  await gettingComppanyInterationById(id)
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACTION_SUCCESS_GET_BYID,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACTION_FAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACTION_FAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyinteractionUpdateById =
  (postbody, id) => async (dispatch) => {
    dispatch({ type: COMPANY_INTERACTION_REQUEST_UPDATE_BYID });
    await updatecompanyinteractionById(postbody, id)
      .then((response) => {
        dispatch({
          type: COMPANY_INTERACTION_SUCCESS_UPDATE_BYID,
          payload: response.data,
        });
        if (response.status === 201 && response.data !== 409) {
          toast.success("Company Interaction is Updated Successfully!", {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        } else {
          dispatch({
            type: COMPANY_INTERACTION_FAIL_UPDATE_BYID,
            payload: response.data,
          });
          toast.error(response.data, {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: COMPANY_INTERACTION_FAIL_UPDATE_BYID,
          payload: error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };
export const companyInractionTableGet = () => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACTION_GET_TABLE_REQUEST });

  await gettingCompanyInractionTable()
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACTION_GET_TABLE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Company Contractor Details is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACTION_GET_TABLE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACTION_GET_TABLE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const saveandapporveCompanyInteraction = (data) => async (dispatch) => {
  dispatch({ type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE });

  await apporveCompanyInteraction(data)
    .then((response) => {
      dispatch({
        type: COMPANY_PROFILE_INERACTION_SUCCESS_GET_APPROVE,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success(
          "Company Interaction Profiles is Approved Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_PROFILE_INERACTION_REQUEST_GET_APPROVE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const saveandapporveCompanyInteractionLicense =
  (data) => async (dispatch) => {
    dispatch({ type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE });

    await apporveCompanyInteractionLicense(data)
      .then((response) => {
        dispatch({
          type: COMPANY_LICENSE_INERACTION_SUCCESS_GET_APPROVE,
          payload: response.data,
        });
        if (response.status === 201) {
          toast.success(
            "Company Interaction Liceneses is Approved Successfully!",
            {
              position: "bottom-right",
              hideProgressBar: false,
              progress: undefined,
            }
          );
        } else {
          dispatch({
            type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
            payload: response.data,
          });
          toast.error(response.data, {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: COMPANY_LICENSE_INERACTION_REQUEST_GET_APPROVE_FAIL,
          payload: error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };

export const profileCompanyFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACT_REQUEST_GET_FILTER });
  await companyProfileFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACT_SUCCESS_GET_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACT_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACT_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseCompanyInteractionGetById = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACTION_REQUEST_GET_BYID });

  await gettingComppanyInterationById(id)
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACTION_SUCCESS_GET_BYID,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACTION_FAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACTION_FAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licenseCompanyInteractionCreate =
  (postbody) => async (dispatch) => {
    dispatch({ type: COMPANY_INTERACTION_LIC_CREATE_REQUEST });

    await licenseCompanyInteractcreate(postbody)
      .then((response) => {
        dispatch({
          type: COMPANY_INTERACTION_LIC_CREATE_SUCCESS,
          payload: response.data,
        });
        if (response.status === 201) {
          toast.success("Company Ineraction License is created Successfully!", {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        } else {
          dispatch({
            type: COMPANY_INTERACTION_LIC_CREATE_FAIL,
            payload: response.data,
          });
          toast.error(response.data, {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: COMPANY_INTERACTION_LIC_CREATE_FAIL,
          payload: error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };
export const licenseCompanyInteractionGetOnCreate = () => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACTION_LICENSE_GET_REQUEST });

  await licenseCompanyInteractGetOnCreate()
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACTION_LICENSE_GET_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Company Ineraction License is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACTION_LICENSE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyinteractionLicGetByid = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_INTERACTION_LIC_REQUEST_GET_BYID });

  await companyinteractLicGetByid(id)
    .then((response) => {
      dispatch({
        type: COMPANY_INTERACTION_LIC_SUCCESS_GET_BYID,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_INTERACTION_LIC_FAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyinteractionLicUpdateById =
  (postbody, id) => async (dispatch) => {
    dispatch({ type: COMPANY_INTERACTION_LIC_REQUEST_UPDATE_BYID });
    await companyinteractLicUpdateById(postbody, id)
      .then((response) => {
        dispatch({
          type: COMPANY_INTERACTION_LIC_SUCCESS_UPDATE_BYID,
          payload: response.data,
        });
        if (response.status === 201 && response.data !== 409) {
          toast.success(
            "Company Interaction License is Updated Successfully!",
            {
              position: "bottom-right",
              hideProgressBar: false,
              progress: undefined,
            }
          );
        } else {
          dispatch({
            type: COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
            payload: response.data,
          });
          toast.error(response.data, {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: COMPANY_INTERACTION_LIC_FAIL_UPDATE_BYID,
          payload: error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };
export const licenseCompanyIntractFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_LICENSE_INTERACT_REQUEST_GET_FILTER });
  await companyLicenseIntractFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPANY_LICENSE_INTERACT_SUCCESS_GET_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_LICENSE_INTERACT_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const assignCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGN_CREATE_REQUEST });

  await createAssign(postbody)
    .then((response) => {
      dispatch({ type: COMPANY_ASSIGN_CREATE_SUCCESS, payload: response.data });
      if (response.status === 201) {
        toast.success(
          "Company is Assigned to Selected Executive Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: COMPANY_ASSIGN_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGN_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const assignGetByid = (id) => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGNREQUEST_GET_BYID });

  await getAssignid(id)
    .then((response) => {
      dispatch({
        type: COMPANY_ASSIGNSUCCESS_GET_BYID,
        payload: response.data,
      });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_ASSIGNFAIL_GET_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGNFAIL_GET_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const assignUpdateById = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGN_REQUEST_UPDATE_BYID });
  await assignsUpdateById(postbody, id)
    .then((response) => {
      dispatch({
        type: COMPANY_ASSIGN_SUCCESS_UPDATE_BYID,
        payload: response.data,
      });
      if (response.status === 201) {
        toast.success(
          "Company is Assigned to Selected Executive is Updated Successfully!",
          {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          }
        );
      } else {
        dispatch({
          type: COMPANY_ASSIGN_FAIL_UPDATE_BYID,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGN_FAIL_UPDATE_BYID,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const assignGetTable = () => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGN_GET_REQUEST });

  await assignTableGet()
    .then((response) => {
      dispatch({ type: COMPANY_ASSIGN_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Company Ineraction License is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_ASSIGN_TABLE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGN_TABLE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const assignGetOnCreate = () => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGN_ON_CREATE_GET_REQUEST });

  await getAssignOnCreate()
    .then((response) => {
      dispatch({
        type: COMPANY_ASSIGN_ON_CREATE_GET_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Company Ineraction License is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGN_ON_CREATE_CREATE_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyViewAllAssignedFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGN_REQUEST_GET_FILTER });
  await viewAllAssignedCompanyFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPANY_ASSIGN_SUCCESS_GET_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
      } else {
        dispatch({
          type: COMPANY_ASSIGN_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGN_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyAssignedFilter = (postBody) => async (dispatch) => {
  dispatch({ type: COMPANY_ASSIGNA_REQUEST_GET_FILTER });
  await assignedCompanyFilter(postBody)
    .then((response) => {
      dispatch({
        type: COMPANY_ASSIGNA_SUCCESS_GET_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_ASSIGNA_GET_FAIL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_ASSIGNA_GET_FAIL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const checklistAddInAudit = (data) => async (dispatch) => {
  dispatch({ type: CHECKLIST_ADD_IN_AUDIT_REQUEST });

  await apiChecklistAddInAudit(data)
    .then((response) => {
      dispatch({
        type: CHECKLIST_ADD_IN_AUDIT_SUCCESS,
        payload: response.data,
      });

      if (response.status === 201) {
        toast.success("Checklist added successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CHECKLIST_ADD_IN_AUDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_ADD_IN_AUDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};



// export const fileUploadInAuditQuestion = (auditId, formData) => async (dispatch) => {
//   dispatch({ type: FILE_UPLOADS_REQUEST });

//   await fileUploadInAuditQuestions(formData)
//   .then((response) => {
//     dispatch({
//       type: FILE_UPLOADS_SUCCESS,
//       payload: response.data,
//     });

//     if (response.status === 200) {
//       toast.success("File uploaded successfully!", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else {
//       dispatch({
//         type: FILE_UPLOADS_FAIL,
//         payload: response.data,
//       });
//       toast.error(response.data.message || 'File upload failed', {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     }
//   })
//   .catch((error) => {
//     dispatch({
//       type: FILE_UPLOADS_FAIL,
//       payload: error.message,
//     });

//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   });
// };

// export const fileUploadInAuditQuestion = (postbody) => async (dispatch) => {
//   dispatch({ type: FILE_UPLOADS_REQUEST });

//   await fileUploadInAuditQuestions(postbody)
//     .then((response) => {
//       dispatch({ type: FILE_UPLOADS_SUCCESS, payload: response.data });
//       if (response.status === 201 && response.data !== 409) {
//         toast.success("File uploaded successfully!", {
//                   position: "bottom-right",
//                    hideProgressBar: false,
//                    progress: undefined,
//                 });
//         /*swal({
//                         title: "Successful!",
//                         text: 'User Addes Successfully !',
//                         icon: "success",
//                         button: "OK!",
//                 });*/
//       } else if (response.data === 409) {
//         dispatch({
//           type: FILE_UPLOADS_FAIL,
//           payload: response.data,
//         });
//         toast.error(response.data.message || 'File upload failed', {
//                    position: "bottom-right",
//                    hideProgressBar: false,
//                    progress: undefined,
//                  });
//       } else {
//         dispatch({
//           type: CHECKLIST_CREATE_FAIL,
//           payload: response.data,
//         });
//         toast.error(response.data, {
//           position: "bottom-right",
//           hideProgressBar: false,
//           progress: undefined,
//         });
//         // document.getElementById("submitting").innerText = "Save";
//         // document.getElementById("submitting").disabled  = false;
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: FILE_UPLOADS_FAIL,
//         payload: error.message,
//       });

//       toast.error(error.message, {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//       // document.getElementById("submitting").innerText = "Save";
//       // document.getElementById("submitting").disabled  = false;
//     });
// };
// actions.js
export const fileUploadInAuditQuestion = (formData) => async (dispatch) => {
  dispatch({ type: FILE_UPLOADS_REQUEST });

  try {
    const response = await fileUploadInAuditQuestions(formData);

    if (response.status === 200 && response.data !== 409) {
      dispatch({ type: FILE_UPLOADS_SUCCESS, payload: response.data });
      toast.success('File uploaded successfully!', {
        position: 'bottom-right',
        hideProgressBar: false,
        progress: undefined,
      });
    } else if (response.data === 409) {
      dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
      toast.error(response.data.message || 'File upload failed', {
        position: 'bottom-right',
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
      toast.error(response.data, {
        position: 'bottom-right',
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({ type: FILE_UPLOADS_FAIL, payload: error.message });
    toast.error(error.message, {
      position: 'bottom-right',
      hideProgressBar: false,
      progress: undefined,
    });
  }
};
export const auditUploadStatusValue = (data) => async (dispatch) => {
  dispatch({ type: AUDIT_UPLOAD_STATUS_REQUEST });

  try {
    const response = await AuditUploadStatusValue(data);
    dispatch({ type: AUDIT_UPLOAD_STATUS_SUCCESS, payload: response.data });

    if (response.status === 201) {
      toast.success("Audit status updated successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: AUDIT_UPLOAD_STATUS_FAILURE,
        payload: response.data,
      });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_UPLOAD_STATUS_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};
// export const fetchNotifications = (notifications) => async (dispatch) => {
//   dispatch({ type: NOTIFICATION_REQUEST });

//   try {
//       const response = await DueDaysNotification(notifications); // Adjust the URL based on your API endpoint

//       dispatch({
//           type: NOTIFICATION_SUCCESS,
//           payload: response.data.notifications,
//       });

//       if (response.status === 200) {
//           toast.success("Notifications fetched successfully!", {
//               position: "bottom-right",
//               hideProgressBar: false,
//               progress: undefined,
//           });
//       } else {
//           dispatch({
//               type: NOTIFICATION_FAILURE,
//               payload: response.data,
//           });
//           toast.error(response.data, {
//               position: "bottom-right",
//               hideProgressBar: false,
//               progress: undefined,
//           });
//       }
//   } catch (error) {
//       dispatch({
//           type: NOTIFICATION_FAILURE,
//           payload: error.message,
//       });

//       toast.error(error.message, {
//           position: "bottom-right",
//           hideProgressBar: false,
//           progress: undefined,
//       });
//   }
// };
export const fetchNotifications = () => async (dispatch) => {
  dispatch({ type: NOTIFICATION_REQUEST });

  await DueDaysNotification()
    .then((response) => {
      dispatch({ type: NOTIFICATION_SUCCESS, payload: response.data });
      // console.log("here1",response.data);
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: NOTIFICATION_FAILURE,
          payload: response.data,
        });
        // toast.error(response.data, {
        //   position: "bottom-right",
        //   hideProgressBar: false,
        //   progress: undefined,
        // });
      }
    })
    .catch((error) => {
      dispatch({
        type: NOTIFICATION_FAILURE,
        payload: error.message,
      });

      // toast.error(error.message, {
      //   position: "bottom-right",
      //   hideProgressBar: false,
      //   progress: undefined,
      // });
    });
};
export const updateAuditFields = (auditId, postbody) => async (dispatch) => {
  dispatch({ type: UPDATE_AUDIT_FIELDS_REQUEST });

  try {
    const response = await auditFieldsUpdate(auditId, postbody);

    if (response.status === 200) {
      dispatch({ type: UPDATE_AUDIT_FIELDS_SUCCESS, payload: response.data });
      toast.success("Audit is Updated Successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: UPDATE_AUDIT_FIELDS_FAILURE,
        payload: response.data.message || "Failed to update the audit",
      });
      toast.error(response.data.message || "Failed to update the audit", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_AUDIT_FIELDS_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const updateAuditDueDates = () => async (dispatch) => {
  dispatch({ type: UPDATE_DUE_DATES_REQUEST });

  try {
    const response = await updateDueDates();

    if (response.status === 200) {
      dispatch({ type: UPDATE_DUE_DATES_SUCCESS, payload: response.data });
      // toast.success("Due dates updated successfully!", {
      //     position: "bottom-right",
      //     hideProgressBar: false,
      //     progress: undefined,
      // });
    } else {
      dispatch({
        type: UPDATE_DUE_DATES_FAILURE,
        payload: response.data.message || "Failed to update due dates",
      });
      // toast.error(response.data.message || "Failed to update due dates", {
      //     position: "bottom-right",
      //     hideProgressBar: false,
      //     progress: undefined,
      // });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_DUE_DATES_FAILURE,
      payload: error.message,
    });

    // toast.error(error.message, {
    //     position: "bottom-right",
    //     hideProgressBar: false,
    //     progress: undefined,
    // });
  }
};
export const createBranches = (data) => async (dispatch) => {
  dispatch({ type: BRANCHES_ADD_REQUEST });

  await BranchesCreate(data)
    .then((response) => {
      dispatch({
        type: BRANCHES_ADD_SUCCESS,
        payload: response.data,
      });

      if (response.status === 201) {
        toast.success("Branches added successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: BRANCHES_ADD_FAILURE,
          payload: response.data,
        });
        toast.error(response.data.message || "Failed to add branch", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      let errorMessage = error.message;

      // Handle duplicate key error from MongoDB
      if (
        error.response &&
        error.response.data &&
        error.response.data.message.includes("E11000 duplicate key error")
      ) {
        errorMessage = "Branch with the same name already exists.";
      }

      dispatch({
        type: BRANCHES_ADD_FAILURE,
        payload: errorMessage,
      });

      toast.error(errorMessage, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const AllbranchesGet = () => async (dispatch) => {
  dispatch({ type: BRANCHES_GET_REQUEST });
  await AllBranchesGetting()
    .then((response) => {
      dispatch({ type: BRANCHES_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: BRANCHES_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANCHES_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const TableBranchesGet = () => async (dispatch) => {
  dispatch({ type: BRANCHES_TABLE_GET_REQUEST });
  await TableBranchesGetting()
    .then((response) => {
      dispatch({ type: BRANCHES_TABLE_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: BRANCHES_TABLE_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANCHES_TABLE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const BranchesGetById = (id) => async (dispatch) => {
  dispatch({ type: BRANCHES_GET_BY_ID_REQUEST });
  // console.log("id",id);

  await BranchGetById(id)
    .then((response) => {
      dispatch({ type: BRANCHES_GET_BY_ID_SUCCESS, payload: response.data });
      if (response.status === 201) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: BRANCHES_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: BRANCHES_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const BranchesUpdateById = (postbody, id) => async (dispatch) => {
  dispatch({ type: BRANCHES_EDIT_REQUEST });

  try {
    const response = await BranchUpdateById(postbody, id);

    dispatch({
      type: BRANCHES_EDIT_SUCCESS,
      payload: response.data,
    });

    if (response.status === 200) {
      toast.success("Branch is Updated Successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: BRANCHES_EDIT_FAILURE,
        payload: response.data.message || "Failed to update the branch.",
      });

      toast.error(response.data.message || "Failed to update the branch.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: BRANCHES_EDIT_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};
export const CompanyBranchesGet = () => async (dispatch) => {
  dispatch({ type: COMPANY_BRANCHES_GET_REQUEST });
  await CompanyBranchesGetting()
    .then((response) => {
      dispatch({ type: COMPANY_BRANCHES_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: COMPANY_BRANCHES_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMPANY_BRANCHES_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const BranchesGetByCompany =
  (postbody) => async (dispatch) => {
    dispatch({ type: COMPANY_BRANCHES_BY_CREATE_REQUEST });

    await BranchesGettingByCompany(postbody)
      .then((response) => {
        dispatch({
          type: COMPANY_BRANCHES_BY_CREATE_SUCCESS,
          payload: response.data,
        });
        if (response.status === 200) {
          // toast.success("Company Ineraction License is created Successfully!", {
          //   position: "bottom-right",
          //   hideProgressBar: false,
          //   progress: undefined,
          // });
        } else {
          dispatch({
            type: COMPANY_BRANCHES_BY_CREATE_FAIL,
            payload: response.data,
          });
          toast.error(response.data, {
            position: "bottom-right",
            hideProgressBar: false,
            progress: undefined,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: COMPANY_BRANCHES_BY_CREATE_FAIL,
          payload: error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };


export const CreatingNotice = (data) => async (dispatch) => {
  dispatch({ type: NOTICE_ADD_REQUEST });

  await NoticeCreate(data)
    .then((response) => {
      dispatch({
        type: NOTICE_ADD_SUCCESS,
        payload: response.data,
      });

      if (response.status === 201) {
        toast.success("Notice Created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: NOTICE_ADD_FAILURE,
          payload: response.data,
        });
        toast.error(response.data.message || "Failed to add branch", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      let errorMessage = error.message;

      // Handle duplicate key error from MongoDB
      if (
        error.response &&
        error.response.data &&
        error.response.data.message.includes("E11000 duplicate key error")
      ) {
        errorMessage = "Branch with the same name already exists.";
      }

      dispatch({
        type: NOTICE_ADD_FAILURE,
        payload: errorMessage,
      });

      toast.error(errorMessage, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const TableNoticesGet = (page = 1, limit = 50, filters = {}) => async (dispatch) => {
  dispatch({ type: NOTICES_TABLE_GET_REQUEST });
  await TableNoticesGetting({ page, limit, filters })
    .then((response) => {
      dispatch({ type: NOTICES_TABLE_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: NOTICES_TABLE_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NOTICES_TABLE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const NoticeNewGetById = (id) => async (dispatch) => {
  dispatch({ type: NOTICES_GET_BY_ID_REQUEST });
  // console.log("id",id);

  await NoticeGetById(id)
    .then((response) => {
      dispatch({ type: NOTICES_GET_BY_ID_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: NOTICES_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: NOTICES_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const NoticesUpdateById = (postbody, id) => async (dispatch) => {
  dispatch({ type: NOTICES_EDIT_REQUEST });

  try {
    const response = await NoticeUpdateById(postbody, id);

    dispatch({
      type: NOTICES_EDIT_SUCCESS,
      payload: response.data,
    });

    if (response.status === 200) {
      toast.success("Notice is Updated Successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: NOTICES_EDIT_FAILURE,
        payload: response.data.message || "Failed to update the branch.",
      });

      toast.error(response.data.message || "Failed to update the branch.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: NOTICES_EDIT_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const NoticesDeleteById = (id) => async (dispatch) => {
  dispatch({ type: NOTICES_DELETE_REQUEST });

  try {
    const response = await NoticeDeleteById(id);

    dispatch({
      type: NOTICES_DELETE_SUCCESS,
      payload: response.data,
    });

    if (response.status === 201) {
      toast.success("Notice is Deleted Successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: NOTICES_DELETE_FAILURE,
        payload: response.data.message || "Failed to update the branch.",
      });

      toast.error(response.data.message || "Failed to update the branch.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: NOTICES_DELETE_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const getLabourContractAgreementNames = (postBody) => async (dispatch) => {
  dispatch({ type: LABOUR_AGREEMENT_NAME_GET_REQUEST });
  await getLabourContractAgreementName(postBody)
    .then((response) => {
      dispatch({ type: LABOUR_AGREEMENT_NAME_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: LABOUR_AGREEMENT_NAME_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_AGREEMENT_NAME_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const getPrincipleAgreementNames = (postBody) => async (dispatch) => {
  dispatch({ type: PRINCIPLE_AGREEMENT_NAME_GET_REQUEST });
  await getPrincipleAgreementName(postBody)
    .then((response) => {
      dispatch({ type: PRINCIPLE_AGREEMENT_NAME_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: PRINCIPLE_AGREEMENT_NAME_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: PRINCIPLE_AGREEMENT_NAME_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};





export const auditGetDataAllLCA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_LCA_REQUEST_All_DETAIL });

  await gettingAuditDetailLCA(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: AUDIT_LCA_SUCCESS_All_DETAIL, payload: response.data });
      // alert(response.status)
      if (response.status === 200) {
        // toast.success('Audit is Created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: AUDIT_LCA_FAIL_All_DETAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_LCA_FAIL_All_DETAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const auditGetDataAllPA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_PA_REQUEST_All_DETAIL });

  await gettingAuditDetailPA(postBody)
    .then((response) => {
      // alert(JSON.stringify(response.data))
      dispatch({ type: AUDIT_PA_SUCCESS_All_DETAIL, payload: response.data });
      // alert(response.status)
      if (response.status === 200) {
        // toast.success('Audit is Created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: AUDIT_PA_FAIL_All_DETAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDIT_PA_FAIL_All_DETAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const auditAllFiltersLCA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDITOR_LCA_REQUEST_GET_ALL_FILTER });
  await auditAllFilterLCA(postBody)
    .then((response) => {
      // console.log(response.data);
      dispatch({
        type: AUDITOR_LCA_SUCCESS_GET_ALL_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
      } else {
        dispatch({
          type: AUDITOR_LCA_GET_FAIL_ALL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDITOR_LCA_GET_FAIL_ALL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const auditAllFiltersPA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDITOR_PA_REQUEST_GET_ALL_FILTER });
  await auditAllFilterPA(postBody)
    .then((response) => {
      // console.log(response.data);
      dispatch({
        type: AUDITOR_PA_SUCCESS_GET_ALL_FILTER,
        payload: response.data,
      });
      if (response.status === 200) {
      } else {
        dispatch({
          type: AUDITOR_PA_GET_FAIL_ALL_FILTER,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: AUDITOR_PA_GET_FAIL_ALL_FILTER,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

// export const updateAuditFields = (auditId, postbody) => async (dispatch) => {


//   dispatch({ type: UPDATE_AUDIT_FIELDS_REQUEST });

//   try {
//     const response = await auditFieldsUpdate(auditId, postbody);

//     if (response.status === 200) {
//       dispatch({ type: UPDATE_AUDIT_FIELDS_SUCCESS, payload: response.data });
//       toast.success("Audit is Updated Successfully!", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else {
//       dispatch({
//         type: UPDATE_AUDIT_FIELDS_FAILURE,
//         payload: response.data.message || "Failed to update the audit",
//       });
//       toast.error(response.data.message || "Failed to update the audit", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: UPDATE_AUDIT_FIELDS_FAILURE,
//       payload: error.message,
//     });

//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   }
// };


export const auditUploadStatusValueLCA = (data) => async (dispatch) => {
  dispatch({ type: AUDIT_UPLOAD_STATUS_REQUEST_LCA });

  try {
    const response = await AuditUploadStatusValueLCA(data);
    dispatch({ type: AUDIT_UPLOAD_STATUS_SUCCESS_LCA, payload: response.data });

    if (response.status === 201) {
      toast.success("Audit status updated successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: AUDIT_UPLOAD_STATUS_FAILURE_LCA,
        payload: response.data,
      });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_UPLOAD_STATUS_FAILURE_LCA,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const auditUploadStatusValuePA = (data) => async (dispatch) => {
  dispatch({ type: AUDIT_UPLOAD_STATUS_REQUEST_PA });

  try {
    const response = await AuditUploadStatusValuePA(data);
    dispatch({ type: AUDIT_UPLOAD_STATUS_SUCCESS_PA, payload: response.data });

    if (response.status === 201) {
      toast.success("Audit status updated successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({
        type: AUDIT_UPLOAD_STATUS_FAILURE_PA,
        payload: response.data,
      });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_UPLOAD_STATUS_FAILURE_PA,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const fileUploadInAuditQuestion_LCA = (formData) => async (dispatch) => {
  dispatch({ type: FILE_UPLOADS_REQUEST_LCA });

  try {
    const response = await fileUploadInAuditQuestionLCA(formData);

    if (response.status === 200 && response.data !== 409) {
      dispatch({ type: FILE_UPLOADS_SUCCESS_LCA, payload: response.data });
      toast.success("File uploaded successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else if (response.data === 409) {
      dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: response.data });
      toast.error(response.data.message || "File upload failed", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: response.data });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: error.message });
    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};
export const fileUploadInAuditQuestion_PA = (formData) => async (dispatch) => {
  dispatch({ type: FILE_UPLOADS_REQUEST_PA });

  try {
    const response = await fileUploadInAuditQuestionPA(formData);

    if (response.status === 200 && response.data !== 409) {
      dispatch({ type: FILE_UPLOADS_SUCCESS_PA, payload: response.data });
      toast.success("File uploaded successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else if (response.data === 409) {
      dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: response.data });
      toast.error(response.data.message || "File upload failed", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: response.data });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: error.message });
    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};




// E-library------------------>>>>



export const actLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: ACT_LIBRARY_CREATE_REQUEST });

  await createActLibrary(postbody)
    .then((response) => {
      dispatch({
        type: ACT_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Act E-Library is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ACT_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ACT_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const actLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: ACT_LIBRARY_GET_REQUEST });

  await getActLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: ACT_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: ACT_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: ACT_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const actLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: ACT_LIBRARY_EDIT_REQUEST });

  await updateActLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: ACT_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Act E-Library is Edited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ACT_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ACT_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const actLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: ACT_LIBRARY_DELETE_REQUEST });

  await deleteActLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: ACT_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Act E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: ACT_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ACT_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const ruleLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: RULE_LIBRARY_CREATE_REQUEST });

  await createRulesLibrary(postbody)
    .then((response) => {
      dispatch({
        type: RULE_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Rule E-Library is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: RULE_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RULE_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const ruleLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: RULE_LIBRARY_GET_REQUEST });

  await getRulesLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: RULE_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: RULE_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: RULE_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const ruleLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: RULE_LIBRARY_EDIT_REQUEST });

  await updateRulesLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: RULE_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Rule E-Library is Edited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: RULE_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RULE_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const ruleLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: RULE_LIBRARY_DELETE_REQUEST });

  await deleteRulesLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: RULE_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Rule E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: RULE_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RULE_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const labourFormsLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: LABOUR_FORMS_LIBRARY_CREATE_REQUEST });

  await createLabourFormsLibrary(postbody)
    .then((response) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Form E-Library is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_FORMS_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const labourFormsLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: LABOUR_FORMS_LIBRARY_GET_REQUEST });

  await getLabourFormsLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: LABOUR_FORMS_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: LABOUR_FORMS_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const labourFormsLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: LABOUR_FORMS_LIBRARY_EDIT_REQUEST });

  await updateLabourFormsLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Form E-Library is Edited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_FORMS_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const labourFormsLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: LABOUR_FORMS_LIBRARY_DELETE_REQUEST });

  await deleteLabourFormsLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Form E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_FORMS_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_FORMS_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const holidayLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: HOLIDAY_LIBRARY_CREATE_REQUEST });

  await createHolidayLibrary(postbody)
    .then((response) => {
      dispatch({
        type: HOLIDAY_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Holiday E-Library is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: HOLIDAY_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const holidayLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: HOLIDAY_LIBRARY_GET_REQUEST });

  await getHolidayLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: HOLIDAY_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: HOLIDAY_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const holidayLibraryPaginatedGet1 = (body) => async (dispatch) => {
  dispatch({ type: HOLIDAY_LIBRARY_GET_REQUEST1 });

  await getAllHolidayLibraries(body)
    .then((response) => {
      dispatch({ type: HOLIDAY_LIBRARY_GET_SUCCESS1, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: HOLIDAY_LIBRARY_GET_FAILURE1,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};
export const MinWageLibraryPaginatedGetByState = (body) => async (dispatch) => {
  dispatch({ type: MINWAGE_LIBRARY_GET_REQUEST });

  await getAllMinWagesLibraries(body)
    .then((response) => {
      dispatch({ type: MINWAGE_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: MINWAGE_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: MINWAGE_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const holidayLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: HOLIDAY_LIBRARY_EDIT_REQUEST });

  await updateHolidayLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: HOLIDAY_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Holiday Form E-Library is Edited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: HOLIDAY_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const holidayLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: HOLIDAY_LIBRARY_DELETE_REQUEST });

  await deleteHolidayLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: HOLIDAY_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Holiday Form E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: HOLIDAY_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


// export const fileUploadInAuditQuestion = (formData) => async (dispatch) => {
//   dispatch({ type: FILE_UPLOADS_REQUEST });

//   try {
//     const response = await fileUploadInAuditQuestions(formData);

//     if (response.status === 200 && response.data !== 409) {
//       dispatch({ type: FILE_UPLOADS_SUCCESS, payload: response.data });
//       toast.success("File uploaded successfully!", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else if (response.data === 409) {
//       dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
//       toast.error(response.data.message || "File upload failed", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else {
//       dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
//       toast.error(response.data, {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     }
//   } catch (error) {
//     dispatch({ type: FILE_UPLOADS_FAIL, payload: error.message });
//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   }
// };
// export const fileUploadInAuditQuestion_LCA = (formData) => async (dispatch) => {
//   dispatch({ type: FILE_UPLOADS_REQUEST_LCA });

//   try {
//     const response = await fileUploadInAuditQuestionLCA(formData);

//     if (response.status === 200 && response.data !== 409) {
//       dispatch({ type: FILE_UPLOADS_SUCCESS_LCA, payload: response.data });
//       toast.success("File uploaded successfully!", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else if (response.data === 409) {
//       dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: response.data });
//       toast.error(response.data.message || "File upload failed", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else {
//       dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: response.data });
//       toast.error(response.data, {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     }
//   } catch (error) {
//     dispatch({ type: FILE_UPLOADS_FAIL_LCA, payload: error.message });
//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   }
// };
// export const fileUploadInAuditQuestion_PA = (formData) => async (dispatch) => {
//   dispatch({ type: FILE_UPLOADS_REQUEST_PA });

//   try {
//     const response = await fileUploadInAuditQuestionPA(formData);

//     if (response.status === 200 && response.data !== 409) {
//       dispatch({ type: FILE_UPLOADS_SUCCESS_PA, payload: response.data });
//       toast.success("File uploaded successfully!", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else if (response.data === 409) {
//       dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: response.data });
//       toast.error(response.data.message || "File upload failed", {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     } else {
//       dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: response.data });
//       toast.error(response.data, {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     }
//   } catch (error) {
//     dispatch({ type: FILE_UPLOADS_FAIL_PA, payload: error.message });
//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   }
// };



export const labourWelfareLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: LABOUR_WELFARE_LIBRARY_CREATE_REQUEST });

  await createLabourWelFundLibrary(postbody)
    .then((response) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Welfare is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_WELFARE_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const labourWelfareLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: LABOUR_WELFARE_LIBRARY_GET_REQUEST });

  await getLabourWelFundLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: LABOUR_WELFARE_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: LABOUR_WELFARE_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const labourWelfareLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: LABOUR_WELFARE_LIBRARY_EDIT_REQUEST });

  await updateLabourWelFundLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Welfare E-Library is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_WELFARE_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const labourWelfareLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: LABOUR_WELFARE_LIBRARY_DELETE_REQUEST });

  await deleteLabourWelFundLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Labour Welfare E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: LABOUR_WELFARE_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_WELFARE_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const minimumWagesLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: MINIMUM_WAGE_LIBRARY_CREATE_REQUEST });

  await createMinimumWagesLibrary(postbody)
    .then((response) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: MINIMUM_WAGE_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const minimumWagesLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: MINIMUM_WAGE_LIBRARY_GET_REQUEST });

  await getMinimumWagesLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: MINIMUM_WAGE_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: MINIMUM_WAGE_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const minimumWagesLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: MINIMUM_WAGE_LIBRARY_EDIT_REQUEST });

  await updateMinimumWagesLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage E-Library is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: MINIMUM_WAGE_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const minimumWagesLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: MINIMUM_WAGE_LIBRARY_DELETE_REQUEST });

  await deleteMinimumWagesLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: MINIMUM_WAGE_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: MINIMUM_WAGE_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};





export const WHAndLRLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: WH_LR_LIBRARY_CREATE_REQUEST });

  await createWHAndLRLibrary(postbody)
    .then((response) => {
      dispatch({
        type: WH_LR_LIBRARY_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: WH_LR_LIBRARY_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: WH_LR_LIBRARY_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const WHAndLRLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: WH_LR_LIBRARY_GET_REQUEST });

  await getWHAndLRLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: WH_LR_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: WH_LR_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: WH_LR_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const WHAndLRLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: WH_LR_LIBRARY_EDIT_REQUEST });

  await updateWHAndLRLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: WH_LR_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage E-Library is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: WH_LR_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: WH_LR_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const WHAndLRLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: WH_LR_LIBRARY_DELETE_REQUEST });

  await deleteWHAndLRLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: WH_LR_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Minimum Wage E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: WH_LR_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: WH_LR_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};





// export const professionalTaxLibraryCreate = (postbody) => async (dispatch) => {
//   dispatch({ type: PT_LIBRARY_CREATE_REQUEST });

//   await createProfessionalTaxLibrary(postbody)
//     .then((response) => {
//       dispatch({
//         type: PT_LIBRARY_CREATE_SUCCESS,
//         payload: response.data,
//       });
//       if (response.status === 200) {
//         toast.success("Professional Tax is created Successfully!", {
//           position: "bottom-right",
//           hideProgressBar: false,
//           progress: undefined,
//         });
//       } else {
//         dispatch({
//           type: PT_LIBRARY_CREATE_FAILURE,
//           payload: response.data,
//         });
//         toast.error(response.data, {
//           position: "bottom-right",
//           hideProgressBar: false,
//           progress: undefined,
//         });
//       }
//     })
//     .catch((error) => {
//       dispatch({
//         type: PT_LIBRARY_CREATE_FAILURE,
//         payload: error.message,
//       });

//       toast.error(error.message, {
//         position: "bottom-right",
//         hideProgressBar: false,
//         progress: undefined,
//       });
//     });
// };

export const professionalTaxLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: PT_LIBRARY_CREATE_REQUEST });

  await createProfessionalTaxLibrary(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: PT_LIBRARY_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("Professional Tax is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: PT_LIBRARY_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};


export const professionalTaxLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: PT_LIBRARY_GET_REQUEST });

  await getProfessionalTaxLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: PT_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: PT_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: PT_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const professionalTaxLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: PT_LIBRARY_EDIT_REQUEST });

  await updateProfessionalTaxLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: PT_LIBRARY_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Professional Tax E-Library is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: PT_LIBRARY_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: PT_LIBRARY_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const professionalTaxLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: PT_LIBRARY_DELETE_REQUEST });

  await deleteProfessionalTaxLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: PT_LIBRARY_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Professional Tax E-Library is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: PT_LIBRARY_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: PT_LIBRARY_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const complianceCategoryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMP_CAT_CREATE_REQUEST });

  await createComplianceCategory(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: COMP_CAT_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("Compliance Category created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: COMP_CAT_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};


export const complianceCategoryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: COMP_CAT_GET_REQUEST });

  await getComplianceCategoryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: COMP_CAT_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: COMP_CAT_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_CAT_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const complianceCategoryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMP_CAT_EDIT_REQUEST });

  await updateComplianceCategory(postbody, id)
    .then((response) => {
      dispatch({
        type: COMP_CAT_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Compliance Category is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMP_CAT_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_CAT_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const complianceCategoryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMP_CAT_DELETE_REQUEST });

  await deleteComplianceCategory(postbody, id)
    .then((response) => {
      dispatch({
        type: COMP_CAT_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Category is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMP_CAT_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_CAT_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const categoryGetComplianceList = () => async (dispatch) => {
  dispatch({ type: COMP_LIST_CAT_GET_REQUEST });
  try {
    const response = await ComplianceCategoryListGettting();
    // console.log("API Response:", response);

    if (response.status === 201 && response.data) {
      dispatch({
        type: COMP_LIST_CAT_GET_SUCCESS,
        payload: response.data,
      });
    } else {
      dispatch({
        type: COMP_LIST_CAT_GET_FAILURE,
        payload: response.data || "Something went wrong",
      });
      toast.error(response.data || "Something went wrong", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: COMP_LIST_CAT_GET_FAILURE,
      payload: error.message,
    });

    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};


export const compQandALibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: COMP_Q_A_CREATE_REQUEST });

  await createCompQandALibrary(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: COMP_Q_A_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("Compliance Category created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: COMP_Q_A_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};

export const compQandALibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: COMP_Q_A_GET_REQUEST });

  await getCompQandALibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: COMP_Q_A_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: COMP_Q_A_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_Q_A_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const compQandALibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMP_Q_A_EDIT_REQUEST });

  await updateCompQandALibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: COMP_Q_A_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Compliance Category is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMP_Q_A_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_Q_A_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const compQandALibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: COMP_Q_A_DELETE_REQUEST });

  await deleteCompQandALibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: COMP_Q_A_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Category is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: COMP_Q_A_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: COMP_Q_A_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};



export const policyTemplateLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: POLICY_TEMPLATE_CREATE_REQUEST });

  await createPolicyTemplateLibrary(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: POLICY_TEMPLATE_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("Policy Template created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: POLICY_TEMPLATE_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};

export const policyTemplateLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: POLICY_TEMPLATE_GET_REQUEST });

  await getPolicyTemplateLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: POLICY_TEMPLATE_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: POLICY_TEMPLATE_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: POLICY_TEMPLATE_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const policyTemplateLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: POLICY_TEMPLATE_EDIT_REQUEST });

  await updatePolicyTemplateLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: POLICY_TEMPLATE_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Policy Template is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: POLICY_TEMPLATE_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: POLICY_TEMPLATE_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const policyTemplateLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: POLICY_TEMPLATE_DELETE_REQUEST });

  await deletePolicyTemplateLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: POLICY_TEMPLATE_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Policy Template is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: POLICY_TEMPLATE_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: POLICY_TEMPLATE_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const reLeagalUpdateLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: RE_LEGAL_CREATE_REQUEST });

  await createReLeagalUpdateLibrary(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: RE_LEGAL_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("Recent Legal Update created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: RE_LEGAL_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};

export const reLeagalUpdateLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: RE_LEGAL_GET_REQUEST });

  await getReLeagalUpdateLibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: RE_LEGAL_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: RE_LEGAL_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: RE_LEGAL_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const reLeagalUpdateLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: RE_LEGAL_EDIT_REQUEST });

  await updateReLeagalUpdateLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: RE_LEGAL_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Recent Legal Update is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: RE_LEGAL_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RE_LEGAL_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const reLeagalUpdateLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: RE_LEGAL_DELETE_REQUEST });

  await deleteReLeagalUpdateLibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: RE_LEGAL_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Recent Legal Update is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: RE_LEGAL_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RE_LEGAL_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};




export const generalUpdateLibraryCreate = (postbody) => async (dispatch) => {
  dispatch({ type: GENERAL_CREATE_REQUEST });

  await createGeneralELibrary(postbody)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GENERAL_CREATE_SUCCESS,
          payload: response.data,
        });
        toast.success("General Update created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message;

      dispatch({
        type: GENERAL_CREATE_FAILURE,
        payload: message,
      });

      // ✅ Handle 409 Conflict
      if (status === 409) {
        toast.error("This state already exists in Professional Tax!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        toast.error(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    });
};

export const generalUpdateLibraryPaginatedGet = ({ page = 1, limit = 10, filters = {} }) => async (dispatch) => {
  dispatch({ type: GENERAL_GET_REQUEST });

  await getGeneralELibraryPaginated({ page, limit, filters })
    .then((response) => {
      dispatch({ type: GENERAL_GET_SUCCESS, payload: response.data });

      if (response.status !== 201) {
        dispatch({
          type: GENERAL_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: GENERAL_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const generalUpdateLibraryUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: GENERAL_EDIT_REQUEST });

  await updateGeneralELibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: GENERAL_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("General Update is Updated Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: GENERAL_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GENERAL_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const generalUpdateLibraryDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: GENERAL_DELETE_REQUEST });

  await deleteGeneralELibrary(postbody, id)
    .then((response) => {
      dispatch({
        type: GENERAL_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("General is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: GENERAL_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: GENERAL_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


// E-LIBRARY ENDS--------------------------------------->>>>>>>>
export const HelpAndSupportMail = (postbody) => async (dispatch) => {
  dispatch({ type: HELP_MAIL_REQUEST });

  await HelpSupportMailer(postbody)
    .then((response) => {
      dispatch({
        type: HELP_MAIL_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Submited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: HELP_MAIL_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: HELP_MAIL_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const holidayLibraryStateWise = (postBody) => async (dispatch) => {
  dispatch({ type: HOLIDAY_STATE_GET_REQUEST });

  await getAllHolidayByStateLibraries(postBody)
    .then((response) => {
      dispatch({ type: HOLIDAY_STATE_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: HOLIDAY_STATE_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: HOLIDAY_STATE_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};


export const labourWelfareLibraryStateWise = (postBody) => async (dispatch) => {
  dispatch({ type: LABOUR_WELFARE_STATE_GET_REQUEST });

  await getAllLabourWelfareByStateLibraries(postBody)
    .then((response) => {
      dispatch({ type: LABOUR_WELFARE_STATE_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: LABOUR_WELFARE_STATE_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: LABOUR_WELFARE_STATE_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};
export const wHAndLRByStateWise = (postBody) => async (dispatch) => {
  dispatch({ type: WH_LR_STATE_GET_REQUEST });

  await getAllWHAndLRByStateLibraries(postBody)
    .then((response) => {
      dispatch({ type: WH_LR_STATE_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: WH_LR_STATE_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: WH_LR_STATE_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};
export const pTByStateWise = (postBody) => async (dispatch) => {
  dispatch({ type: PT_STATE_GET_REQUEST });

  await getAllPTByStateLibraries(postBody)
    .then((response) => {
      dispatch({ type: PT_STATE_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: PT_STATE_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: PT_STATE_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};
export const minWagePeriodsByStateAndYearGet = (postBody) => async (dispatch) => {
  dispatch({ type: MINWAGE_PERIOD_LIBRARY_GET_REQUEST });

  await getMinWagePeriodsByStateAndYear(postBody)
    .then((response) => {
      dispatch({ type: MINWAGE_PERIOD_LIBRARY_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: MINWAGE_PERIOD_LIBRARY_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: MINWAGE_PERIOD_LIBRARY_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const minWageGetById = (id) => async (dispatch) => {
  dispatch({ type: MINWAGE_LIBRARY_GET_BY_ID_REQUEST });
  // console.log("id",id);

  await getMinimumWageById(id)
    .then((response) => {
      dispatch({ type: MINWAGE_LIBRARY_GET_BY_ID_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: MINWAGE_LIBRARY_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: MINWAGE_LIBRARY_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const remittanceCreate = (postbody) => async (dispatch) => {
  dispatch({ type: REMITTANCE_CREATE_REQUEST });

  try {
    const response = await createRemittanceTracker(postbody);
    dispatch({ type: REMITTANCE_CREATE_SUCCESS, payload: response.data });

    toast.success('Remittance created successfully!');
  } catch (error) {
    dispatch({ type: REMITTANCE_CREATE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const remittanceGetAll = (postBody) => async (dispatch) => {
  dispatch({ type: REMITTANCE_GET_REQUEST });

  try {
    const response = await getAllRemittanceTrackers(postBody);
    dispatch({ type: REMITTANCE_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REMITTANCE_GET_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const remittanceUpdate = (data, id) => async (dispatch) => {
  dispatch({ type: REMITTANCE_EDIT_REQUEST });

  try {
    const response = await updateRemittanceTracker(data, id);
    dispatch({ type: REMITTANCE_EDIT_SUCCESS, payload: response.data });

    toast.success('Remittance updated successfully!');
  } catch (error) {
    dispatch({ type: REMITTANCE_EDIT_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const remittanceDelete = (id) => async (dispatch) => {
  dispatch({ type: REMITTANCE_DELETE_REQUEST });

  try {
    const response = await deleteRemittanceTracker(id);
    dispatch({ type: REMITTANCE_DELETE_SUCCESS, payload: response.data });

    toast.success('Remittance deleted successfully!');
  } catch (error) {
    dispatch({ type: REMITTANCE_DELETE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const remmitanceGetById = (id) => async (dispatch) => {
  dispatch({ type: REMITTANCE_GET_BY_ID_REQUEST });

  await getRemmitanceTrackerById(id)
    .then((response) => {
      dispatch({
        type: REMITTANCE_GET_BY_ID_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {

      } else {
        dispatch({
          type: REMITTANCE_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REMITTANCE_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};


export const registerCompCreate = (postbody) => async (dispatch) => {
  dispatch({ type: REGISTER_COMP_CREATE_REQUEST });

  await createRegisterComp(postbody)
    .then((response) => {
      dispatch({
        type: REGISTER_COMP_CREATE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Register Compliance is created Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: REGISTER_COMP_CREATE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_COMP_CREATE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const registerCompPaginatedGet = (postbody) => async (dispatch) => {
  dispatch({ type: REGISTER_COMP_GET_REQUEST });

  await getAllRegisters(postbody)
    .then((response) => {
      dispatch({ type: REGISTER_COMP_GET_SUCCESS, payload: response.data });

      if (response.status !== 200) {
        dispatch({
          type: REGISTER_COMP_GET_FAILURE,
          payload: response.data,
        });
        toast.error(response.data);
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_COMP_GET_FAILURE,
        payload: error.message,
      });
      toast.error(error.message);
    });
};

export const registerCompUpdate = (postbody, id) => async (dispatch) => {
  dispatch({ type: REGISTER_COMP_EDIT_REQUEST });

  await updateRegisterById(postbody, id)
    .then((response) => {
      dispatch({
        type: REGISTER_COMP_EDIT_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Register Compliance is Edited Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: REGISTER_COMP_EDIT_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_COMP_EDIT_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const registerCompDelete = (postbody, id) => async (dispatch) => {
  dispatch({ type: REGISTER_COMP_DELETE_REQUEST });

  await deleteRegisterById(postbody, id)
    .then((response) => {
      dispatch({
        type: REGISTER_COMP_DELETE_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        toast.success("Register Compliance is Deleted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: REGISTER_COMP_DELETE_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_COMP_DELETE_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const registerGetById = (id) => async (dispatch) => {
  dispatch({ type: REGISTER_COMP_GET_BY_ID_REQUEST });
  // console.log("id", id);

  await getRegisterById(id)
    .then((response) => {
      dispatch({
        type: REGISTER_COMP_GET_BY_ID_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {

      } else {
        dispatch({
          type: REGISTER_COMP_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGISTER_COMP_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};



export const returnsCreate = (postbody) => async (dispatch) => {
  dispatch({ type: RETURNS_CREATE_REQUEST });

  try {
    const response = await createReturnsTracker(postbody);
    dispatch({ type: RETURNS_CREATE_SUCCESS, payload: response.data });

    toast.success('Returns created successfully!');
  } catch (error) {
    dispatch({ type: RETURNS_CREATE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const returnsGetAll = (params) => async (dispatch) => {
  dispatch({ type: RETURNS_GET_REQUEST });

  try {
    const response = await getAllReturnsTrackers(params);
    dispatch({ type: RETURNS_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: RETURNS_GET_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const returnsUpdate = (data, id) => async (dispatch) => {
  dispatch({ type: RETURNS_EDIT_REQUEST });

  try {
    const response = await updateReturnsTracker(data, id);
    dispatch({ type: RETURNS_EDIT_SUCCESS, payload: response.data });

    toast.success('Returns updated successfully!');
  } catch (error) {
    dispatch({ type: RETURNS_EDIT_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const returnsDelete = (id) => async (dispatch) => {
  dispatch({ type: RETURNS_DELETE_REQUEST });

  try {
    const response = await deleteReturnsTracker(id);
    dispatch({ type: RETURNS_DELETE_SUCCESS, payload: response.data });

    toast.success('Returns deleted successfully!');
  } catch (error) {
    dispatch({ type: RETURNS_DELETE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const returnsGetById = (id) => async (dispatch) => {
  dispatch({ type: RETURNS_GET_BY_ID_REQUEST });

  await getReturnsTrackerById(id)
    .then((response) => {
      dispatch({
        type: RETURNS_GET_BY_ID_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {

      } else {
        dispatch({
          type: RETURNS_GET_BY_ID_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: RETURNS_GET_BY_ID_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const categoryGetComp = () => async (dispatch) => {
  dispatch({ type: CATEGORY_COMPANY_REQUEST_GET });
  await catGetComp()
    .then((response) => {
      dispatch({ type: CATEGORY_COMPANY_SUCCESS_GET, payload: response.data });
      if (response.status === 200) {
      } else {
        dispatch({
          type: CATEGORY_COMPANY_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CATEGORY_COMPANY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const getChecklistFromCategory = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_BY_CATEO_REQUEST });

  try {
    const response = await getChecklistByCategory(postBody);
    dispatch({ type: CHECKLIST_BY_CATEO_SUCCESS, payload: response.data });

    // toast.success("Returns deleted successfully!");
  } catch (error) {
    dispatch({ type: CHECKLIST_BY_CATEO_FAILURE, payload: error.message });
    // toast.error(error.message);
  }
};


export const branchesDelete = (id) => async (dispatch) => {
  dispatch({ type: BRANCHES_DELETE_REQUEST });

  try {
    const response = await deleteBranches(id);
    dispatch({ type: BRANCHES_DELETE_SUCCESS, payload: response.data });

    toast.success("Branch Deleted successfully!");
  } catch (error) {
    dispatch({ type: BRANCHES_DELETE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
}


export const companyExecutiveGet = (data) => async (dispatch) => {
  dispatch({ type: EXECUTIVECOMPANY_REQUEST_GET });
  await companyexecutiveEGet(data)
    .then((response) => {
      dispatch({ type: EXECUTIVECOMPANY_SUCCESS_GET, payload: response.data });
      if (response.status === 201) {
      } else {
        dispatch({
          type: EXECUTIVECOMPANY_GET_FAIL,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: EXECUTIVECOMPANY_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const branchRequestsGet = (data = {}) => async (dispatch) => {
  try {
    dispatch({ type: BRANCHREQUEST_REQUEST });

    const response = await getBranchRequests(data);

    if (response.status === 200) {
      dispatch({
        type: BRANCHREQUEST_SUCCESS,
        payload: response.data, // contains { data, pagination, filters }
      });
    } else {
      dispatch({
        type: BRANCHREQUEST_FAILURE,
        payload: response.data,
      });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({
      type: BRANCHREQUEST_FAILURE,
      payload: error.message,
    });
    toast.error(error.message, {
      position: "bottom-right",
      hideProgressBar: false,
      progress: undefined,
    });
  }
};

export const branchRequestByIdGet = (id) => async (dispatch) => {
  dispatch({ type: BRANCHREQUEST_ID_REQUEST });

  try {
    const response = await getBranchRequestById(id);
    dispatch({ type: BRANCHREQUEST_ID_SUCCESS, payload: response.data });

    // toast.success("Branch Deleted successfully!");
  } catch (error) {
    dispatch({ type: BRANCHREQUEST_ID_FAILURE, payload: error.message });
    toast.error(error.message);
  }
}
export const branchNameExistsCheck = (data) => async (dispatch) => {
  dispatch({ type: BRANCH_CHECK_REQUEST });

  try {
    const response = await checkBranchNameExists(data);
    dispatch({ type: BRANCH_CHECK_SUCCESS, payload: response.data });

    // toast.success("Branch Deleted successfully!");
  } catch (error) {
    dispatch({ type: BRANCH_CHECK_FAILURE, payload: error.message });
    toast.error(error.message);
  }
}
export const branchLicenseRequestdelete = (id) => async (dispatch) => {
  dispatch({ type: BRANCHREQUEST_DELETE_REQUEST });

  try {
    const response = await deleteBranchLicenseRequest(id);
    dispatch({ type: BRANCHREQUEST_DELETE_SUCCESS, payload: response.data });

    toast.success("Branch Deleted successfully!");
  } catch (error) {
    dispatch({ type: BRANCHREQUEST_DELETE_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};



export const form13Templatesexport = () => async (dispatch) => {
  dispatch({ type: TEMPLATE_REGI_GET_REQUEST });

  try {
    const response = await exportForm13Templates();

    // Create a blob and trigger download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "RegiTemplate_FormXIII.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();

    dispatch({ type: TEMPLATE_REGI_GET_SUCCESS });
    // toast.success("Export successful!");
  } catch (error) {
    dispatch({ type: TEMPLATE_REGI_GET_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const form13TemplatesAutoexport = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_REGI_UP_GET_REQUEST });

  try {
    const response = await exportForm13TemplatesAuto(formData);

    // Create a blob and trigger download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "RegiTemplate_FormXIII.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();

    dispatch({ type: TEMPLATE_REGI_UP_GET_SUCCESS, payload: true, });
    // toast.success("Export successful!");
  } catch (error) {
    dispatch({ type: TEMPLATE_REGI_UP_GET_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};


export const formFRegistersgenerate = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_F_GET_REQUEST });

  try {
    const response = await generateFormFRegisters(formData);

    // Create a Blob for download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "FormF_AllEmployees.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();

    dispatch({ type: TEMPLATE_FORM_F_GET_SUCCESS, payload: true });
    toast.success("Form F registers generated successfully!");
  } catch (error) {
    console.error("Form F export failed:", error);
    dispatch({ type: TEMPLATE_FORM_F_GET_FAILURE, payload: error.message });
    toast.error(error.response?.data?.message || "Form F export failed!");
  }
};
export const formDRegistersgenerate = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_D_GET_REQUEST });

  try {
    const response = await exportFormDExcel(formData);

    // Create a Blob for download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "FormF_AllEmployees.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();

    dispatch({ type: TEMPLATE_FORM_D_GET_SUCCESS, payload: true });
    toast.success("Form F registers generated successfully!");
  } catch (error) {
    console.error("Form F export failed:", error);
    dispatch({ type: TEMPLATE_FORM_D_GET_FAILURE, payload: error.message });
    toast.error(error.response?.data?.message || "Form F export failed!");
  }
};

export const formCRegistersgenerate = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_C_GET_REQUEST });

  try {
    // Make API call to backend that exports Form C Excel
    const response = await formCExcel(formData);

    // Create a Blob for Excel download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Generate a download link dynamically
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Form_C_Data.xlsx`);
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    dispatch({ type: TEMPLATE_FORM_C_GET_SUCCESS, payload: true });
    toast.success("Form C registers generated successfully!");
  } catch (error) {
    console.error("Form C export failed:", error);
    dispatch({ type: TEMPLATE_FORM_C_GET_FAILURE, payload: error.message });
    toast.error(error.response?.data?.message || "Form C export failed!");
  }
};

export const formARegistersgenerate = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_A_GET_REQUEST });

  try {
    // Make API call to backend that exports Form C Excel
    const response = await exportFormAExcel(formData);

    // Create a Blob for Excel download
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Generate a download link dynamically
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `Form_A_Data.xlsx`);
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    dispatch({ type: TEMPLATE_FORM_A_GET_SUCCESS, payload: true });
    toast.success("Form C registers generated successfully!");
  } catch (error) {
    console.error("Form C export failed:", error);
    dispatch({ type: TEMPLATE_FORM_A_GET_FAILURE, payload: error.message });
    toast.error(error.response?.data?.message || "Form C export failed!");
  }
};



export const form13TemplatesexportPDF = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_REGI_PDF_GET_REQUEST });

  try {
    // 🧩 Step 1: Detect if formData is a FormData() instance or a plain object
    let formType;

    if (formData instanceof FormData) {
      formType = formData.get("formType");
    } else {
      formType = formData?.formType;
    }

    // console.log("Form Type Received:", `"${formType}"`);
    // console.log("Full Payload:", formData);

    // 🧩 Step 2: API call (ensure backend returns blob)
    const response = await exportForm13TemplatesPDF(formData);

    // 🧩 Step 3: Create PDF Blob
    const blob = new Blob([response.data], { type: "application/pdf" });

    // 🧩 Step 4: Create a dynamic filename
    const cleanFormType = formType?.trim()?.toLowerCase();
    const fileName =
      cleanFormType === "form t" ? "Form-T.pdf"
        : cleanFormType === "form f" ? "Form-F.pdf"
          : "Form13.pdf";

    // 🧩 Step 5: Trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    // 🧩 Step 6: Dispatch success
    dispatch({
      type: TEMPLATE_REGI_PDF_GET_SUCCESS,
      payload: true,
    });
  } catch (error) {
    console.error("PDF Export Error:", error);
    dispatch({
      type: TEMPLATE_REGI_PDF_GET_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
    toast.error(error?.response?.data?.message || "PDF export failed");
  }
};

export const formFTemplatesExportPDF = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_F_PDF_GET_REQUEST });

  try {
    // 🧩 Step 1: Detect if formData is a FormData() instance or a plain object
    let formType;

    if (formData instanceof FormData) {
      formType = formData.get("formType");
    } else {
      formType = formData?.formType;
    }

    // console.log("Form Type Received:", `"${formType}"`);
    // console.log("Full Payload:", formData);

    // 🧩 Step 2: API call (ensure backend returns blob)
    const response = await generateFormFRegistersPDF(formData);

    // 🧩 Step 3: Create PDF Blob
    const blob = new Blob([response.data], { type: "application/pdf" });

    // 🧩 Step 4: Create a dynamic filename
    const cleanFormType = formType?.trim()?.toLowerCase();
    const fileName =
      cleanFormType === "form t" ? "Form-T.pdf"
        : cleanFormType === "form f" ? "Form-F.pdf"
          : "Form13.pdf";

    // 🧩 Step 5: Trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    // 🧩 Step 6: Dispatch success
    dispatch({
      type: TEMPLATE_FORM_F_PDF_GET_SUCCESS,
      payload: true,
    });
  } catch (error) {
    console.error("PDF Export Error:", error);
    dispatch({
      type: TEMPLATE_FORM_F_PDF_GET_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
    toast.error(error?.response?.data?.message || "PDF export failed");
  }
};

export const exportFormDPdfAction = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_D_PDF_GET_REQUEST });

  try {
    // Ensure formType is "Form D"
    let formType;
    if (formData instanceof FormData) {
      formType = formData.get("formType");
    } else {
      formType = formData?.formType;
    }

    if (formType?.trim()?.toLowerCase() !== "form d") {
      throw new Error("Invalid form type. This action is only for Form D.");
    }

    // API call: backend should return PDF as arraybuffer/blob
    const response = await exportFormDPDF(formData); // axios POST with responseType: 'arraybuffer'

    // Create PDF Blob
    const blob = new Blob([response.data], { type: "application/pdf" });

    // Generate file name dynamically
    const fileName = `Form-D_${Date.now()}.pdf`;

    // Trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    // Dispatch success
    dispatch({
      type: TEMPLATE_FORM_D_PDF_GET_SUCCESS,
      payload: true,
    });
  } catch (error) {
    console.error("Form D PDF export error:", error);
    dispatch({
      type: TEMPLATE_FORM_D_PDF_GET_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
    toast.error(error?.response?.data?.message || "Form D PDF export failed");
  }
};

export const exportFormCPdfAction = (formData) => async (dispatch) => {
  dispatch({ type: TEMPLATE_FORM_C_PDF_GET_REQUEST });

  try {
    // Ensure formType is "Form C"
    let formType;
    if (formData instanceof FormData) {
      formType = formData.get("formType");
    } else {
      formType = formData?.formType;
    }

    if (formType?.trim()?.toLowerCase() !== "form c") {
      throw new Error("Invalid form type. This action is only for Form C.");
    }

    // API call: backend should return PDF as arraybuffer/blob
    const response = await formCPDF(formData); // axios POST with responseType: 'arraybuffer'

    // Create PDF Blob
    const blob = new Blob([response.data], { type: "application/pdf" });

    // Generate file name dynamically
    const fileName = `Form-C_Data.pdf`;

    // Trigger download
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    // Dispatch success
    dispatch({
      type: TEMPLATE_FORM_C_PDF_GET_SUCCESS,
      payload: true,
    });
  } catch (error) {
    console.error("Form C PDF export error:", error);
    dispatch({
      type: TEMPLATE_FORM_C_PDF_GET_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
    toast.error(error?.response?.data?.message || "Form C PDF export failed");
  }
};


export const AttendanceDataStrides = (postBody) => async (dispatch) => {
  dispatch({ type: REGI_INTIGRATE_REQUEST });

  try {
    const response = await stridesAttendanceData(postBody);
    dispatch({ type: REGI_INTIGRATE_SUCCESS, payload: response.data });

    // toast.success("Returns deleted successfully!");
  } catch (error) {
    dispatch({ type: REGI_INTIGRATE_FAILURE, payload: error.message });
    // toast.error(error.message);
  }
};
export const createRegiIntigrate = (postBody) => async (dispatch) => {
  dispatch({ type: REGI_INTIGRATE_CREATE_REQUEST });

  try {
    const response = await regiIntigrateCreate(postBody);
    dispatch({ type: REGI_INTIGRATE_CREATE_SUCCESS, payload: response.data });

    // toast.success("Returns deleted successfully!");
  } catch (error) {
    dispatch({ type: REGI_INTIGRATE_CREATE_FAILURE, payload: error.message });
    // toast.error(error.message);
  }
};
// export const fetchAllRegiIntigrate = () => async (dispatch) => {
//   dispatch({ type: REGI_INTIGRATE_GET_ALL_REQUEST });

//   try {
//     const response = await regiIntigrateFetchAll();
//     dispatch({ type: REGI_INTIGRATE_GET_ALL_SUCCESS, payload: response.data });

//     // toast.success("Returns deleted successfully!");
//   } catch (error) {
//     dispatch({ type: REGI_INTIGRATE_GET_ALL_FAILURE, payload: error.message });
//     // toast.error(error.message);
//   }
// };

export const fetchAllRegiIntigrate = () => async (dispatch) => {
  dispatch({ type: REGI_INTIGRATE_GET_ALL_REQUEST });

  await regiIntigrateFetchAll()
    .then((response) => {
      dispatch({
        type: REGI_INTIGRATE_GET_ALL_SUCCESS,
        payload: response.data,
      });
      if (response.status === 200) {
        // toast.success('Company Contractor Details is created Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: REGI_INTIGRATE_GET_ALL_FAILURE,
          payload: response.data,
        });
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: REGI_INTIGRATE_GET_ALL_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const contactMail = (postBody) => async (dispatch) => {
  dispatch({ type: CONTACT_MAIL_REQUEST });

  await ContactMailer(postBody)
    .then((response) => {
      dispatch({
        type: CONTACT_MAIL_SUCCESS,
        payload: response.data,
      });

      if (response.status === 200) {
        toast.success("Submitted Successfully!", {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      } else {
        dispatch({
          type: CONTACT_MAIL_FAILURE,
          payload: response.data,
        });

        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: CONTACT_MAIL_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
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
  // gettingChecklistOnCreate,
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
  // companytab1,
  // companytab2,
  // companytab3,
  // companytab4,
  // companytab5,
  // companytab6,
  // companytab7,
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
  fetchCompiledStatusCount,
  CalenderChecklistGet,
  FetchRegCount,
  FetchCompliedCount,
  CompanyBranchesGetting,
  AllBranchesGetting,
  RegionWiseDataGetting,
  DashboardBranchGetting,
  BranchesGettingByCompany,
  NoticeCreate,
  TableNoticesGetting,
  NoticeGetById,
  NoticeUpdateById,
  NoticeDeleteById,
  getCompanyBranchByState,
  noticeCompanyCount,
  noticeCompanyCountsDetail,
  NoticeCompanyCountsdownload,
  FetchCompliedCountData,
  FetchCompliedCountPA,
  FetchCompliedCountLCA,
  getPrincipleAgreementName,
  getLabourContractAgreementName,
  FetchCompliedCountDataLCA,
  FetchCompliedCountDataPA,
  getContractorNames,

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
  // fileUploadInAuditQuestionLCA,
  // fileUploadInAuditQuestionPA,
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
  complianceOverView,
  getAllRemittanceTrackers,
  getRemmitanceTrackerById,
  getReturnsTrackerById,
  getAllReturnsTrackers,
  getAllRegisters,
  overViewStatuses,
  companyLoginBranch,
  getPFTrackerforCompany,
  applicableCompliances,
  getBranchForLicensesDetails,
  downloadRegionBranchesExcel,
  getAllBulkZips,
  // checklistAddInAudit,
  // fileUploadInAuditQuestion as
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
  AUDIT_COMPILED_STATUS_REQUEST_All_DETAIL,
  AUDIT_COMPILED_STATUS_SUCCESS_All_DETAIL,
  AUDIT_COMPILED_STATUS_FAIL_All_DETAIL,
  CHECKLIST_CALENDER_REQUEST_GET_ALL,
  CHECKLIST_CALENDER_SUCCESS_GET_ALL,
  CHECKLIST_CALENDER_GET_FAIL_ALL,
  AUDIT_REG_COUNT_REQUEST_All_DETAIL,
  AUDIT_REG_COUNT_SUCCESS_All_DETAIL,
  AUDIT_REG_COUNT_FAIL_All_DETAIL,
  AUDIT_COMPILED_COUNT_REQUEST_All_DETAIL,
  AUDIT_COMPILED_COUNT_SUCCESS_All_DETAIL,
  AUDIT_COMPILED_COUNT_FAIL_All_DETAIL,
  COMPANY_BRANCHES_GET_REQUEST,
  COMPANY_BRANCHES_GET_SUCCESS,
  COMPANY_BRANCHES_GET_FAIL,
  REGION_WISE_DATA_GET_REQUEST,
  REGION_WISE_DATA_GET_SUCCESS,
  REGION_WISE_DATA_GET_FAIL,
  NOTICE_WISE_DATA_GET_REQUEST,
  NOTICE_WISE_DATA_GET_SUCCESS,
  NOTICE_WISE_DATA_GET_FAIL,
  DASH_STATE_WISE_DATA_GET_REQUEST,
  DASH_STATE_WISE_DATA_GET_SUCCESS,
  DASH_STATE_WISE_DATA_GET_FAIL,
  COMPANY_BRANCHES_BY_CREATE_REQUEST,
  COMPANY_BRANCHES_BY_CREATE_SUCCESS,
  COMPANY_BRANCHES_BY_CREATE_FAIL,
  BRANCHES_GET_REQUEST,
  BRANCHES_GET_SUCCESS,
  BRANCHES_GET_FAIL,
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
  BRANCH_STATE_REQUEST_GET,
  BRANCH_STATE_SUCCESS_GET,
  BRANCH_STATE_GET_FAIL,
  DASH_STATE_WISE_NOTICE_GET_REQUEST,
  DASH_STATE_WISE_NOTICE_GET_SUCCESS,
  DASH_STATE_WISE_NOTICE_GET_FAIL,
  DOWNLOAD_NOTICES_EXCEL_REQUEST,
  DOWNLOAD_NOTICES_EXCEL_SUCCESS,
  DOWNLOAD_NOTICES_EXCEL_FAIL,
  AUDIT_COUNT_DATA_REQUEST,
  AUDIT_COUNT_DATA_SUCCESS,
  AUDIT_COUNT_DATA_FAIL,
  AUDIT_COMPILED_COUNT_LCA_REQUEST_All_DETAIL,
  AUDIT_COMPILED_COUNT_LCA_SUCCESS_All_DETAIL,
  AUDIT_COMPILED_COUNT_LCA_FAIL_All_DETAIL,
  AUDIT_COMPILED_COUNT_PA_REQUEST_All_DETAIL,
  AUDIT_COMPILED_COUNT_PA_SUCCESS_All_DETAIL,
  AUDIT_COMPILED_COUNT_PA_FAIL_All_DETAIL,
  PRINCIPLE_AGREEMENT_NAME_GET_REQUEST,
  PRINCIPLE_AGREEMENT_NAME_GET_SUCCESS,
  PRINCIPLE_AGREEMENT_NAME_GET_FAIL,
  LABOUR_AGREEMENT_NAME_GET_FAIL,
  LABOUR_AGREEMENT_NAME_GET_SUCCESS,
  LABOUR_AGREEMENT_NAME_GET_REQUEST,
  AUDIT_COUNT_LCA_DATA_REQUEST,
  AUDIT_COUNT_LCA_DATA_SUCCESS,
  AUDIT_COUNT_LCA_DATA_FAIL,
  AUDIT_COUNT_PA_DATA_REQUEST,
  AUDIT_COUNT_PA_DATA_SUCCESS,
  AUDIT_COUNT_PA_DATA_FAIL,
  CONTRACTOR_NAME_GET_REQUEST,
  CONTRACTOR_NAME_GET_SUCCESS,
  CONTRACTOR_NAME_GET_FAIL,
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
  // FILE_UPLOADS_SUCCESS_LCA,
  // FILE_UPLOADS_FAIL_LCA,
  // FILE_UPLOADS_REQUEST_LCA,
  // FILE_UPLOADS_FAIL_PA,
  // FILE_UPLOADS_SUCCESS_PA,
  // FILE_UPLOADS_REQUEST_PA,
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
  COMPLIANCE_VIEW_GET_REQUEST,
  COMPLIANCE_VIEW_GET_SUCCESS,
  COMPLIANCE_VIEW_GET_FAIL,
  REMITTANCE_GET_REQUEST,
  REMITTANCE_GET_SUCCESS,
  REMITTANCE_GET_FAILURE,
  REMITTANCE_GET_BY_ID_REQUEST,
  REMITTANCE_GET_BY_ID_SUCCESS,
  REMITTANCE_GET_BY_ID_FAILURE,
  RETURNS_GET_REQUEST,
  RETURNS_GET_SUCCESS,
  RETURNS_GET_FAILURE,
  RETURNS_GET_BY_ID_REQUEST,
  RETURNS_GET_BY_ID_SUCCESS,
  RETURNS_GET_BY_ID_FAILURE,
  REGISTER_COMP_GET_REQUEST,
  REGISTER_COMP_GET_SUCCESS,
  REGISTER_COMP_GET_FAILURE,
  COMPLIANCE_VIEW_STATUS_GET_REQUEST,
  COMPLIANCE_VIEW_STATUS_GET_SUCCESS,
  COMPLIANCE_VIEW_STATUS_GET_FAIL,
  COMPANY_LOGIN_BRANCH_GET_REQUEST,
  COMPANY_LOGIN_BRANCH_GET_SUCCESS,
  COMPANY_LOGIN_BRANCH_GET_FAIL,
  PF_TRACKER_GET_REQUEST,
  PF_TRACKER_GET_SUCCESS,
  PF_TRACKER_GET_FAILURE,
  APPLICABLE_COMP_GET_REQUEST,
  APPLICABLE_COMP_GET_SUCCESS,
  APPLICABLE_COMP_GET_FAILURE,
  APPLICABLE_LICE_GET_REQUEST,
  APPLICABLE_LICE_GET_SUCCESS,
  APPLICABLE_LICE_GET_FAILURE,
  REPORT_REGION_EXCEL_REQUEST,
  REPORT_REGION_EXCEL_SUCCESS,
  REPORT_REGION_EXCEL_FAILURE,
  BULK_FILE_SHARE_GET_REQUEST,
  BULK_FILE_SHARE_GET_SUCCESS,
  BULK_FILE_SHARE_GET_FAILURE,
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
export const checklistGetAll = (currentPage, pageSize) => async (dispatch) => {
  dispatch({ type: CHECKLIST_REQUEST_GET_ALL });

  await checklistAllgetting({ page: currentPage, limit: pageSize })
    .then((response) => {
      console.log("API Response:", response.data); // Debugging
      const { data, totalPages, currentPage } = response.data; // Extract correctly

      dispatch({
        type: CHECKLIST_SUCCESS_GET_ALL,
        payload: {
          data: Array.isArray(data) ? data : [], // Ensure data is an array
          totalPages: totalPages || 0,
          currentPage: currentPage || 1,
        },
      });

      console.log("Dispatched Payload:", { data, totalPages, currentPage }); // Debugging
    })
    .catch((error) => {
      dispatch({
        type: CHECKLIST_GET_FAIL_ALL,
        payload: error.message,
      });

      console.error("Error Fetching Checklist:", error);
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
      toast.success("File uploaded successfully!", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else if (response.data === 409) {
      dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
      toast.error(response.data.message || "File upload failed", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    } else {
      dispatch({ type: FILE_UPLOADS_FAIL, payload: response.data });
      toast.error(response.data, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    }
  } catch (error) {
    dispatch({ type: FILE_UPLOADS_FAIL, payload: error.message });
    toast.error(error.message, {
      position: "bottom-right",
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
        toast.error(response.data, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
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

// export const auditCompiledStatusAll = (postBody) => async (dispatch) => {
//   dispatch({ type: AUDIT_COMPILED_STATUS_REQUEST_All_DETAIL });

//   try {
//     const response = await fetchCompiledStatusCount(postBody);
//     if (response.status === 200) {
//       // Check if response.data is an array
//       if (Array.isArray(response.data)) {
//         dispatch({ type: AUDIT_COMPILED_STATUS_SUCCESS_All_DETAIL, payload: response.data });
//       } else {
//         dispatch({ type: AUDIT_COMPILED_STATUS_FAIL_All_DETAIL, payload: 'Unexpected data format' });
//       }
//     } else {
//       dispatch({ type: AUDIT_COMPILED_STATUS_FAIL_All_DETAIL, payload: response.data });
//     }
//   } catch (error) {
//     dispatch({ type: AUDIT_COMPILED_STATUS_FAIL_All_DETAIL, payload: error.message });
//   }
// };

// actions/auditActions.js
// actions/auditActions.js
export const auditCompiledStatusAll =
  (postBody = {}) =>
    async (dispatch) => {
      dispatch({ type: AUDIT_COMPILED_STATUS_REQUEST_All_DETAIL });

      try {
        // Call the backend API
        const response = await fetchCompiledStatusCount(postBody); // Assuming postBody contains the state filter
        if (response.status === 200) {
          const {
            statewiseCounts,
            noticeData = [],
            branches = [],
          } = response.data; // Safely destructure auditData and branches with default values

          dispatch({
            type: AUDIT_COMPILED_STATUS_SUCCESS_All_DETAIL,
            payload: statewiseCounts,
            payload1: noticeData, // Dispatch auditData as payload1
            branches, // Dispatch branches directly
          });
        } else {
          dispatch({
            type: AUDIT_COMPILED_STATUS_FAIL_All_DETAIL,
            payload: "Unexpected response status",
          });
        }
      } catch (error) {
        dispatch({
          type: AUDIT_COMPILED_STATUS_FAIL_All_DETAIL,
          payload: error.message,
        });
      }
    };

export const auditRegCountAll = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_REG_COUNT_REQUEST_All_DETAIL });

  try {
    const response = await FetchRegCount(postBody);
    if (response.status === 200) {
      const { statewiseCounts, auditData = [], branches = [] } = response.data; // Extract statewiseCounts from response data
      dispatch({
        type: AUDIT_REG_COUNT_SUCCESS_All_DETAIL,
        payload: statewiseCounts,
        payload1: auditData, // Dispatch auditData as payload1
        branches,
      });
    } else {
      dispatch({
        type: AUDIT_REG_COUNT_FAIL_All_DETAIL,
        payload: "Unexpected response status",
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_REG_COUNT_FAIL_All_DETAIL,
      payload: error.message,
    });
  }
};

export const checklistCalenderGet = (postBody) => async (dispatch) => {
  dispatch({ type: CHECKLIST_CALENDER_REQUEST_GET_ALL });

  try {
    const response = await CalenderChecklistGet(postBody);
    console.log("API Response Data:", response.data); // ✅ Debug log

    if (response.status === 200) {
      dispatch({
        type: CHECKLIST_CALENDER_SUCCESS_GET_ALL,
        payload: response.data,
      });
    } else {
      dispatch({
        type: CHECKLIST_CALENDER_GET_FAIL_ALL,
        payload: response.data,
      });
      toast.error(response.data, { position: "bottom-right" });
    }
  } catch (error) {
    dispatch({
      type: CHECKLIST_CALENDER_GET_FAIL_ALL, // ✅ Fixed wrong action type
      payload: error.message,
    });

    toast.error(error.message, { position: "bottom-right" });
  }
};


export const auditCompiledCountAll = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COMPILED_COUNT_REQUEST_All_DETAIL });

  try {
    const response = await FetchCompliedCount(postBody); // Call the API
    console.log("count", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COMPILED_COUNT_SUCCESS_All_DETAIL,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COMPILED_COUNT_FAIL_All_DETAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COMPILED_COUNT_FAIL_All_DETAIL,
      payload: error.message,
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

export const RegionWiseDataGet = (region, fieldName) => async (dispatch) => {
  dispatch({ type: REGION_WISE_DATA_GET_REQUEST });
  await RegionWiseDataGetting(region, fieldName)
    .then((response) => {
      dispatch({ type: REGION_WISE_DATA_GET_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({
        type: REGION_WISE_DATA_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};



// export const DashboardBranchGet = (state, fieldName, license) => async (dispatch) => {
//   dispatch({ type: DASH_STATE_WISE_DATA_GET_REQUEST });
//   try {
//     const response = await DashboardBranchGetting(state, fieldName, license);
//     // console.log("API Response:", response.data);  // Log the API response
//     dispatch({ type: DASH_STATE_WISE_DATA_GET_SUCCESS, payload: response.data });
//   } catch (error) {
//     dispatch({
//       type: DASH_STATE_WISE_DATA_GET_FAIL,
//       payload: error.response && error.response.data.message
//         ? error.response.data.message
//         : error.message,
//     });
//     toast.error(error.message, {
//       position: "bottom-right",
//       hideProgressBar: false,
//       progress: undefined,
//     });
//   }
// };

export const DashboardBranchGet =
  (state, fieldName, license, region) => async (dispatch) => {
    dispatch({ type: DASH_STATE_WISE_DATA_GET_REQUEST });

    try {
      // Updated to send data using the modified DashboardBranchGetting
      const fetchedData = await DashboardBranchGetting(
        state,
        fieldName,
        license,
        region
      ); // Pass arguments as before

      dispatch({
        type: DASH_STATE_WISE_DATA_GET_SUCCESS,
        payload: fetchedData,
      });
      return fetchedData; // Return data to be passed to the modal
    } catch (error) {
      dispatch({
        type: DASH_STATE_WISE_DATA_GET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      throw error; // Throw error to be caught in handleCellClick
    }
  };

export const BranchesGetByCompany = (postbody) => async (dispatch) => {
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

export const AllbranchesGet = (postBody) => async (dispatch) => {
  dispatch({ type: BRANCHES_GET_REQUEST });
  await AllBranchesGetting(postBody)
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
export const branchGetByState = (postBody) => async (dispatch) => {
  dispatch({ type: BRANCH_STATE_REQUEST_GET });
  await getCompanyBranchByState(postBody)
    .then((response) => {
      dispatch({ type: BRANCH_STATE_SUCCESS_GET, payload: response.data });

      if (response.status === 200) {
        // console.log("data",response.data);
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: BRANCH_STATE_GET_FAIL,
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
        type: BRANCH_STATE_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const noticeCompanyCounts =
  (region, branch, from, to) => async (dispatch) => {
    dispatch({ type: NOTICE_WISE_DATA_GET_REQUEST });
    await noticeCompanyCount(region, branch, from, to)
      .then((response) => {
        dispatch({
          type: NOTICE_WISE_DATA_GET_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: NOTICE_WISE_DATA_GET_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });

        toast.error(error.message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
      });
  };

export const noticeCompanyCountsDetails =
  (state, region, fieldName, branch, from, to) => async (dispatch) => {
    dispatch({ type: DASH_STATE_WISE_NOTICE_GET_REQUEST });

    try {
      // API Call
      const fetchedData = await noticeCompanyCountsDetail(
        state,
        region,
        fieldName,
        branch,
        from,
        to
      );

      dispatch({
        type: DASH_STATE_WISE_NOTICE_GET_SUCCESS,
        payload: fetchedData,
      });
      return fetchedData; // Returning for further processing
    } catch (error) {
      dispatch({
        type: DASH_STATE_WISE_NOTICE_GET_FAIL,
        payload: error.response?.data?.message || error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });

      throw error;
    }
  };

export const downloadNoticesExcel = (payload) => async (dispatch) => {
  try {
    dispatch({ type: DOWNLOAD_NOTICES_EXCEL_REQUEST });

    // Call the utility function to download the Excel file
    const response = await NoticeCompanyCountsdownload(payload);

    // Create a download link for the Excel file
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "notices.xlsx");
    document.body.appendChild(link);
    link.click();
    link.remove();

    dispatch({
      type: DOWNLOAD_NOTICES_EXCEL_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DOWNLOAD_NOTICES_EXCEL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const auditCompiledCountDataAll = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COUNT_DATA_REQUEST });

  try {
    const response = await FetchCompliedCountData(postBody); // Call the API
    console.log("1111", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COUNT_DATA_SUCCESS,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COUNT_DATA_FAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COUNT_DATA_FAIL,
      payload: error.message,
    });
  }
};
export const auditCompiledCountDataAllLCA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COUNT_LCA_DATA_REQUEST });

  try {
    const response = await FetchCompliedCountDataLCA(postBody); // Call the API
    console.log("1111", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COUNT_LCA_DATA_SUCCESS,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COUNT_LCA_DATA_FAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COUNT_LCA_DATA_FAIL,
      payload: error.message,
    });
  }
};
export const auditCompiledCountDataAllPA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COUNT_PA_DATA_REQUEST });

  try {
    const response = await FetchCompliedCountDataPA(postBody); // Call the API
    console.log("1111", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COUNT_PA_DATA_SUCCESS,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COUNT_PA_DATA_FAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COUNT_PA_DATA_FAIL,
      payload: error.message,
    });
  }
};


export const auditCompiledCountAllLCA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COMPILED_COUNT_LCA_REQUEST_All_DETAIL });

  try {
    const response = await FetchCompliedCountLCA(postBody); // Call the API
    console.log("count", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COMPILED_COUNT_LCA_SUCCESS_All_DETAIL,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COMPILED_COUNT_LCA_FAIL_All_DETAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COMPILED_COUNT_LCA_FAIL_All_DETAIL,
      payload: error.message,
    });
  }
};

export const auditCompiledCountAllPA = (postBody) => async (dispatch) => {
  dispatch({ type: AUDIT_COMPILED_COUNT_PA_REQUEST_All_DETAIL });

  try {
    const response = await FetchCompliedCountPA(postBody); // Call the API
    console.log("count", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: AUDIT_COMPILED_COUNT_PA_SUCCESS_All_DETAIL,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: AUDIT_COMPILED_COUNT_PA_FAIL_All_DETAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: AUDIT_COMPILED_COUNT_PA_FAIL_All_DETAIL,
      payload: error.message,
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

export const getContractorName = (postBody) => async (dispatch) => {
  dispatch({ type: CONTRACTOR_NAME_GET_REQUEST });
  await getContractorNames(postBody)
    .then((response) => {
      dispatch({ type: CONTRACTOR_NAME_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
        // toast.success('Category is Added Successfully!', {
        //         position: "bottom-right",
        //         hideProgressBar: false,
        //         progress: undefined,
        // });
      } else {
        dispatch({
          type: CONTRACTOR_NAME_GET_FAIL,
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
        type: CONTRACTOR_NAME_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};




// E-LIBRARY STARTS--------------------------------------->>>>>>>>




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

export const complianceOverViewGet = (postBody) => async (dispatch) => {
  dispatch({ type: COMPLIANCE_VIEW_GET_REQUEST });

  try {
    const response = await complianceOverView(postBody); // Call the API
    // console.log("count", response.data); // Log the response to verify

    if (response.status === 200) {
      dispatch({
        type: COMPLIANCE_VIEW_GET_SUCCESS,
        payload: response.data, // No need to modify
      });
    } else {
      dispatch({
        type: COMPLIANCE_VIEW_GET_FAIL,
        payload: response.data,
      });
    }
  } catch (error) {
    dispatch({
      type: COMPLIANCE_VIEW_GET_FAIL,
      payload: error.message,
    });
  }
};

export const remittanceGetAll = (postBody) => async (dispatch) => {
  const { filters = {} } = postBody || {};
  const { fromDate, toDate } = filters;

  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (from > to) {
      toast.error("Invalid month range: 'From' month should not be after 'To' month.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      return;
    }
  }

  dispatch({ type: REMITTANCE_GET_REQUEST });

  try {
    const response = await getAllRemittanceTrackers(postBody);
    dispatch({ type: REMITTANCE_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REMITTANCE_GET_FAILURE, payload: error.message });
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

export const returnsGetAll = (postBody) => async (dispatch) => {
  const { filters = {} } = postBody || {};
  const { fromDate, toDate } = filters;

  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (from > to) {
      toast.error("Invalid month range: 'From' month should not be after 'To' month.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      return;
    }
  }
  dispatch({ type: RETURNS_GET_REQUEST });

  try {
    const response = await getAllReturnsTrackers(postBody);
    dispatch({ type: RETURNS_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: RETURNS_GET_FAILURE, payload: error.message });
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

export const registerCompPaginatedGet = (postBody) => async (dispatch) => {
  const { filters = {} } = postBody || {};
  const { fromDate, toDate } = filters;

  if (fromDate && toDate) {
    const from = new Date(fromDate);
    const to = new Date(toDate);

    if (from > to) {
      toast.error("Invalid month range: 'From' month should not be after 'To' month.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      return;
    }
  }
  dispatch({ type: REGISTER_COMP_GET_REQUEST });

  await getAllRegisters(postBody)
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


export const overViewStatusGet = (postBody) => async (dispatch) => {
  const { fromMonth, toMonth } = postBody || {};

  // 🔍 Date validation before API call
  if (fromMonth && toMonth) {
    const from = new Date(fromMonth);
    const to = new Date(toMonth);

    if (from > to) {
      toast.error("Invalid month range: 'From' month should not be after 'To' month.", {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
      return; // ⛔ Stop and prevent API call
    }
  }

  dispatch({ type: COMPLIANCE_VIEW_STATUS_GET_REQUEST });

  await overViewStatuses(postBody)
    .then((response) => {
      dispatch({ type: COMPLIANCE_VIEW_STATUS_GET_SUCCESS, payload: response.data });

      if (response.status === 201) {
        // Optional success condition
      } else {
        dispatch({
          type: COMPLIANCE_VIEW_STATUS_GET_FAIL,
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
        type: COMPLIANCE_VIEW_STATUS_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const companyLoginBranchGet = (postBody) => async (dispatch) => {

  dispatch({ type: COMPANY_LOGIN_BRANCH_GET_REQUEST });

  await companyLoginBranch(postBody)
    .then((response) => {
      dispatch({ type: COMPANY_LOGIN_BRANCH_GET_SUCCESS, payload: response.data });

      if (response.status === 200) {
        // Optional success condition
      } else {
        dispatch({
          type: COMPANY_LOGIN_BRANCH_GET_FAIL,
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
        type: COMPANY_LOGIN_BRANCH_GET_FAIL,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const compliancesApplicable = (postBody) => async (dispatch) => {

  dispatch({ type: APPLICABLE_COMP_GET_REQUEST });

  await applicableCompliances(postBody)
    .then((response) => {
      dispatch({ type: APPLICABLE_COMP_GET_SUCCESS, payload: response.data });

      if (response.status === 200) {
        // Optional success condition
      } else {
        dispatch({
          type: APPLICABLE_COMP_GET_FAILURE,
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
        type: APPLICABLE_COMP_GET_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
export const licnesesApplicable = (postBody) => async (dispatch) => {

  dispatch({ type: APPLICABLE_LICE_GET_REQUEST });

  await getBranchForLicensesDetails(postBody)
    .then((response) => {
      dispatch({ type: APPLICABLE_LICE_GET_SUCCESS, payload: response.data });

      if (response.status === 200) {
        // Optional success condition
      } else {
        dispatch({
          type: APPLICABLE_LICE_GET_FAILURE,
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
        type: APPLICABLE_LICE_GET_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const pfGetAll = (postBody) => async (dispatch) => {
  dispatch({ type: PF_TRACKER_GET_REQUEST });

  try {
    const response = await getPFTrackerforCompany(postBody);
    dispatch({ type: PF_TRACKER_GET_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: PF_TRACKER_GET_FAILURE, payload: error.message });
    toast.error(error.message);
  }
};

export const regionBranchesExcelDownload = (postBody) => async (dispatch) => {
  dispatch({ type: REPORT_REGION_EXCEL_REQUEST });

  await downloadRegionBranchesExcel(postBody)
    .then((response) => {
      // Successful file response (2xx) -> download file
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "branches_export.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      dispatch({ type: REPORT_REGION_EXCEL_SUCCESS });
    })
    .catch((error) => {
      const status = error?.response?.status;
      const message = error?.response?.data?.message || error.message || "Something went wrong";

      // If backend returned 404, display that message (not a fatal failure)
      if (status === 404) {
        toast.info(message, {
          position: "bottom-right",
          hideProgressBar: false,
          progress: undefined,
        });
        // Considered a 'successful' flow from UI perspective (no file to download)
        dispatch({ type: REPORT_REGION_EXCEL_SUCCESS });
        return;
      }

      // Other errors -> failure
      dispatch({
        type: REPORT_REGION_EXCEL_FAILURE,
        payload: message,
      });

      toast.error(message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};

export const bulkZipsGetAll = () => async (dispatch) => {
  dispatch({ type: BULK_FILE_SHARE_GET_REQUEST });
  await getAllBulkZips()
    .then((response) => {
      dispatch({ type: BULK_FILE_SHARE_GET_SUCCESS, payload: response.data });
      if (response.status === 200) {
      } else {
        dispatch({
          type: BULK_FILE_SHARE_GET_FAILURE,
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
        type: BULK_FILE_SHARE_GET_FAILURE,
        payload: error.message,
      });

      toast.error(error.message, {
        position: "bottom-right",
        hideProgressBar: false,
        progress: undefined,
      });
    });
};
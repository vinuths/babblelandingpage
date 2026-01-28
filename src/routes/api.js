import axios from 'axios';
import { getToken } from '../utils/localStorage'
// const URL = 'http://localhost:7000/api/admin';
const URL = 'http://192.168.0.3:7000/api/admin';
// const URL = 'http://192.168.1.76:9500/api/admin';

// const URL = 'https://backend.matrixhrtech.com/api/admin';


axios.defaults.withCredentials = true;
///api of users starts
export const login = async (data) => {
    return await axios.post(`${URL}/login`, data);
}
export const logout = async () => {
    return await axios.get(`${URL}/logout`);
}
export const auditoreGet = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/auditoreGet`, config);
}
export const getExecutive = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getExecutive`, config);
}
export const auditoreFilterChecklist = async (body) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditChecklistFilter`, body, config);
}
export const auditAllFilter = async (body) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditAllFilter`, body, config);
}
export const auditCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditCreate`, data, config);
}
export const auditchecklistGetonCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/auditchecklistGetonCreate`, config);
}
export const catCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/catCreate`, data, config);
}
export const catGet = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/catGettting`, config);
}
export const catEdit = async (data, id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.put(`${URL}/catEditById/${id}`, data, config);
}
export const catDelete = async (id) => {  //all users except logged in user
    return await axios.delete(`${URL}/deleteCat/${id}`);
}
export const userCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/userCreate`, data, config);
}
export const editUser = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/editUser/${id}`, data, config);
}
export const userDelete = async (id) => {  //all users except logged in user
    // alert(id);return;
    return await axios.delete(`${URL}/deleteUser/${id}`);
}

export const gettingState = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/stateGetting`, config);
}
export const gettingUser = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingUser`, config);
}
export const NotificationCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/notificationCreate`, data, config);
}
export const gettingNotification = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingNotification`, config);
}
export const createChecklist = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/checkListCreate`, data, config);
}
export const gettingChecklist = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checkListGetting`, config);
}
export const gettingBranch = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    // alert(id);return;
    return await axios.post(`${URL}/gettingCompanyBranch`, postBody, config);
}
export const allUsers = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/allUsers/${id}`, config);
}
export const searchUsers = async (data, loggedUserId) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/searchUsersRecords/${loggedUserId}`, data, config);
}
export const gettingCompliancesById = async (id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesById/${id}`, config);
}
export const deleteUser = async (id) => {
    return await axios.delete(`${URL}/delete/${id}`);
}

export const createBranch = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createBranch`, data, config);
}
// export const createCompany = async(data) => {

//     const config = {
//         headers: {
//             "Content-Type":"application/json",
//             Authorization : `Bearer ${getToken()}`
//         }
//     }
//     //alert(JSON.stringify(data)); return;
//     return await axios.post(`${URL}/createCompany`,data,config);
// }
export const createCompliances = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.post(`${URL}/createCompliances`, data, config);
}
export const gettingCompliances = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliances`, config);
}
export const gettingCompliancesAll = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesAll`, config);
}
export const gettingCompliancesFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //  alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesFilter`, postBody, config);
}
export const gettingCompliancesRejetFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesRejetFilter`, postBody, config);
}
export const gettingCompliancesAllFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //  alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/gettingCompliancesAllFilter`, postBody, config);
}
export const gettingcomplianceOnApproveFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/complianceApproveFilter`, postBody, config);
}
export const checklistOnRejectegetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    // alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/checklistOnRejectegetting`, config);
}
export const gettingCompliancesOnCreate = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompliancesOnCreate`, config);
}
export const updateCompliancesById = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateCompliancesById/${id}`, data, config);
}
export const complianceApporve = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceApporve`, data, config);
}
export const gettingCompliancesReject = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.get(`${URL}/gettingCompliancesReject`, config);
}
export const complianceReject = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/complianceReject`, data, config);
}
export const updateChecklistsById = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    //alert(JSON.stringify(data)); return;
    return await axios.put(`${URL}/updateChecklistsById/${id}`, data, config);
}
export const checklistOnCreateegetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistOnCreateegetting`, config);
}
export const gettingchecklistById = async (id) => {  //all users except logged in user
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    // alert(JSON.stringify(id)); return;
    return await axios.get(`${URL}/gettingchecklistById/${id}`, config);
}
export const checklistAllgetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistAllgetting`, config);
}
export const checklistApprovegetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/checklistApprovegetting`, config);
}
export const checklistApporve = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/checklistApporve`, data, config);
}
// export const checkListAllFilter = async(postBody) => {
//     const config = {
//         headers: {
//             "Content-Type":"application/json",
//             Authorization : `Bearer ${getToken()}`
//         }
//     }
//     //alert(JSON.stringify(postBody));return;
//    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
//     return await axios.post(`${URL}/checkListAllFilter`,postBody,config);
// }
export const gettingchecklistAllFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListAllFilter`, postBody, config);
}
export const gettingchecklistOnCreateFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListCreateFilter`, postBody, config);
}
export const gettingchecklistOnApproveFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListApproveFilter`, postBody, config);
}
export const rejectChecklist = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/rejectChecklist`, data, config);
}
export const gettingchecklistOnrejectFilter = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/checkListRejectedFilter`, postBody, config);
}
export const gettingchecklistAllCompliance = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingchecklistAllCompliance`, config);
}
export const gettingAuditDetail = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingAuditDetail`, config);
}
export const gettingOnGoingAuditDetail = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingOnGoingAuditDetail`, config);
}
export const gettingOverviewAuditDetail = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingOverviewAuditDetail`, config);
}
export const createLiseReg = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createLiseReg`, data, config);
}
export const getttingReg = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/liseRegGetting`, config);
}
export const liseRegGettingByIds = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/liseRegGettingById/${id}`, config);
}
export const liseregsFilters = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.post(`${URL}/liseRegHistoryFilter`, postBody, config);
}
export const regsApporve = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.patch(`${URL}/regsApporve`, postBody, config);
}
export const regsReject = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.patch(`${URL}/regsReject`, postBody, config);
}
export const liseRegUpdateByIds = async (postBody, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/liseRegUpdateById/${id}`, postBody, config);
}
export const ElibraryCreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/elibraryCreate`, data, config);
}
export const ElibraryGet = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.get(`${URL}/elibraryGet`, config);
}
export const elibraryGetById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/elibraryGetById/${id}`, config);
}
export const elibraryUpdateById = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.put(`${URL}/elibraryUpdateById/${id}`, data, config);
}
export const elibraryReject = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.patch(`${URL}/elibraryReject`, data, config);
}
export const elibraryRejectedDocs = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.get(`${URL}/elibraryRejectedDocs`, config);
}
export const elibrarySaveandApprove = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    // alert(JSON.stringify(data)); return;
    return await axios.patch(`${URL}/elibrarySaveandApprove`, data, config);
}
export const createCompany = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createCompany`, data, config);
}
export const gettingCompany = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompany`, config);
}
export const gettingCompanyTable = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompanyTable`, config);
}
export const gettingCompanyById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompanyById/${id}`, config);
}
export const gettingCompliaceCSById = async (cid, sid) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingCompliaceCSById/${cid}/${sid}`, config);
}
export const companySaveandApprove = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.put(`${URL}/companySaveandApprove`, data, config);
}
export const companyLcreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companyLcreate`, data, config);
}
export const companyL = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyL`, config);
}
export const companyLById = async (id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyLById/${id}`, config);
}
export const companyLUpdateById = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.put(`${URL}/companyLUpdateById/${id}`, data, config);
}
export const companyUpdateById = async (data, id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.put(`${URL}/companyUpdateById/${id}`, data, config);
}
export const apporveCompanyL = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyL`, data, config);
}
export const companyLicenseFilter = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyLicenseFilter`, data, config);
}
export const companytab1 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab1`, data, config);
}
export const companytab2 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab2`, data, config);
}
export const companytab3 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab3`, data, config);
}
export const companytab4 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab4`, data, config);
}
export const companytab5 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab5`, data, config);
}
export const companytab6 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab6`, data, config);
}
export const companytab7 = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/companytab7`, data, config);
}
export const createcompanyinteraction = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/createcompanyinteraction`, data, config);
}
export const gettingComppanyInterationById = async (id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingComppanyInterationById/${id}`, config);
}
export const updatecompanyinteractionById = async (postBody, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/updatecompanyinteractionById/${id}`, postBody, config);
}
export const gettingCompanyInractionTable = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/gettingCompanyInractionTable`, config);
}
export const apporveCompanyInteraction = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyInteraction`, data, config);
}

export const companyProfileFilter = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyProfileFilter`, data, config);
}
export const licenseCompanyInteractcreate = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    return await axios.post(`${URL}/licenseCompanyInteractcreate`, data, config);
}
export const companyinteractLicGetByid = async (id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/companyinteractLicGetByid/${id}`, config);
}
export const companyinteractLicUpdateById = async (postBody, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/companyinteractLicUpdateById/${id}`, postBody, config);
}
export const licenseCompanyInteractGetOnCreate = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/licenseCompanyInteractGetOnCreate`, config);
}
export const companyLicenseIntractFilter = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyLicenseIntractFilter`, data, config);
}
export const apporveCompanyInteractionLicense = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.patch(`${URL}/apporveCompanyInteractionLicense`, data, config);
}
export const createAssign = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/createAssign`, data, config);
}
export const getAssignid = async (id) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getAssignid/${id}`, config);
}
export const assignsUpdateById = async (postBody, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    }
    // alert(JSON.stringify(id+));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.put(`${URL}/assignsUpdateById/${id}`, postBody, config);
}
export const assignTableGet = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/assignTableGet`, config);
}
export const getAssignOnCreate = async () => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/getAssignOnCreate`, config);
}

export const viewAllAssignedCompanyFilter = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/viewAllAssignedCompanyFilter`, data, config);
}
export const assignedCompanyFilter = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/assignedCompanyFilter`, data, config);
}
///api of users endcomplianceReject
export const checklistAddInAudit = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    };
    return await axios.post(`${URL}/checklistAddInAudit`, data, config);
};
export const fileUploadInAuditQuestion = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    };
    return await axios.put(`${URL}/fileUploadInAuditQuestion`, data, config);
};

export const AuditUploadStatusValue = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data'

        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.post(`${URL}/AuditUploadStatusValue`, data, config);
}
// export const DueDaysNotification = async(notifications) => {

//     const config = {
//         headers: {
//             "Content-Type":"application/json",
//             Authorization : `Bearer ${getToken()}`,
//             // 'content-Type': 'multipart/form-data'

//         }
//     }
//     // console.log("getToken",getToken);
//     //alert('JSON.stringify(data)'); return;
//     return await axios.get(`${URL}/gettingDueNotifications `,notifications,config);
// }
export const DueDaysNotification = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        }
    };

    try {
        const response = await axios.get(`${URL}/gettingDueNotifications`, config);
        return response;
    } catch (error) {
        // Optionally handle errors here
        console.error('Error fetching due notifications:', error);
        throw error; // Re-throw the error if needed
    }
};
export const companyexecutiveEGet = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/companyexecutiveEGet`, data, config);
}

export const auditFieldsUpdate = async (auditId, data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        }
    };
    return await axios.put(`${URL}/updateAuditFields/${auditId}`, data, config);
};
export const updateDueDates = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`, // Include authentication if required
        }
    };
    return await axios.put(`${URL}/updateDueDates`, {}, config);
};
export const BranchesCreate = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'

        }
    };
    return await axios.post(`${URL}/createBranchRequest`, data, config);
};

export const AllBranchesGetting = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getAllBranches`, postBody, config); // Removed `postBody`
};

export const TableBranchesGetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.get(`${URL}/getBranchesTable`, config); // Removed `postBody`
};
export const BranchGetById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.get(`${URL}/getBranchById/${id}`, config); // Removed `postBody`
};

export const BranchUpdateById = async (data, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
    };

    console.log("API URL:", `${URL}/updateBranchById/${id}`);
    console.log("FormData:", data);

    return await axios.put(`${URL}/updateBranchById/${id}`, data, config);
};
export const CompanyBranchesGetting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.get(`${URL}/gettingBranchesForCompany`, config); // Removed `postBody`
};
export const BranchesGettingByCompany = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/gettingBranchesByCompany`, data, config); // Removed `postBody`
};
export const NoticeCreate = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/createNotice`, data, config);
};

export const TableNoticesGetting = async (body) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getTableNotice`, body, config);
};

export const NoticeGetById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.get(`${URL}/getNoticeById/${id}`, config); // Removed `postBody`
};

export const NoticeUpdateById = async (data, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
    };
    return await axios.put(`${URL}/updateNoticeById/${id}`, data, config);
};

export const NoticeDeleteById = async (id) => {

    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.delete(`${URL}/deleteNoticeById/${id}`, config);
};

export const getLabourContractAgreementName = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getLabourContractAgreementName`, postBody, config); // Removed `postBody`
};

export const getPrincipleAgreementName = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getPrincipleAgreementName`, postBody, config); // Removed `postBody`
};

export const auditAllFilterLCA = async (body) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditAllFilterLCA`, body, config);
}
export const auditAllFilterPA = async (body) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URL}/auditAllFilterPA`, body, config);
}

// export const updateDueDates = async () => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${getToken()}`, // Include authentication if required
//         }
//     };
//     return await axios.put(`${URL}/updateDueDates`, {}, config);
// };

export const gettingAuditDetailLCA = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingAuditDetailLCA`, config);
    // return await axios.get(`${URL}/gettingAuditDetail`, config);
}

export const gettingAuditDetailPA = async (postBody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    //alert(JSON.stringify(postBody));return;
    // alert(`${URL}/gettingCompliancesFilter?state=${state}&created_at=${created_at}`);return;
    return await axios.get(`${URL}/gettingAuditDetailPA`, config);
    // return await axios.get(`${URL}/gettingAuditDetail`, config);
}

// export const auditFieldsUpdate = async (auditId, data) => {
//     const config = {
//         headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${getToken()}`,
//         }
//     };
//     return await axios.put(`${URL}/updateAuditFields/${auditId}`, data, config);
// };
export const AuditUploadStatusValueLCA = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data'

        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.post(`${URL}/AuditUploadStatusValueLCA`, data, config);
}

export const AuditUploadStatusValuePA = async (data) => {

    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data'

        }
    }
    //alert('JSON.stringify(data)'); return;
    return await axios.post(`${URL}/AuditUploadStatusValuePA`, data, config);
}
export const fileUploadInAuditQuestionLCA = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    };
    return await axios.put(`${URL}/fileUploadInAuditQuestionLCA`, data, config);
};
export const fileUploadInAuditQuestionPA = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data'
        }
    };
    return await axios.put(`${URL}/fileUploadInAuditQuestionPA`, data, config);
};




export const createActLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createActLibrary `, postbody, config); // Using POST here
};
export const getActLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getActLibraryPaginated`, body, config);
};
// actLibraryService.js

export const updateActLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateActLibrary/${id}/status`, { status }, config);
};

export const updateActLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateActLibrary/${id}`, data, config); // Using POST here
};
export const deleteActLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteActLibrary/${id}`, config); // Using POST here
};



export const createRulesLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createRulesLibrary `, postbody, config); // Using POST here
};
export const getRulesLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getRulesLibraryPaginated`, body, config);
};
// actLibraryService.js

export const updateRulesLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateRuleLibrary/${id}/status`, { status }, config);
};

export const updateRulesLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateRulesLibrary/${id}`, data, config); // Using POST here
};
export const deleteRulesLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteRulesLibrary/${id}`, config); // Using POST here
};




export const createLabourFormsLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createLabourFormsLibrary `, postbody, config); // Using POST here
};
export const getLabourFormsLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getLabourFormsLibraryPaginated`, body, config);
};


export const updateLabourFormsLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateLabourFormsLibrary/${id}/status`, { status }, config);
};

export const updateLabourFormsLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateLabourFormsLibrary/${id}`, data, config); // Using POST here
};
export const deleteLabourFormsLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteLabourFormsLibrary/${id}`, config); // Using POST here
};



export const createHolidayLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createHolidayLibrary `, postbody, config); // Using POST here
};
export const getHolidayLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getHolidayLibraryPaginated`, body, config);
};
export const getAllHolidayLibraries = async (body) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllHolidayLibraries`, body, config);
};
export const getAllMinWagesLibraries = async (body) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllMinWagesLibraries`, body, config);
};


export const updateHolidayLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateHolidayLibrary/${id}/status`, { status }, config);
};


export const updateHolidayLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateHolidayLibrary/${id}`, data, config); // Using POST here
};

export const deleteHolidayLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteHolidayLibrary/${id}`, config); // Using POST here
};

export const createLabourWelFundLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createLabourWelFundLibrary `, postbody, config); // Using POST here
};
export const getLabourWelFundLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getLabourWelFundLibraryPaginated`, body, config);
};


export const updateLabourWelFundLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateLabourWelFund/${id}/status`, { status }, config);
};

export const updateLabourWelFundLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateLabourWelFundLibrary/${id}`, data, config); // Using POST here
};

export const deleteLabourWelFundLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteLabourWelFundLibrary/${id}`, config); // Using POST here
};


export const createMinimumWagesLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createMinimumWagesLibrary `, postbody, config); // Using POST here
};
export const getMinimumWagesLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getMinimumWagesLibraryPaginated`, body, config);
};


export const updateMinimumWagesLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateMinimumWagesLibrary/${id}/status`, { status }, config);
};

export const updateMinimumWagesLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateMinimumWagesLibrary/${id}`, data, config); // Using POST here
};

export const deleteMinimumWagesLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteMinimumWagesLibrary/${id}`, config); // Using POST here
};


export const createWHAndLRLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createWHAndLRLibrary `, postbody, config); // Using POST here
};
export const getWHAndLRLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getWHAndLRLibraryPaginated`, body, config);
};


export const updateWHAndLRLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateWHAndLRLibrary/${id}/status`, { status }, config);
};

export const updateWHAndLRLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateWHAndLRLibrary/${id}`, data, config); // Using POST here
};

export const deleteWHAndLRLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteWHAndLRLibrary/${id}`, config); // Using POST here
};


export const createProfessionalTaxLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createProfessionalTaxLibrary `, postbody, config); // Using POST here
};
export const getProfessionalTaxLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getProfessionalTaxLibraryPaginated`, body, config);
};


export const updateProfessionalTaxLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateProfessionalTaxLibrary/${id}/status`, { status }, config);
};

export const updateProfessionalTaxLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateProfessionalTaxLibrary/${id}`, data, config); // Using POST here
};

export const deleteProfessionalTaxLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteProfessionalTaxLibrary/${id}`, config); // Using POST here
};


export const createComplianceCategory = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createComplianceCategory `, postbody, config); // Using POST here
};
export const getComplianceCategoryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getComplianceCategoryPaginated`, body, config);
};


export const updateComplianceCategoryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateComplianceCategory/${id}/status`, { status }, config);
};

export const updateComplianceCategory = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateComplianceCategory/${id}`, data, config); // Using POST here
};

export const deleteComplianceCategory = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteComplianceCategory/${id}`, config); // Using POST here
};

export const ComplianceCategoryListGettting = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/ComplianceCategoryListGettting`, config);
}


export const createCompQandALibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createCompQandALibrary `, postbody, config); // Using POST here
};
export const getCompQandALibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getCompQandALibraryPaginatedView`, body, config);
};


export const updateCompQandALibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateCompQandALibrary/${id}/status`, { status }, config);
};

export const updateCompQandALibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateCompQandALibrary/${id}`, data, config); // Using POST here
};

export const deleteCompQandALibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteCompQandALibrary/${id}`, config); // Using POST here
};



export const createPolicyTemplateLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createPolicyTemplateLibrary `, postbody, config); // Using POST here
};
export const getPolicyTemplateLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getPolicyTemplateLibraryPaginated`, body, config);
};


export const updatePolicyTemplateLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdatePolicyTemplateLibrary/${id}/status`, { status }, config);
};

export const updatePolicyTemplateLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updatePolicyTemplateLibrary/${id}`, data, config); // Using POST here
};

export const deletePolicyTemplateLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deletePolicyTemplateLibrary/${id}`, config); // Using POST here
};



export const createReLeagalUpdateLibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createReLeagalUpdateLibrary `, postbody, config); // Using POST here
};
export const getReLeagalUpdateLibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getReLeagalUpdateLibraryPaginated`, body, config);
};


export const updateReLeagalUpdateLibraryStatus = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateReLeagalUpdateLibrary/${id}/status`, { status }, config);
};

export const updateReLeagalUpdateLibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateReLeagalUpdateLibrary/${id}`, data, config); // Using POST here
};

export const deleteReLeagalUpdateLibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteReLeagalUpdateLibrary/${id}`, config); // Using POST here
};

export const createGeneralELibrary = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createGeneralELibrary `, postbody, config); // Using POST here
};
export const getGeneralELibraryPaginated = async ({ page, limit, filters }) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    const body = {
        page,
        limit,
        filters, // send filters in body
    };

    return await axios.post(`${URL}/getGeneralELibraryPaginated`, body, config);
};


export const statusUpdateGeneralELibrary = async (id, status) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.patch(`${URL}/statusUpdateGeneralLibrary/${id}/status`, { status }, config);
};

export const updateGeneralELibrary = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateGeneralELibrary/${id}`, data, config); // Using POST here
};

export const deleteGeneralELibrary = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteGeneralELibrary/${id}`, config); // Using POST here
};




// E-Library ENDS---------------------->>>
export const HelpSupportMailer = async (body) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}//HelpSupportMailer`, body, config); // Using POST here
};


export const getAllHolidayByStateLibraries = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllHolidayByStateLibraries`, postBody, config);
};

export const getAllLabourWelfareByStateLibraries = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllLabourWelfareByStateLibraries`, postBody, config);
};
export const getAllWHAndLRByStateLibraries = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllWHAndLRByStateLibraries`, postBody, config);
};
export const getAllPTByStateLibraries = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllPTByStateLibraries`, postBody, config);
};

export const getMinWagePeriodsByStateAndYear = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getMinWagePeriodsByStateAndYear`, postBody, config);
};

export const getMinimumWageById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };

    // ✅ Correct usage: empty body, headers in third param
    return await axios.post(`${URL}/getMinimumWageById/${id}`, {}, config);
};

export const createRemittanceTracker = async (postbody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'multipart/form-data',
        },
    };
    return await axios.post(`${URL}/createRemmitanceTracker`, postbody, config);
};

export const getAllRemittanceTrackers = async (postBody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getAllRemmitanceTrackers`, postBody, config);
};

export const updateRemittanceTracker = async (data, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'multipart/form-data',
        },
    };
    return await axios.post(`${URL}/updateRemmitanceTracker/${id}`, data, config);
};

export const deleteRemittanceTracker = async (id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/deleteRemmitanceTracker/${id}`, {}, config);
};
export const getRemmitanceTrackerById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,

        },
    };
    return await axios.post(`${URL}/getRemmitanceTrackerById/${id}`, {}, config);
};

export const createRegisterComp = async (postbody) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.post(`${URL}/createRegisterComp `, postbody, config); // Using POST here
};
export const getAllRegisters = async (postbody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };

    return await axios.post(`${URL}/getAllRegisters`, postbody, config);
};
// actLibraryService.js

export const getRegisterById = (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return axios.post(`${URL}/getRegisterById/${id}`, {}, config); // {} body, headers 3rd param
};


export const updateRegisterById = async (data, id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            'content-type': 'multipart/form-data'

        },
    };

    // Send a POST request with the IDs in the body
    return await axios.put(`${URL}/updateRegisterById/${id}`, data, config); // Using POST here
};
export const deleteRegisterById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,


        },
    };

    // Send a POST request with the IDs in the body
    return await axios.delete(`${URL}/deleteRegisterById/${id}`, config); // Using POST here
};

export const createReturnsTracker = async (postbody) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'multipart/form-data',
        },
    };
    return await axios.post(`${URL}/createReturnsTracker`, postbody, config);
};

export const getAllReturnsTrackers = async (params) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/getAllReturnsTrackers`, params, config);
};

export const updateReturnsTracker = async (data, id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'multipart/form-data',
        },
    };
    return await axios.post(`${URL}/updateReturnsTracker/${id}`, data, config);
};

export const deleteReturnsTracker = async (id) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    };
    return await axios.post(`${URL}/deleteReturnsTracker/${id}`, {}, config);
};
export const getReturnsTrackerById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,

        },
    };
    return await axios.post(`${URL}/getReturnsTrackerById/${id}`, {}, config);
};

export const catGetComp = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    }
    return await axios.get(`${URL}/catGetttingComp`, config);
}

export const getChecklistByCategory = async (postBody) => {
    const config = {
        headers: {
            // "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/getChecklistByCategory`, postBody, config);
};
export const deleteBranches = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/deleteBranches/${id}`, {}, config);
};

export const getBranchRequests = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/getBranchRequests`, data, config);
};
export const getBranchRequestById = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/getBranchRequestById/${id}`, {}, config);
};

export const checkBranchNameExists = async (data) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/checkBranchNameExists`, data, config);
};

export const deleteBranchLicenseRequest = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/deleteBranchLicenseRequest/${id}`, {}, config);
};
export const exportForm13Templates = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
        responseType: "blob", // 👈 important
    };

    return await axios.get(`${URL}/exportForm13Templates`, config);
};
export const exportForm13TemplatesPDF = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data',

        },
        responseType: "blob", // 👈 important
    };

    // return await axios.get(`${URL}/exportForm13TemplatesPDF`, config);
    return await axios.post(`${URL}/exportForm13TemplatesToPDF`, formData, config);
};


export const exportForm13TemplatesAuto = async (formData) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            // 'Content-Type': 'multipart/form-data',
            'content-Type': 'multipart/form-data',

        },
        responseType: "blob", // 👈 important for file download
    };

    return await axios.post(`${URL}/exportForm13TemplatesAuto`, formData, config);
};

export const generateFormFRegisters = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Important for binary Excel download
    };

    return await axios.post(`${URL}/generateFormFRegisters`, formData, config);
};

export const generateFormFRegistersPDF = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data',

        },
        responseType: "blob", // 👈 important
    };

    // return await axios.get(`${URL}/exportForm13TemplatesPDF`, config);
    return await axios.post(`${URL}/generateFormFRegistersPDF`, formData, config);
};


export const exportFormDExcel = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Important for binary Excel download
    };

    return await axios.post(`${URL}/exportFormDExcel`, formData, config);
};
export const exportFormAExcel = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Important for binary Excel download
    };

    return await axios.post(`${URL}/exportFormAExcel`, formData, config);
};

export const exportFormDPDF = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data',

        },
        responseType: "blob", // 👈 important
    };

    // return await axios.get(`${URL}/exportForm13TemplatesPDF`, config);
    return await axios.post(`${URL}/exportFormDPDF`, formData, config);
};
export const formCExcel = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "multipart/form-data",
        },
        responseType: "blob", // Important for binary Excel download
    };

    return await axios.post(`${URL}/formCExcel`, formData, config);
};

export const formCPDF = async (formData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'content-Type': 'multipart/form-data',

        },
        responseType: "blob", // 👈 important
    };

    // return await axios.get(`${URL}/exportForm13TemplatesPDF`, config);
    return await axios.post(`${URL}/formCPDF`, formData, config);
};


export const stridesAttendanceData = async (formData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/stridesAttendanceData`, formData, config);
};
export const regiIntigrateCreate = async (formData) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.post(`${URL}/regiIntigrateCreate`, formData, config);
};
export const regiIntigrateFetchAll = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
            // 'content-Type': 'multipart/form-data',

        },
    };
    return await axios.get(`${URL}/regiIntigrateFetchAll`,  config);
};

export const ContactMailer = async (body) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  };

  return await axios.post(`${URL}/ContactMailer`, body, config); // API endpoint for contact
};
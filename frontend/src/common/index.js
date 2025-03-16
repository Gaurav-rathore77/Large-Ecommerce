const domainApi = 'http://localhost:8000'
const domain = {
    signUp :{
        url : `${domainApi}/api/register`,
        method : 'POST'
    },
    signIn :{
        url : `${domainApi}/api/login`,
        method : 'POST'
    },
    userDetails :{
        url : `${domainApi}/api/user-details`,
        method : 'GET'
    },
    logout_user :{
        url : `${domainApi}/api/userLogout`,
        method : 'GET'
    },
    allUser :{
        url : `${domainApi}/api/allUsers`,
        method : 'GET'
    },
    updateUser : {
        url : `${domainApi}/api/updateUser`,
        method : "post"
    },

}
export default domain
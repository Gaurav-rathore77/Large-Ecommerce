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
    }

}
export default domain
import Api from '@/services/Api'

export default{
    searchUser(params) { //name service for access from component
        return Api().get('users/' + params.username)
    },
}
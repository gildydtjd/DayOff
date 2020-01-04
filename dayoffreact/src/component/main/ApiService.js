import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {

    MonthProductList(){
        return axios.get('/MonthProductList')
    }

    RegisterProduct(){
        return axios.get('/productRegister')
    }

    SearchProduct(name) {
        return axios.get('/SearchProduct/' + name);
    }

    SearchAdminProduct(name) {
        return axios.get('/SearchAdminProduct/' + name);
    }

    //// 콘텐츠
    MainCategoryList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/MainCategory/' +name+"?sort="+sort+","+direction)
    }

    SubCategoryList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/SubCategory/' + name+"?sort="+sort+","+direction)
    }

    AdminMainCategoryList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/AdminMainCategory/' + name+"?sort="+sort+","+direction);
    }

    AdminSubCategoryList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/AdminSubCategory/' + name+"?sort="+sort+","+direction)
    }


    CategoryNameList(name) {
        return axios.get('/CategoryNameList/' + name)
    }

    CategorySubList(name) {
        return axios.get('/CategorySubList/' + name)
    }

    ColorProductList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/ColorProduct/' + name+"?sort="+sort+","+direction)
    }

    AdminColorProductList(name,selected) {
        const sort=selected&&selected.substring(0,selected.lastIndexOf("_"));
        const direction=selected&&selected.substring(selected.lastIndexOf("_")+1);
        console.log(selected)
        return axios.get('/AdminColorProduct/' + name+"?sort="+sort+","+direction)
    }

    isAvailableUp(id){
        return axios.get('/isAvailableUp/'+id);
    }

    isAvailableDown(id){
        return axios.get('/isAvailableDown/'+id);
    }


    
    fetchUserById(id) {
        return axios.get(USER_API_BASE_URL + '/' + id);
    }

    deleteUser(id) {
        return axios.delete(USER_API_BASE_URL + '/' + id);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
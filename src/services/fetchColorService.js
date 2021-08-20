import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return axiosWithAuth() 
    .get(`http://localhost:5000/api/colors`)
    .then(res=>{
        console.log(res.data)
        return (res.data);
    })
    .catch(err=>{
        console.log(err)
    })
}

export default fetchColorService;
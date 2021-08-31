import axios from "axios";
 const request=axios.create({
     baseURL:"https://youtube.googleapis.com/youtube/v3/",
     params:{
         key:"AIzaSyDo7pRU-mC6cQmVm2faAcZrWHIF6ctJ0I4",
     }
 })

 export default request;
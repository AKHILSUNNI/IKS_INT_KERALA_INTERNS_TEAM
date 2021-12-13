import React,{useState} from 'react'
import Axios from 'axios'

function State(validate) {
<br />
const [values,setValues] = useState({
    Name:"",
    email:"",
    mobile:"",
    desc:"",
   services:{
    Website_design:false,
    Content_creation:false,
    Ux_design:false,
    Stategy_and_consulting:false,
    User_research:false,
    Others:false
   }
})
const [errors,setErrors] =useState({})

const handleChange = (e)=> {
    const {name,type,value,checked} =e.target
    if(type === "checkbox"){
        setValues((e)=>{
            var Selectedsport =e.services;
            return Selectedsport[name]=checked;
        })
    }
    setValues({
    ...values,
    [name]:value
    })
}

const handleSubmit = e =>{
    e.preventDefault()
    setErrors(validate(values))
    var display =Object.keys(values.services).filter((x)=>values.services[x]);
    if (Object.keys(errors).length === 0) {
      const url ="https://iksinterns.herokuapp.com/api/post"
      const params = new URLSearchParams()
      params.append('Name' , values.Name)
      params.append('email' , values.email)
      params.append( 'mobile' , values.mobile)
      params.append('description' , values.desc)
      params.append('services' ,display)

      const config ={
          Headers:{
              'Content-Type':'application/x-www-form-unlencoded'
          }
      }

      Axios.post(url,params,config)
      .then(res =>{
          console.log(res.data)
      })
  } 
}




return {handleChange,values,handleSubmit,errors}

}

export default State

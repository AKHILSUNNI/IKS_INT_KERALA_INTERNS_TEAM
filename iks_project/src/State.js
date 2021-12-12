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
const [submitting,setSubmitting] =useState(false)

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
    setSubmitting(true)
    if (Object.keys(errors).length === 0 && submitting) {
      const url ="https://iksinterns.herokuapp.com/api/post"
      Axios.post(url,{
          Name : values.Name,
          email : values.email,
          mobile:values.mobile,
          desc:values.desc,
          services:display
      })
      .then(res =>{
          console.log(res.data)
      })
  } 
}




return {handleChange,values,handleSubmit,errors}

}

export default State

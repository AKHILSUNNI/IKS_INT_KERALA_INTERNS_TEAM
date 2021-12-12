export default function Validate(values){
    let errors = {};

    if (!values.Name.trim()) {
      errors.Name = 'Name required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    if(values.mobile.length !== 10){
        errors.mobile ="Enter a 10 digit proper mobile number"
    }
    else if(isNaN(values.mobile)){
        errors.mobile ="Enter a proper mobile number"
    }

    if(!values.desc){
      errors.desc ="type something in here";
    }
    return errors;
}
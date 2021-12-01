const validation =(values)=>{
    let errors ={};
    if(!values.firstName){
        errors.firstName="required"
    }
    if(!values.lastName){
        errors.lastName="required"
    }
    if(!values.email){
        errors.email="required";
    }
    if(!values.password){
        errors.password="required";
    }
    return errors;
}
export default validation;
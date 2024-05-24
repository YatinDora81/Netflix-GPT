export const checkValidation = (email , password)=>{
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const passwordValid =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)

    if(!emailValid) return "Email is not Valid"
    if(!passwordValid) return " Password is not Valid (1Uppercase,Lowercase,Number,Special Character, minLength : 8 required) "
    return null
}
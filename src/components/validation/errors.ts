import { UserData, UserLogin, ValidLogErrorsProps, ValidateErrorsProps } from "@/interface/CardData";


export default function validate (userData : UserData){
    const errors:ValidateErrorsProps= {}
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(userData.name === "") errors.name = "El nombre es requerido";
    if(userData.email === "") errors.email = "El email es requerido";
    if(!emailRegex.test(userData.email)) errors.email = "El email es incorrecto";
    if(userData.address === "") errors.address = "La direccions es requerida";
    if(userData.phone === "") errors.phone = "El telefono es requerido";
    if(userData.password === "")errors.password = " El password es requerido"
    if(!passRegex.test(userData.password)) errors.password = "Debe contener minimo 8 caracteres, una mayuscula, un numero y un caracter especial "


    return errors
}

export function loginValidation (userLogin:UserLogin){
    const errors:ValidLogErrorsProps= {}
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(userLogin.email === "") errors.email = "El email es requerido";
    if(!emailRegex.test(userLogin.email)) errors.email = "El email es incorrecto";
    if(userLogin.password === "")errors.password = " El password es requerido"
    if(!passRegex.test(userLogin.password)) errors.password = "Debe contener minimo 8 caracteres, una mayuscula, un numero y un caracter especial "


return errors
}
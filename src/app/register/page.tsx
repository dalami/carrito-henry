'use client';
import { useState } from "react"
import { fetchRegister } from "../fetching/fetch";
import { useRouter } from "next/navigation";
import {UserData, ValidateErrorsProps} from "../../interface/CardData"
import validate from "@/components/validation/errors";





const Register: React.FC = ()=> {

   const Router = useRouter()

    const [ register , setRegister] = useState<UserData>({
    name:"",
    email:"",
    address:"",
    phone:"",
    password:""
   })

   const [ errors , setErrors] = useState<ValidateErrorsProps>({
    name: "",
    email:"",
    address:"",
    phone:"",
    password:"",
   })

   const handleOnchange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setRegister({
        ...register,
        [e.target.id]:e.target.value 
      
     })
     setErrors(validate(
       register
     ))
 }

         const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement> )=> {
                e.preventDefault()
                
                try {
                    const response = await fetchRegister(register)
                    console.log("Usuario registrado correctamente", response);
                    alert("El registro ha sido exitoso")
                     Router.push('/login')
                    
                } catch (error) {
                    console.log("Error al registrarse" , error);
                 }
     }

    return (
        <>
         <div className="flex justify-center items-center h-screen  max-w-[80vw] m-auto box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);">
            <form onSubmit={handleOnSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Registro</h2>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        value={register.name}
                        type="text"
                        placeholder="Nombre"
                        onChange={handleOnchange}
                    />
                    {errors.name && <p className="text-red-500  text-center">{errors.name}</p>}
                   
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        value={register.email}
                        type="email"
                        placeholder="Email"
                        onChange={handleOnchange}
                    />
                    {errors.email && <p className="text-red-500 text-center">{errors.email}</p>}
                    
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Dirección
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="address"
                        value={register.address}
                        type="text"
                        placeholder="Dirección"
                        onChange={handleOnchange}
                    />
                    {errors.address && <p className="text-red-500 text-center">{errors.address}</p>}
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Teléfono
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        value={register.phone}
                        type="text"
                        placeholder="Teléfono"
                        onChange={handleOnchange}
                    />
                     {errors.phone && <p className="text-red-500 text-center">{errors.phone}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        value={register.password}
                        type="password"
                        placeholder="Password"
                        onChange={handleOnchange}
                    />
                     {errors.password && <p className="text-red-500 text-center">{errors.password}</p>}
                </div>
                
                
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                   
                    >
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
        </>
    )
}

export default Register
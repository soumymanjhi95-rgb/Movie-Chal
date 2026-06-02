import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  

    let navigate = useNavigate();
    let dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: '',
          password: '',
          staySignedIn: false,
        }
      });

          
      const onSubmit = (data) => {
        console.log('Login Data Submitted:', data);
        // Aap apna authentication API call yahan handle kar sakte hain
      };

      const onRegisterSubmit = (data)=>{
        console.log(data);
      }

      const onLoginSubmit = (data)=>{
        dispatch(loginEmployee(data))
      }


            return { 
        register,
        handleSubmit,
        errors,
        onRegisterSubmit,
        onLoginSubmit,
        navigate,
      }

}

export default useAuth
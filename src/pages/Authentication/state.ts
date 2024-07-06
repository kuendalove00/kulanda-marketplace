import React, {useEffect} from 'react';
import { service } from '../../services';
import { appMessages } from '../../utils/messages';
import { responseStatus } from '../../utils/responseStatus';
import { useNavigate, useLocation, redirect } from 'react-router-dom';
import { formDataInitialState } from './util';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const useSignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";
    const { register, handleSubmit, setError, resetField } = useForm();

    const handleSave = async (data: any) => {
        //if (!isValidForm(formData)) return;

        if(!data.password){
          toast.error(
              "Preencha todos os campos"
          );
          return;
      }
    
        if(data.password != data.confirmPassword ){
            toast.error(
                "Senhas são diferentes"
            );
            return;
        }



        let response = await service.auth.registar({
            name: data.fname + " " + data.lname,
            email: data.email,
            password: data.password,
            role: "OWNER"
        });

        if (response?.status === responseStatus.CREATED) {
    
          toast.success(appMessages.user.created);
          navigate("../");
    
          
        } else {
          toast.error(
            
              appMessages.user.failed
          );
        }
      };

      const handleLogin = async (data: any) => {
        //if (!isValidForm()) return;

        const processingToastId = toast.loading("Processando...");
        const response = await service.auth.login({
            email: data.email,
            password: data.password,
            })
        
         toast.dismiss(processingToastId);
        if (response?.status === responseStatus.CREATED) {
          data.email = '';
          data.password = '';
          
            localStorage.setItem("nome", response?.data.name);
            localStorage.setItem("role", response?.data.role);
            localStorage.setItem("email", response?.data.email);
            
            toast.success("Logado com sucesso");
            navigate(from, { replace: true });
          } else if (response?.status === responseStatus.FORBIDDEN) {
            //toast.error(appMessage.login.invalidCredentials);
            console.log(appMessages.login.invalidCredentials);
          } else {
            //toast.error(appMessage.login.loginError);
           toast.error("Email ou senha incorreta");
            console.log(appMessages.login.loginError);
          }
      };

      return {
        handleSave,
        handleLogin,
        handleSubmit,
        register,
      };
}


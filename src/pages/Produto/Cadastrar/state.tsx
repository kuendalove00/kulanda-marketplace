import React, {useEffect} from 'react';
import { service } from '../../../services';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const useSignIn = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, setError, resetField } = useForm();

    const handleSave = async (data: any) => {
        //if (!isValidForm(formData)) return;
        let response = await service.category.add({
            name: data.name,
        });

        if (response?.status === responseStatus.CREATED) {
    
          toast.success(appMessages.category.registerTitle);
    
          
        } else {
          toast.error(
            
              appMessages.category.registerError
          );
        }
      };

    

      return {
        handleSave,
        handleSubmit,
        register,
      };
}


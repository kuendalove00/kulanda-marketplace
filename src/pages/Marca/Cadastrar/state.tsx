import React, {useEffect} from 'react';
import { service } from '../../../services';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const useAddMarca = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, setError, resetField } = useForm();

    const handleSave = async (data: any) => {
        //if (!isValidForm(formData)) return;
        let response = await service.brand.add({
            name: data.name,
        });

        if (response?.status === responseStatus.CREATED) {
    
          toast.success(appMessages.brand.registerTitle);
    
          
        } else {
          toast.error(
              appMessages.brand.registerError
          );
        }
      };

    

      return {
        handleSave,
        handleSubmit,
        register,
      };
}


import React, {useEffect} from 'react';
import { service } from '../../../services';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { useNavigate, useLocation, json } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const useAddLoja = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, setError, resetField } = useForm();

    const handleSave = async (data: any) => {
        //if (!isValidForm(formData)) return;
        console.log(JSON.stringify(data));

        let response = await service.store.add({
          name: data.name,
          sid: data.sid,
          address: data.address,
          phoneNumber: data.phone,
          email: data.email,
          description: data.description,
          userID: 5,
          color: data.color,
          customization: ""
        });



        if (response?.status === responseStatus.CREATED) {
    
          toast.success(appMessages.store.registerTitle);
    
          
        } else {
          toast.error(
            
              appMessages.store.registerError
          );
        }
      };

    

      return {
        handleSave,
        handleSubmit,
        register,
      };
}


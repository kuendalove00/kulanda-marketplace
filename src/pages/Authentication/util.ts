export const formDataInitialState = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  export const getUserPreparedFormData = (data = {name:"", password:"", email:""}) => {
    const {
      name,
      password,
      email
    } = data;
  
    const response = {
      name: name,
      password: password,
      email: email
    };
  
    return response;
  };

  export const getPreparedFormData = (data = {name:"",email:"", password:""}) => {
    const {
      name,
      email,
      password
    } = data;
  
    const response = {
      name: name,
      email: email,
      password: password
    };
  
    return response;
  };
  
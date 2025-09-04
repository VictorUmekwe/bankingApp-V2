import React from 'react';
import Form, { type FormField } from '../components/Form'; 

const LoginPage: React.FC = () => {
  const loginFields: FormField[] = [
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
  ];

  const handleLoginSubmit = (data: Record<string, string>) => {
    console.log('Login Data:', data);
    
  };

  return (
    <div >
      <h2 className='text-center text-2xl font-bold'>Login</h2>
      <Form fields={loginFields} onSubmit={handleLoginSubmit} submitButtonText="Login" />
    </div>
  );
};

export default LoginPage;
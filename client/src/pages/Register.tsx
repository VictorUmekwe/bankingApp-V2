import React from 'react';
import Form,  {type FormField} from '../components/Form';

const RegisterPage: React.FC = () => {
  const registerFields: FormField[] = [
    {  name: 'username', label: 'Username', type: 'text', placeholder: 'Choose a username' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
    { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password' },
    { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
  ];

  const handleRegisterSubmit = (data: Record<string, string>) => {
    console.log('Register Data:', data);
    // Implement actual registration logic here (e.g., API call)
  };

  return (
    <div>
      <h2 className='text-center font-bold text-2xl'>Register</h2>
      <Form fields={registerFields} onSubmit={handleRegisterSubmit} submitButtonText="Register" />
    </div>
  );
};

export default RegisterPage;
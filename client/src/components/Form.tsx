import { useState } from "react";
import { Button } from "./ui/button";


export interface FormField{
    name: string;
    label: string;
    type: 'text' | 'email' | 'password';
    placeholder?: string;
}

interface FormProps {
    fields: FormField[];
    onSubmit: (formData: Record<string, string>) => void;
    submitButtonText?: string;
}


const Form: React.FC<FormProps> = ({fields, onSubmit, submitButtonText}) => {
    const [formData, setFormData] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 mt-20 bg-white shadow-md rounded-lg">
        {fields.map((field) => (
            <div key={field.name} className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor={field.name}>
                {field.label}
            </label>
            <input
                type={field.type}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
                value={formData[field.name] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
        ))}
        <Button
            type="submit"
            onClick={handleSubmit}
            className="w-full "
        >
            {submitButtonText || "Submit"}
        </Button>
    </form>
  )
}

export default Form
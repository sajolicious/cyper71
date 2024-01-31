import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  message: string;
  [key: string]: string;
}
interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      // Send the form data to the Vercel function
      await axios.post('/api/submitForm', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Trigger the parent component's success state
      onSuccess();
      console.log('Form Data Submitted', formData);
    } catch (error) {
      setError('Error submitting the form. Please try again later');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-1/2 flex flex-col items-center justify-center">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center justify-end">
        {['name', 'email', 'phone_number', 'message'].map((fieldName) => (
          <label key={fieldName} className="flex flex-col items-center">
            <input
              type={fieldName === 'email' ? 'email' : fieldName === 'phone_number' ? 'tel' : 'text'}
              name={fieldName}
              placeholder={`Your ${fieldName.replace('_', ' ')}`}
              value={formData[fieldName]}
              onChange={handleChange}
              required
              className="p-3 border border-cyan-900 w-72 md:w-64 lg:w-96 h-14 rounded-md"
            />
          </label>
        ))}
        <button type="submit" className="bg-black rounded-full text-white p-3 w-64" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
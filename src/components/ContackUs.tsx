import axios from 'axios'
import { useState, ChangeEvent, FormEvent } from 'react'
import { FaWhatsapp, FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface FormData {
  name: string
  email: string
  phone_number: string
  message: string
  [key: string]: string
}

const ContactUs: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault()

    try {
      setLoading(true)
      setError(null)

      await axios.post('http://127.0.0.1:8000/api/contactus/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setSuccess(true)
    } catch (error) {
      setError('Error submitting the form. Please try again later')
    } finally {
      setLoading(false)
    }
    console.log('Form Data Submitted', formData)
  }

  return (
    <>
      <div className="flex flex-col  w-full h-screen  items-center justify-center">
        <h1 className="text-6xl font-bold mb-10 text-black">Contact Us</h1>

        <div className="md:flex md:flex-row w-full">
          <div className="md:w-1/2  flex flex-col items-center justify-center">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && (
              <p className="text-green-500 font-semibold mb-4">
                Form submitted successfully. We'll get in touch with you soon!
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center justify-end">
              {['name', 'email', 'phone_number', 'message'].map((fieldName) => (
                <label key={fieldName} className="flex flex-col items-center ">
                  <input
                    type={fieldName === 'email' ? 'email' : fieldName === 'phone_number' ? 'tel' : 'text'}
                    name={fieldName}
                    placeholder={`Your ${fieldName.replace('_', ' ')}`}
                    value={formData[fieldName]}
                    onChange={handleChange}
                    required
                    className="p-3 border border-cyan-900 w-64 md:w-96 h-14  rounded-md "
                  />
                </label>
              ))}

              <button type="submit" className="bg-black rounded-full text-white  p-3 w-64" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>

          <div className="md:w-1/12 text-center text-black justify-center items-center m-2">
            <div className="h-1/2"></div>
            <div className="text-gray-500 mx-4">Or</div>
            <div className="border-t-2 border-gray-500 h-1/2 "></div>
          </div>

          <div className="md:w-1/2 text-black  flex flex-col items-center">
            {[
              { icon: FaWhatsapp, text: 'Whatsapp', link: 'https://whatsapp-link' },
              { icon: FaTelegram, text: 'Telegram', link: 'https://telegram-link' },
              { icon: FaGithub, text: 'Github', link: 'https://github-link' },
              { icon: FaLinkedin, text: 'LinkedIn', link: 'https://linkedin-link' },
            ].map(({ icon: Icon, text, link }) => (
              <div
                key={text}
                className="border flex flex-row items-center border-spacing-2 border-slate-400 w-64 md:w-96 h-14 p-4 m-2 rounded-md"
              >
                <Link to={link} target="_blank" rel="noopener noreferrer">
                  <Icon className="text-4xl hover:text-gray-400 cursor-pointer" />
                </Link>
                <span className="ml-2">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs

import React,{useState} from 'react'

const Mail = () => {
    const [formData, setFormData] = useState({
        to: '',
        subject: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle sending the email, e.g., using an API or performing some other action
        console.log(formData);
        // Reset the form after submission
        setFormData({
          to: '',
          subject: '',
          message: ''
        });
      };
    
      return (
        <div className="container mx-auto mt-5">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Email subject"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full h-32 focus:outline-none focus:border-blue-500"
                placeholder="Your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send</button>
          </form>
        </div>
      );
    
}

export default Mail
import React, {useState} from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        macAddress: '',
        username: '',
        password: ''
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
      };
    
      return (
        <div className="container mx-auto mt-5">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="macAddress" className="block text-gray-700 font-bold mb-2">Mac Address</label>
              <input
                type="text"
                id="macAddress"
                name="macAddress"
                value={formData.macAddress}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter MAC address"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter username"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border rounded-md py-2 px-3 w-full focus:outline-none focus:border-blue-500"
                placeholder="Enter password"
                required
              />
            </div>
            <button type="submit" className="bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
          </form>
        </div>
      );
}
 
export default Form
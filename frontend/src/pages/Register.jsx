import React, { useState } from 'react';
import './register.css';
import imageToBase64 from '../helpers/imageTobase64';
import domain from '../common'; 
import { toast } from 'react-toastify';
function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    profilePic: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64 = await imageToBase64(file);
      setFormData((prev) => ({ ...prev, profilePic: base64 }));
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      console.log("Submitting Form Data:", formData);
      const dataResponse = await fetch("http://localhost:8000/api/register" , {
        method: domain.signUp.method,  // Default to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      if (!dataResponse.ok) {
        throw new Error(`HTTP error! Status: ${dataResponse.status}`);
      }
  
      const data = await dataResponse.json();
      console.log("Parsed Server Response:", data);
  
      toast.success(data.message || "Login Successful!");
  
      // localStorage.setItem("token", data.token); // Uncomment if needed
      window.location.href = "/login";
  
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form. Check console for details.");
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="login-box">
        <p>Register</p>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input
              required
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <label>Password</label>
          </div>
          <div className="my-4">
            <label className="cursor-pointer text-xl text-white block mb-2">
              Upload Image
            </label>
            <input
              type="file"
              className="bg-gray-400 cursor-pointer p-2 rounded w-full"
              onChange={handleUploadPic}
            />
          </div>
          <button type="submit" className="block text-center p-2 bg-blue-500 text-white rounded w-full">
            Submit
          </button>
        </form>
        <p>
          Don't have an account? <a href="#" className="a2">Sign up!</a>
        </p>
      </div>
    </div>
  );
}

export default Register;

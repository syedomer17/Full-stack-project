import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Exapmle = () => {
    const lekejao = useNavigate()
  let [formData, setformData] = useState({
    fullName: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

   function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let apiUrl = "http://localhost:5000/api/public/register";
      let response = await axios.post(apiUrl, formData);
      console.log(response.data);
      lekejao("/lo")
    } catch (error) {
        alert(response.data)
      console.log(error.response.data);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center border-2 flex-col h-screen w-screen bg-gray-900 text-white"
      >
        <input
          className="border-2 p-1 mt-2 rounded"
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formData.fullName}
          placeholder="enter your name"
        />
        <input
          className="border-2 p-1 mt-2 rounded"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="enter email"
        />
        <input
          className="border-2 p-1 mt-2 rounded"
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          placeholder="entrer password"
        />
        <input
          className="border-2 p-1 mt-2 rounded"
          type="number"
          name="age"
          onChange={handleChange}
          value={formData.age}
          placeholder="enter age"
        />
        <input
          className="border-2 p-1 mt-2 rounded"
          type="number"
          name="phone"
          onChange={handleChange}
          value={formData.phone}
          placeholder="enter number"
        />

        <button
          type="submit"
          className="mt-3 border-2 p-2 rounded hover:scale-110"
        >
          Submit`
        </button>
      </form>
    </>
  );
};

export default Exapmle;

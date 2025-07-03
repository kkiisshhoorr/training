import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({name: "",email: ""});
    const handleChange = (e) => {
    const { name, value } = e.target;setFormData((prevData) => ({...prevData,[name]: value
    }));
  };
const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) {
      window.alert("Please enter a valid email address.");
      return;
    }
    console.log("Submitted Data:", formData);
    window.alert("Form submitted successfully!");
    
    fetch("url", {method: "POST"},Data);
  };
    return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}required/>
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}required/>
      </div>
<button type="submit">Submit</button>
    </form>
  );
}
export default SimpleForm;
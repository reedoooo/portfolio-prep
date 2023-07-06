import React, { useState } from "react";

const BasicInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(URL.createObjectURL(img));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, image, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={onImageChange} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BasicInfoForm;

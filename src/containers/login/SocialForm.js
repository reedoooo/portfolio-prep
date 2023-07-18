import React, { useState } from 'react';

const SocialForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [className, setClassName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, url, className });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        URL:
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </label>
      <label>
        Class:
        <input
          type="text"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SocialForm;

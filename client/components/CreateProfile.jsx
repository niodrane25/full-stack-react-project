import React, { useState } from 'react';


const CreateProfile = () => {
    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');
  
    const handleUserNameChange = (e) => {
      setUser_name(e.target.value);
    };
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleBioChange = (e) => {
      setBio(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Perform profile creation logic
      // You can use axios or fetch to send a POST request to the backend API to create the profile
      // Example:
      // axios.post('/api/profiles', { user_name, email, bio })
      //   .then(response => {
      //     // Handle success
      //   })
      //   .catch(error => {
      //     // Handle error
      //   });
  
      // Reset form fields
      setUser_name('');
      setEmail('');
      setBio('');
    };
  
    return (
      <div>
        <h2>Create Profile</h2>
        <form onSubmit={handleSubmit}>
          <label>
            User Name:
            <input type="text" value={user_name} onChange={handleUserNameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Bio:
            <textarea value={bio} onChange={handleBioChange}></textarea>
          </label>
          <button type="submit">Create</button>
        </form>
      </div>
    );
  };
  
  export default CreateProfile;
  
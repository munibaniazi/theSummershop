import React, {useState, useEffect} from 'react'
import "./hero.css"

const Hero = () => {
  const [imageIndex, setImageIndex]= useState(0);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const images= ['../images/bg1.png',
     '../images/bg2.png',
     '../images/bg3.png',
     '../images/bg4.png',
    ]

  useEffect(()=>{
  const intervalId= setInterval(()=>{
    setImageIndex((prevIndex)=>(prevIndex+1)% images.length)
  },3000)
  return()=> clearInterval(intervalId)
  },[images.length])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data Submitted:', formData);
    // Handle login logic here (e.g., API call)
  };

  return (
  
    <section className='hero'>
      <div className="image-slider">
      {images.map((image, index) => (
          <img 
              key={index} 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className={`slide ${imageIndex=== index? 'active': ''}`}
            />
      ))}
      </div>
      <div className="login-form">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username/Email:</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p className="create-profile-message">
          Don't have a profile? <a href="/create-profile">Create one here!</a>
        </p>
      </div>

    </section>
  )
}

export default Hero
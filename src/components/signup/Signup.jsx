import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css'
import { createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from "../../firebase-config";


export default function Signup() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí manejar los datos del formulario, enviarlos a un servidor.*
    console.log(formData)
  }

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, formData.email, formData.password)
    } catch (error) {
      console.log(error.message) 
    }
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) navigate('/')
  })  
  
  return (
    <section className="contact" id="/contact">
      <article className="contact__wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="contact__title">Signup</h1>
          <label className="form__label">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <i className="bx bxs-envelope" />
          </label>
          <label className="form__label">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <i className="bx bxs-lock-alt" />
          </label>
          <div className="form__remember-forgot">
            <label>
              <input type="checkbox" name="" id="" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button 
            className="form__btn" 
            type="submit"
            onClick={handleSignIn}
          >
            Signup
          </button>
          <div className="form__register-link">
            <p>
              you have an account?<Link to='/login'> Login</Link>
            </p>
          </div>
        </form>
      </article>
    </section>
  );
}



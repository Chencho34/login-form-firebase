import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase-config";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./login.css";

export default function Login () {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    // console.log(name , value)
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    // Aquí manejar los datos del formulario, enviarlos a un servidor.*
    console.log(formData)
  }

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, formData.email, formData.password)
    } catch (error) {
      if (error === 'auth/user-not-found') {
        // El usuario no está registrado
        // Aquí podrías mostrar un mensaje al usuario indicando que el correo no está registrado
        console.log('El correo electrónico no está registrado. Regístrate para iniciar sesión.');
      } else if (error === 'auth/wrong-password') {
        // Contraseña incorrecta
        // Aquí podrías mostrar un mensaje al usuario indicando que la contraseña es incorrecta
        console.log('Contraseña incorrecta. Inténtalo de nuevo.');
      } else {
        // Otro tipo de error, puedes mostrar un mensaje genérico de error o manejarlo según tu flujo
        console.log('Error al iniciar sesión:', error.message);
      }
    }
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if(currentUser) Navigate('/')
    })
    return () => unsubcribe();
  },[])

  // onAuthStateChanged(firebaseAuth, (currentUser) => {

  //   if(currentUser) Navigate('/')
  // })

  return (
    <section className="contact" id="/contact">
      <article className="contact__wrapper">
        <form onSubmit={handleSubmit}>
          <h1 className="contact__title">Login</h1>
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
            onClick={handleLogin} 
            type="submit"
          >
            Login
          </button>
          <div className="form__register-link">
            <p>
              Dont have an account?<Link to="/signup"> Signup</Link>
            </p>
          </div>
        </form>
      </article>
    </section>
  );
}

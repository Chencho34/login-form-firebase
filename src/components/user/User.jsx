import { onAuthStateChanged, signOut } from "firebase/auth"
import { firebaseAuth } from "../../firebase-config"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import './user.css'

export default function User() {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  console.log(user)

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if(currentUser) setUser(currentUser)
    else navigate('/login')
  })

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth)
      navigate('/signup')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <section className="user">
      <div className="user__wrapper">
        <h1>Welcome!!</h1>
        <article className="user__data">
          <i className='bx bxs-user'/>
          <p>{user?.email}</p>
        </article>
        <button className="user__btn" onClick={handleSignOut}>sign out</button>
      </div>
    </section>
  )
}

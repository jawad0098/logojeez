import { createContext, useContext, useState, useEffect } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth'
import { auth, db } from '../firebase/firebase'
import { doc, setDoc, getDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  async function signup(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    // Don't set displayName here, let the caller handle it
    return userCredential
  }

  async function updateUserProfile(user, { displayName }) {
    await updateProfile(user, { displayName })
    // Update Firestore user document with displayName if provided
    if (displayName) {
      await setDoc(doc(db, 'users', user.uid), {
        displayName,
        email: user.email,
        createdAt: new Date().toISOString(),
        orders: []
      })
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  async function fetchUserData(uid) {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid))
      if (userDoc.exists()) {
        setUserData(userDoc.data())
      } else {
        setUserData(null)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
      setUserData(null)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user)
      setLoading(false)
      
      if (user) {
        await fetchUserData(user.uid)
      } else {
        setUserData(null)
      }
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    userData,
    signup,
    login,
    logout,
    resetPassword,
    fetchUserData,
    updateUserProfile, // add this to context
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
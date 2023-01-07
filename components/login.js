import React from 'react'

const styles = {
    loginPage: `w-screen h-screen flex justify-center flex-col items-center bg-gray-200`,
    text: `text-4xl font-bold text-gray-700`
}

const Login = () => {
  return (
    <div className={styles.loginPage}>
        <p className={styles.text}> Login to Access </p>
        
    </div>
  )
}

export default Login
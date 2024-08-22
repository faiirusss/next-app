import Link from 'next/link'
import React from 'react'

const RegisterPage = () => {
  return (
    <div>
    <h1>RegisterPage</h1>
    <p>Sudah punya akun? Login <Link href={'/auth/login'}>disini</Link></p>
    </div>
  )
}

export default RegisterPage
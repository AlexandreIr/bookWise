"use client";

import AuthForm from '@/components/AuthForm'
import { signUpSchema } from '@/lib/validate'
import { University } from 'lucide-react'
import React from 'react'

const Page = () => {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
      defaultValues={{
        email: "",
        password: "",
        fullname:"",
        universityId:0,
        universityCard:"",
      }}
      onSubmit={() => {}}
    />
  )
}

export default Page
"use client";

import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/actions/auth';
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
        //@ts-ignore
        universityId:0,
        universityCard:"",
      }}
      //@ts-ignore
      onSubmit={signUp}
    />
  )
}

export default Page
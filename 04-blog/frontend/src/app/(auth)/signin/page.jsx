"use client"

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import RHFTextField from '@/ui/RHFTextField'
import SpinnerMini from '@/ui/SpinnerMini'
import Button from '@/ui/Button'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useAuth } from '@/context/AuthContext'

const schema = yup
  .object({
    email: yup.string().email('پست الکترونیکی نامعتبر است').required('پست الکترونیکی الزامی است'),
    password: yup.string().min(8, 'کلمه عبور بایستی حداقل ۸ کاراکتر داشته باشد').required('کلمه عبور الزامی است'),
  })
  .required()

function Signin() {
  const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onTouched'
  });
  const { signin } = useAuth()
  const onSubmit = async (data) => {
    await signin(data)
  }

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">ورود به حساب کاربری</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField label="پست الکترونیک" name="email" dir='ltr' isRequired register={register} errors={errors} />
        <RHFTextField label="کلمه عبور" type='password' name="password" dir='ltr' isRequired register={register} errors={errors} />
        <div className='mt-10'>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              ورود
            </Button>
          )}
        </div>
      </form>
      <Link href="/signup" className="text-secondary-500 mt-6 text-center">
        حساب کاربری ندارید؟ ثبت نام کنید
      </Link>
    </div>
  )
}

export default Signin
"use client"
import RHFTextField from '@/ui/RHFTextField';
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Link from 'next/link';
import Button from '@/ui/Button';
import SpinnerMini from '@/ui/SpinnerMini';
import { useAuth } from '@/context/AuthContext';
const schema = yup
    .object({
        name: yup.string().min(3, 'نام و نام خانوادگی نامعتبر است').max(30).required('نام و نام خانوادگی الزامی است'),
        email: yup.string().email('پست الکترونیکی نامعتبر است').required('پست الکترونیکی الزامی است'),
        password: yup.string().min(8, 'کلمه عبور بایستی حداقل ۸ کاراکتر داشته باشد').required('کلمه عبور الزامی است'),
    })
    .required()

function Signup() {
    // const [formData, setFormData] = useState({})
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });
    const { signup } = useAuth()
    const onSubmit = async (data) => {
        await signup(data)
    }

    return (
        <div>
            <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
                ثبت نام
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField label="نام و نام خانوادگی" name="name" isRequired register={register} errors={errors} />
                <RHFTextField label="پست الکترونیک" name="email" dir='ltr' isRequired register={register} errors={errors} />
                <RHFTextField label="کلمه عبور" type='password' name="password" dir='ltr' isRequired register={register} errors={errors} />
                <div className='mt-10'>
                    {isLoading ? (
                        <SpinnerMini />
                    ) : (
                        <Button type="submit" variant="primary" className="w-full">
                            تایید
                        </Button>
                    )}
                </div>
            </form>
            <Link href="/signin" className="text-secondary-500 mt-6 text-center">
                ورود
            </Link>
        </div>
    )
}

export default Signup
'use client'

import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { emailSchema } from "@/schemas/authSchema"

export default function Input() {
    const {
        control,
        register,
        getValues,
        handleSubmit,
        formState: {
            errors,
        },
        reset
    } = useForm(
        {
            defaultValues: {
                email: ''
            },
            mode: "onChange",
            resolver: yupResolver(emailSchema)
        }
        )
    
    const onHandlerSubmit = () => {
        console.log(getValues());
        reset()
    }
    
    return (
        <div className="flex flex-col xl:w-2/5">
            <form onSubmit={handleSubmit(onHandlerSubmit)}>   
                <div className="flex flex-1 justify-between items-center w-full p-4 rounded-lg bg-white xl:ml-20">
                    <input
                        type="text"
                        id="email"
                        autoComplete="off"
                        placeholder="Your email address"
                        className=" border-0 text-mainTextColor outline-0"
                        {...register('email')}
                    />
                    <svg className="cursor-pointer"  width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3945 14.2812C14.194 14.1094 14.0938 13.8802 14.0938 13.5938C14.0938 13.3073 14.194 13.0638 14.3945 12.8633L18.4766 8.78125H1.03125C0.401042 8.72396 0.0572917 8.36589 0 7.70703C0.0572917 7.10547 0.401042 6.77604 1.03125 6.71875H18.4766L14.3945 2.63672C13.9935 2.14974 13.9935 1.66276 14.3945 1.17578C14.8815 0.77474 15.3685 0.77474 15.8555 1.17578L21.6992 7.01953C22.1003 7.50651 22.1003 7.99349 21.6992 8.48047L15.8555 14.3242C15.3685 14.7253 14.8815 14.7109 14.3945 14.2812Z" fill="#0030AB" />
                    </svg>

                </div>

            </form>
            {errors?.email && <span className="block w-full xl:ml-16 text-[14px] text-center text-red-600 ">{errors?.email?.message || "Error!"}</span>}
        </div>
    )
}
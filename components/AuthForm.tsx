'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import CustomInput from './CustomInput'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm,Control } from "react-hook-form"
import { z } from "zod"
import { Button } from "./ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { authformSchema } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/actions/user.actions'



const AuthForm = ({type}: {type:string}) => {
    const router=useRouter();
    const [user,setUser]= useState(null)
    const [IsLoading, setIsLoading] = useState(false);
    const formSchema = authformSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: ''
        },
      })


      const onSubmit = async(data: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try{
            if(type === 'sign-up'){
                const newUser = await signUp(data);
                
                setUser(newUser);
            }
            
            if(type === "sign-in"){
                const response= await signIn({
                    email: data.email,
                    password: data.password,
                })
                if(response) router.push("/")
            
            }
        } catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }
      }


  return (
    <section className="auth-form">
        <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className=" cursor-pointer items-center gap-1 ">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon Logo"
            />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
            <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
                {user
                ? 'Link Account'
                : type === "sign-in"
                ? 'Sign In'
                : 'Sign Up'
                }
                <p className="text-16 font-normal text-gray-600">
                    {user
                    ?'Link your account to get started'
                    : 'Please enter your details'
                }
                </p>
            </h1>
            </div>
        </header>
        {user ? (
            <div className="flex flex-col gap-3">
                {/*PlaidLink*/}
            </div>
        ):(
                 <>
                <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(
                        onSubmit,
                        // (errors) => {
                        // console.log('Validation Errors:', errors); // Check for validation errors
                        // }
                    )}
                    className="space-y-8">

                    {type ==="sign-up" && (
                        <>
                        <div className="flex gap-4">
                        <CustomInput control={form.control}
                        name="firstName" label="First Name" placeholder="Enter your first name "/>
                        <CustomInput control={form.control}
                        name="lastName" label="Last Name" placeholder="Enter your last name "/>
                        </div>
                        <CustomInput control={form.control}
                        name="address" label="Address" placeholder="Enter your specific address"/>
                        <CustomInput control={form.control}
                        name="city" label="City" placeholder="Enter your City"/>
                        <div className="flex gap-4">    
                        <CustomInput control={form.control}
                        name="state" label="State" placeholder="Example: Bremen"/>
                        <CustomInput control={form.control}
                        name="postalCode" label="Postal Code" placeholder="Example: 23412"/>
                        </div>
                        <div className="flex gap-4">
                        <CustomInput control={form.control}
                        name="dateOfBirth" label="Date of Birth" placeholder="YYYY-MM-DD"/>
                        <CustomInput control={form.control}
                        name="taxId" label="Tax ID" placeholder="00 000 000 000"/>
                        </div>
                        </>
                    )}
                    
                    <CustomInput control={form.control}
                    name="email" label="Email" placeholder="Enter your Username"/>

                    <CustomInput control={form.control}
                    name="password" label="Password" placeholder="Enter your password"/>

                <div className="flex flex-col gap-4">

                <Button type="submit" 
                    disabled={IsLoading}className="form-btn">
                        {IsLoading ? (
                        <>
                        <Loader2 size={20}
                        className="animate-spin"/> &nbsp;
                        Loading...
                        </>
                    ):type === "sign-in"  
                    ? "Sign In":"Sign Up"}

                </Button>
                </div>
                </form>
                </Form>
                <footer className="flex justify-center gap-1">
                    <p className="text-14 font-normal text-gray-600">
                        {type === "sign-in"
                        ?"Don't have an account"
                        :"Already have an account"}
                    </p>
                    <Link href={type === "sign-in" ? "/sign-up": "/sign-in"} className="form-link">
                    {type === "sign-in" ? "Sign up": "Sign in"}
                    </Link>
                </footer>
                </>
            )
        }
    </section>
  )
}

export default AuthForm
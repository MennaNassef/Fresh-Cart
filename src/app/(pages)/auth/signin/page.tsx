"use client"

import {useState} from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { redirect } from "next/dist/server/api-utils"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import apiServices from "@/app/services/api"





export default function SignIn() {
    const form = useForm()
    const router= useRouter()
    const [isLoading,setIsLoading]=useState(false)
  async function onSubmit(data:any) {
    // toast("You submitted the following values:", {
    //   description: (
    //     <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
    //       <code>{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    //   position: "bottom-right",
    //   classNames: {
    //     content: "flex flex-col gap-2",
    //   },
    //   style: {
    //     "--border-radius": "calc(var(--radius)  + 4px)",
    //   } as React.CSSProperties,
    // })
    setIsLoading(true)
    // const UserInfo= await apiServices.signIn(data.email,data.password)
    // console.log(UserInfo)
    const response =await signIn("credentials",{
        email:data.email,
        password:data.password,
        redirect:false
    })
    console.log(response);
    if(response?.ok){
        router.push("/")
        // localStorage.setItem("token", response.);
    }
    else{
        // console.log(response?.error)
    }
    setIsLoading(false)
  }
     return (
    <Card className="w-full sm:max-w-md mx-auto my-10">
      <CardHeader>
        <CardTitle>Welcome Back!</CardTitle>
        <CardDescription>
          Sign In Using your credentials.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Your-email@example.com"
                    // autoComplete="off"
                    type="email"
                  />
                  
                </Field>
              )}
            />
            
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="************"
                    autoComplete="off"
                    type="password"
                  />
                  
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          
          <Button disabled={isLoading} type="submit" form="form-rhf-demo">
            {isLoading ? "Loading.....":"Submit"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )

}

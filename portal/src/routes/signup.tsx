import Titlebar from "../components/titlebar";
import { createForm } from "@felte/solid";
// @ts-ignore
import { Input } from "@hope-ui/solid";
import { z } from "zod";
import { reporter, ValidationMessage } from '@felte/reporter-solid';

export const signUpSchema = z.object({
    username: z.string().min(3, {
        message: "Username must be at least 3 characters long"
    }).max(25, {
        message: "Username cannot be longer than 25 characters"
    }),
    email: z.string().email(),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters long"
    })
})
export default function SignUp() {
    const { form, errors } = createForm<z.infer<typeof signUpSchema>>({
        onSubmit: async (values) => {
            if (errors()) {
                console.log(errors())
                return
            };
            const res = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }).then((res) => res.json());
            console.log(res)
        },
        extend: reporter
    })
    return (
        <div class="flex flex-col place-items-center place-content-center">
            <Titlebar>
                SIGN UP
            </Titlebar>
            {/* @ts-ignore */}
            <form class="flex gap-y-3 m-20 flex-col place-items-center w-max" use:form ref={form}>
                <div class="flex flex-col">
                Username
                <Input type="text" name="username"/>
                <ValidationMessage for="username">
                    {(messages) => <span>{JSON.stringify(messages)}</span>}
                </ValidationMessage>
                </div>
                <div class="flex flex-col">
                    Email
                    <Input type="text" name="email"/>
                </div>
                <div class="flex flex-col">
                    Password
                    <Input type="password" name="password" />
                </div>
                <button class="border border-black bg-black transition-all text-white 
                hover:text-black hover:bg-white rounded-md w-max px-5 py-2" 
                type="submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}
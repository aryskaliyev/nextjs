import * as z from "zod";

export const NewPasswordSchema = z.object({
    password: z.string().min(7, {
        message: "Minimum 7 characters required",
    }),
});

export const ResetSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
});

export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const RegisterSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }).refine((emailValue) => emailValue.endsWith("@gmail.com"), {
        message: "Please use Gmail",
    }),
    password: z.string().min(7, {
        message: "Minimum 7 characters required",
    }),
    sex: z.enum(["male", "female"], {
        required_error: "Must be selected",
    }),
    school: z.string({
        required_error: "Select your school",
    }),
    location: z.string({
        required_error: "Select your city",
    }),
});

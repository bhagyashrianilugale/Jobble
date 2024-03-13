import * as Yup from "yup";

export const LoginSchema = Yup.object({
    usename: Yup.string().min(2).max(25).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"),null]),
    usertype: Yup.string().required(),
});


import * as yup from "yup"

const formSchema = yup.object().shape[{
    username: yup
        .string()
        .trim()
        .required("username is required!")
        .min(3, "username must be longer than 3 charecters"),
    email: yup
        .string()
        .email("Must be a valid email!")
        .required("email is required!"),
    password: yup
        .string()
        .required("password is required!")
        .min(6, "password must be longer than 3 charecters"),
    tos: yup
        .boolean()
        .oneOf([true], "you must agree to Terms of Service"),
        

}]

export default formSchema
import { FunctionComponent, useState } from "react";
import Email from "../components/Email";
import Password from "../components/Password";
import { Button, Link } from "@mui/material";
import { Form, Formik, FormikErrors } from "formik";


interface LoginProps {

}

interface FormValues {
    email: string,
    pass: string
}

const styles = {
    width: '50%',
    margin: 'auto',
    lineHeight: 5
}

export const Login: FunctionComponent<LoginProps> = () => {
    const [email, setEmail] = useState<string>("")
    const [emailError, setEmailError] = useState<boolean>(false)
    const [pass, setPass] = useState<string>("")
    const [passError, setPassError] = useState<boolean>(false)
    const initialValues: FormValues = { email: email, pass: pass };

    const validate = () => {
        if (!email) {
            setEmailError(true)   
        }
        if (!pass) {
            setPassError(true )
        }
        return !email || !pass  || passError || emailError
    }

    return (<div>
        <h1>Login</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={() => {
                if (passError || emailError) {
                    console.log('Errors Found')
                }
                else {
                    console.log('called on submit')
                    console.log('email', email)
                    console.log('pass', pass)
                }
            }}
            validate={() => {
                let errors: FormikErrors<FormValues> = {};
                if (!email) {
                    setEmailError(true)   
                    errors.email = `error`
                } else {
                    errors.email = undefined
                }
                if (!pass) {
                    setPassError(true )
                    errors.pass = `error`
                } else {
                    errors.pass = undefined
                }
                console.log(emailError, passError, emailError || passError)
                return emailError || passError ? errors : {}
            }}
        >

            <Form style={styles}>
                    <Email useEmailState={[email, setEmail]} useErrorState={[emailError, setEmailError]} errorText="Email galat hai"/>
                    <Password usePassState={[pass, setPass]} useErrorState={[passError, setPassError]} errorText="Password thk nai hai"/>
                    <Button type="submit" variant="contained" color="inherit" >
                        Submit
                    </Button>
            </Form>
        </Formik>

        goto <Link href='/'>Home</Link>

    </div>)

}
import { TextField } from "@mui/material"
import { FunctionComponent, useEffect, useState } from "react"

interface EmailProps {
    errorText?: string,
    validation?: () => boolean,
    useEmailState: [string, React.Dispatch<React.SetStateAction<string>>]
    useErrorState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
    regExp?: RegExp
}


const Email: FunctionComponent<EmailProps> = ({errorText, validation, useEmailState, useErrorState, regExp}) =>  {
    const regexp = regExp ?? new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const [value, setValue] = useEmailState
    const [helperTextState, setHelperText] = useState<string>()
    const [isError, setError] = useErrorState

    useEffect(()=> {
        if(isError) handleValidation()
    }, [isError])

    const handleChange = (value: string) => {
        handleValidation()
        setValue(value)        
    }

    const _validation = () => {
        const def = () => {
            let isValid = false
            if(value){
                isValid = regexp.test(value)
            }
            return isValid
        }
        if(validation) return validation()
        else return def()
    }
    const handleValidation = () => {
        const isValid = _validation()
        if(isValid){
            setHelperText('')
            setError(false)
        }
        else {
            setHelperText(errorText ?? "Invalid Email")
            setError(true)
        }
    }
    const handleOnBlur = () => {
        handleValidation()
    }

    return (<TextField 
        fullWidth
    error={isError}
    id="Email"
    variant="standard"
    label = 'Email'
    type="text"
    helperText={helperTextState}
    onChange={(e)=> handleChange(e.target.value)}
    onBlur={(e) => {
        e.preventDefault()
        handleOnBlur()
    }}
    value={value}
    />)
}

export default Email
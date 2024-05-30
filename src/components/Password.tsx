import { VisibilityOff, Visibility } from "@mui/icons-material";
import { InputAdornment, IconButton, TextField } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";



const styles = {
    width: '30%',
    margin: 'auto'
}

interface PasswordProps{
    errorText?: string,
    validation?: () => boolean,
    usePassState: [string, React.Dispatch<React.SetStateAction<string>>],
    useErrorState: [boolean, React.Dispatch<React.SetStateAction<boolean>>],
    regExp?: RegExp
}

const Password: FunctionComponent<PasswordProps> = ({errorText, validation, usePassState, useErrorState, regExp}) => {
    const regexp = regExp ?? new RegExp("^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$")
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = usePassState
    const [helperTextState, setHelperText] = useState<string>()
    const [isError, setError] = useErrorState
    
    useEffect(()=> {
        if(isError) handleValidation()
    }, [isError])

     const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };
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
        }else {
            setHelperText(errorText ?? "Password must contain: Minimum eight characters, at least one letter, one number and one special character")
            setError(true)
        }
    }
    const handleOnBlur = () => {
        handleValidation()
    }
    return (
            <TextField 
                error={isError}
                id="Password"
                variant="standard"
                label = 'Password'
                type={showPassword ? 'text' : 'password'}
                onChange={(e)=> handleChange(e.target.value)}
                onBlur={(e)=> {
                    e.preventDefault()
                    handleOnBlur()
                }}
                fullWidth
                helperText={helperTextState}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
    )
}

export default Password

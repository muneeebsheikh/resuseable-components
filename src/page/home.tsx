import { Padding } from "@mui/icons-material";
import { Link } from "@mui/material";
import { FunctionComponent } from "react";


interface HomeProps {

}

const styles = {
    margin: 'auto',
    marginTop: '10%', 
    fontSize: 'x-large'
}

export const Home: FunctionComponent<HomeProps> = () => {
    return (
        <div style={styles}>
            goto <Link href='/login'>Login</Link>
        </div>
    )
}
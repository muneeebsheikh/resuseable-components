import { Link, TextField } from "@mui/material"
import { FunctionComponent, useState } from "react"
import './calendly.css'
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly"


const regex = new RegExp('https:\/\/calendly\.com\/[a-zA-Z0-9_-]+')

export const Calendly: FunctionComponent = () => {
    const [calendlyURL, setCalendlyURL] = useState("")
    // const calendlyURL = document.getElementById('calendly-url')!.innerHTML //"https://calendly.com/m-muneeb-mythod"
    return (
        <div className="container" style={{
            marginTop: '20%'
        }}>
            <TextField placeholder="Enter calendly url here" id="calendly-url" value={calendlyURL} onChange={(e)=> setCalendlyURL(e.target.value)}/>
        {
        regex.test(calendlyURL) &&
            <>
            <br/>
            <PopupButton
                url={calendlyURL}
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementById("root")!}
                text="Click here to schedule!"
                className="Popupbtn"
            />
            </>
        }
            <br/>
              goto <Link href='/'>Home</Link>
        </div>
    )
}

export const Calendly_popup_widget: FunctionComponent = () => {
    return (
        <div className="container"> 
           <PopupWidget
                url="https://calendly.com/m-muneeb-mythod"
                /*
                * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                */
                rootElement={document.getElementById("root")!}
                text="Click here to schedule!"
                textColor="#ffffff"
                color="#00a2ff"
                prefill={{
                    email: 'dummyemail@domain.com',
                    name: 'Dummy Name'
                }
                }
            /> 
             goto <Link href='/'>Home</Link>
        </div>
    )
}


export const Calendly_inline_widget: FunctionComponent = () => {
    const [calendlyURL, _setCalendlyURL] = useState("https://calendly.com/m-muneeb-mythod")
    return (
        <div className="container">
              <InlineWidget url={calendlyURL} />   
              goto <Link href='/'>Home</Link>
        </div>
    )
}


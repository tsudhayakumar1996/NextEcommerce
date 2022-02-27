import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"

export default function Footer () {
    return (
        <div className="row no-margin footerAlign_center" style={{padding:20}}>
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <ul className={'footerAbout no-margin'}>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Address <label> : TVM</label></li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-md-5">
                <ul className={'footerSocial no-margin'}>
                    <li><FaInstagram />  Instagram</li>
                    <li><FaTwitter />  Twitter</li>
                    <li><FaFacebookF/>  Facebook</li>                    
                </ul>
            </div>
            <div className="col-md-1"></div>
        </div>
    )
}
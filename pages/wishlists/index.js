import NavBar from "../../commonComponents/navBar"
import { FaRegHeart } from "react-icons/fa"

export default function Wishlists () {
    return(
        <>
            <NavBar />
            <div className="home_Topspace wishlistBox">
                <h4 className="no-margin wishTitle">My Wishlists</h4>
                <div className="wishListfa_Heart">
                    <FaRegHeart style={{fontSize:22,margin:10}}/>
                </div>
            </div>
        </>
    )
}       
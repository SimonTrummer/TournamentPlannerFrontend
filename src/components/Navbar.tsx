import './Navbar.css'
import {CgProfile} from "react-icons/cg";

const Navbar = ():JSX.Element => {
  return (
      <div className="navbar">
            <div className="tournamentName">
                @SchoolVolley 2023
            </div>
            <div className="profile">
                <div className="profileName">
                    Simon Trummer
                </div>
                <div className="profilePicture">
                    <CgProfile></CgProfile>
                </div>
            </div>
      </div>
  )
}
export default Navbar
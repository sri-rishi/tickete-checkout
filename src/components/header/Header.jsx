import {IoIosArrowRoundBack, IoMdLock, HiOutlineQuestionMarkCircle, LOGO} from "../../assets";
import {Button} from "../index";


const Header = () => {
    return (
        <header>
            <nav className="nav"> 
                <Button className={"nav-btn nav-arrow-btn"} icon={<IoIosArrowRoundBack />} />
                <div className="logo-box">
                    <img src={LOGO} alt="logo" />
                </div>
                <div className="sub-title">
                    <IoMdLock className="lock-icon"/>
                    <p>Checkout</p>
                </div>
                <div className="nav-help-section">
                    <Button className={"nav-btn btn-border-none-bg-trans"}  icon={<HiOutlineQuestionMarkCircle />}/>
                    <p className="help-text">Help</p>
                </div>
            </nav>
            <div className="header-timer">
                <p>Holding your tickets for 30:00 </p>
            </div>
        </header>
    )
}

export default Header;
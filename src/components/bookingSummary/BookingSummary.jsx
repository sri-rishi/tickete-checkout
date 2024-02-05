import { useMediaQuery } from "react-responsive";
import {Button} from "../index";
import { 
    BOOKING_COVER_SM, 
    BOOKING_COVER_LG , 
    PiTrophyFill, 
    FaChevronLeft,
    FaChevronRight,
    RATING_STAR,
    PiTicketFill,
    BsCalendar2Fill,
    IoTime,
    MdPeopleAlt,
    BsPlus,
    PiPiggyBankFill, 
    BsExclamationCircle,
    IoMdLock,
    PAGINATION_INDICATOR
} from "../../assets"

const BookingSummary = () => {
    const isScreenLarge = useMediaQuery({minWidth: 600});
    return(
        <div className="booking-summary-box">
            <div className="booking-summary">
                <div className="booking-cover">
                    <div>
                        <img src={isScreenLarge ? BOOKING_COVER_LG : BOOKING_COVER_SM} alt="" />
                    </div>
                    <div className="badge">
                        <PiTrophyFill  className="trophy-icon"/>
                        <p>Bestseller</p>
                    </div>
                    <div className="booking-arrow-btn-box">
                        <Button className={"booking-arrow-btn"} icon={<FaChevronLeft />}/>
                        <Button className={"booking-arrow-btn"} icon={<FaChevronRight />}/>
                    </div>
                    <div className="pagination-box">
                        <img src={PAGINATION_INDICATOR} alt="Pagination Indicator" />
                    </div>
                </div>
                <div className="booking-summary-details">
                    <div className="rating-box-header">
                        <div className="rating-box">
                            <div className="rating-star">
                                <img src={RATING_STAR} alt="ranting star" />
                            </div>
                            <p className="rating-value">4.9<span className="text-gray-secondary">(4.5k)</span></p>
                            <div className="text-gray-secondary">•</div>
                            <p className="text-gray-secondary">&lt;category&gt;</p>
                        </div>
                        <p className="booking-title">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
                    </div>
                    <div className="booking-details-box">
                        <div className="booking-details">
                            <PiTicketFill className="booking-details-icons"/>
                            <p>&lt;ticket type - variant&gt;</p>
                        </div>
                        <div className="booking-details">
                            <BsCalendar2Fill className="booking-details-icons"/>
                            <div className="booking-details-title">
                                <p>
                                    &lt;day&gt;, &lt;month&gt;&lt;date&gt;
                                </p>
                                <p className="text-gray-secondary booking-details-sub-title">
                                    Duration&lt;duration&gt;
                                </p>
                            </div>
                        </div>
                        <div className="booking-details">
                            <IoTime className="booking-details-icons"/>
                            <div className="booking-details-title">
                                <p>
                                    &lt;time&gt;
                                </p>
                                <p className="text-gray-secondary booking-details-sub-title">
                                    Operating hours: &lt;time&gt; to &lt;time&gt;
                                </p>
                            </div>
                        </div>
                        <div className="booking-details">
                            <MdPeopleAlt className="booking-details-icons"/>
                            <p>5 guests</p>
                        </div>
                    </div>
                </div>
                <div className="hr-line"></div>
                <div className="view-summary">
                    <p>View payment summary</p>
                    <Button className={"btn-border-none-bg-trans plus-icon"} icon={<BsPlus />}/>
                </div>
            </div>
            <div className="booking-confirmation">
                <div className="booking-ammount-section">
                    <div className="booking-ammount-box">
                        <div className="booking-ammount">
                            <p>Total payable</p>
                            <p>$XXX</p> 
                        </div>
                        <div className="saved-price">
                            <PiPiggyBankFill /> 
                            <p>You saved &lt;price&gt;</p>
                        </div>
                    </div>
                    <div className="charged-unit">
                        <p>You will be charged in AED</p> 
                        <BsExclamationCircle />
                    </div>
                </div>

                <div className="pay-btn-box">
                    <p className="confirmation-text">
                        By clicking “confirm & pay”, you agree to 
                        <span className="indigo-color-text">Tickete’s general terms and conditions and cancellation policy.</span>
                    </p>
                    <Button className={"pay-btn"} icon={<IoMdLock />} text={"Confirm & pay"}/>
                </div>
            </div>
            
        </div>
    )
} 

export default BookingSummary;
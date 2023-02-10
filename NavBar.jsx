import React from "react";
import "./navbarStyle.css"
import { CiSearch } from "react-icons/ci"
import { IoMdCall } from "react-icons/io"
export default function NavBar() {
    return (
        <header className="header">
            <div className="main-nav">
                <div className="upperBody">
                    <div className="up-nav-left-content">
                        <img src="https://static.uacdn.net/production/_next/static/images/logoCups.svg?q=75&fm=webp&w=32" alt="Unacadmey-Logo" width="20px"/>
                        <button style={{backgroundColor:"white",fontSize:"12px",
                    marginLeft:"-5px",fontWeight:"600",border:"none",color:"#666"}}>
                            IIT JEE  <span ><i class="arrow down"></i></span>
                        </button>
                    </div>
                    <div className="up-nav-right-content">
                        <div className="search-nav">
                            <CiSearch className="search-icon" />
                            <input type="text" placeholder="Search courses, test series and educators" />
                        </div>
                        <div className="nav-contact">
                            <IoMdCall className="nav-phone-icon" />
                            <div className="nav-contact-num">
                                <div style={{ fontSize: "10px" }}>Talk to our experts</div>
                                <div style={{ fontSize: "11px", fontWeight: "bold",color:"#666" }}>+91-8585858585</div>
                            </div>
                        </div>
                            <img src="https://static.uacdn.net/production/_next/static/images/newGoalHeaderGift.svg?q=75&w=1920" alt="gift-img" />

                        <button className="nav-btn" style={{backgroundColor:"#fff"}}>Log in</button>
                        <button className="nav-btn" style={{backgroundColor:"#3c4852",color:"white"}}>Join for free</button>
                    </div>
                </div>
                <div className="lowerBody">
                    <div className="lowerBodyChild">
                    <a href="#">Get started</a>
                    <a href="#">Educators</a>
                    <a href="#">Batch</a>
                    <a href="#">Store</a>
                    <a href="#">Subscription plan</a>
                    <a href="#">Success stories</a>
                    <a href="#">About exam</a>
                    </div>
                </div>
            </div>
        </header >
    )
}
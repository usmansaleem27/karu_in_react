import React from 'react'
import Hero from './Images/Hero.jpg'
import Shadow from './Images/Shadow.png'
import { BsList } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";   
import { BsFillMoonStarsFill } from "react-icons/bs";   
import ClickAudio from "./Audios/1.mp3"

const Header = () => {
    function navbarToggle() {
        document.getElementById("myDropdown").classList.toggle("show");
        var audio = document.getElementById("audio");
         audio.play();
      }

    function modeChange(){
    document.body.classList.toggle("dark-theme");
  }


  return (

    <div>
    <audio id="audio" src={ClickAudio}></audio>
         <header>
        <section id="topbar">
            <div className="topbar_nav">
            <div className="container-fluid g-0">
                <div className="row g-0 ps-lg-3 pt-lg-2 ps-md-3 pe-md-3 p-1 pt-md-3">
                    <div className="col-6">
                        <h2 className="ps-lg-3 mt-lg-2 pt-2">KURA</h2>
                    </div>
                    <div className="col-6">
                        <div className="d-flex justify-content-end align-items-center">
                            <div className="">
                                <div className="dropdown-content" id="myDropdown">
                                    <div className="d-flex animate__animated animate__backInLeft">
                                        <p className="mb-0 pe-3 active">Home</p>
                                        <p className="mb-0 pe-3">Portfolio</p>
                                        <p className="mb-0 pe-3">Skills</p>
                                        <p className="mb-0 pe-3">Timeline</p>
                                        <p className="mb-0 pe-3">Price</p>
                                        <p className="mb-0 pe-3">News</p>
                                        <p className="mb-0 pe-3">Contact</p>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end align-items-center h-100">
                                <span onClick={navbarToggle} className="toggle_button me-lg-4 ps-3 pe-3 mt-2 pt-2 pb-3"><i id="nav_toggle" className="fs-4"><BsList/></i></span>
                                <span className="me-3"><i id="icon" onClick={modeChange} className="fs-4"><BsFillMoonStarsFill/></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            <div className="home_page_content_display pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12 order-lg-1 order-md-1 order-sm-1 order-2">
                        <div className="home_content_p pt-lg-3 pt-md-4 pt-4 pb-lg-3">
                            <p className="bernard_smith pt-lg-5 pt-md-2 pt-3">Bernard Smith</p>
                            <h1 className="pt-3 pb-2">CREATIVE DESIGNER BASED IN JAPAN</h1>
                        </div>
                        <div className="home_content_a pt-md-2 pb-md-2 pb-2">
                            <p className="mb-1">
                                <a href="#">Web Development <i className="bi bi-arrow-right ps-2"></i></a>
                            </p>
                            <p className="mb-1">
                                <a href="#">Digital Marketing<i className="bi bi-arrow-right ps-2"></i></a>
                            </p>
                            <p className="mb-1"><a href="#">Graphic Design<i className="bi bi-arrow-right ps-2"></i></a>
                            </p>
                        </div>
                        <div className="pt-lg-5 pt-md-4 pb-md-3 pb-lg-5 pb-3">
                            <div className="home_content_customers d-flex align-items-center">
                                <h2 className="">10+</h2>
                                <p className="ps-4">Years of <br></br> Experience</p>
                                <h2 className="ps-4">3K+</h2>
                                <p className="ps-3 pt-2">Happy Customers</p>
                            </div>
                        </div>
                        <div className="pt-lg-0 pt-md-4 pb-lg-5">
                            <div
                                className="home_down_arrow animate__animated animate__bounce animate__infinite	infinite animate__slow 3s d-none d-lg-block d-md-block">
                                <i className="bi bi-arrow-down"><BsArrowDown/></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-2 order-md-2 order-sm-2 order-1">
                        <div
                            className="d-flex align-items-center h-100 justify-content-center home_right_side pt-lg-0 pt-3 pb-lg-0 pb-3">
                            <div className="home_right_img">
                                <div className="d-flex justify-content-center">
                                    <img src={Hero} className="img-fluid rounded-3" alt=""></img>
                                </div>
                                <div className="home_shadow_img d-none d-lg-block d-md-block d-sm-block">
                                    <img src={Shadow} className="img-fluid rounded-3" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </section>
    </header>
    </div>
  )
}

export default Header
import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";


const Footer = () => {
  return (
    <div>
<div id="footer_form">
    <div className="container-fluid g-0">
        <div className="row g-0">
            <div className="col-12">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="pb-3 mb-4">
                                <p className="contact_us pt-5">Contact</p>
                                <h3 className="get_in_touch pb-lg-5 pt-lg-1 pb-3">GET IN TOUCH</h3>
                                <p className="fill_form">Please fill out the form on this section to contact with
                                    me. <br></br>
                                    Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                                    <div className="footer_icons_details">
                                    <p className="pt-5"><i className="bi bi-geo-alt-fill pe-2"></i> 44 Place, Tokyo, Japan
                                    </p>
                                <p><i className="bi bi-telephone-fill pe-2"></i> +77 033 442 55 57</p>
                                <p><i className="bi bi-envelope pe-2"></i> dodo@gmail.com</p>
                                <p><i className="bi bi-globe pe-2"></i> www.domain.com</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="pt-lg-5 pt-md-2 pb-lg-0 pb-4 ps-lg-5 pe-lg-5">

                                <div className="form_footer_inputs">
                                <div className="pt-lg-5">
                                    <input type="text" placeholder="Name"></input>
                                </div>
                                <div className="">
                                    <input type="text" placeholder="Email"></input>
                                </div>
                                <div className="">
                                    <input type="text" placeholder="Message"></input>
                                </div>
                                <div className="pt-3">
                                    <button className="submit_button">Submit Now <i
                                            className="bi bi-arrow-right-short"></i></button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    <div classNameName="karu_footer">
    <div className="container-fluid g-0">
        <div className="row g-0">
            <div className="col-12">
                <div className="p-4">
                    <div className="container g-0">
                        <div className="row g-0">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="copyright_reserves">
                                    <h6 className="ps-1 pt-1 mb-0 pb-0 fs-5">Copyright &copy; 2021. All rights reserved.</h6>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="my_icons">
                                    <i className="bi bi-facebook pe-3 fs-5"><BsFacebook/></i>
                                    <i className="bi bi-meta pe-3 fs-5"><BsTwitter/></i>
                                    <i className="bi bi-messenger pe-3 fs-5"><BsMessenger/></i>
                                    <i className="bi bi-whatsapp pe-3 fs-5"><BsWhatsapp/></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer

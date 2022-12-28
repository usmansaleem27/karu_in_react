import React from 'react'
import { BsCurrencyDollar } from "react-icons/bs";


const Pricing = () => {
  return (
    <div>
      <section id="pricing">
        <div className="container-fluid g-0">
            <div className="row g-0">
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="">
                                    <div className="pe-lg-5 pt-lg-4">
                                        <p className="pricing_font">Pricing</p>
                                        <h3 className="services_font pb-2">SERVICE PRICES</h3>
                                        <p className="servicing_color pe-lg-3">For more than 20 years our experts have been
                                            accomplishing enough with modern Web Development, new generation web and app
                                            programming language.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-4">
                                    <div className="pricing_cards ps-lg-4 pe-lg-4">
                                        <div
                                            className="rect d-flex justify-content-between h-100 align-items-center pt-4 pb-4 mt-3 mb-4 rounded-2">
                                            <div className="d-flex ps-3 align-items-center">
                                                <i className="bi bi-wordpress fs-3 pricing_icons_colors"></i>
                                                <p className="mb-0 ps-3 pricing_type_colors">WordPress Development</p>
                                            </div>
                                            <p className="mb-2 pe-3 pricing_type_colors mt-2"><BsCurrencyDollar/> 500</p>
                                        </div>
                                        <div
                                            className="rect d-flex justify-content-between h-100 align-items-center pt-4 pb-4 mt-3 mb-4 rounded-2">
                                            <div className="d-flex ps-3 align-items-center">
                                                <i className="bi bi-file-earmark-pdf-fill fs-3 pricing_icons_colors"></i>
                                                <p className="mb-0 ps-3 pricing_type_colors">HTML Development</p>
                                            </div>
                                            <p className="mb-2 pe-3 pricing_type_colors mt-2"><BsCurrencyDollar/> 500</p>

                                        </div>
                                        <div
                                            className="rect d-flex justify-content-between h-100 align-items-center pt-4 pb-4 mt-3 mb-4 rounded-2">
                                            <div className="d-flex ps-3 align-items-center">
                                                <i className="bi bi-card-text fs-3 pricing_icons_colors"></i>
                                                <p className="mb-0 ps-3 pricing_type_colors">Content Writing</p>
                                            </div>
                                            <p className="mb-2 pe-3 pricing_type_colors mt-2"><BsCurrencyDollar/> 500</p>

                                        </div>
                                        <div
                                            className="rect d-flex justify-content-between h-100 align-items-center pt-4 pb-4 mt-3 mb-4 rounded-2">
                                            <div className="d-flex ps-3 align-items-center">
                                                <i className="bi bi-slack fs-3 pricing_icons_colors"></i>
                                                <p className="mb-0 ps-3 pricing_type_colors">Brand Identity</p>
                                            </div>
                                            <p className="mb-2 pe-3 pricing_type_colors mt-2"><BsCurrencyDollar/> 500</p>

                                        </div>
                                        <div
                                            className="rect d-flex justify-content-between h-100 align-items-center pt-4 pb-4 mt-3 mb-4 rounded-2">
                                            <div className="d-flex ps-3 align-items-center">
                                                <i className="bi bi-badge-hd-fill fs-3 pricing_icons_colors"></i>
                                                <p className="mb-0 ps-3 pricing_type_colors">PSD Design</p>
                                            </div>
                                            <p className="mb-2 pe-3 pricing_type_colors mt-2"><BsCurrencyDollar/> 500</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Pricing

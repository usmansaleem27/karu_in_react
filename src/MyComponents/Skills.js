import React from 'react'
import BoyImage from './Images/boy_skills.jpg'

const Skills = () => {
  return (
    <div>
       <section id="skills">
    <div className="">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="d-flex justify-content-center align-items-center h-100">
                                    <div className="pt-lg-5 pt-5 ps-lg-5 pe-lg-5 pb-lg-5 p-3">
                                        <div className="">
                                            <p className="skills_heading">Skills</p>
                                            <h3 className="programming_heading text_color pb-lg-5 pb-3">Programming Skills</h3>
                                            <p className="skills_paragraph text_color pb-3">For more than 20 years our experts have been accomplishing enough with modern Web Development, new generation web and app programming language.</p>
                                        </div>
                                        <div className="">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-1 text_color">HTML & CSS</p>
                                                <p className="mb-2 text_color">95%</p>
                                            </div>
                                            <div className="progress bars_height mb-2">
                                                <div className="progress-bar html_bars" role="progressbar" aria-label="Warning example" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-1 text_color">Javascript</p>
                                                <p className="mb-2 text_color">80%</p>
                                            </div>
                                            <div className="progress bars_height mb-2">
                                                <div className="progress-bar" role="progressbar" aria-label="Warning example" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                        </div>
                                        <div className="">
                                            <div className="d-flex justify-content-between">
                                                <p className="mb-1 text_color">WordPress</p>
                                                <p className="mb-2 text_color">90%</p>
                                            </div>
                                            <div className="progress bars_height">
                                                <div className="progress-bar html_bars" role="progressbar" aria-label="Warning example" style={{width: "90%"}}aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="pt-5 pb-5">
                                    <div className="skills_img d-flex justify-content-end d-none d-lg-block d-md-block">
                                        <img src={BoyImage} width="100%" className="img-fluid" alt=""></img>
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

export default Skills

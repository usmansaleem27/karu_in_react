import React from 'react'
import CarouselA from './Images/CardImage.jpg';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";



const Carousel = () => {
  return (
    <div>
       <div className="cards_carousel">
    <div className="mt-lg-5 pt-lg-5 mt-3 pt-3 pb-lg-5 mb-lg-5 mb-3 pb-3">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="portfolio_carousel">
                        <p>Portfolio</p>
                        <h3>Selected Works</h3>
                    </div>
                </div>
            </div>
            <div className="row">
                <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="true">
                    <div className="carousel-inner">
            
            
                        <div className="carousel-item active">
                            <div className="row">
            
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0 rounded-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
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
                        </div>
            
        
            
            
            
            
                        <div className="carousel-item">
                            <div className="row">
            
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
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
                        </div>
            
            
            
            
            
            
            
            
                        <div className="carousel-item">
                            <div className="row">
            
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
                                                    </div>
                                                </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card_position">
                                        <div className="card rounded-3 border-0">
                                        <img src={CarouselA} className="img-fluid rounded-3" alt=""></img>
                                        <div className="overlay">
                                            <div className="d-flex align-items-center h-100 justify-content-center">
                                                <div className="overlay_card border-0">
                                                    <div className="">
                                                    <div className="">
                                                        <div className="d-flex justify-content-end card_icon">
                                                        <i className="bi bi-arrow-up-right"></i>
                                                    </div>
                                                    <div className="position-absolute bottom-0">
                                                        <h2 className="">Bona Green</h2>
                                                        <p>Youtube</p>
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
                        </div>
            
            
            
            
            
                    </div>
                  </div>
            </div>



            <div className="row">
                <div className="col-12">
                    <div className="carousel_slider_icons">
                        <div className="d-flex justify-content-end">  
                            <i className="bi bi-arrow-left pe-3" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev"><BsArrowLeft/></i>
                            <i className="bi bi-arrow-right" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next"><BsArrowRight/></i>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <video loop controls width="100%" src="assets/video/Argentina and Lionel Messi are crowned World Cup champions_360p.mp4"></video>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Carousel

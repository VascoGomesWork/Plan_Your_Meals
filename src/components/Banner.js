import React from "react";
import BannerItemItem from "./BannerItemItem";

export default function Banner(props){
    return(
        <section id="hero">

            <div className="hero-container">
                <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade"
                     data-bs-ride="carousel">
                    <ol className="carousel-indicators" id="hero-carousel-indicators"/>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <div className="carousel-container">
                                <img alt="Imagem de Banner" src={require("../img/slide/slide-1.jpg")} />
                            </div>

                            <div id="banner-text" className="carousel-content">
                                <div id="banner-text-1" className="p-3 mb-2 bg-dark text-white">
                                    <h2 className="animate__animated animate__fadeInDown"><span>{props.page}</span>
                                    </h2>
                                    <h3 className="animate__animated animate__fadeInUp">{props.text}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
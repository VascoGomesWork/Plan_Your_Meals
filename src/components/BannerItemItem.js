import React from "react";

export default function BannerItemItem(){
    return (
        <div className="carousel-item active">

            <div className="carousel-container">
                <img alt="Imagem de Banner" src={require("../img/slide/slide-1.jpg")} />
            </div>
        </div>
    )
}
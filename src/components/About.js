import React from "react";

export default function About(){
    return(
        <section id="sobre_nos" className="events">
            <div className="container">

                <div className="section-title">
                    <h2>Sobre <span>Nós</span></h2>
                </div>

                <div className="events-slider swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="row event-item">
                                    <h3>Nesta Secção Iremos Apresentar-nos</h3>
                                    <div className="price">
                                    </div>
                                    <p className="fst-italic">
                                        A <span>Plan Your Meals</span> é o nome de uma empresa fictícia que foi criada
                                        para a realização deste projeto da unidade curricular de Tecnologias Web e Ambientes
                                        Móveis lecionada pelo professor coordenador do curso de Engenharia Informática da ESTIG
                                        que é também o docente desta unidade curricular.
                                    </p>

                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
    )
}
import React from "react";
import "../styles/components/layouts/header.css"
import "../styles/components/layouts/footer.css"
import "../styles/components/pages/contactoPage.css"

const contactoPage = (props) => {
    return (
        <main className="contacto">
            <div className="containerfluid">
                <div className="row  h-100  overflow-hidden m-0 ">
                    <div className="col m-0 p-0 ">
                        <img src={process.env.PUBLIC_URL + "/images/soy1.png"} alt="" className="h-100 p-0 "/>
                    </div>
                    <div className=" col d-flex flex-column h-100 m-1 align-items-center justify-content-center  text-end">
                        <div className=" border-end border-black border-2 text-end text-lemon soy pe-5 my-5">
                            <p>SOY DISEÑADORA <br></br> SOY CREADORA<br></br> SOY ARTE</p>
                        </div>
                                <p className=" fs-6 m-5">
                                    / Soy una diseñadora que focaliza su mirada y proceso creativo
                                    desde otra perspectiva, mi inspiración nace y se nutre de la
                                    intertextualidad de disciplinas para lograr diseños audaces y atemporales. 

                                        Busco formar alianzas profesionales centradas en el respeto y
                                        apoyo mutuo para fomentar un espacio de trabajo de crecimiento conjunto. /
                                    </p>

                        </div>
                        </div>
                                <div className="row  m-5 ">
                                    <div className=""> <p className="text-lemon text-center fs-3 fw-bold">MI FORMACIóN</p>        <p className="text-center fs-5">/ temita dual /</p>        <p className="text-center fs-5">/ 2x1 /</p>  </div>

                                </div>
                                <div className="row containerfluid m-0 bg-ser">
                                    <div className="col   ">
                                        <div className="w-100 d-flex flex-column align-items-center  ">
                                            <img src={process.env.PUBLIC_URL + "/images/soy2.png"} alt="" className=" imgsoy "/>
                                                <p className="text-lemon my-5 " >/ DISEÑO /</p>
                                        </div>

                                    </div>
                                    <div className="col  ">
                                        <div className="w-100 d-flex flex-column align-items-center ">
                                            <img src={process.env.PUBLIC_URL + "/images/soy3.png"} alt="" className="  imgsoy "/>
                                                <p className="text-lemon my-5 " >/ comex /</p>
                                        </div>
                                    </div>
                                </div>

                        </div>


        </main>
                    );
}

                    export default contactoPage
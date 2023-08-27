import React from "react";
import "../../src/styles/components/pages/homePage.css"

const homePage = (props) => {
    return (
        <main className="holder " >
            <div className="container d-flex h-75 align-items-center justify-content-around">
                <div className="container d-flex flex-column  w-75 justify-content-center align-items-center m-3 ">
                    <div className="t1  " >
                        <p className=" mb-0">T</p>
                    </div>
                    {/* <div className=""> <p className="text-center fs-3 fw-bold">TRANSPARENTE</p>        <p className="text-center">/Clave en mí/</p>        <p className="text-center">/en serio/</p>  </div> */}
                </div>
                <div className="container d-flex flex-column  w-75 justify-content-center align-items-center m-3 ">
                     <div className="t1 " >
                        <p className=" mb-0">A</p>
                    </div>
                    {/* <div className=""> <p className="text-center fs-3 fw-bold">TRANSPARENTE</p>        <p className="text-center">/Clave en mí/</p>        <p className="text-center">/en serio/</p>  </div> */}
                </div>
                <div className="container d-flex flex-column  w-75 justify-content-center align-items-center m-3 ">
                     <div className="t1  " >
                        <p className=" mb-0">M</p>
                    </div>
                    {/* <div className=""> <p className="text-center fs-3 fw-bold">TRANSPARENTE</p>        <p className="text-center">/Clave en mí/</p>        <p className="text-center">/en serio/</p>  </div> */}
                </div>
            </div>
            <div className="d200 w-100 bg-dark d-flex">
                <img src={process.env.PUBLIC_URL + '/images/port.png'} alt="Portafolio" className="h-100 w-100 img" />
            </div>
            <div className="h-50 container-fluid d-flex align-items-center justify-content-center">
                <p className=" p-5 text-lemon">/  la clave  es sentirse en la libertad de cuestionar todo/</p>
            </div>
            <script src="../../src/javascripts/index.js"></script>

        </main>
    );
}

export default homePage
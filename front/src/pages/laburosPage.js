import React from "react";
import "../styles/components/layouts/header.css"
import "../styles/components/layouts/footer.css"
import "../styles/components/pages/nosotrosPage.css"

const nosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="containerfluid ">
                <div className="row w-100 p-0 m-0 ">
                    <div className="col w-100  p-0  ">
                        <img src="/images/laburo1.png" alt="" className="  imglaburo "/>
                    </div>
                    <div className="col w-100 p-0 ">
                        <img src="/images/laburo2.png" alt="" className="  imglaburo "/>
                    </div>
                    <div className="col w-100 p-0">
                        <img src="/images/laburo3.png" alt="" className="  imglaburo "/>
                    </div>
                </div>



            </div>

        </main>

    );
}

export default nosotrosPage
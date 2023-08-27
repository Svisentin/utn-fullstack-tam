
import axios from "axios"
import { useState } from "react"

import "../styles/components/layouts/header.css"
import "../styles/components/layouts/footer.css"
import "../styles/components/pages/novedadesPage.css"


const ContactoPage = (props) => {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)

        }
    }
    return (
        <div className="containerfluid ">
            <div className="row  h-100  m-0 ">
                <div className="col m-0 p-0 ">
                    <img src="/images/charlame1.png" alt="" className="h-100 w-75 p-0 float-end " />
                </div>

                <div className=" col d-flex flex-column h-100  align-items-end justify-content-evenly  text-end py-5 pe-5">
                    <div className=" text-end text-lemon soy fs-1 pe-5 my-4 ">
                        <p>/te copó lo que <br></br> chusmeaste?</p>
                    </div>
                    <p className="text-charlame fs-6 border-end border-black border-2 pe-3 m-5">
                        / Si tenés ganas de conocer más en profundidad mis
                        laburos y te interesa mi forma de hacer diseño,
                        charlame. Acá te dejo mi tarjeta de presentación. /
                    </p>
                    <div className="tarjeta d-flex flex-column justify-content-center align-items-center shadow">
                        <div className="cambio position-absolute tarjeta bg-ser d-flex justify-content-center align-items-center">
                            <p className="pTarjeta">/TAM.</p>
                        </div>
                        <div className=" bg-black h-100  text-center d-flex flex-column justify-content-center align-items-center">
                            <div className="">
                                <p className="text-ser fs-4 pTarjeta1 ">TAMARA VERON RIOS</p>
                            </div>
                            <div className="container m-2">
                                <div className="row text-white fs-6">
                                    <div className="col-md-6 d-flex align-items-center justify-content-center border-end">
                                        <div className="px-3">Lic. Diseño textil e indumentaria</div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                                        <div className="px-3">Lic. Comercio internacional</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" text-white fs-6">
                                <p className="m-0">+54 9 3487 536900</p>
                                <p className="m-0">tam.veron.rios@gmail.com</p>
                                <p className="m-0">@tam.veronrios</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            <div className="row   m-0 p-5 pb-0">
                <div className="row">
                    <p className="fs-3 text-center pb-3" >/ Vamos a crear algo juntos </p>
                </div>
                <form className="formulario p-2 m-0" method="post" action="/contacto" onSubmit={handleSubmit}>
                    <div className="row p-0 w-0 ">
                        <div className="col text-end">
                            <p>
                                <label>Nombre</label>
                                <input className="bg-transparent border border-0 border-bottom border-dark border-opacity-25" type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                            </p>
                            <p>
                                <label>Email</label>
                                <input className="bg-transparent border border-0 border-bottom border-dark border-opacity-25" type="text" name="email" value={formData.email} onChange={handleChange} />
                            </p>
                            <p>
                                <label >Teléfono</label>
                                <input className="bg-transparent border border-0 border-bottom border-dark border-opacity-25" type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
                            </p>
                        </div>
                        <div className="col h-100 text-start">
                            
                                <label className="row p-0 m-0 ">Comentario</label>
                                <textarea className="textareaForm w-50 bg-transparent border border-0 border-bottom border-dark border-opacity-25    " name="mensaje" value={formData.mensaje} onChange={handleChange} ></textarea>
                            
                        </div>
                    </div>
                    <div className="row m-0 p-0 pt-5  ">
                        {sending ? <p className="text-center">Enviando...</p> : null}
                        {msg ? <p className="text-center">{msg}</p> : null}
                        <p className="text-center w-100 "><input className="w-25 rounded border-0 btn btn-dark" type="submit" value="Enviar" /></p>
                    </div>
                </form>
            </div>

            <div className="row  m-0 ">
                <p className="text-lemon text-center barra fw-bold">/.</p>
            </div>

            <div className="row  m-0 mb-5 ">
                <div className="">
                    <p className="text-lemon text-center fs-1 fw-bold">GRACIAS.</p>
                    <p className="text-center fs-5">/ charlame /</p>
                    <p className="text-center fs-5">/ bye /</p>
                </div>
            </div>

            <div className="row containerfluid m-0 bg-ser">
                <div className="col  p-0 ">
                    <div className="w-100 d-flex flex-column align-items-center ">
                        <img src="/images/charlame2.png" alt="" className=" p-0 w-100 imgsoy " />
                    </div>

                </div>
            </div>


            <script src="/javascripts/charlame.js"> </script>
        </div>

    );
}

export default ContactoPage


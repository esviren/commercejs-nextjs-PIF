import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';
import { flushSync } from 'react-dom';
import { func } from 'prop-types';

const Encuesta = () => (
    <Root transparentHeader={false}>
        <Head>
            <title>Home | Barf Friends</title>
        </Head>

        <EncuestaForm />
        <nueva />

        <Footer />
    </Root>
);



function EncuestaForm() {



    const registrarEncuesta = async event => {
        event.preventDefault()
        const data = new FormData(event.target);
        let encuesta = {
            "id": localStorage.length + 1,
            "pregunta-1": data.get('pregunta-1'),
            "pregunta-2": data.get('pregunta-2'),
            "pregunta-3": data.get('pregunta-3'),
            "pregunta-4": data.get('pregunta-4'),
            "pregunta-5": data.get('pregunta-5'),
            "pregunta-6": data.get('pregunta-6'),
            "pregunta-7": data.get('pregunta-7'),
            "pregunta-8": data.get('pregunta-8'),
            "pregunta-9": data.get('pregunta-9'),
            "pregunta-10": data.get('pregunta-10'),
            "pregunta-11": data.get('pregunta-11'),
            "email": data.get('correo')
        }




        const value = data.get('pregunta-1');
        //localStorage.clear();



        console.log({ value } + localStorage.length);

        localStorage.setItem("encuestaJSON" + localStorage.length, JSON.stringify(encuesta));

        var sum1 = parseInt(localStorage.length) - 1;
        console.log(sum1);

        var encuestaJSON = "encuestaJSON" + sum1;
        console.log(encuestaJSON);

        console.log(localStorage.getItem(encuestaJSON));
        let datos = new FormData();
        let pregunta_1;

        for (let index = 1; index <= localStorage.length; index++) {
            var eJSON = "encuestaJSON" + index;
            console.log(eJSON);
            //console.log(localStorage.getItem(eJSON));
            var parseJSON = JSON.parse(localStorage.getItem(eJSON)) ;
            console.log(parseJSON);
            datos.append("encuesta_"+index, parseJSON);
            var correo = datos.get('id');
            pregunta_1 = datos.get('id');
            console.log("id "+pregunta_1);
            
            document.getElementById("respuesta1").innerHTML = datos.get('encuesta_'+index);
            document.getElementById("respuesta1").innerHTML = datos.get('encuesta_'+index);
            //const element = array[index];
            
        }

        //document.getElementById("respuesta1").innerHTML = localStorage.getItem(encuestaJSON);



        //componentDidMount();
        /*
        
        
                var sum1 = parseInt(localStorage.length)-1;
                console.log(sum1);
                
                var encuestaJSON = "encuestaJSON"+sum1; 
                console.log(encuestaJSON);
            
                console.log(localStorage.getItem(encuestaJSON));
        
        
                const res = await fetch(
                    'encuesta.json',
                    {
                        body: JSON.stringify({
                            name: event.target.name.value
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST'
                    }
                )
        */
        //const result = await res.json()
        // result.user => 'Ada Lovelace'
    }

    return (

        <div className="about-container">
            {/* Row */}
            <div className="row mt-5 pt-5 about-hero">
                <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
                    <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
                        <h2 className="font-size-header mb-4">
                            Encuesta dieta BARF
                        </h2>
                        <h4 className="font-size-subheader mb-4">
                            Acontinuacion Encueta de estudio de viavilidad para venta y distribuciión de dieta BARF.
                        </h4>
{/*
                        <form class="form" onSubmit={registrarEncuesta}>

                            <label class="my-1 mr-2" for="pregunta1">¿Tipo de mascota que tienes?  </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta1" name="pregunta-1" required>

                                <option value="1">Perro</option>
                                <option value="2">Gato</option>
                                <option value="3">Otra</option>
                                <option value="4">ninguna</option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta2">¿numero de mascotas que tienes?      </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta2" name="pregunta-2" required>

                                <option value="1">0</option>
                                <option value="2">1-2</option>
                                <option value="3">3-5</option>
                                <option value="4">Más de 5</option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta3">¿Conoce la dieta Húmeda BARF?  </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta3" name="pregunta-3" required>

                                <option value="1">Si</option>
                                <option value="2">no</option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta4">¿Conoce las siguientes marcas de comida para Mascotas?      </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta4" name="pregunta-4">
                                <option value="1" defaultValue>0</option>
                                <option value="2">1-2</option>
                                <option value="3">3-5</option>
                                <option value="4">Más de 5</option>
                            </select>

                            <label className="w-100 mb-4" for="pregunta5">
                                <p className="mb-1 font-size-caption font-color-strong text-left">
                                    ¿Cuantas Visitas anuales al veterinario realizas con tu mascota (baño/revisión)?
                                </p>
                                <input
                                    name="pregunta-5"
                                    id="pregunta5"
                                    type="number"
                                    placeholder="Digita Solo Números"
                                    min="0"
                                    // value= "Número de Veces Por Año"
                                    className="rounded-0 w-100"
                                    required
                                />
                            </label>

                            <label class="my-1 mr-2" for="pregunta6">¿Con Que frecuencias le das detalles o gustos a tus mascotas (golosina, helado, juguetes)?         </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta6" name="pregunta-6">

                                <option value="1">Más de 4 veces al mes</option>
                                <option value="2">4 veces al mes</option>
                                <option value="3">2 veces al mes</option>
                                <option value="4">Una vez al mes </option>
                                <option value="5">Una vez cada 2 meses </option>
                                <option value="6">Nunca</option>
                            </select>


                            <label class="my-1 mr-2" for="pregunta7">¿Que tipo de alimento come tu mascota?    </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta7" name="pregunta-7">
                                <option value="1">Alimento procesado Seco (cuido / perraharina) </option>
                                <option value="2">Dieta húmeda (BARF)</option>
                                <option value="3">comida de sal </option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta8">¿Tu mascota es adoptada?    </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta8" name="pregunta-8">
                                <option value="1">Si </option>
                                <option value="2">No</option>
                                <option value="3">Ambas</option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta9">¿Cuánto dinero inviertes en tu mascota mensualmente?      </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta9" name="pregunta-9">
                                <option value="1">$0-$20.000  </option>
                                <option value="2">$21.000-$50.000 </option>
                                <option value="3">$51.000-$100.000</option>
                                <option value="4">$101.000- $200.000</option>
                                <option value="5">Más de $201000 </option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta10">¿Condición física de tu mascota?    </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta10" name="pregunta-10">

                                <option value="1">Delgado</option>
                                <option value="2">normal</option>
                                <option value="3">Atlético</option>
                                <option value="4">Obeso</option>
                                <option value="5">Gordo</option>
                            </select>

                            <label class="my-1 mr-2" for="pregunta11">¿Le has Celebrado el cumpleaños a tu mascota?  </label>
                            <select class="custom-select my-1 mr-sm-2" id="pregunta11" name="pregunta-11">

                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>

                            <label className="w-100 mb-4" for="pregunta11">
                                <p className="mb-1 font-size-caption font-color-strong text-left">
                                    Correo Electrónico
                                </p>
                                <input
                                    name="correo"
                                    id="correo1"
                                    type="email"
                                    placeholder="juan@correo.com"
                                    className="rounded-0 w-100"
                                    required
                                />
                            </label>
                            <button type="submit" class="btn btn-primary my-1">Enviar</button>
                        </form>
                        
*/}
                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className="about-image h-100">
                        <div className="d-flex align-items-center justify-content-center h-100">
                            {/*<img src="/cjs-illustration.svg" alt="Commerce.js illustration"/> */}
                        </div>
                        <div className="about-cjs mt-3 d-flex flex-row">
                            <p id="respuesta1"></p>
                            <p id=""></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        /* 
         <form class="form" onSubmit={registrarEncuesta}>
           <label htmlFor="name">Name</label>
           <input id="name" name="name" type="text" autoComplete="name" required />
           <button type="submit">Register</button>
         </form>
         */
    )


}

export default Encuesta;


import React from 'react';
import Head from 'next/head';
import Root from '../components/common/Root';
import Footer from '../components/common/Footer';

const About = () => (
  <Root>
    <Head>
      <title>Encuesta | Dieta BARF</title>
    </Head>
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
              
              <form class="form" method="post">
                
                <label class="my-1 mr-2" for="pregunta1">¿Tipo de mascota que tienes?  </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta1" name="pregunta-1" required>
                  <option selected>Seleciona...</option>
                  <option value="1">Perro</option>
                  <option value="2">Gato</option>
                  <option value="3">Otra</option>
                  <option value="4">ninguna</option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿numero de mascotas que tienes?      </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta2" name="pregunta-2" required>
                  <option selected>Seleciona...</option>
                  <option value="1">0</option>
                  <option value="2">1-2</option>
                  <option value="3">3-5</option>
                  <option value="4">Más de 5</option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Conoce la dieta Húmeda BARF?  </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta3" name="pregunta-3" required>
                  <option selected>Seleciona...</option>
                  <option value="1">Si</option>
                  <option value="2">no</option> 
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Conoce las siguientes marcas de comida para Mascotas?      </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta4" name="pregunta-4">
                  <option selected>Seleciona...</option>
                  <option value="1">0</option>
                  <option value="2">1-2</option>
                  <option value="3">3-5</option>
                  <option value="4">Más de 5</option>
                </select>

                <label className="w-100 mb-4">
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

                <label class="my-1 mr-2" for="pregunta1">¿Con Que frecuencias le das detalles o gustos a tus mascotas (golosina, helado, juguetes)?         </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta6" name="pregunta-6">      
                  <option selected>Seleciona...</option>
                  <option value="1">Más de 4 veces al mes</option>
                  <option value="2">4 veces al mes</option>
                  <option value="3">2 veces al mes</option>
                  <option value="4">Una vez al mes </option>
                  <option value="5">Una vez cada 2 meses </option>
                  <option value="6">Nunca</option>       
                </select>

                
                <label class="my-1 mr-2" for="pregunta1">¿Que tipo de alimento come tu mascota?    </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta7" name="pregunta-7">
                  <option selected>Seleciona...</option>
                  <option value="1">Alimento procesado Seco (cuido / perraharina) </option>
                  <option value="2">Dieta húmeda (BARF)</option>
                  <option value="3">comida de sal </option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Tu mascota es adoptada?    </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta8" name="pregunta-8">
                  <option selected>Seleciona...</option>
                  <option value="1">Si </option>
                  <option value="2">No</option>
                  <option value="3">Ambas</option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Cuánto dinero inviertes en tu mascota mensualmente?      </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta9" name="pregunta-9">
                  <option selected>Seleciona...</option>
                  <option value="1">$0-$20.000  </option>
                  <option value="2">$21.000-$50.000 </option>
                  <option value="3">$51.000-$100.000</option>
                  <option value="4">$101.000- $200.000</option>
                  <option value="5">Más de $201000 </option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Condición física de tu mascota?    </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta10" name="pregunta-90">
                  <option selected>Seleciona...</option>
                  <option value="1">Delgado</option>
                  <option value="2">normal</option>
                  <option value="3">Atlético</option>
                  <option value="4">Obeso</option>
                  <option value="5">Gordo</option>
                </select>

                <label class="my-1 mr-2" for="pregunta1">¿Le has Celebrado el cumpleaños a tu mascota?  </label>
                <select class="custom-select my-1 mr-sm-2" id="pregunta10" name="pregunta-90">
                  <option selected>Seleciona...</option>
                  <option value="1">Si</option>
                  <option value="2">No</option>                 
                </select>

                <label className="w-100 mb-4">
                  <p className="mb-1 font-size-caption font-color-strong text-left">
                    Correo Electrónico
                  </p>
                  <input
                    name="pregunta 1"
                    type="email"
                    placeholder="juan@correo.com"
                    className="rounded-0 w-100"
                    required
                  />
                </label>

                <button type="submit" class="btn btn-primary my-1">Enviar</button>
              </form>

              <div className="about-cjs mt-3 d-flex flex-row">
                <a className="px-4 py-3 font-color-white about-doc" href="https://commercejs.com/docs/" target="_blank" rel="noopener noreferrer">
                  Documentación
                </a>
                <a className="px-4 py-3 about-dev" href="https://commercejs.com/docs/community/" target="_blank" rel="noopener noreferrer">
                  Guía de la Comunidad
                </a>
              </div>
            </div>
          </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img src="/cjs-illustration.svg" alt="Commerce.js illustration"/>
            </div>
          </div>
        </div>
      </div>


      
    </div>
    <Footer />
  </Root>
);

export default About;

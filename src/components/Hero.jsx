import React from 'react';
import { Speakers } from '@/components/speakers/Speakers';

export const Hero = () => {
  return (
    <>
    <div
      className="relative bg-center bg-cover min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(128, 0, 128, 0.2), rgba(128, 0, 128, 0.2)), url('https://cdn.leonardo.ai/users/c52f45ae-576d-4f2f-ae5a-01d5f5ae5827/generations/eba622f1-a078-4519-9c98-c8e75036beb3/variations/Default_Esta_impresionante_imagen_captura_la_esencia_de_la_mit_0_eba622f1-a078-4519-9c98-c8e75036beb3_1.jpg')`,
      }}>
        <div className="text-center relative z-10"> {/* Aumentamos el valor de z-index */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Road To
          </h2>
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Blockchain Week
          </h1>
          <p className="text-white text-xl md:text-2xl lg:text-3xl mb-6">
            Quito, Ecuador
          </p>
          <div className='flex flex-col justify-center items-center gap-4 md:flex-row'>
            <a
              href="eventbrite.com"
              target='_blank'
              className="inline-block px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Obtén tus tickets
            </a>
            <a
              href="#about"
              className="inline-block px-6 py-3 text-xl font-semibold text-blue-500 bg-white border border-blue-500 rounded-lg shadow-md hover:bg-blue-100 transition-colors duration-300"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

import { useMediaSun } from '@/hooks/useMediaSun';
import React from 'react';
import imgSandals from '@/assets/img_sandals.png';
import { useFormik } from 'formik';
import FullHeight from "react-full-height";


export const FormStep2 = ({ handleSteps }) => {

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      phone: '',
      date: '',
      email: '',
      product: '',
      place: '',
      super: '',
      buyed: '',
      region: '',
      age: false,
      legal: false,
      news: false,
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
      handleNextStep(3)
    },
  });

  const handleNextStep = (step) => {
    handleSteps(step);
  };

  return (
    <>
      <div className='step2 pt-[156px] lg:pt-[120px] px-4 lg:px-0 lg:-mt-2 lg:overflow-auto lg:h-[calc(100vh_-_1.75rem)]'>
        <button className='flex items-center justify-center w-auto bg-transparent text-white' onClick={() => handleNextStep(1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className='text-sm font-normal inline-block ml-1'>VOLVER</span>
        </button>
        <form className='text-white' onSubmit={handleSubmit}>
          <h1 className='uppercase text-[2.5rem] lg:text-4xl font-impact text-center leading-[3rem] mt-5 lg:text-left lg:mt-0'>Completa el formulario</h1>
          <div className='space-y-11 lg:space-y-10 mt-10 w-full'>
            <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-10 space-y-10'>
              <input
                type="text"
                name="name"
                className='flex-1'
                placeholder='Nombre'
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="phone"
                name="phone"
                className='flex-1'
                placeholder='Teléfono'
                value={values.phone}
                onChange={handleChange} />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-14 space-y-10'>
              <input
                type="text"
                name="date"
                className='flex-1'
                placeholder='Fecha de nacimiento'
                value={values.date}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                className='flex-1'
                placeholder='Mail'
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-14 space-y-10'>
              <select
                name="product"
                className='flex-1'
                value={values.product}
                onChange={handleChange}
              >
                <option value="-1" defaultValue>Producto favorito:</option>
                <option value="1">Producto 1</option>
                <option value="2">Producto 2</option>
              </select>
              <select
                name="place"
                className='flex-1'
                value={values.place}
                onChange={handleChange}
              >
                <option value="-1" defaultValue>Lugar de compra:</option>
              </select>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center lg:space-y-0 lg:space-x-14 space-y-10'>
              <select
                name="super"
                className='flex-1'
                value={values.super}
                onChange={handleChange}
              >
                <option value="-1" defaultValue>Supermercado:</option>
              </select>
              <select
                name="buyed"
                className='flex-1'
                value={values.buyed}
                onChange={handleChange}
              >
                <option value="-1" defaultValue>Producto Comprado:</option>
              </select>
            </div>
            <div className='flex flex-col space-y-10 lg:max-w-[calc(50%_-_20px)]'>
              <select
                name="region"
                className='flex-1'
                value={values.region}
                onChange={handleChange}
              >
                <option value="-1" defaultValue>Región:</option>
              </select>
            </div>
          </div>
          <div className='text-sm tracking-[0.0375rem] mt-10 space-y-2'>
            <div className='flex space-x-2 items-center'>
              <input
                type="checkbox"
                id='age'
                name="age"
                className='h-4 w-4 border-[0]'
                value={values.age}
                onChange={handleChange}
              />
              <label htmlFor="age">Soy mayor de 18 años</label>
            </div>
            <div className='flex space-x-2 items-center'>
              <div className='w-4 h-4'>
                <input
                  type="checkbox"
                  id='legal'
                  name="legal"
                  className='h-4 w-4 border-[0]'
                  value={values.legal}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="legal">He leido las bases legales y acepto los <a className='underline text-white'><strong>términos y condiciones</strong></a></label>
            </div>
            <div className='flex space-x-2 items-center'>
              <div className='w-4 h-4'>
                <input
                  type="checkbox"
                  id='news'
                  name="news"
                  className='h-4 w-4 border-[0]'
                  value={values.news}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="news">Acepto recibir noticias y promociones de las marcas de la promoción*</label>
            </div>
          </div>
          <p className='text-xs mt-5 tracking-[0.0375rem]'>*Todos los datos ingresados deben corresponder a la misma persona.</p>
          <button type='submit' className='button bg-white  mt-6 w-full lg:w-[10.625rem]' onSubmit={handleSubmit}>ENVIAR</button>
        </form>
        <figure className='text-right overflow-hidden mt-11'>
          <img src={imgSandals} alt="" className='w-[170px] lg:w-[220px] inline-block left-3 top-1 relative' />
        </figure>
      </div>
    </>
  )
}

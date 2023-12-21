import { motion } from "framer-motion";
import { useFormik } from "formik";
import icLogo from "@/assets/ic_logo.svg";
import icAbsolut from "@/assets/ic_absolut.png";
import icBeefeater from "@/assets/ic_beefeater.png";
import icBallantines from "@/assets/ic_ballan.png";
import icMalibu from "@/assets/ic_malibu.png";
import icRamazzotti from "@/assets/ic_ramazzotti.png";
import icHavana from "@/assets/ic_havana.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sound } from "@/components/Sound";

export const StartPage = () => {
  const navigate = useNavigate();
  let [state, setState] = useState({
    error: null,
  });
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      age: '',
    },
    onSubmit: values => {
      var validYear = new Date().getFullYear() - 18;
      if (parseInt(values.age) > validYear || parseInt(values.age) < 1923) {
        setState({ error: 'Error' })
      } else {
        setState({ error: null });
        navigate('/welcome', { replace: true });
      }
    },
  });

  return (
    <>
      <figure className="bgPlamsTop"></figure>
      <div className="bg-startpage min-h-screen w-full lg:flex lg:pt-0 pt-28 lg:justify-center lg:items-center text-center px-4 lg:px-0">
        <div className="absolute top-4 right-4 lg:top-7 lg:right-28 ">
          <Sound />
        </div>
        <section className="bg-white bg-opacity-40 lg:min-w-[800px] lg:max-w-[800px] lg:px-16 px-7 lg:pb-4 pb-8 animate__animated animate__fadeIn">
          <img src={icLogo} alt="Logo Sun Drinks" className="w-[12.625rem] inline-block mt-6 animate__animated animate__pulse" />
          <h1 className="font-impact font-normal text-white text-[2rem] mt-8 tracking-[0.1rem]">¡BIENVENIDOS!</h1>
          <h2 className="font-impact font-normal text-white text-xl mt-8 tracking-[0.0625rem]">INGRESA TU AÑO DE NACIMIENTO:</h2>
          {
            state.error === null && <form onSubmit={handleSubmit} >
              <input
                autoComplete="off"
                id="age"
                name="age"
                type="text"
                placeholder="YYYY"
                onChange={handleChange}
                className="h-[2.75rem] text-white placeholder:text-white text-center text-2xl mt-6 w-[16.94rem]"
                value={values.age}
              />
            </form>
          }
          {state.error !== null &&
            <label className="mt-8 inline-block lg:text-xl text-base tracking-[0.0625rem] text-white">Lo sentimos, debe tener la edad legal para ver nuestro sitio.</label>}
          <div className="flex flex-wrap justify-between items-center lg:mt-12 mt-7 w-full animate__animated animate__fadeInUp">
            <figure className="w-1/3 lg:w-auto text-center"><img src={icAbsolut} alt="" className="lg:w-[5.57rem] w-[5.25rem] inline-block" /></figure>
            <figure className="w-1/3 lg:w-auto text-center"><img src={icBeefeater} alt="" className="lg:w-[5.6rem] w-[5.25rem] inline-block ml-3 lg:ml-0" /></figure>
            <figure className="w-1/3 lg:w-auto text-center"><img src={icBallantines} alt="" className="lg:w-[3.26rem] w-[3rem] inline-block" /></figure>
            <figure className="w-1/3 lg:w-auto text-center"><img src={icMalibu} alt="" className="lg:w-[4.4rem] w-[4.1rem] inline-block" /></figure>
            <figure className="w-1/3 lg:w-auto text-center"><img src={icRamazzotti} alt="" className="lg:w-[5.5rem] w-[5.1rem] inline-block" /></figure>
            <figure className="w-1/3 lg:w-auto text-center"><img src={icHavana} alt="" className="lg:w-[2.8rem] w-[2.6rem] inline-block" /></figure>
          </div>
          <p className="text-gray lg:mt-14 mt-5 font-bold text-xs tracking-[0.0375rem]">*Tienes que ser mayor de 18 años para ingresart a este sitio.</p>
        </section>
      </div>
      <figure className="bgPlamsBottom"></figure>
    </>
  )
}
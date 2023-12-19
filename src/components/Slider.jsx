import { useEffect, useState } from "react";

export const Slider = () => {
  const [state, setState] = useState({
    step: 1,
});

  // useEffect(() => {
  //   //Implementing the setInterval method
  //   const interval = setInterval(() => {
  //     setState({step: state.step + 1});
  //   }, 4000);

  //   //Clearing the interval
  //   return () => clearInterval(interval);
  // }, [state.step]);
  return (
    <>
      <div className="carousel w-full h-[17.56rem] pointer-events-none">
        <div id="item1" className="gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(@/assets/slider/img_maitencillo.jpg)]">
          <p className='absolute text-white uupercase font-black text-[0.93rem] top-6 left-4 lg:left-10'>MAINTENCILLO</p>
        </div>
        <div id="item2" className="gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(@/assets/slider/img_serena.jpg)]">
          <p className='absolute text-white uupercase font-black text-[0.93rem] top-6 left-4 lg:left-10'>LA SERENA</p>
        </div>
        <div id="item3" className="gradient-slider rounded-[0.25rem] carousel-item w-full bg-cover relative bg-[url(@/assets/slider/img_pucon.jpg)]">
          <p className='absolute text-white uupercase font-black text-[0.93rem] top-6 left-4 lg:left-10'>PUCÓN</p>
        </div>
      </div>
      <div className="flex justify-start w-full py-2 gap-2 absolute bottom-8 pl-4">
        <a href="#item1" className={`border border-white h-2 w-2 rounded ${state.step === 1 ? 'bg-white' : ''}`} onClick={() => setState({ step: 1 })}></a>
        <a href="#item2" className={`border border-white h-2 w-2 rounded ${state.step === 2 ? 'bg-white' : ''}`} onClick={() => setState({ step: 2 })}></a>
        <a href="#item3" className={`border border-white h-2 w-2 rounded ${state.step === 3 ? 'bg-white' : ''}`} onClick={() => setState({ step: 3 })}></a>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Drawer } from '../components/Drawer'
import icLogo from "../assets/ic_logo.png";
import icBottles from "../assets/img_bottles.png";
import { useMediaSun } from '../hooks/useMediaSun';
import { FormStep1 } from '../modules/FormStep1';
import { FormStep2 } from '../modules/FormStep2';
import { FormStep3 } from '../modules/FormStep3';
import cn from 'classnames';

export const WelcomeLayout = () => {
	const { isDesktop } = useMediaSun();
	const [state, setState] = useState({
		step: 1,
	});

	const heightDesktop = isDesktop && "calc(100vh - 36px)";

	const handleSteps = (step) => {
		setState({ step: step })
	}

	const contentSteps = () => {
		if (state.step === 1) {
			return <FormStep1 handleSteps={handleSteps} />
		} else if (state.step === 2) {
			return <FormStep2 handleSteps={handleSteps} />
		} else {
			return <FormStep3 handleSteps={handleSteps} />
		}
	}

	return (
		<Drawer>
			<div className='flex flex-col lg:flex-wrap items-start' style={{ height: heightDesktop }}>
				{state.step === 1 || isDesktop ? <div className='bg-welcome w-full z-0 min-h-[26.4rem] lg:w-[626px] flex flex-col justify-around overflow-hidden lg:h-full'>
					<figure className='waves'></figure>
					<figure className='flex-1 lg:flex-auto lg:text-center animate__animated  animate__pulse'>
						<Link to={'/welcome'}><img src={icLogo} alt="Logo Sun Drinks" className="w-[13rem] lg:w-[25.2rem] inline-block mt-6 lg:mt-12 ml-4 lg:ml-0" /></Link>
					</figure>
					<figure className='flex lg:items-end justify-center flex-1 lg:flex-auto text-center'>
						<img src={icBottles} alt="Logo Sun Drinks" className="animate__animated animate__fadeInUp lg:max-w-[532px] w-full inline-block relative top-6" />
					</figure>
				</div> : <Link to={'/welcome'}> <img src={icLogo} alt="Logo Sun Drinks" className="z-10 w-[11.7rem] lg:w-[25rem] inline-block absolute top-6 lg:mt-12 left-4 lg:left-0" /></Link>}
				<div className={cn('overflow-hidden bg-orange relative lg:w-[calc(100%_-_626px)] lg:h-full w-full')}>
					<motion.div
						key={state.step}
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -100 }}
						transition={{ ease: 'easeInOut', duration: .6 }}
					>
						{contentSteps()}
					</motion.div>
				</div>
			</div>
		</Drawer>
	)
}

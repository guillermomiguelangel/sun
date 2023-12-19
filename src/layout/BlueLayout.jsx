import { Drawer } from '@/components/Drawer'
import icLogo from "@/assets/ic_logo.png";

export const BlueLayout = ({ children }) => {

	return (
		<>
			<Drawer layout="BLUE">
				<div className='blueLayout'>
					<figure className='flex-1 lg:m-auto lg:items-center lg:max-w-[1200px] lg:text-left relative animate__animated  animate__pulse'>
						<img src={icLogo} alt="Logo Sun Drinks" className="w-[13rem] lg:w-[11.687rem] inline-block mt-6 lg:mt-12 ml-4 lg:ml-0" />
					</figure>
					<main className='z-2 relative'>
						{children}
					</main>
				</div>
			</Drawer>
		</>
	)
}

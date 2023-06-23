import { AiOutlineSend } from "react-icons/ai";

const Banner = () => {
	return (
		<div className="w-screen h-screen h-min-[100vh]">
			<div className="w-full h-full banner flex flex-col justify-center">
			</div>
			<div className="w-screen h-screen min-h-screen flex flex-col justify-center relative -top-[100vh] bg-transparent">
				<div className="flex flex-row justify-center text-saffron-topbar items-center topbar h-1/6 md:w-[800px] md:self-center">
					<div className="w-full h-full flex flex-row justify-center items-center">
						<div className="swastika w-[100px] h-[100px] min-w-[100px] min-h-[100px]"></div>
					</div>
					<div className="flex flex-col justify-center items-center md:flex-row">
						<span className="text-[2.7rem] h-8 mb-5 md:mb-0 md:mr-2">Maheswar</span>
						<span className="text-[2.7rem] h-8 mb-8 md:mb-0 md:ml-2">Debasish</span>
					</div>
					<div className="w-full h-full flex flex-row justify-center items-center">
						<div className="swastika w-[100px] h-[100px] min-w-[100px] min-h-[100px]"></div>
					</div>
				</div>
				
				<div className="flex flex-row justify-center h-2/6 items-center">
					<div className="image h-[200px] w-[200px]"></div>
				</div>
				<div className="contact h-2/6 mt-10 w-full md:max-w-[500px] sm:max-w-[300px] md:self-center sm:self-center">
					<div className="flex flex-col justify-center items-center">
						<input
							type="text"
							className="h-[45px] w-4/6 text-center rounded-md focus:outline-none outline-none select-none"
							placeholder="Name"
							aria-label="Search"
							aria-describedby="button-addon1"
						/>
						<input
							type="text"
							className="h-[45px] w-4/6 text-center rounded-md focus:outline-none outline-none select-none mt-5"
							placeholder="Name"
							aria-label="Search"
							aria-describedby="button-addon1"
						/>
						<div className="h-[45px] w-4/6 mt-5 flex flex-row">
							<input
								type="text"
								className="h-full w-10/12 text-center rounded-md border-r-2 border-solid border-discord-sidebar select-none focus:outline-none outline-none"
								placeholder="Contact Number"
								aria-label="Search"
								aria-describedby="button-addon1"
							/>
							<button
								className="h-full w-3/12 flex flex-row justify-center border-l-2 border-solid border-discord-sidebar bg-white items-center rounded-md"
							>
								<AiOutlineSend size={30} />
							</button>
						</div>
				</div>

			</div>
		</div>

		</div >

	);
}

export default Banner;
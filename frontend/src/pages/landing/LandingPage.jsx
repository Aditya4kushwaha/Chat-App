import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const LandingPage = () => {
	return (
		<div className='min-h-screen w-full  text-white font-sans selection:bg-white selection:text-black flex flex-col'>
			
			{/* Navbar */}
			<nav className="w-full flex items-center justify-between px-6 py-8 md:px-12 max-w-7xl mx-auto">
				<div className="text-xl font-semibold tracking-tighter">
					Chit Chat
				</div>
				<div className="flex gap-6 items-center">
					<Link to="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
						Login
					</Link>
					<Link to="/signup" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors">
						Get Started
					</Link>
				</div>
			</nav>

			{/* Main Content */}
			<main className='flex-1 flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto w-full'>
				
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full pb-20">
					
					{/* LEFT COLUMN: Minimal Text */}
					<div className="text-left flex flex-col gap-8">
						
						<h1 className='text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]'>
							Connect <br />
							Instantly
						</h1>

						<p className='text-lg text-zinc-500 max-w-sm leading-relaxed font-light'>
							Real-time messaging for everyone. <br />
							Simple, fast, and secure.
						</p>

						<div className='flex items-center gap-4 pt-4'>
							<Link to='/signup' className='inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-colors'>
								Start Chatting
								<BsArrowRight className="ml-2" />
							</Link>
						</div>
					</div>

					{/* RIGHT COLUMN: Flat/Clean Visual */}
					<div className="relative w-full flex justify-center lg:justify-end">
						{/* Simple Chat Mockup */}
						<div className='w-full max-w-md bg-zinc-900 rounded-3xl p-4 border border-zinc-800 shadow-2xl'>
							{/* Header */}
							<div className="flex items-center gap-3 border-b border-zinc-800 pb-4 mb-4">
								<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs">JD</div>
								<div className="text-sm font-medium">John Doe</div>
							</div>

							{/* Messages */}
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="w-6 h-6 rounded-full bg-zinc-800"></div>
									<div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-zinc-300">
										Hello !
									</div>
								</div>
								<div className="flex items-start gap-3 justify-end">
									<div className="bg-white p-3 rounded-2xl rounded-tr-none text-sm text-black">
										Hi there !
									</div>
								</div>
								<div className="flex items-start gap-3">
									<div className="w-6 h-6 rounded-full bg-zinc-800"></div>
									<div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-zinc-300">
										How are you?
									</div>
								</div>
							</div>

							{/* Input Placeholder */}
							<div className="mt-6 h-10 bg-zinc-950 rounded-full border border-zinc-900 flex items-center px-4">
								<span className="text-zinc-600 text-xs">Type a message...</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default LandingPage;

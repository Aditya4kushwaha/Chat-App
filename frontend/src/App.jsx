import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import LandingPage from "./pages/landing/LandingPage";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
	const { authUser } = useAuthContext();
	return (
		<div className="min-h-screen w-full bg-[#020617] relative">
			<div className="absolute inset-0 z-0" style={{ backgroundImage: `radial-gradient(circle 500px at 50% 100px, rgba(236,72,153,0.4), transparent)` }} />
			<div className='p-4 h-screen flex items-center justify-center relative z-10'>
				<Routes>
					<Route path='/' element={authUser ? <Home /> : <LandingPage />} />
					<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
					<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
				</Routes>
				<Toaster />
			</div>
		</div>
	);
}

export default App;

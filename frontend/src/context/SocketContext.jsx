import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser) {
			// const socket = io("https://chat-app-99kn.onrender.com", {
			// 	query: {
			// 		userId: authUser._id,
			// 	},
			// });
            const socket = io(import.meta.env.MODE === "development" ? "http://localhost:5000" : "https://chat-app-99kn.onrender.com", {
				query: {
					userId: authUser._id,
				},
			});

			setSocket(socket);

			socket.on("connect", () => {
				console.log("Socket connected:", socket.id);
			});

			socket.on("connect_error", (err) => {
				console.log("Socket connection error:", err);
			});

			// socket.on() is used to listen to the events. can be used both on client and server side
			socket.on("getOnlineUsers", (users) => {
				setOnlineUsers(users);
			});

			return () => socket.close();
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};

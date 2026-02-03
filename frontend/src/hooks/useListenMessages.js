import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation, conversationNotifications, setConversationNotifications } = useConversation();

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();

			if (selectedConversation?._id === newMessage.senderId) {
				setMessages([...messages, newMessage]);
			} else {
				// Show notification if the message is from someone else
				setConversationNotifications([...conversationNotifications, newMessage.senderId]); // Track senderId
				
				// Since we don't have the sender name in the message object easily (usually), 
				// we generically say "New message received". 
				// If newMessage has sender info in the future, we can use it.
				// Based on common practices, having a visual indicator is good.
				import("react-hot-toast").then(({ toast }) => {
					toast.success("New message received 🔔", {
						position: "top-right",
						style: {
							borderRadius: "10px",
							background: "#333",
							color: "#fff",
						},
					});
				});
			}
		});

		return () => socket?.off("newMessage");
	}, [socket, setMessages, messages, selectedConversation, conversationNotifications, setConversationNotifications]);
};
export default useListenMessages;

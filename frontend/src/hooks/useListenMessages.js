import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation, conversationNotifications, setConversationNotifications } = useConversation();

	useEffect(() => {
        // console.log("🎧 useListenMessages effect running. Socket:", socket?.id);
		socket?.on("newMessage", (newMessage) => {
            console.log("📨 New Message Received in Hook:", newMessage);
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			try {
				sound.play();
			} catch (error) {
				console.log("Error playing sound:", error);
			}

            // Using functional update to avoid stale closure issues
            // This ensures we always append to the latest state
			if (selectedConversation?._id === newMessage.senderId) {
                console.log("✅ Message belongs to current chat. Appending...");
				setMessages((prevMessages) => [...prevMessages, newMessage]);
			} else {
                console.log("🔔 Message from another user. Notification...");
				// Show notification if the message is from someone else
				setConversationNotifications((prev) => [...prev, newMessage.senderId]); // Track senderId
				
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
	}, [socket, setMessages, selectedConversation, setConversationNotifications]);
};
export default useListenMessages;

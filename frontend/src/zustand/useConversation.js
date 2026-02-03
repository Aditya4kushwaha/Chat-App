import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
	conversationNotifications: [], // Array to store unread messages for notification counts
	setConversationNotifications: (conversationNotifications) => set({ conversationNotifications }),
}));

export default useConversation;

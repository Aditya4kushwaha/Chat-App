import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => 
        set((state) => ({ 
            messages: typeof messages === 'function' ? messages(state.messages) : messages 
        })),
	conversationNotifications: [], // Array to store unread messages for notification counts
	setConversationNotifications: (conversationNotifications) => 
        set((state) => ({ 
            conversationNotifications: typeof conversationNotifications === 'function' 
                ? conversationNotifications(state.conversationNotifications) 
                : conversationNotifications 
        })),
}));

export default useConversation;

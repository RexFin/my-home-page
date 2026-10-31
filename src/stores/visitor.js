import { defineStore } from 'pinia'

const STORAGE_ID = 'visitor_id';

export const useVisitorStore = defineStore('visitor', {
    state: () => ({ 
        visitorID: localStorage.getItem(STORAGE_ID) || '',
    }),

    actions: {
        generateUserID() {
            const now = new Date();

            return navigator.platform+" > "+now.getFullYear().toString(16)+(now.getMonth()+1).toString(16)+now.getDate().toString(16)+"::"+Date.now().toString(36).slice(-4)+Math.random().toString(36).substring(2, 5);
        },

        saveID(newID) {
            if (!newID || !newID.trim()) return;

            this.visitorID = newID.trim();
            localStorage.setItem(STORAGE_KEY, this.visitorId);
        },

        initID() {
            if (!this.visitorID) {
                this.saveID(this.generateUserID());
            }
        }
    }
})
import { defineStore } from "pinia";

export const useTabStore = defineStore("tabStore", {
    state: ()=> (
        {pressedTab: null}
    ),
    actions: {
        changeTab(tabName) {
            this.pressedTab = tabName
        }
    }
})
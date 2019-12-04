import Vue from "vue";
import Vuex from "vuex";
import question from "./modules/question";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        token: "",
        user: {}
    },
    actions,
    getters,
    mutations,
    modules: {
        question
    }
});
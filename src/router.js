import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AskQuestion from "./components/AskQuestion";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { 
        path: "/ask-question", 
        component: AskQuestion, 
        beforeEnter(to, from, next) { 
            let token = localStorage.getItem("token");
            if(token) {
                console.log("next");
                next();
            } else {
                console.log("next/");
                next("/");
            }
        }
    },
    { path: "*", redirect: "/" }
];

export const router = new VueRouter({
    mode: "history",
    routes
});
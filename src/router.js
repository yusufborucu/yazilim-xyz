import Vue from "vue";
import VueRouter from "vue-router";

// general
import Home from "./components/general/Home";

// user
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Forgot from "./components/user/Forgot";
import NewPassword from "./components/user/NewPassword";
import Profile from "./components/user/Profile";

// question
import AskQuestion from "./components/question/AskQuestion";
import QuestionDetail from "./components/question/QuestionDetail";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/forgot", component: Forgot },
    { path: "/new-password/:remember_token", component: NewPassword },
    {
        path: "/profile",
        component: Profile,
        beforeEnter(to, from, next) {
            let token = localStorage.getItem("token");
            if (token) {
                next();
            } else {
                next("/");
            }
        }
    },
    { 
        path: "/ask-question", 
        component: AskQuestion, 
        beforeEnter(to, from, next) { 
            let token = localStorage.getItem("token");
            if (token) {
                next();
            } else {
                next("/");
            }
        }
    },    
    { path: "/question-detail/:id", component: QuestionDetail },
    { path: "*", redirect: "/" }
];

export const router = new VueRouter({
    mode: "history",
    routes
});
import Vue from "vue";
import VueRouter from "vue-router";

// general
import Home from "./components/general/Home";
import SearchResult from "./components/general/SearchResult";
import UserDetail from "./components/general/UserDetail";
import TagDetail from "./components/general/TagDetail";
import AllBest from "./components/general/AllBest";
import AllTags from "./components/general/AllTags";

// user
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Forgot from "./components/user/Forgot";
import NewPassword from "./components/user/NewPassword";
import Profile from "./components/user/Profile";

// question
import AskQuestion from "./components/question/AskQuestion";
import EditQuestion from "./components/question/EditQuestion";
import QuestionDetail from "./components/question/QuestionDetail";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Home },
    { path: "/search-result/:text", component: SearchResult },
    { path: "/user-detail/:id", component: UserDetail },
    { path: "/tag-detail/:tag", component: TagDetail },
    { path: "/all-best", component: AllBest },
    { path: "/all-tags", component: AllTags },
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
    { 
        path: "/edit-question/:id", 
        component: EditQuestion, 
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
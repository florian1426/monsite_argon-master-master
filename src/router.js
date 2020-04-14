 import Vue from "vue";
 import Router from "vue-router";
 import AppHeader from "./layout/AppHeader";
 import AppFooter from "./layout/AppFooter";
 import Accueil from "./views/Accueil.vue";
 import Plongée from "./views/Plongée.vue";
 import Calendrier from "./views/Calendrier.vue";
 import Contact from "./views/Contact.vue";
 import Hockey from "./views/Hockey.vue";

 Vue.use(Router);

 export default new Router({
     linkExactActiveClass: "active",
     routes: [
         {
             path: "/",
             name: "accueil",
             components: {
                 header: AppHeader,
                 default: Accueil,
                 footer: AppFooter
             }
         },
         {
            path: "/accueil",
            name: "accueil",
            components: {
                header: AppHeader,
                default: Accueil,
                footer: AppFooter
            }
        },
         {
             path: "/plongée",
             name: "plongée",
             components: {
                 header: AppHeader,
                 default: Plongée,
                 footer: AppFooter
             }
         },
         {
             path: "/calendrier",
             name: "calendrier",
             components: {
                 header: AppHeader,
                 default: Calendrier,
                 footer: AppFooter
             }
         },
         {
             path: "/contact",
             name: "contact",
             components: {
                 header: AppHeader,
                 default: Contact,
                 footer: AppFooter
             }
         },
         {
             path: "/hockey",
             name: "hockey",
             components: {
                 header: AppHeader,
                 default: Hockey,
                 footer: AppFooter
             }
         }
     ],
     scrollBehavior: to => {
         if (to.hash) {
             return { selector: to.hash };
         } else {
             return { x: 0, y: 0 };
         }
     }
 });
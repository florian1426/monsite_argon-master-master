 import Vue from "vue";
 import Router from "vue-router";
 import AppHeader from "./layout/AppHeader";
 import AppFooter from "./layout/AppFooter";
 import Accueil from "./views/Accueil.vue";

 import Calendrier from "./views/Calendrier.vue";
 import Contact from "./views/Contact.vue";
 import Leroledelecologie from "./views/Leroledelecologie.vue";

 Vue.use(Router);

 export default new Router({
     linkExactActiveClass: "active",
     routes: [{
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
             path: "/leroledelecologie",
             name: "leroledelecologie",
             components: {
                 header: AppHeader,
                 default: Leroledelecologie,
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
<template>
  <section class="position"  >
  



  
        
    <b-navbar  toggleable="lg" style="background-color: #B6CACB ; text-align: center; " >
       

        <b-navbar-toggle  style="color:black; " target="nav-collapse">☰</b-navbar-toggle>

        <b-collapse id="nav-collapse" class="nav justify-content-center text-white " is-nav >
            <b-nav-item-dropdown text="Accueil" center>
                <router-link to="/accueil" class="dropdown-item">Qui sommes nous ?</router-link>
                <router-link to="/accueil" class="dropdown-item">Pourquoi travailler avec nous ?</router-link>
                
            </b-nav-item-dropdown>
           
            <b-nav-item-dropdown text="Le role de l'écologie" center>
                <router-link to="/hockey" class="dropdown-item">Une étude avant tout</router-link>
                <router-link to="/hockey" class="dropdown-item">avancon ensemble</router-link>
                
            </b-nav-item-dropdown>
          
            <b-nav-item-dropdown text="Contact" center>
                <router-link to="/contact" class="dropdown-item">Nous contacter</router-link>
                <router-link to="/contact" class="dropdown-item">Formulaire question/réponse</router-link>
            </b-nav-item-dropdown>

        
        
        </b-collapse>
    </b-navbar>
    </section>

</template>
<script>

import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from "bootstrap-vue/esm/components/navbar";
import { BCollapse } from "bootstrap-vue/esm/components/collapse";
import { BNavItem, BNavItemDropdown, BNavForm } from "bootstrap-vue/esm/components/nav";  
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";
import { BButton } from "bootstrap-vue/esm/components/button";


export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,        
    BCollapse,
    BNavbarNav,    
    BNavItem,
    BNavItemDropdown,        
    BDropdownItem,
    BNavForm,
    BFormInput,
    BButton 
  }
};
</script>
<style>
</style>

<template>
<div>
    <b-navbar toggleable="lg" style="background-color : #E94D14">
        <b-navbar-brand href="#">
            <img src="img/brand/logo.jpg" style="width:100px; height:100px;" alt="Logo"><strong> CSMB </strong> Fontenay-trésigny
        </b-navbar-brand>

        <b-navbar-toggle  style="color:black;" target="nav-collapse">☰</b-navbar-toggle>

        <b-collapse id="nav-collapse"  class="ml" is-nav>
            <b-nav-item-dropdown text="Accueil" right>
                <router-link to="/accueil" class="dropdown-item">Un peu d'histoire</router-link>
                <router-link to="/accueil" class="dropdown-item">Nos partenaires</router-link>
                <router-link to="/accueil" class="dropdown-item">La féderation</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Plongée" right>
                <router-link to="/plongée" class="dropdown-item">La plongée</router-link>
                <router-link to="/plongée" class="dropdown-item">Devenir plongeur</router-link>
                <router-link to="/plongée" class="dropdown-item">Matériel</router-link>
                <router-link to="/plongée" class="dropdown-item">Niveaux</router-link>
                <router-link to="/plongée" class="dropdown-item">Bulletin d'incription</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Hockey" right>
                <router-link to="/hockey" class="dropdown-item">Hockey quoi?</router-link>
                <router-link to="/hockey" class="dropdown-item">Devenir joueur</router-link>
                <router-link to="/hockey" class="dropdown-item">Matériel</router-link>
                <router-link to="/hockey" class="dropdown-item">Entrainement</router-link>
                <router-link to="/hockey" class="dropdown-item">Palmares</router-link>
                <router-link to="/hockey" class="dropdown-item">Bulletin d'incription Hockey</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Calendrier" right>
                <router-link to="/calendrier" class="dropdown-item">Sortie plongée</router-link>
                <router-link to="/calendrier" class="dropdown-item">Calendrier Hockey</router-link>
                <router-link to="/calendrier" class="dropdown-item">Résultat Hockey</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Archives" right>
                <router-link to="/calendrier" class="dropdown-item">Revue de presse</router-link>
                <router-link to="/calendrier" class="dropdown-item">Photos</router-link>
                <router-link to="/calendrier" class="dropdown-item">Video</router-link>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown text="Contact" right>
                <router-link to="/contact" class="dropdown-item">Nous contacter</router-link>
                <router-link to="/contact" class="dropdown-item">Formulaire question/réponse</router-link>
            </b-nav-item-dropdown>

        
        
        </b-collapse>
    </b-navbar>
</div>    
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

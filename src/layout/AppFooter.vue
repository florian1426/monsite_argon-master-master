<template>
     <footer class="navbar bottom navbar-light bg-custom justify-content-center">
        <a class="navbar-brand" href="https://www.facebook.com/Fontenayhockey/">
            <img src="img/brand/facebook.svg" width="30" height="30" class="d-inline-block align-top" alt="">
            Suivez-nous sur nos pages Facebook du <a href="https://www.facebook.com/Fontenayhockey/"title="facebook du hockey">Hockey</a> ou <a href="https://www.facebook.com/Fontenaydiving/"title="facebook de la plongée">Plongée</a>
        </a>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>
</style>

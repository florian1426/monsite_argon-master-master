<template>
    <section>
    <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                        <b-carousel-slide
                            caption="Hockey quoi?"
                            text="Et oui vous avez bien entendu du Hockey Subaquatique!" 
                            img-src="img/mountains/hockey1.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            caption="C'est super cool comme sport!"
                            text="Apprennez en plus sur notre site et nos réseaux sociaux." 
                            img-src="img/mountains/hockey2.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            caption="Et pourquoi pas essayer!"
                            text="Allez motive toi et viens nous voir dans le bassin tu vas t'amuser crois moi!" 
                            img-src="img/mountains/hockey3.jpg">
                        </b-carousel-slide>
        </b-carousel>
        
    </section> 
       
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BCard } from "bootstrap-vue/esm/components/card";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BCard,
    BContainer,
    BCol,
    BRow
  }
};
</script>


<template>
    <section>
    <b-carousel id="carousel1" controls indicators>
                        <!-- Text slides with image -->
                         <b-carousel-slide
                            caption="Le monde contient bien assez pour les besoins de chacun, mais pas assez pour la cupidité de tous"
                            text="" 
                            img-src="img/mountains/italy-1587287_1920.jpg">
                        </b-carousel-slide>

                        <b-carousel-slide
                            caption="Mieux vaut prendre le changement par la main avant qu'il ne nous prenne par la gorge"
                            text="" 
                            img-src="img/mountains/mountains-4933524_1920.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            caption="Dans un environnement qui change il n'y a pas de plus grand risque que de rester immobile"
                            text="" 
                            img-src="img/mountains/windrader-474576_1280.jpg">
                        </b-carousel-slide>
        </b-carousel>
        
 


<b-container-fluid >
    <div class="bordure">
                
                <div class="row featurette">
                <div class="col-md-12">
                    <h2 class="featurette-heading">L'écologie et l'environnement, deux notions bien distinctes</h2>
                    <img src="img/mountains/leaf-3162421_1280.jpg" class="leaf"  alt="arbuste">
            <p class="lead font-weight-bold">L'écologie et l'environnement, deux notions bien distinctes Des différences de fond Le mot environnement « désigne plutôt un cadre de vie de l'homme. L'environnement naturel fait souvent l'objet de dégradation, de surexploitation, de déforestation,
                de pollution, qui est souvent le résultat de l'énorme impact des activités humaines. » </p>

            <p class="lead font-weight-bold">Malheureusement, le terme d’écologie « prête à confusion, car elle peut également transcender une dimension politique. Les partis verts qui sont apparus dans les années 60 prônent la nécessité de protéger la nature et l'environnement. » </p>
            <p class="lead font-weight-bold">L’article ajoute que « le terme écologie est donc souvent utilisé pour les désigner dans le langage courant. En réalité, il convient mieux d'utiliser le mot écologisme qui correspond à une idéologie politique. » </p>
              
            <p class="lead font-weight-bold">L’article souligne qu’on peut également « l'associer à d'autres termes pour obtenir des sous-sections comme "l 'écologie humaine" qui est la partie de l'écologie qui étudie l 'espèce humaine. "L'écologie politique " quant à lui, est un ensemble
                de courants de pensée qui insistent sur la prise en compte des enjeux écologiques dans toutes actions ou décisions politiques. »</p>
            <p class="lead font-weight-bold">En outre, l’écologie est un réel outil « de lutte contre le réchauffement climatique est un des changements les plus inquiétants que subit notre planète. Il permet d'analyser les modifications du climat qui entraînent de mauvaises récoltes,
                la fonte de la calotte glaciaire, la sècheresse, la canicule..., en identifiant un problème environnemental urgent : les émissions de gaz à effet de serre. »</p>
        
        
        </div>
    </div>

    
</div>
    
    
            </b-container-fluid>
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

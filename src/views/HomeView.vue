<template>
    <div class="flex flex-col min-h-screen">
        <h1 class="font-bold">Pourquoi ce site ?</h1>
        <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <p>
                Ce site avait pour but à la base, de m'entrainer, de pratiquer dans le but de monter en compétence.
                <br/>
                Il s'est avéré au final que ce site servira de base pour mon dossier de projet pour mon examen de Concepteur Développeur d'Applications.
                Il se divise en deux parties, l'interface sur laquelle vous êtes et une API pour gérer les données.
                <br/>
                Je suis preneur de toutes remarques et/ou suggestions afin d'améliorer ce site.
                <br/>
                En vous souhaitant une bonne visite. 
            </p>
        </div>
        <h2 class="font-bold">Brève histoire du rugby</h2>
        <div class="md:flex-grow items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <p>
                La variante originale du rugby est inventée sur le terrain du collège Rugby School, dans la ville de Rugby dans le centre de l'Angleterre.
                <br/>
                La légende veut qu'à la mi-temps d'une partie de football, William Webb Ellis, élève du collège et futur pasteur, se saisisse du ballon et le porte dans ses bras jusque derrière la ligne de but adverse,
                alors que la tradition était de le pousser du pied. Il invente ainsi un nouveau sport qui deviendra le rugby.
                Cette légende est probablement inventée de toutes pièces. En réalité, les origines du rugby sont bien plus complexes et sont communes à celles du football. 
                Chaque collège avait ses propres règles et les jeux au pied aussi bien qu'à la main étaient fréquents. De nos jours certaines variantes sont encore pratiquées, notamment dans les collèges de Harrow (Harrow football (en)), Eton (Field game (en) et Wall game (en)) ou Winchester (Winchester College football (en)).
                Les différents codes de football et rugby sont ensuite exportés dans tout l'Empire britannique, le football australien, le football américain et le football canadien étant des évolutions de ceux-ci.
            </p>

            <img class="mt-10 mx-auto w-auto h-auto" src="https://teara.govt.nz/files/39996-pc.jpg" alt="Photo de la statue de William Webb-Ellis">
            <p class="mt-5">Photo de la statue de Sir William Webb Ellis</p>
    
        </div>
    </div>
</template>
  
<script>
// @ is an alias to /src
export default {
    name: 'HomeView',
    components: {
    },
    mounted() {
        this.$store.dispatch("getLeaguesList")
        this.$store.dispatch("getTeamsList")
        this.$store.dispatch("getMatchWeekList")
    }
}
</script>
  

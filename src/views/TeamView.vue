<template>
<div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="getTeam">

  <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
    <img class="w-full" alt="image of a team logo" :src="'https://api-championship.fr/public/storage/'+getTeam.logo" />
    <!-- <img v-if="getTeam.stade_pic" class="mt-6 " alt="image of a team stadium" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" /> -->
  </div>
  <div class="md:hidden">
    <img class="w-full" alt="image of a team logo" :src="'https://api-championship.fr/public/storage/'+getTeam.logo" />
    <!-- <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
      
    </div> -->
  </div>
  <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
    <div class="border-b border-gray-200 pb-6">
      <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark mt-2">{{ getTeam.name }}</h1>
    </div>
    <detail :cle="'Surnom'" :valeur="getTeam.nickname"/>
    <detail :cle="'Fondation'" :valeur="getTeam.foundation"/>
    <detail :cle="'Stade'" :valeur="getTeam.stade"/>
    <detail :cle="'Capacité'" :valeur="getTeam.capacity"/>
    <detail :cle="'Site Web'" :valeur="getTeam.website"/>
    <br>
    <h2 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark mt-2">Réseaux sociaux</h2>
    <reseau v-if="getTeam.facebook" :cle="'Facebook'" :valeur="getTeam.facebook"/>
    <reseau :cle="'Twitter'" :valeur="getTeam.twitter"/>
    <reseau :cle="'Instagram'" :valeur="getTeam.instagram"/>
    <reseau v-if="getTeam.youtube" :cle="'Youtube'" :valeur="getTeam.youtube"/>
    <!-- <div>
   
    </div> -->
  </div>
</div>

</template>

<script>
import detail from '@/components/details.vue';
import reseau from '@/components/reseaux.vue';


export default {
    name: 'TeamView',
    components: {
        detail,
        reseau
    },
    computed: {
        // Computed property permettant de récupérer la recette via son id
        getTeam() {
            return this.$store.getters.getTeamById( this.$route.params.id );
        }
    }
}
</script>
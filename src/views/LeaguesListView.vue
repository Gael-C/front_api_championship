<template>
    <section class="py-10 min-h-screen">
      <div class="mx-auto grid max-w-6  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 flex-grow">
        <card v-for="league in $store.state.leagues"
        :key="league.slug" :id="league.slug" :logo="league.logo" :name="league.name" ></card>
      </div>
    </section>
  
  </template> 
  
  <script>
  // @ is an alias to /src
  import card from "@/components/leagueCard.vue";
  export default {
    name: 'LeaguesListView',
    components: {
      card,
    },
    mounted() {
          this.$store.dispatch("getLeaguesList")
          this.$store.dispatch("getTeamsList")
      }
  }
  </script>
  
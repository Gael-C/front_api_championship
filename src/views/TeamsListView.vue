<template>
  <section class="py-10">
    <div class="mx-auto grid max-w-6  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      <card v-for="team in $store.state.teams"
      :key="team.slug" :id="team.slug" :logo="team.logo" :name="team.name" ></card>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src
import card from "@/components/teamCard.vue";
export default {
  name: 'TeamsListView',
  components: {
    card,
  },
  mounted() {
        this.$store.dispatch("getTeamsList")
        this.$store.dispatch("getLeaguesList")
    }
}
</script>

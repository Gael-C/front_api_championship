<template></template>
  
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
  
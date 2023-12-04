<template>
    <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="getLeague">

        <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img class="w-full" alt="League logo" :src="'https://api-championship.fr/public/storage/'+getLeague.logo" />
        </div>
        <div class="md:hidden">
        <img class="w-full" alt="League logo" :src="'https://api-championship.fr/public/storage/'+getLeague.logo"  />
        <!-- <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
        </div> -->
      </div>
        <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div class="border-b border-gray-200 pb-6">
                <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800">{{
                    getLeague.name }}</h1>
            </div>
            <detail :cle="'Création'" :valeur="getLeague.creation" />
            <detail v-if="getLCTeam" :cle="'Champion en titre'" :valeur="getLCTeam.name" />
            <detail v-if="getMSTeam" :cle="'Club le plus titré'" :valeur="getMSTeam.name" />
            <br>
            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl border shadow-lg">
                <header class="px-5 py-4 border-b border-gray-100">
                    <h2 class="font-semibold text-gray-800">Équipes</h2>
                </header>
                <div class="p-3">
                    <div class="overflow-x-auto" >
                        <!-- <detail :cle="'Équipes'" :valeur="teams.name"></detail> -->
                        <table class="table-auto w-full">
                            <tbody class="text-sm divide-y divide-gray-100">
                                <tr v-for="teams in getLeague.teams">
                                    <tableComponent :key="teams.team_id" :id="teams.team_id" :name="teams.name" />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        <!-- <div>
        </div> -->
        </div>
    </div>
</template>

<script>
import detail from '@/components/details.vue';
import reseau from '@/components/reseaux.vue';
import tableComponent from '@/components/tableComponent.vue';


export default {
    name: 'LeagueView',
    components: {
        detail,
        reseau,
        tableComponent
    },
    mounted(){
        this.$store.dispatch("getTeamsList")
    },
    computed: {
        // Computed property permettant de récupérer la l'équipe via son id
        getLeague() {
            return this.$store.getters.getLeagueById(this.$route.params.id);
        },
        getLCTeam(){
            return this.$store.getters.getTeamById(this.getLeague.last_champion);
        },
        getMSTeam(){
            return this.$store.getters.getTeamById(this.getLeague.most_successfull);
        }
    },
    methods : {
        // findName(id) {
        //    const team = this.$store.state.teams.find((team) => team.id === Number(id));

        //    return JSON.stringify(team => name)
        // }
    }
}
</script>
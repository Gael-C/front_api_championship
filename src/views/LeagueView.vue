<template>
    <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="getLeague">

        <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden" style="border: 5px solid red;">
            <img class="w-full" alt="image of a girl posing"
                :src="'https://api-championship.fr/public/storage/' + getLeague.logo" />
            <!-- <img class="mt-6 w-full" alt="image of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" /> -->
        </div>
        <div>
        </div>
        <div class="md:hidden">
            <img class="w-full" alt="image of a girl posing"
                :src="'https://api-championship.fr/public/storage/' + getLeague.logo" />
            <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">

            </div>
        </div>
        <div class="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div class="border-b border-gray-200 pb-6">
                <h1 class="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-black-800">{{
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
                 <div>
                    <div class="overflow-x-auto">
                        <table class="text-sm divide-y divide-gray-100" style="border: 5px solid red;">
                             <thead class="border-b font-medium dark:border-neutral-500">
                                <th class="py-2 px-4 border-b">Équipe</th>
                                <th class="py-2 px-4 border-b">Pts</th>
                                <th class="py-2 px-4 border-b">B</th>
                                <th class="py-2 px-4 border-b">V</th>
                                <th class="py-2 px-4 border-b">N</th>
                                <th class="py-2 px-4 border-b">D</th>
                                <th class="py-2 px-4 border-b">P</th>
                                <th class="py-2 px-4 border-b">C</th>
                                <th class="py-2 px-4 border-b">D</th>
                            </thead>
                            <tbody >
                                <tr v-for="clasmt in getLeague.classment">
                                    <router-link :to="{ name:'team_detail', params: { id : clasmt.team_id}}">
                                        <td class="py-2 px-4 border-b">{{ getTeamName(clasmt.team_id) }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.points }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.bonus }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.victoires }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.nuls }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.défaites }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.pour }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.contre }}</td>
                                        <td class="py-2 px-4 border-b">{{ clasmt.goal_average }}</td>
                                    </router-link>
                                </tr>
                                <!-- <classementComponent
                        :key="clasmt.team_id" :id="clasmt.team_id" :nom="getTeamName(clasmt.team_id)" :points="clasmt.points" :bonus="clasmt.bonus"
                        :victoires="clasmt.victoires" :nuls="clasmt.nuls" :defaites="clasmt.défaites" :pour="clasmt.pour"
                        :contre="clasmt.contre" :diff="clasmt.goal_average"/> -->
                            </tbody>
                        </table>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import detail from '@/components/details.vue';
import reseau from '@/components/reseaux.vue';
import tableComponent from '@/components/tableComponent.vue';
import classementComponent from '@/components/classement.vue';

export default {
    name: 'LeagueView',
    components: {
        detail,
        reseau,
        tableComponent,
        classementComponent
    },
    mounted() {
        this.$store.dispatch("getTeamsList")
    },
    computed: {
        // Computed property permettant de récupérer le championnat via son id
        getLeague() {
            return this.$store.getters.getLeagueById(this.$route.params.id);
        },
        getLCTeam() {
            return this.$store.getters.getTeamById(this.getLeague.last_champion);
        },
        getMSTeam() {
            return this.$store.getters.getTeamById(this.getLeague.most_successfull);
        },

    },
    methods: {
       getTeamName(id) {
            for (let value of this.getLeague.classment) {
                if (id === value['team_id']) {
                    let team = this.$store.getters.getTeamById(value['team_id']);
                    return team.name;
                }
            };
       }
    }
}
</script>
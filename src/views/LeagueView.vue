<template>
    <div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="getLeague">

        <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
            <img class="w-full" alt="image of a girl posing"
                :src="'https://api-championship.fr/public/storage/' + getLeague.logo" />
            <!-- <img class="mt-6 w-full" alt="image of a girl posing" src="https://i.ibb.co/qxkRXSq/component-image-two.png" /> -->
            <!-- <classementComponent v-for="clasmt in getLeague.classment"
                :classement="clasmt.classment" :nom="clasmt.team_id" :points="clasmt.points" :bonus="clasmt.bonus"
                :victoires="clasmt.victoires" :nuls="clasmt.nuls" :defaites="clasmt.defaites" :pour="clasmt.pour"
                :contre="clasmt.contre" :diff="clasmt.goal_average"/> -->
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
                <div class="p-3">
                    <div class="overflow-x-auto">
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
            <div>
          <p class="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">It is a long established fact that a reader will be distracted by thereadable content of a page when looking at its layout. The point of usingLorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
          <p class="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">Product Code: 8BN321AF2IF0NYA</p>
          <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Length: 13.2 inches</p>
          <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Height: 10 inches</p>
          <p class="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">Depth: 5.1 inches</p>
          <p class="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">Composition: 100% calf leather, inside: 100% lamb leather</p>
        </div>
        <div>
          <div class="border-t border-b py-4 mt-7 border-gray-200">
            <div data-menu class="flex justify-between items-center cursor-pointer">
              <p class="text-base leading-4 text-gray-800 dark:text-gray-300">Shipping and returns</p>
              <button class="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" role="button" aria-label="show or hide">
                <svg class="transform text-gray-300 dark:text-white" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1L5 5L1 1" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300" id="sect">You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable</div>
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
        // Computed property permettant de récupérer la recette via son id
        getLeague() {
            return this.$store.getters.getLeagueById(this.$route.params.id);
        },
        getLCTeam() {
            return this.$store.getters.getTeamById(this.getLeague.last_champion);
        },
        getMSTeam() {
            return this.$store.getters.getTeamById(this.getLeague.most_successfull);
        }
    },
    methods: {
       
    }
}
</script>
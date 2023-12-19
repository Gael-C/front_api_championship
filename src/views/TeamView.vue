<template>
<div class="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4" v-if="getTeam">

  <div class="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
    <img class="w-9/12 mx-auto" alt="image of a team logo" :src="'https://api-championship.fr/public/storage/'+getTeam.logo" />
    <br>
    <div class="overflow-x-auto">
      <table class="text-sm divide-y divide-gray-100 w-full"  v-for="clasmt in getTeam.classment">
          <tr>
            <th>{{ getLeagueName(clasmt.league_id) }}</th>
          </tr>
            <tr class="border-b font-medium dark:border-neutral-500">
              <th class="py-2 px-4 border-b">#</th>
              <th class="py-2 px-4 border-b">Pts</th>
              <th class="py-2 px-4 border-b">B</th>
              <th class="py-2 px-4 border-b">V</th>
              <th class="py-2 px-4 border-b">N</th>
              <th class="py-2 px-4 border-b">D</th>
              <th class="py-2 px-4 border-b">P</th>
              <th class="py-2 px-4 border-b">C</th>
              <th class="py-2 px-4 border-b">D</th>
          </tr>
          <tbody>
              <tr>
                  <td class="py-2 px-4 border-b">{{ clasmt.classement }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.points }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.bonus }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.victoires }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.nuls }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.défaites }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.pour }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.contre }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.goal_average }}</td>
              </tr>
          </tbody>
      </table>
    </div> 
    <br>
    <select @change="getMatchWeeks($event)" class="mt-auto">
      <option value="" selected>Choisissez une journée</option>
      <option class="text-center" v-for="matchWeek in $store.state.matchWeeks" :value="matchWeek.id">{{ matchWeek.match_week_number }}</option>
    </select>
    <div class="overflow-x-auto">
      <table class="text-sm divide-y divide-gray-100 w-full" v-for="match in teamMatches">
            <tr>
              <th>{{ match.match_week_number }}</th>
            </tr>
              <tr class="border-b font-medium dark:border-neutral-500">
                <th class="py-2 px-4 border-b">Domicile</th>
                <th class="py-2 px-4 border-b">Résultat</th>
                <th class="py-2 px-4 border-b">Extérieur</th>
            </tr>
            <tbody>
                <tr>
                    <td class="py-2 px-4 border-b"> {{ getTeamName(match.home_team_id) }}</td>
                    <td class="py-2 border-b">({{ match.home_team_tries }}) {{ match.home_team_result }} - {{ match.away_team_result }} ({{match.away_team_tries}})</td>
                    <td class="py-2 px-4 border-b mx-auto">{{ getTeamName(match.away_team_id) }}</td>
                </tr>
            </tbody>
      </table>
    </div>
  </div>
  <div class="md:hidden">
    <img class="w-9/12 mx-auto" alt="image of a team logo" :src="'https://api-championship.fr/public/storage/'+getTeam.logo" />
    <!-- <div class="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
      <img v-if="getTeam.stade_pic" class="md:w-48 md:h-48 w-full " alt="image of ateam stadium" :src=getTeam.stade_pic />
      <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
      <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="https://i.ibb.co/cYDrVGh/Rectangle-245.png" />
      <img alt="image-tag-one" class="md:w-48 md:h-48 w-full" src="https://i.ibb.co/f17NXrW/Rectangle-244.png" />
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
  </div>
  <div class="md:hidden mt-5">
    <div class="overflow-x-auto">
      <table class="text-sm divide-y divide-gray-100"  v-for="clasmt in getTeam.classment">
          <tr>
            <th>{{ getLeagueName(clasmt.league_id) }}</th>
          </tr>
           <tr class="border-b font-medium dark:border-neutral-500">
              <th class="py-2 px-4 border-b">#</th>
              <th class="py-2 px-4 border-b">Pts</th>
              <th class="py-2 px-4 border-b">B</th>
              <th class="py-2 px-4 border-b">V</th>
              <th class="py-2 px-4 border-b">N</th>
              <th class="py-2 px-4 border-b">D</th>
              <th class="py-2 px-4 border-b">P</th>
              <th class="py-2 px-4 border-b">C</th>
              <th class="py-2 px-4 border-b">D</th>
          </tr>
          <tbody>
              <tr>
                  <td class="py-2 px-4 border-b">{{ clasmt.classement }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.points }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.bonus }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.victoires }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.nuls }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.défaites }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.pour }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.contre }}</td>
                  <td class="py-2 px-4 border-b">{{ clasmt.goal_average }}</td>
              </tr>
          </tbody>
      </table>
    </div>
    <br>
    <select class="mt-5" @change="getMatchWeeks($event)">
      <option value="" selected>Choisissez une journée</option>
      <option v-for="matchWeek in $store.state.matchWeeks" :value="matchWeek.id">{{ matchWeek.match_week_number }}</option>
    </select> 
    <table class="text-sm divide-y divide-gray-100 w-full" v-for="match in teamMatches">
          <tr>
            <th>{{ match.match_week_number }}</th>
          </tr>
            <tr class="border-b font-medium dark:border-neutral-500">
              <th class="py-2 px-4 border-b">Domicile</th>
              <th class="py-2 px-4 border-b">Résultat</th>
              <th class="py-2 px-4 border-b">Extérieur</th>
          </tr>
          <tbody>
              <tr>
                  <td class="py-2 px-4 border-b"> {{ getTeamName(match.home_team_id) }}</td>
                  <td class="py-2 border-b">({{ match.home_team_tries }}) {{ match.home_team_result }} - {{ match.away_team_result }} ({{match.away_team_tries}})</td>
                  <td class="py-2 px-4 border-b">{{ getTeamName(match.away_team_id) }}</td>
              </tr>
          </tbody>
    </table>
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
    data() {
    return {
      teamMatches: [] // Propriété pour stocker les résultats de la fonction getMatchWeeks
    };
  },
    computed: {
        // Computed property permettant de récupérer la recette via son id
        getTeam() {
          console.log(this.$store.getters.getTeamBySlug( this.$route.params.id ))
            return this.$store.getters.getTeamBySlug( this.$route.params.id );
          },
          
    },
    methods: {
      getMatchWeeks(event){
        this.teamMatches = []
        let matchWeek = this.$store.getters.getMatchWeekById(event.target.value);
        matchWeek.matches.forEach(element => {
          if (element.away_team_id === this.getTeam.id || element.home_team_id === this.getTeam.id) {
            this.teamMatches.push(element)
          }
        });
      },
      getTeamName(id) {
            let team = this.$store.getters.getTeamById( id );
            return team.name
      },
      getLeagueName(id) {
            let league = this.$store.getters.getLeagueById(id);
            return league.name
      }
    }
}
</script>

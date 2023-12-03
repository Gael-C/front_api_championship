import { createStore } from 'vuex'
import axios from 'axios';

const url = 'http://api-championship.fr/api'

export default createStore({

  state: {
    teams : [],
    leagues : []
  },
  getters: {
    getTeamById: (state) => (id) => {
      return state.teams.find( team => team.id === Number( id ) )
    },
    getLeagueById: (state) => (id) => {
      return state.leagues.find( league => league.id === Number( id ) )
    }
  },
  mutations: {
    getTeamsListMutation( state, teamsData )
    {
      for( let team of teamsData )
      {
        this.commit("addTeamMutation", team)
      }
    },
    addTeamMutation(state, teamData){
      let teamIndex = state.teams.findIndex( team => team.id === teamData.id );

      if( teamIndex < 0 )
      {
        state.teams.push( teamData );
      }

    },
    getLeaguesListMutation(state, leaguesData)
    {
      for( let league of leaguesData )
      {
        this.commit("addLeagueMutation", league)
      }
    },
    addLeagueMutation(state, leagueData)
    {
      let leagueIndex = state.leagues.findIndex( league => league.id === leagueData.id );

      if( leagueIndex < 0 )
      {
        state.leagues.push( leagueData );
      }
    }
  },
  actions: {
   
    async getTeamsList( context )
    {
      // Comme je fais un appel API, je gère les cas d'erreurs avec try/catch
      try {
        // Appel API pour récupérer les équipes
        const response = await axios.get(`${url}/teams`);
        
        // Commit d'une mutation VueX synchrone pour stocker les recettes dans le state
        context.commit( 'getTeamsListMutation', response.data );
        
      } catch (err) {
        console.error(err)
      }
    },
    async getLeaguesList(context)
    {
      try {
        const response = await axios.get(`${url}/leagues`)
        console.log(response.data);

        context.commit( 'getLeaguesListMutation', response.data );
        
      } catch (error) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})

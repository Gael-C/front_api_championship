import { createStore } from 'vuex'
import axios from 'axios';

const url = 'https://api-championship.fr/api'

export default createStore({

  state: {
    teams : [],
    leagues : [],
    matchWeeks : []
  },
  getters: {
    getTeamBySlug: (state) => (id) => {
      return state.teams.find( team => team.slug === id  )
    },
    getTeamById: (state) => (id) => {
      return state.teams.find( team => team.id === id  )
    },
    getLeagueBySLug: (state) => (id) => {
      return state.leagues.find( league => league.slug === id  )
    },
    getLeagueById: (state) => (id) => {
      return state.leagues.find( league => league.id === id  )
    },
    getMatchWeekById: (state) => (id) => {
      return state.matchWeeks.find( matchWeek => matchWeek.id === Number( id ) )
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
    getMatchWeekListMutation(state, matchWeeksData)
    {
      for( let matchWeek of matchWeeksData )
      {
        this.commit("addMatchWeekMutation", matchWeek)
      }
    },
    addMatchWeekMutation(state, matchWeekData)
    {
      let matchWeekIndex = state.leagues.findIndex( matchWeek => matchWeek.id === matchWeekData.id );

      if( matchWeekIndex < 0 )
      {
        state.matchWeeks.push( matchWeekData );
      }
    },
    getLeaguesListMutation( state, leaguesData )
    {
      for( let league of leaguesData )
      {
        this.commit("addLeagueMutation", league)
      }
    },
    addLeagueMutation(state, leagueData){
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

        context.commit( 'getLeaguesListMutation', response.data );
        
      } catch (error) {
        console.error(error)
      }
    },
    async getMatchWeekList(context)
    {
      try {
        const response = await axios.get(`${url}/matchWeek`)
        console.log(response.data)
        context.commit( 'getMatchWeekListMutation', response.data );
        
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //variaveis de planeta
    planetasResponse: null,
    planeta : null,

    //variavel de controle dos card global
    globalCard : null,

    //variaveis para consultas externas
    pessoaExterna: null,
    filmeExterno: null,

    pessoasResponse: null,
    pessoa: null,
  },
  mutations: {
    UPDATE_GLOBAL_CARD(state, payload){
      state.globalCard = payload
    },
    UPDATE_PLANETAS(state, payload){
      state.planetasResponse = payload
    },
    UPDATE_PLANETA(state, payload){
      state.planeta = payload
    },
    UPDATE_PESSOA_EXTERNA(state, payload){
      state.pessoaExterna = payload
    },
    UPDATE_FILME_EXTERNO(state, payload){
      state.filmeExterno = payload
    }
  },
  actions: {
    //AÇOES REFERENTES A PAGINA DE PLANETAS
    fetchPlanetas(context, url){
      fetch(url)
        .then(resp => resp.json())
        .then(rj => {
          context.commit("UPDATE_PLANETAS", rj)
        })
    },
    nextPagePlanetas(context){
      fetch(context.state.planetasResponse.next)
        .then(resp => resp.json())
        .then(rj => {
          context.commit("UPDATE_PLANETAS", rj)
        })
    },
    prevPagePlanetas(context){
      fetch(context.state.planetasResponse.previous)
        .then(resp => resp.json())
        .then(rj => {
          context.commit("UPDATE_PLANETAS", rj)
        })
    },
    //ACOES REFERENTES A PAGINA DE NAVES
    //ACOES REFERENTES A PAGINA DE VEICULOS
    //ACOES REFERENTES A PAGINA DE PESSOAS
    async fetchPessoa(context, url){
      fetch(url)
        .then(resp => resp.json())
        .then(resp => {
          context.commit("UPDATE_PESSOA_EXTERNA", resp)
        })
    },

    //ACOES DE CONSULTAS EXTERNAS
    async fetchPessoasExternas(context, listaMoradores){
      context.commit("UPDATE_PESSOA_EXTERNA", listaMoradores)
    },
    async fetchFilmesExternos(context, listaFilmes){
      context.commit("UPDATE_FILME_EXTERNO", listaFilmes)
    }
  },
  modules: {
  }
})

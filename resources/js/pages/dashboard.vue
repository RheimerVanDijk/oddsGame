<template>
  <div>
    <navigation></navigation>
    <div class="games">
      <ul class="list-group game-items" v-if="games != null">
        <game
          v-for="(game, index) in games"
          :key="index"
          :gameData="game"
          @click.native="openBetModel(game.id)"
        ></game>
      </ul>
    </div>
    <betModal v-if="betModelState"></betModal>
  </div>
</template>

<script>
export default {
  components: {
    navigation: () => import("../components/nav"),
    game: () => import("../components/game"),
    betModal: () => import("../components/betModal"),
  },
  data() {
    return {
      games: null,
    }
  },
  computed: {
    betModelState() {
      return this.$store.getters.getBetModelState
    },
  },
  mounted() {
    this.$http({
      url: `games/getAll`,
      method: "get",
    }).then(res => {
      this.games = res.data
    })

    this.$http({
      url: `games/stacks`,
      method: "get",
    }).then(res => {
      console.log(res.data)
      this.$store.commit("mutateStacks", res.data)
    })
  },
  methods: {
    openBetModel(id) {
      console.log(id)
      let filterdObject = this.games.filter(obj => {
        return obj.id == id
      })
      console.log(filterdObject[0])
      this.$store.commit("mutateBetModelState", true)
      this.$store.commit("mutateSelectedGameObject", filterdObject[0])
    },
  },
}
</script>

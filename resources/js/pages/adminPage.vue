<template>
  <div>
    <navigation></navigation>
    <div class="games">
      <ul class="list-group game-items adminGamesControls" v-if="games != null">
        <game
          v-for="(game, index) in games"
          :key="index"
          :gameData="game"
        ></game>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navigation: () => import("../components/nav"),
    game: () => import("../components/controlGames"),
  },
  data() {
    return {
      games: null,
    }
  },
  computed: {
    getUpdateList() {
      return this.$store.getters.getUpdateList
    },
  },
  watch: {
    getUpdateList() {
      this.games = null
      this.$http({
        url: `games/getAll`,
        method: "get",
      }).then(res => {
        this.games = res.data
      })

      this.$store.commit("mutateUpdateList", false)
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
}
</script>

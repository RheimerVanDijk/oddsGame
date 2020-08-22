<template>
  <div>
    <navigation></navigation>
    <div class="games">
      <ul class="list-group game-items">
        <bets v-for="(bet, index) in bids" :key="index" :data="bet"></bets>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navigation: () => import("../components/nav"),
    bets: () => import("../components/bets"),
  },
  data() {
    return {
      bids: null,
    }
  },
  mounted() {
    this.$http({
      url: `games/getAllBids`,
      method: "get",
    }).then(res => {
      this.bids = res.data
      console.log(res.data)
    })
  },
}
</script>

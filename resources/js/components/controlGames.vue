<template>
  <button
    class="list-group-item game-item"
    type="button"
    data-toggle="modal"
    data-target="#betModal"
  >
    <div class="text">
      <div class="top">{{ gameData.thuis }} - {{ gameData.uit }}</div>
      <div class="bottom">{{ gameData.tijd }}</div>
    </div>
    <div class="odds">
      <button
        type="button"
        class="btn btn-outline-success mr-3"
        @click="finish(0)"
      >
        Gewonnen
      </button>
      <button
        type="button"
        class="btn btn-outline-warning mr-3"
        @click="finish(1)"
      >
        Gelijk
      </button>
      <button
        type="button"
        class="btn btn-outline-danger mr-3"
        @click="finish(2)"
      >
        Verloren
      </button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </button>
</template>

<script>
export default {
  props: ["gameData"],
  mounted() {
    console.log(this.gameData)
  },
  methods: {
    finish(type) {
      this.$http({
        url: `games/finish`,
        method: "POST",
        data: {
          id: this.gameData.id,
          type: type,
        },
      }).then(res => {
        this.$http({
          url: `games/stacks`,
          method: "get",
        }).then(res => {
          console.log(res.data)
          this.$store.commit("mutateStacks", res.data)
        })

        this.$store.commit("mutateUpdateList", true)
      })
    },
  },
}
</script>

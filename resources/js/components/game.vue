<template>
  <button
    class="list-group-item game-item"
    type="button"
    data-toggle="modal"
    data-target="#betModal"
    v-if="gameState"
  >
    <div class="text">
      <div class="top">{{ gameData.thuis }} - {{ gameData.uit }}</div>
      <div class="bottom">{{ gameData.tijd }}</div>
    </div>
    <div class="odds">
      <div>
        {{ gameData.thuis }} (win):
        <span class="badge badge-primary badge-pill">{{ gameData.win }}</span>
      </div>
      <div>
        Gelijk:
        <span class="badge badge-primary badge-pill">
          {{
          gameData.gelijk
          }}
        </span>
      </div>
      <div>
        {{ gameData.uit }} (verlies):
        <span class="badge badge-primary badge-pill">
          {{
          gameData.verlies
          }}
        </span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["gameData"],
  data() {
    return {
      gameState: true,
    }
  },
  mounted() {
    console.log(this.gameData)

    const dateNow = new Date().getTime()
    const dateGame = new Date(this.gameData.tijd).getTime()

    if (dateNow < dateGame) {
    } else {
      this.gameState = false
    }
  },
}
</script>

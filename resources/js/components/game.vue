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
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    const splitDate = this.gameData.tijd.split(/-|\s|:/g)

    const dateNow = new Date().getTime()
    const dateGame = new Date(
      `${monthNames[parseInt(splitDate[1] - 1)]}-${splitDate[2]}-${
        splitDate[0]
      } ${splitDate[2]}:${splitDate[3]}:${splitDate[5]}`
    ).getTime()

    if (dateNow < dateGame) {
    } else {
      this.gameState = false
    }
  },
}
</script>

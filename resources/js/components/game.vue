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
      <div>
        Ajax:
        <span class="badge badge-primary badge-pill">{{ gameData.win }}</span>
      </div>
      <div>
        Gelijk:
        <span class="badge badge-primary badge-pill">{{
          gameData.gelijk
        }}</span>
      </div>
      <div>
        Psv:
        <span class="badge badge-primary badge-pill">{{
          gameData.verlies
        }}</span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["gameData"],
  mounted() {
    console.log(this.gameData)
  },
}
</script>

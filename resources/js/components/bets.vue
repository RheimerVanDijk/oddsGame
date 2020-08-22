<template>
  <button
    class="list-group-item game-item"
    type="button"
    data-toggle="modal"
    data-target="#exampleModal"
  >
    <div class="text">
      <div class="top">{{ data.thuis }} - {{ data.uit }}</div>
      <div class="bottom">{{ data.tijd }}</div>
    </div>
    <div class="odds">
      <div>
        {{ types[data.bidType] }} | {{ bidMulti }}:
        <span class="badge badge-primary badge-pill">${{ data.bid }}</span>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: ["data"],
  computed: {
    bidMulti() {
      if (this.data.bidType == 0) {
        return this.data.win
      } else if (this.data.bidType == 1) {
        return this.data.gelijk
      } else if (this.data.bidType == 2) {
        return this.data.verlies
      }
    },
  },
  data() {
    return {
      types: ["winnen", "gelijk", "verliezen"],
    }
  },
  mounted() {
    console.log(this.data)
  },
}
</script>

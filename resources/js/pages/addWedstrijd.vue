<template>
  <div>
    <navigation></navigation>
    <div class="container-fluid mt-3">
      <div class="row mb-3 addGameInputs">
        <div class="col">
          <input type="text" class="form-control" placeholder="Thuis team" v-model="thuis" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Uit team" v-model="uit" />
        </div>
        <div class="col">
          <input type="datetime-local" class="form-control" placeholder="Tijd" v-model="tijd" />
        </div>
      </div>
      <div class="row mb-3 addGameInputs">
        <div class="col">
          <input type="text" class="form-control" placeholder="Win kansen" v-model="win" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Gelijk kansen" v-model="gelijk" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Verlies kansen" v-model="verlies" />
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <button
            type="button"
            class="btn btn-success"
            style="width: 100%;"
            @click="makeGame"
          >Wedstrijd toevoegen</button>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    navigation: () => import("../components/nav"),
  },
  data() {
    return {
      thuis: "",
      uit: "",
      tijd: "",
      win: "",
      gelijk: "",
      verlies: "",
    }
  },
  methods: {
    makeGame() {
      // console.log(this.tijd)
      const test = this.tijd
      console.log(test)

      this.$http({
        url: `games/create`,
        method: "POST",
        data: {
          thuis: this.thuis,
          uit: this.uit,
          tijd: this.tijd,
          win: this.win,
          gelijk: this.gelijk,
          verlies: this.verlies,
        },
      }).then((res) => {
        console.log(res)
      })

      this.thuis = ""
      this.uit = ""
      this.tijd = ""
      this.win = ""
      this.gelijk = ""
      this.verlies = ""
    },
  },
}
</script>

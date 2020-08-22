<template>
  <div
    class="modal fade show betmodel"
    style="display: block;"
    id="betModal"
    tabindex="-1"
    aria-labelledby="betModal"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Weddenschap {{ SelectedGameObject.thuis }} -
            {{ SelectedGameObject.uit }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="closeModel"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <h5>{{ SelectedGameObject.thuis }} - {{ SelectedGameObject.uit }}</h5>
          <div class="input-group mb-3 d-flex">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                >Winnen | {{ SelectedGameObject.win }}</span
              >
            </div>
            <input
              type="number"
              class="form-control win"
              placeholder="Inzet"
              aria-label="Inzet"
              aria-describedby="basic-addon1"
              v-model="win"
              min="0.5"
            />
            <small class="form-text text-muted w-100"
              >Je maakt kan op: ${{ winMakes }}</small
            >
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                >Gelijk | {{ SelectedGameObject.gelijk }}</span
              >
            </div>
            <input
              type="number"
              class="form-control gelijk"
              placeholder="Inzet"
              aria-label="Inzet"
              aria-describedby="basic-addon1"
              v-model="gelijk"
              min="0.5"
            />
            <small class="form-text text-muted w-100"
              >Je maakt kan op: ${{ gelijkMakes }}</small
            >
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"
                >verliezen | {{ SelectedGameObject.verlies }}</span
              >
            </div>
            <input
              type="number"
              class="form-control verlies"
              placeholder="Inzet"
              aria-label="Inzet"
              aria-describedby="basic-addon1"
              v-model="verlies"
              min="0.5"
            />
            <small class="form-text text-muted w-100"
              >Je maakt kan op: ${{ verliesMakes }}</small
            >
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal"
            @click="closeModel"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="bid">
            Bieden
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    SelectedGameObject() {
      return this.$store.getters.getSelectedGameObject
    },
    winMakes() {
      return (this.win * this.SelectedGameObject.win).toFixed(2)
    },
    gelijkMakes() {
      return (this.gelijk * this.SelectedGameObject.gelijk).toFixed(2)
    },
    verliesMakes() {
      return (this.verlies * this.SelectedGameObject.verlies).toFixed(2)
    },
  },
  watch: {
    win() {
      if (this.win > 0.0) {
        document.querySelector(".gelijk").disabled = true
        document.querySelector(".verlies").disabled = true
      } else {
        document.querySelector(".gelijk").disabled = false
        document.querySelector(".verlies").disabled = false
      }
    },
    gelijk() {
      if (this.gelijk > 0.0) {
        document.querySelector(".win").disabled = true
        document.querySelector(".verlies").disabled = true
      } else {
        document.querySelector(".win").disabled = false
        document.querySelector(".verlies").disabled = false
      }
    },
    verlies() {
      if (this.verlies > 0.0) {
        document.querySelector(".gelijk").disabled = true
        document.querySelector(".win").disabled = true
      } else {
        document.querySelector(".gelijk").disabled = false
        document.querySelector(".win").disabled = false
      }
    },
  },
  data() {
    return {
      win: "",
      gelijk: "",
      verlies: "",
    }
  },
  mounted() {
    console.log("OPEN")
    console.log(this.SelectedGameObject)
  },
  methods: {
    closeModel() {
      this.$store.commit("mutateBetModelState", false)
      this.$store.commit("mutateSelectedGameObject", {})
    },
    bid() {
      let bidsArray = {}

      if (this.win >= 0.5) {
        bidsArray = { type: 0, bid: this.win }
      }

      if (this.gelijk >= 0.5) {
        bidsArray = { type: 1, bid: this.gelijk }
      }

      if (this.verlies >= 0.5) {
        bidsArray = { type: 2, bid: this.verlies }
      }

      this.$http({
        url: `games/bid`,
        method: "POST",
        data: {
          bidType: bidsArray.type,
          bid: bidsArray.bid,
          game: this.SelectedGameObject.id,
        },
      }).then(res => {
        this.$http({
          url: `games/stacks`,
          method: "get",
        }).then(res => {
          this.$store.commit("mutateBetModelState", false)
          this.$store.commit("mutateSelectedGameObject", {})
          console.log(res.data)
          this.$store.commit("mutateStacks", res.data)
        })
      })
    },
  },
}
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link tag="a" to="/dashboard" class="nav-link" href="#"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            tag="a"
            to="/mijnWeddenschappen"
            class="nav-link"
            href="#"
            >Mijn weddenschappen</router-link
          >
        </li>
        <li class="nav-item" v-if="$auth.check(2)">
          <router-link tag="a" to="/addWedstrijd" class="nav-link" href="#"
            >Weddenschap toevoegen</router-link
          >
        </li>
        <li class="nav-item" v-if="$auth.check(2)">
          <router-link tag="a" to="/adminPage" class="nav-link" href="#"
            >weddenschappen lijst</router-link
          >
        </li>
      </ul>
    </div>
    <span class="navbar-text text-right mr-3"> Stacks: ${{ stacks }} </span>
    <span class="navbar-text text-right" @click="logout">
      logout
    </span>
  </nav>
</template>

<script>
export default {
  computed: {
    stacks() {
      return this.$store.getters.getStacks
    },
  },
  mounted() {
    console.log("gay")
    console.log(this.$store.getters.getStacks)

    this.$http({
      url: `games/stacks`,
      method: "get",
    }).then(res => {
      console.log(res.data)
      this.$store.commit("mutateStacks", res.data)
    })
  },
  methods: {
    logout() {
      this.$router.push({ name: "logout" })
    },
  },
}
</script>

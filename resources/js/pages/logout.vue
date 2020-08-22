<template></template>
<script>
export default {
  mounted() {
    this.logout()
  },
  methods: {
    logout() {
      // get the redirect object
      this.$auth.logout({
        error: err => {
          this.has_error = true
        },
        rememberMe: true,
        fetchUser: true,
      })
    },
  },
}
</script>

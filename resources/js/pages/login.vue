<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="form-container d-flex align-items-center">
          <form style="width: 100%;" v-if="loginState">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>
            <button type="button" class="btn btn-success" @click="login">
              Login
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="loginState = false"
            >
              Register
            </button>
          </form>
          <form style="width: 100%;" v-if="loginState != true">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="reg_email"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="reg_password"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword2">Repeat password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword2"
                v-model="reg_password_confirmation"
              />
            </div>
            <button class="btn btn-success" @click="register">
              Make account!
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="loginState = true"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginState: true,
      email: "",
      password: "",
      reg_email: "",
      reg_password: "",
      reg_password_confirmation: "",
      has_error: false,
      error: "",
      errors: {},
      success: false,
    }
  },
  methods: {
    register() {
      this.$auth.register({
        data: {
          email: this.reg_email,
          password: this.reg_password,
          password_confirmation: this.reg_password_confirmation,
        },
        success: function() {
          this.success = true
          this.$router.push({
            name: "login",
            params: { successRegistrationRedirect: true },
          })
        },
        error: function(res) {
          console.log(res.response.data.errors)
          this.has_error = true
          this.error = res.response.data.error
          this.errors = res.response.data.errors || {}
        },
      })
    },
    login() {
      // get the redirect object
      var redirect = this.$auth.redirect()
      var app = this
      this.$auth
        .login({
          data: {
            email: app.email,
            password: app.password,
          },
          error: function() {
            app.has_error = true
          },
          rememberMe: true,
          fetchUser: true,
        })
        .then(response => {
          const redirectTo = redirect
            ? redirect.from.name
            : this.$auth.user().role === 2
            ? "dashboard"
            : "dashboard"
          this.$router.push({ name: redirectTo })
        })
    },
  },
}
</script>

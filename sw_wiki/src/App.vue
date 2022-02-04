<template>
  <v-app>
    <v-app-bar app color="gray" dark height="100">
      <div class="d-flex align-center">
        <v-img
          alt="R2D2 Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Star Wars Wiki Name"
          class="shrink mt-1 hidden-sm-and-down d-flex align-start"
          contain
          min-width="100"
          src="./assets/sw_name_logo.png"
          width="150"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://swapi.dev/" target="_blank" text>
        <span class="mr-2">SW API</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
        <router-view />
    </v-main>

    <v-bottom-navigation v-model="value">
      <v-btn
        value="creator"
        href="https://github.com/igorpserra"
        target="_blank"
      >
        <span>Criado por: @igorpserra</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    value: "",
  }),
};
</script>

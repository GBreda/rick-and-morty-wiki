<template>
  <div v-if="loadingScreen" class="loading-screen">
    <img
      rel="preload"
      class="loading-screen__image"
      src="@/assets/img/loading.jpg"
      alt="Loading screen logo"
    />
  </div>
</template>

<script src="./loading-screen.js"></script>
<style src="./loading-screen.scss" lang="scss" scoped></style>

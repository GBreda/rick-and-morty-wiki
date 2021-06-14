<template>
  <div v-if="loadingScreen" class="loading-screen">
    <div>
      <img
        rel="preload"
        class="loading-screen__image"
        src="@/assets/img/loading.jpg"
        alt="Loading screen logo"
      />
      <p class="loading-screen--text">Loading</p>
    </div>
  </div>
</template>

<script src="./loading-screen.js"></script>
<style src="./loading-screen.scss" lang="scss" scoped></style>

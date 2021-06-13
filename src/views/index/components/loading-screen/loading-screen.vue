<template>
  <div v-show="loadingScreen" class="overlay">
    <img
      class="image"
      src="@/assets/img/loading.svg"
      alt="Loading screen logo"
    />
  </div>
</template>

<script src="./loading-screen.js"></script>
<style src="./loading-screen.scss" lang="scss" scoped></style>

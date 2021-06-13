<template>
  <transition name="alert">
    <div class="error-alert" v-if="errorAlert">
      <p class="error-alert__message">Error!</p>
      <img
        @click="toggleErrorAlert(false)"
        src="@/assets/img/close.svg"
        alt="Close icon"
      />
    </div>
  </transition>
</template>

<script src="./error-alert.js"></script>
<style src="./error-alert.scss" lang="scss" scoped></style>

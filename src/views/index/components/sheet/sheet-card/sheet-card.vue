<template>
  <div
    class="sheet-card"
    :style="{ backgroundImage: `url(${character.image})` }"
  >
    <img src="@/assets/img/close-white.svg" alt="Close icon" />
    <div class="sheet-card__content">
      <h2 class="sheet-card__content--title">{{ character.name }}</h2>
      <p class="sheet-card__content--body">{{ character.species }}</p>
    </div>
  </div>
</template>

<script src="./sheet-card.js"></script>
<style src="./sheet-card.scss" lang="scss" scoped></style>

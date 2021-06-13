<template>
  <div
    class="sheet-card"
    :style="{ backgroundImage: `url(${character.image})` }"
  >
    <div class="sheet-card__content">
      <h2>{{ character.name }}</h2>
      <p>{{ character.species }}</p>
    </div>
  </div>
</template>

<script src="./sheet-card.js"></script>
<style src="./sheet-card.scss" lang="scss" scoped></style>

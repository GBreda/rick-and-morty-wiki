<template>
  <div
    class="card"
    :style="{ backgroundImage: `url(${character.image})` }"
    @click="openSheet"
  >
    <div class="card__content">
      <h2 class="card__content__title card__content__title--color">
        {{ character.name | textShortener }}
      </h2>
      <p class="card__body__title card__body__title--color">
        {{ character.species }}
      </p>
    </div>
  </div>
</template>

<script src="./card.js"></script>
<style src="./card.scss" lang="scss" scoped></style>

<template>
  <div
    tabindex="0"
    class="card"
    :style="{ backgroundImage: `url(${character.image})` }"
    @click="openSheet"
  >
    <div class="content">
      <h2 class="content__title">
        {{ character.name | textShortener }}
      </h2>
      <p class="content__body">
        {{ character.species }}
      </p>
    </div>
  </div>
</template>

<script src="./card.js"></script>
<style src="./card.scss" lang="scss" scoped></style>

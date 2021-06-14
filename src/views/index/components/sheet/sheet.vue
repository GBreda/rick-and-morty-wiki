<template>
  <div class="overlay" v-if="isCharacterSheetOpen">
    <div class="sheet">
      <div class="card" :style="{ backgroundImage: `url(${character.image})` }">
        <div class="card--back-drop">
          <img
            @click="closeSheet"
            class="mobile-button"
            src="@/assets/img/close-white.svg"
            alt="Close icon"
          />
          <button class="button card__button" @click="closeSheet">
            Close
          </button>
          <sheet-card :character="character"></sheet-card>
        </div>
      </div>
      <div class="content">
        <div class="content__about-section">
          <h3 class="title">about</h3>
          <p class="container__content--paragraph">
            {{ aboutText }}
          </p>
        </div>
        <sheet-section title="origin" :info="character.origin"></sheet-section>
        <sheet-section
          title="location"
          :info="character.location"
        ></sheet-section>
      </div>
    </div>
  </div>
</template>

<script src="./sheet.js"></script>
<style src="./sheet.scss" lang="scss" scoped></style>

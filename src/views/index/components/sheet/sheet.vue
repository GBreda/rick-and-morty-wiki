<template>
  <div class="container" v-show="isCharacterSheetOpen">
    <div class="character-sheet">
      <div class="character-sheet__image">
        <button class="button" style="margin:20px;" @click="closeSheet">
          Close
        </button>
      </div>
      <div class="character-sheet__content">
        <div class="about-section">
          <h3 class="section-title">ABOUT</h3>
          <p class="about-section__content">
            {{ character.name }} is a {{ character.gender }}
            {{ character.species }}. He is {{ character.status }} and well. Last
            seen in {{ character.episode[0].air_date }}
          </p>
        </div>
        <div class="origin-section">
          <h3 class="section-title">ORIGIN</h3>
          <span class="origin-section__type">{{ character.origin.type }}</span>
          <h2 class="origin-section__name">{{ character.origin.name }}</h2>
          <p class="origin-section__dimension">
            {{ character.origin.dimension }}
          </p>
          <span class="origin-section__residents"
            >{{ character.origin.residents.length }} residents</span
          >
        </div>
        <div class="location-section">
          <h3 class="section-title">LOCATION</h3>
          <span class="location-section__type">{{
            character.location.type
          }}</span>
          <h2 class="location-section__name">{{ character.location.name }}</h2>
          <p class="location-section__dimension">
            {{ character.location.dimension }}
          </p>
          <span class="location-section__residents"
            >{{ character.location.residents.length }} residents</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./sheet.js"></script>
<style src="./sheet.scss" lang="scss" scoped></style>

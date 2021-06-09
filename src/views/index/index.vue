<template>
  <div class="container">
    <div class="container__logo">
      <img src="../../assets/img/logo.svg" alt="Rick and Morty logo" />
    </div>
    <div class="container__search search">
      <form @submit.prevent="searchCharacter">
        <input
          class="search__input"
          placeholder="Search Characters"
          type="text"
          v-model="searchInput"
        />
        <button class="button">Search</button>
      </form>
    </div>
    <sheet></sheet>
    <div class="container__cards">
      <card
        v-for="character in characters"
        :character="character"
        :key="character.id"
      ></card>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>

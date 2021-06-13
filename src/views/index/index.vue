<template>
  <div class="wrapper">
    <error-alert></error-alert>
    <loading-screen></loading-screen>
    <sheet></sheet>
    <div class="logo center">
      <img
        class="logo__image"
        src="@/assets/img/logo.svg"
        alt="Rick and Morty logo"
      />
    </div>
    <div class="search center">
      <form @submit.prevent="searchCharacter">
        <input
          class="search__input"
          placeholder="Search Characters"
          type="text"
          v-model="searchInput"
        />
        <button tabindex="0" class="button" @click="searchCharacter">
          Search
        </button>
      </form>
    </div>
    <div class="cards">
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

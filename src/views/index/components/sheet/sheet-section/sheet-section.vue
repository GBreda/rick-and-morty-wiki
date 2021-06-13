<template>
  <div class="section">
    <h3 class="title">{{ title }}</h3>
    <span class="section__type">{{ info.type }}</span>
    <h2 class="section__name">{{ info.name }}</h2>
    <p class="section__dimension">
      {{ info.dimension }}
    </p>
    <span class="section__residents">
      <img src="@/assets/img/people-icon.svg" alt="People icon" /><span
        class="section__residents--text"
        >{{ info.residents.length }} residents</span
      ></span
    >
  </div>
</template>

<script src="./sheet-section.js"></script>
<style src="./sheet-section.scss" lang="scss" scoped></style>

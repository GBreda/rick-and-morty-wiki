<template>
  <div class="section">
    <h3 class="title">{{ title }}</h3>
    <span class="section__type">{{ info.type }}</span>
    <h2 class="section__name">{{ info.name }}</h2>
    <p class="section__dimension">
      {{ info.dimension }}
    </p>
    <span class="section__residents"
      >{{ info.residents.length }} residents</span
    >
  </div>
</template>

<script src="./sheet-section.js"></script>
<style src="./sheet-section.scss" lang="scss" scoped></style>

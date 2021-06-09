<template>
  <div
    v-show="isCharacterSheetOpen"
    style="width: 400px; height:400px; background-color: gray;"
  >
    <button class="button" @click="closeSheet">Close</button>
    {{ character }}
  </div>
</template>

<script src="./sheet.js"></script>
<style src="./sheet.scss" lang="scss" scoped></style>

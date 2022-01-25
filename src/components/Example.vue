<template>
  <q-input
      label="example"
      outlined
      v-model="someText"/>
</template>
<script lang="ts" setup>
import {ref} from "vue";

const someText = ref('');
</script>

<script setup>
const props = defineProps(['cardTitle', 'cardScore', 'cardProject', 'stageId'])
</script>

<template>
  <div class="obj_head">
    <div class="obj_sub_head">
      <div class="card_name">
        <div>{{ props.cardTitle }}</div>
        <div><img src="/images/edit.svg" /></div>
        <div><img src="/images/basket.svg" /></div>
      </div>
      <div>
        <img src="/images/drag.svg" />
      </div>
      <div class="ball">
        Балл: <span>{{ props.cardScore }}</span>
      </div>
    </div>
  </div>
  <div class="obj_foot">
    <span class="proekt"> {{ props.cardProject }} </span>
  </div>
</template>

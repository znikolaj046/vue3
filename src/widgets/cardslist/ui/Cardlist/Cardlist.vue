<script setup>
import { gatherData, gatherCards, sortCards, setProjectFilter } from '@/entities/api'
import { Cardobject } from '@/widgets/cardobject'
import { ref, toRefs, reactive, watch } from 'vue'
import draggable from 'vuedraggable'

import { cards } from '../../../../entities/cards/index'
import { projects } from '../../../../entities/projects/index'
import { stages } from '../../../../entities/stages/index'

const filter = ''

watch(
  () => props.modelValue,
  () => { filter = props.modelValue }
);

console.log(filter)

const stagesIn = gatherData(stages)
const cardsIn = ref(gatherCards(cards, projects, stages))

function SortCards(cardsIn, direction) {   
  sortCards(cardsIn, direction);
}

</script>
<template>
  <div class="cards">
    <div class="card" :key="stage.id" v-for="(stage, index) in stagesIn">
      <div class="station_header">
        <div>{{ stage.name }}</div>
        <div>
          <a href="javascript:;;" v-on:click="SortCards(cardsIn[index], 1)"><img src="/images/adown.svg" /></a
          ><a href="javascript:;;" v-on:click="SortCards(cardsIn[index], -1)"><img src="/images/aup.svg" /></a>
        </div>
      </div>
      <draggable
        class="list-group"
        :itemKey="stage.code"
        group="people"
        v-model="cardsIn[index]"
      >
        <template #item="{ element: card }">
          <li class="card_object list-group-item" :key="card.code">
            <Cardobject
              :cardScore="card.score"
              :cardTitle="card.title"
              :cardProject="card.projectName"
              :stageId="stage.id"
            ></Cardobject>
          </li>
        </template>
      </draggable>
      <div class="card_footer">
        <a href="javascript:;;">Добавить</a>
      </div>
    </div>
  </div>
</template>
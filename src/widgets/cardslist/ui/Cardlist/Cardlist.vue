<script setup>
import { gatherData, gatherCards } from '@/entities/api'
import { Cardobject } from '@/widgets/cardobject'
import { ref } from 'vue'
import draggable from 'vuedraggable'

import { cards } from '../../../../entities/cards/index'
import { projects } from '../../../../entities/projects/index'
import { stages } from '../../../../entities/stages/index'

const stagesIn = gatherData(stages)
const cardsIn = gatherCards(cards, projects, stages)
console.log(cardsIn)
</script>
<template>
  <div class="cards">
    <div class="card" :key="stage.id" v-for="(stage, index) in stagesIn">
      <div class="station_header">
        <div>{{ stage.name }} {{ index }}</div>
        <div>
          <a href="javascript:;;"><img src="/images/adown.svg" /></a
          ><a href="javascript:;;"><img src="/images/aup.svg" /></a>
        </div>
      </div>
      <draggable
        class="list-group"
        @change="log"
        @add="log"
        @remove="log"
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
<script>
export default {
  name: 'two-lists',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable
  },
  methods: {
    add: function (evt) {
      console.log(add)
      window.console.log(evt)
      //this.list.push({ name: 'Juan' })
    },
    replace: function (evt) {
      console.log(replace)
      window.console.log(evt)
      //this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned'
      }
    },
    log: function (evt) {
      window.console.log(evt)
    }
  }
}
</script>

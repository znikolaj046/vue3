<script setup>
import { projects } from '@/entities/projects/index'
import { ref, provide } from 'vue'
import { Cardlist } from '@/widgets/cardslist'

const filter = ref('')
function onChange(event) {
    filter.value = event.target.value
    //alert(filter.value)
}

</script>

<template>
  <main>
    <section>
      <header>
        <div><h1>Карточки</h1></div>
        <div class="right_head">
          <div>Проект:</div>
          <div>
            <select @change="onChange($event)">
              <option :value="project.code" :key="project.code" v-for="project in projects">
                {{ project.name }}
              </option>
            </select>
          </div>
          <div><button class="btn">Добавить карточку</button></div>
          <div><button class="btn">Сохранить изменения</button></div>
        </div>
      </header>
      <Cardlist v-model="filter.value"></Cardlist>
    </section>
  </main>
  <!--modal v-show="isModalVisible" @close="closeModal" /-->
</template>

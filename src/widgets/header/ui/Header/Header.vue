<script setup>
import { projects } from '@/entities/projects/index'
import { Cardlist } from '@/widgets/cardslist'
</script>

<template>
  <main>
    <section>
      <header>
        <div><h1>Карточки</h1></div>
        <div class="right_head">
          <div>Проект:</div>
          <div>
            <select>
              <option value="{{ project.id }}" :key="project.id" v-for="project in projects">
                {{ project.name }}
              </option>
            </select>
          </div>
          <div><button class="btn">Добавить карточку</button></div>
          <div><button class="btn">Сохранить изменения</button></div>
        </div>
      </header>
      <Cardlist></Cardlist>
    </section>
  </main>
  <!--modal v-show="isModalVisible" @close="closeModal" /-->
</template>

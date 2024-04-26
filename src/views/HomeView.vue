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
          <div><button @click="showModal" class="btn">Добавить карточку</button></div>
          <div><button @click="showModal" class="btn">Сохранить изменения</button></div>
        </div>
      </header>

      <CardList @showModal="showModal" />
    </section>
  </main>

  <modal v-show="isModalVisible" @close="closeModal" />
</template>

<script>
//import draggable from 'vuedraggable'
import CardList from '../components/cardlist/CardList.vue'
import modal from '../components/modal/Modal.vue'
import projects from '../data/projects'

export default {
  components: { CardList, modal },
  data() {
    return {
      projects: projects,
      isModalVisible: false
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    }
  }
}
</script>

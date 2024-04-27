<script setup lang="ts">
import { cards } from '@/entities/cards'
import { projects } from '@/entities/projects'
import { stages } from '@/entities/stages'
</script>
<template>
  <header>
    <section>
      <div class="middle">
        <div>
          <h1>Добавление карточки</h1>
          <div class="form_data">
            <h2>Основные данные</h2>
            <div class="subheader">Чтобы добавить карточку, нужно заполнить данные</div>
            <label>Заголовок *:</label>
          </div>
        </div>
      </div>
    </section>
  </header>
</template>

<template>
  <section class="section experience-section fade-in">
      <div class="container">
          <h2 class="title has-text-white">Doświadczenie Zawodowe</h2>
          <div class="experience">
              <div class="columns is-multiline">
                  <div class="column is-12-tablet is-6-desktop" v-for="(job, index) in jobs" :key="index">
                      <div class="card glass-card fade-in"
                           :class="{ 'is-animating': job.isAnimating }"
                           @mouseover="startAnimation(index)"
                           @mouseleave="stopAnimation(index)">
                          <div class="card-content">
                              <h3>{{ job.title }}</h3>
                              <p>{{ job.company }}</p>
                              <p>Okres zatrudnienia: {{ job.period }}</p>
                              <ul>
                                  <li v-for="task in job.tasks" :key="task">{{ task }}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',
  data() {
      return {
          jobs: [
              {
                  title: 'Projektant rozwiązań NLP',
                  company: 'Alfavox Sp.z.o.o. Poznań',
                  period: 'Październik 2022 - Marzec 2023',
                  tasks: [
                      'Tworzenie i szkolenie chatbotów oraz voicebotów w modelu szkoleniowym NLP dla Centrum Informatyki Resortu Finansów.',
                      'Pisanie dokumentacji technicznej.',
                      'Testowanie manualne.',
                      'Tworzenie scenariuszy testowych.',
                      'Praca z bazą danych SQL.',
                      'Wykonywanie obowiązków w trybie zdalnym.'
                  ],
                  isAnimating: false
              },
              {
                  title: 'Specjalista IT',
                  company: 'ASD Systems Sp. z.o.o',
                  period: 'Maj 2020 - Czerwiec 2020 (Staż)',
                  tasks: [
                      'Staż w firmie ASD Systems Sp. z.o.o, gdzie zajmowałem się tworzeniem testów automatycznych dla aplikacji internetowej do obsługi zdalnej automatów vendingowych.',
                      'Implementacja testów w języku Python.',
                      'Zapewnienie poprawności funkcji aplikacji poprzez automatyzację testów.',
                      'Nabycie praktycznych umiejętności w obszarze testowania oprogramowania.'
                  ],
                  isAnimating: false
              }
          ]
      }
  },
  methods: {
      startAnimation(index) {
          this.jobs[index].isAnimating = true;
      },
      stopAnimation(index) {
          this.jobs[index].isAnimating = false;
      }
  }
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeInAnimation 1s ease-in-out forwards;
}

@keyframes fadeInAnimation {
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
}

.experience-section {
  padding: 3rem 0;
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%; /* Ustawia wysokość na 100% */
}

.is-animating {
  transform: scale(1.05);
}

.columns.is-multiline {
  flex-wrap: wrap;
}

.column.is-12-tablet {
  width: 100%;
}

.column.is-6-desktop {
  width: 50%;
}

@media screen and (max-width: 768px) {
  .column.is-6-desktop {
      width: 100%;
  }
}
</style>

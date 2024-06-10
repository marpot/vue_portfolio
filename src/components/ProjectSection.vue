<template>
  <section class="section fade-in">
    <div class="container has-text-centered">
      <h2 class="title has-text-white">Moje projekty</h2>
    </div>
  </section>

  <section id="projects" class="section fade-in" style="margin-top: -3rem;">
    <div class="container portfolio-container">
      <div class="columns is-multiline">
        <div class="column is-12-mobile is-6-tablet is-4-desktop" v-for="(project, index) in projects" :key="index">
          <div 
            class="card glass-card fade-in project-card" 
            :class="{ 'is-animating': project.isAnimating }" 
            @mouseover="startAnimation(index)" 
            @mouseleave="stopAnimation(index)"
          >
            <header class="card-header">
              <p class="card-header-title">
                <span>{{ project.name }}</span>
                <span class="is-pulled-right">
                  <span v-for="tag in project.tags" :key="tag.text" class="tag" :class="tag.color">{{ tag.text }}</span>
                </span>
              </p>
            </header>
            <div class="card-content">
              <figure class="image project-image-container">
                <img :src="project.image" :alt="project.alt" class="project-image">
              </figure>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item has-text-white">Podgląd</a>
              <a href="#" class="card-footer-item has-text-white">Kod źródłowy</a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      projects: [
        { 
          name: 'Portfolio', 
          image: 'images/portfolio.png', 
          alt: 'portfolioApp', 
          tags: [
            { text: 'HTML5', color: 'is-danger' },
            { text: 'Bulma CSS', color: 'is-success' },
            { text: 'Vue.js', color: 'is-link' }
          ],
          isAnimating: false
        },
        { 
          name: 'Następny projekt', 
          image: 'images/znak_zapytania/20943401.jpg', 
          alt: 'Zdjęcie', 
          tags: [
            { text: 'HTML5', color: 'is-danger' },
            { text: 'Tailwind CSS', color: 'is-success' },
            { text: 'Vue.js', color: 'is-link' }
          ],
          isAnimating: false
        }
      ]
    }
  },
  methods: {
    startAnimation(index) {
      this.projects[index].isAnimating = true;
    },
    stopAnimation(index) {
      this.projects[index].isAnimating = false;
    }
  }
};
</script>

<style scoped>
.card-footer-item {
  margin-right: 10px;
}

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100%; /* Upewnij się, że karta zajmuje pełną wysokość */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.is-animating {
  transform: scale(1.05);
}

.project-image-container {
  height: 200px; /* Stała wysokość kontenera obrazu */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image {
  max-height: 100%;
  width: auto;
}

/* Animacja pojawiania się */
.fade-in {
  opacity: 0;
  animation: fadeInAnimation ease 2s;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

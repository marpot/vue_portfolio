<template>
  <section id="skills" class="section fade-in" style="margin-top: -3rem;">
    <div class="container">
      <h2 class="title has-text-centered has-text-white" style="margin-bottom: 2rem;">Umiejętności</h2>
      <div class="columns is-flex is-flex-wrap-wrap" style="margin-top: 2rem;">
        <div 
          v-for="(skill, index) in skills" 
          :key="index" 
          class="column is-one-quarter-desktop is-half-tablet is-full-mobile"
          @mouseover="startAnimation(index)"
          @mouseleave="stopAnimation(index)"
        >
          <div class="card glass-card fade-in" :class="{ 'animated': isAnimating[index] }">
            <div class="card-content">
              <h3 class="subtitle has-text-centered">{{ skill.name }}</h3>
              <div class="custom-box is-flex is-align-items-center is-justify-content-center">
                <figure class="image is-128x128">
                  <img class="tech-image" :src="skill.image" :alt="skill.alt">
                </figure>
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
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { name: 'HTML & CSS', image: 'images/HTML5_Logo_512.png', alt: 'HTML5 Logo' },
        { name: 'Tailwind CSS', image: 'images/tailwind.png', alt: 'Tailwind CSS Logo' },
        { name: 'Bulma CSS', image: 'images/Bulma_Logo.png', alt: 'Bulma CSS Logo' }, 
        { name: 'JavaScript', image: 'images/js.png', alt: 'JavaScript Logo' }
      ],
      isAnimating: [false, false, false, false]
    }
  },
  methods: {
    startAnimation(index) {
      this.isAnimating.splice(index, 1, true);
    },
    stopAnimation(index) {
      this.isAnimating.splice(index, 1, false);
    }
  }
}
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

.tech-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}

.card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100%;
  transition: transform 0.3s ease;
}

.card.animated {
  transform: scale(1.1);
}

.custom-box {
  height: 100%;
}

/* Media Queries for Responsiveness */
@media (max-width: 1024px) {
  .column.is-one-quarter-desktop {
    width: 50%;
  }
}

@media (max-width: 768px) {
  .column.is-half-tablet {
    width: 100%;
  }
}
</style>

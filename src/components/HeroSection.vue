<template>
  <section class="section fade-in" style="margin-top: -3rem;">
    <div class="container">
      <div class="card glass-card fade-in" 
           @mouseover="startAnimation" 
           @mouseleave="stopAnimation" 
           :class="{ 'is-animating': isAnimating }">
        <div class="card-content">
          <h2 class="title has-text-centered has-text-white" style="margin-bottom: 2rem;">O mnie</h2>
          <div class="columns is-flex is-align-items-center is-multiline">
            <div class="column is-half-desktop is-full-mobile has-text-white">
              <p>Witaj! Jestem Marcin, pasjonat nowych technologii i kreatywnego kodowania. Z zapałem podchodzę do tworzenia estetycznych i funkcjonalnych interfejsów użytkownika oraz do rozwiązywania wyzwań związanych z web developmentem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      isAnimating: false
    };
  },
  methods: {
    startAnimation() {
      this.isAnimating = true;
    },
    stopAnimation() {
      this.isAnimating = false;
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

.glass-card {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}

.is-animating {
  transform: scale(1.05);
}

.columns.is-flex {
  display: flex;
}

.columns.is-align-items-center {
  align-items: center;
}

.columns.is-multiline {
  flex-wrap: wrap;
}

.column.is-half-desktop {
  width: 50%;
}

.column.is-full-mobile {
  width: 100%;
  margin-bottom: 1rem;
}
</style>

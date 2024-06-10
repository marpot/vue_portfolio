<template>
  <div id="app">
    <HeroSection />
    <SkillsSection />
    <ProjectSection />
    <ExperienceSection />
    <ContactSection />
    <PortfolioFooter />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import PortfolioFooter from './components/PortfolioFooter.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'

export default {
  name: 'App',
  components: {
    PortfolioFooter,
    HeroSection,
    ProjectSection,
    SkillsSection,
    Footer,
    ExperienceSection,
    ContactSection,
  },
}
</script>

<style>
@import './assets/styles.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #a3081c;
  background: linear-gradient(264deg, #68087d, #58096b, #3f35ea);
  background-size: 600% 600%;
}
</style>

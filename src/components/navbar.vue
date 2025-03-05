<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <div className="wrapper fixed w-full flex items-center justify-center z-50 pt-12 ">
      <nav
        className="text-white-smull flex gap-4 py-3 px-12 justify-center bg-primary rounded-2xl border border-white"
      >
        <RouterLink to="/">About</RouterLink>
        <RouterLink to="/">Projects</RouterLink>
        <RouterLink to="/">Testimonials</RouterLink>
        <RouterLink to="/">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

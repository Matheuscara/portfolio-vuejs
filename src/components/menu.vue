<script setup lang="ts">
import { useLanguageStore } from '@/stores/language'
import { onMounted, computed } from 'vue'

const languageStore = useLanguageStore()

const texts = computed(() => languageStore.texts)

onMounted(async () => {
  await languageStore.setLanguage(languageStore.selectedLanguage) // Isso já chama `setTexts`
})
</script>

<template>
  <div
    class="w-screen bg-no-repeat bg-cover bg-center animate__animated animate__fadeIn"
    :style="{ backgroundImage: `url('/svgs/home-bg.svg')` }"
  >
    <section class="menu w-screen bg-no-repeat bg-cover bg-center relative pb-45 m-auto">
      <div
        class="div1 relative bg-transparent bg-no-repeat bg-cover bg-center h-50 rounded-3xl z-10 animate__animated animate__fadeInLeft"
        :style="{ backgroundImage: `url('/images/notebook.png')` }"
      >
        <div class="inner-box"></div>
        <img
          class="absolute top-30 left-15 animate__animated animate__pulse animate__infinite"
          src="/images/click-with-coment.png"
          alt="click-with-coment"
        />
        <img
          class="absolute bottom-50 right-15 animate__animated animate__pulse animate__infinite"
          src="/images/click-with-coment-yelow.png"
          alt="click-with-coment"
        />
        <span
          class="absolute leading-120% text-bold bottom-15 text-xl md:text-3xl left-10 text-white animate__delay-1s animate__animated animate__fadeIn"
        >
          {{ texts?.MENU?.CARD1 }}
        </span>
      </div>

      <div
        class="div2 bg-bgtertiary relative rounded-3xl z-10 animate__animated animate__fadeInRight"
      >
        <div
          class="inner-box z-10 bg-no-repeat bg-bottom bg-contain"
          :style="{ backgroundImage: `url('/svgs/estates-bg.svg')` }"
        ></div>

        <p
          class="z-20 text-white text-bold text-xl md:text-3xl p-10 animate__delay-1s animate__animated animate__fadeIn"
        >
          {{ texts?.MENU?.CARD2 }}
        </p>
      </div>

      <div
        class="div3 bg-bgtertiary flex relative rounded-3xl z-10 items-center animate__animated animate__fadeInRight"
      >
        <div class="inner-box"></div>

        <p
          class="z-20 text-white text-bold text-xl md:text-3xl pl-10 flex flex-col animate__delay-1s animate__animated animate__fadeIn"
        >
          <span class="text-white-soft text-base">{{ texts?.MENU?.CARD3 }}</span>
          {{ texts?.MENU?.CARD3A }}
        </p>
      </div>

      <div
        class="div4 bg-bgtertiary flex relative rounded-3xl z-10 items-center animate__animated animate__fadeInRight"
      >
        <div class="inner-box bg-no-repeat bg-cover bg-center"></div>
        <span
          class="code-bg-by-phone w-full h-full bg-no-repeat bg-right absolute"
          :style="{ backgroundImage: `url('/images/code-bg.png')` }"
        ></span>
        <span
          class="w-full h-full bg-no-repeat bg-cover bg-center absolute"
          :style="{ backgroundImage: `url('/images/card-bg.png')` }"
        ></span>
        <p
          class="z-20 text-white text-bold text-xl md:text-3xl pl-10 flex flex-col animate__delay-1s animate__animated animate__fadeIn"
        >
          <span class="text-white-soft text-base"> {{ texts?.MENU?.CARD4 }} </span>
          {{ texts?.MENU?.CARD4A }}
        </p>
      </div>

      <div
        class="div5 bg-bgtertiary flex relative rounded-3xl z-10 items-center animate__animated animate__fadeInRight"
      >
        <div class="inner-box"></div>
        <span
          class="w-full h-full bg-no-repeat bg-cover bg-center absolute"
          :style="{ backgroundImage: `url('/images/card-bg.png')` }"
        ></span>
        <span
          class="w-full h-22 bg-no-repeat bg-right absolute bottom-0"
          :style="{ backgroundImage: `url('/svgs/iphone-bg.svg')` }"
        ></span>
        <p
          class="text-white text-bold text-xl md:text-2xl pl-7 animate__delay-1s animate__animated animate__fadeIn"
        >
          {{ texts?.MENU?.CARD5 }}
        </p>
      </div>
      <div
        class="div6 bg-bgtertiary w-full flex relative rounded-3xl z-10 items-center animate__animated animate__fadeInRight"
      >
        <div class="inner-box"></div>
        <span
          class="w-full h-full bg-no-repeat absolute rounded-3xl"
          :style="{ backgroundImage: `url('/images/bolun-color-bg.png')` }"
        ></span>
        <p
          class="text-white w-full text-bold text-xl animate__delay-1s animate__animated animate__fadeIn text-center flex flex-col items-center"
        >
          {{ texts?.MENU?.CARD6 }}
          <button
            class="bg-primary text-sm text-white tracking-tight rounded-md border border-white mt-2 px-3 py-1 animate__animated animate__pulse animate__infinite"
          >
            {{ texts?.MENU?.CARD6A }}
          </button>
        </p>
      </div>
    </section>
  </div>
</template>

<style>
.inner-box {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 1.5rem;
  box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.6);
  padding: 20px;
  position: absolute;
}

.menu {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(8, auto);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding-left: 40px;
  padding-right: 40px;
  max-width: 1400px;
}

.div1 {
  min-height: 541px;
  grid-area: 1 / 1 / 5 / 5;
  margin-right: 30px;
}

.div2 {
  min-height: 255px;
  grid-area: 1 / 5 / 3 / 8;
  margin-bottom: 30px;
}

.div3 {
  min-height: 255px;
  grid-area: 3 / 5 / 5 / 8;
  margin-bottom: 30px;
}

.div4 {
  min-height: 300px;
  grid-area: 5 / 3 / 9 / 8;
  margin-left: 30px;
}

.div5 {
  min-height: 150px;
  grid-area: 5 / 1 / 7 / 3;
  margin-bottom: 30px;
}

.div6 {
  min-height: 150px;
  grid-area: 7 / 1 / 9 / 3;
}

@media (max-width: 768px) {
  .menu {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    padding-left: 10px;
    padding-right: 10px;
  }

  .div1 {
    grid-area: 1 / 1 / 2 / 5;
    margin-right: 0px;
    min-height: 450px;
  }

  .div2 {
    margin-top: 30px;
    margin-bottom: 0px;
    min-height: 155px;

    grid-area: 2 / 1 / 3 / 5;
  }

  .div3 {
    min-height: 155px;
    margin-top: 30px;
    grid-area: 3 / 1 / 4 / 5;
  }

  .div4 {
    min-height: 200px;
    margin-left: 0px;
    margin-bottom: 30px;
    grid-area: 4 / 1 / 5 / 5;
  }

  .div5 {
    min-height: 100px;

    grid-area: 5 / 1 / 6 / 5;
  }

  .div6 {
    min-height: 100px;

    grid-area: 6 / 1 / 7 / 5;
  }

  .code-bg-by-phone {
    width: 200px;
    right: 0px;
    background-position: left;
  }
}
</style>

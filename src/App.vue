<script setup>
import { useMainStore } from '@/stores/main'
import logo from '@/assets/images/desktop/logo.svg?url'
import iconHamburger from '@/assets/images/mobile/icon-hamburger.svg?url'
import iconCross from '@/assets/images/mobile/icon-cross.svg?url'
import pttWaveRed from '@/assets/images/desktop/bg-pattern-wave-red.svg?url'
import pttWaveWhite from '@/assets/images/desktop/bg-pattern-wavy-white.svg?url'

import BtnArrow from './components/BtnArrow.vue'

const store = useMainStore()
</script>
<script>
export default {
  data() {
    return {
      isNavOpen: false,
      isBtnStratHovered: false,
      navData: [
        'About',
        'Service',
        'Projects',
      ],
      listData: [
        {
          id: 1,
          header: 'Brand strategy',
          main: 'Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.',
        },
        {
          id: 2,
          header: 'Brand design',
          main: 'Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.',
        },
        {
          id: 3,
          header: 'Web design',
          main: 'A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.',
        },
      ]
    }
  },
  computed: {
    getHoverColor() {
      let text
      let line
      if (this.isBtnStratHovered) {
        text = 'text-neo-hover-red'
        line = 'bg-neo-hover-red'
      } else {
        text = 'text-neo-red'
        line = 'bg-neo-red'
      }
      return { text, line }
    }
  }
}
</script>
<template>
  <body class=" flex flex-col items-center font-commissioner text-neo-Text">
    <header
      class=" relative w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] pt-[6.875rem] TB:pt-0 pb-24 TB:pb-0 overflow-hidden">
      <nav
        class=" fixed TB:relative top-0 flex justify-between items-center w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] px-6 py-10 TB:py-0 TB:pl-10 TB:pr-0 DT:pl-[10.25rem] bg-neo-white select-none z-10">
        <img :src="logo" alt="logo" draggable="false">
        <!-- Nav Mobile -->
        <button @click=" isNavOpen = !isNavOpen"
          class=" relative flex TB:hidden justify-center items-center w-[24px] h-[24px]">
          <Transition name="fade-nav">
            <img v-show="!isNavOpen" class=" absolute" :src="iconHamburger" alt="iconHamburger" draggable="false">
          </Transition>
          <Transition name="fade-nav">
            <img v-show="isNavOpen" class=" absolute" :src="iconCross" alt="iconCross" draggable="false">
          </Transition>
        </button>
        <Transition name="fade-nav">
          <div v-show="isNavOpen" class=" absolute top-full left-0 flex TB:hidden flex-col w-full pr-7">
            <div class=" flex flex-col self-end items-center gap-6 px-7 pt-8 pb-7 bg-neo-BG text-neo-white">
              <button v-for="item in navData" class=" hover:text-neo-red text-[1.125rem] leading-[2rem]">
                {{ item }}
              </button>
              <button
                class=" w-[199px] h-16 bg-neo-red hover:bg-white hover:text-neo-red text-[1rem] leading-[1.25rem] font-extrabold select-none">
                Schedule a Call
              </button>
            </div>
          </div>
        </Transition>
        <!--  -->
        <!-- Nav Desktop -->
        <div class=" hidden TB:flex gap-7 DT:gap-12 bg-neo-red py-14 pl-8 DT:pl-[4.25rem] pr-10 DT:pr-[10.25rem]">
          <div class=" flex gap-[1.25rem] DT:gap-8">
            <button v-for="item in navData"
              class=" w-14 text-neo-white text-[.9375rem] DT:text-[1rem] leading-[2rem] hover:font-bold">
              {{ item }}
            </button>
          </div>
          <button
            class=" w-[147px] DT:w-[199px] h-[64px] bg-neo-BG hover:bg-neo-one text-neo-white text-[1rem] leading-[1.25rem] font-extrabold">
            Schedule a Call
          </button>
        </div>
        <!--  -->
      </nav>
      <div class=" relative flex flex-col TB:flex-row items-start TB:h-[606px] DT:h-[800px]">
        <div
          :class="` TB:absolute TB:right-0 w-full h-[200px] TB:w-[57%] TB:h-full mb-14 TB:mb-0 ${store.joinArr(store.bgHeader)} bg-cover bg-center bg-no-repeat`">
        </div>
        <div
          class=" TB:relative TB:w-[51.75%] DT:w-[40%] TB:ml-10 DT:ml-[10.25rem] TB:pt-[4.875rem] DT:pt-[7rem] px-6 TB:px-0">
          <h1
            class=" mb-6 TB:mb-7 DT:mb-10 text-[2.5rem] TB:text-[3.5rem] DT:text-[5rem] leading-[2.5rem] TB:leading-[3.5rem] DT:leading-[5.5rem] font-extrabold">
            Branding & website design agency</h1>
          <p class=" mb-10 TB:mb-8 DT:mb-12 text-[.9375rem] DT:text-[1.125rem] leading-[1.5625rem] DT:leading-[2rem]">
            We specialize in visual storytelling by creating cohesive brand and website design
            solutions for small businesses, giving lasting impressions to audiences in a digital world.
          </p>
          <button
            class=" w-[177px] h-[72px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1.125rem] leading-[1.375rem] font-extrabold select-none">
            Learn more
          </button>
        </div>
      </div>
    </header>
    <main class=" w-full max-w-[425px] TB:max-w-[1024px] DT:max-w-[1920px] text-neo-white overflow-hidden">
      <section class=" flex flex-col TB:flex-row items-start TB:h-[658px] DT:h-[984px]">
        <div
          :class="` relative w-full TB:w-[49.3%] DT:w-[51%] h-[200px] TB:h-full ${store.joinArr(store.bgStrategic)} bg-cover TB:bg-center bg-no-repeat select-none`">
          <img
            class=" absolute -bottom-3 TB:bottom-[30rem] DT:bottom-[42.5rem] left-6 TB:left-auto TB:-right-6 DT:-right-16 h-7 DT:h-[3.75rem]"
            :src="pttWaveRed" alt="pttWaveRed" draggable="false">
        </div>
        <div
          class=" flex flex-col justify-center items-start w-full TB:w-[50.7%] DT:w-[49%] h-[377px] TB:h-[538px] DT:h-[784px] px-6 TB:pl-[4.375rem] TB:pr-10 DT:pl-[9.75rem] DT:pr-[6.625rem] bg-neo-BG">
          <h2
            class=" mb-6 TB:mb-8 DT:mb-11 TB:pr-7 DT:pr-16 text-[2rem] DT:text-[3.5rem] leading-[2.5rem] DT:leading-[4rem] font-extrabold">
            <span class=" text-neo-red">Design</span> is strategic.
          </h2>
          <p class=" mb-10 TB:mb-8 DT:mb-12 text-[.9375rem] DT:text-[1.125rem] leading-[1.5625rem] DT:leading-[2rem]">
            "A well-crafted design strategy consistently produces desired outcomes and brand awareness.
            We are firm believers that success lies in creative collaboration with our clients."
          </p>
          <button @mouseenter="isBtnStratHovered = true" @mouseleave="isBtnStratHovered = false"
            class=" flex flex-col gap-2 select-none">
            <h6
              :class="` ${getHoverColor.text} text-[.9375rem] DT:text-[1.125rem] leading-[1.125rem] DT:leading-[1.375rem] font-extrabold`">
              Schedule a call</h6>
            <div :class="` w-full h-px ${getHoverColor.line}`"></div>
          </button>
        </div>
      </section>
      <section
        class=" relative TB:flex TB:justify-end bg-neo-red TB:bg-transparent TB:mt-[-7.5rem] DT:mt-[-12.5rem] px-6 py-24 TB:p-0">
        <h2
          class=" TB:absolute TB:left-10 DT:left-[10.25rem] TB:top-64 DT:top-[25rem] TB:w-[36.6%] mb-12 TB:mb-0 TB:text-neo-Text text-[2rem] DT:text-[3.5rem] leading-[2.5rem] DT:leading-[4rem] font-extrabold">
          Our approach for creating a winning brand</h2>
        <div
          class=" flex flex-col gap-10 TB:gap-[5.25rem] DT:gap-[6.25rem] TB:w-[57%] DT:w-[62.25%] TB:bg-neo-red TB:pl-11 DT:pl-[21.5rem] TB:pr-10 DT:pr-[6.625rem] TB:pt-[10.5rem] DT:pt-[15.25rem] TB:pb-[7rem] DT:pb-[12.5rem]">
          <article v-for="item in listData"
            class=" relative px-4 py-11 TB:p-0 text-[.9375rem] leading-[1.5625rem] DT:leading-[2rem]">
            <div
              class=" absolute left-0 TB:-left-4 DT:-left-[3.75rem] top-0 TB:-top-11 text-neo-white text-opacity-25 text-[5rem] leading-[5.5rem] font-extrabold select-none">
              0{{ item.id }}
            </div>
            <h4 class=" mb-4 DT:mb-6 DT:text-[1.25rem] font-extrabold capitalize">
              {{ item.header }}</h4>
            <p class=" DT:text-[1.125rem]">
              {{ item.main }}
            </p>
          </article>
        </div>
      </section>
      <section class=" relative flex flex-col TB:flex-row-reverse">
        <div class=" relative w-full TB:w-[57%] h-[404px] TB:h-[472px] DT:h-[728px]">
          <div v-for="(item, index) in store.bgSlides">
            <Transition name="fade-slide">
              <div v-show="index == store.slideCount"
                :class="` absolute w-full h-full ${store.joinArr(item.bgs)} bg-cover bg-center`">
                <div
                  class=" absolute bottom-0 w-full h-[111px] TB:h-[130px] DT:h-[200px] bg-gradient-to-b from-transparent to-neo-Text">
                </div>
                <div
                  class=" relative flex flex-col justify-end items-end h-full px-8 TB:px-10 DT:px-[9.625rem] py-9 TB:py-11 DT:py-[4.25rem] text-right text-[.9375rem] leading-[1.25rem] DT:leading-[2rem]">
                  <h5 class=" DT:text-[1.25rem] font-extrabold">
                    {{ item.description }}</h5>
                  <h5 class=" DT:text-[1.125rem]">
                    {{ item.date }}</h5>
                </div>
              </div>
            </Transition>
          </div>
        </div>
        <div
          class=" TB:absolute TB:left-0 flex flex-col justify-between items-start w-full TB:w-[50.75%] h-[272px] TB:h-[352px] DT:h-[528px] px-6 TB:pl-10 TB:pr-24 DT:pl-[10.25rem] DT:pr-[8.75rem] py-16 TB:py-[6.25rem] DT:py-[9.5rem] bg-neo-BG">
          <img
            class=" absolute top-32 DT:top-48 -right-8 DT:-right-16 hidden TB:block h-7 DT:h-[3.75rem] -scale-x-100 DT:scale-x-100 select-none"
            :src="pttWaveWhite" alt="pttWaveWhite" draggable="false">
          <h2 class=" text-[2rem] DT:text-[3.5rem] leading-[2.5rem] DT:leading-[4rem] font-extrabold">
            {{ store.bgSlides[store.slideCount].main }}</h2>
          <div class=" flex gap-4">
            <BtnArrow @click="store.decrement()" direction="left" />
            <BtnArrow @click="store.increment()" direction="right" />
          </div>
        </div>
      </section>
      <section
        class=" relative flex flex-col TB:flex-row TB:justify-between items-start TB:items-center gap-12 px-6 TB:px-10 DT:px-[10.25rem] py-[6.25rem] TB:pt-[4.5rem] DT:pt-[7.5rem] DT:pb-[7.25rem]">
        <img class=" absolute -left-16 hidden DT:block select-none" :src="pttWaveRed" alt="pttWaveRed" draggable="false">
        <h2
          class=" TB:w-[58%] text-neo-Text text-[2rem] DT:text-[3.5rem] leading-[2.5rem] DT:leading-[4rem] font-extrabold">
          Let's build something great together.</h2>
        <button
          class=" w-[199px] h-[64px] bg-neo-red hover:bg-opacity-60 text-neo-white text-[1rem] leading-[1.25rem] font-extrabold select-none">
          Schedule a Call
        </button>
      </section>
    </main>
  </body>
</template>
<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity .75s ease;
}

.fade-nav-enter-active,
.fade-nav-leave-active {
  transition: opacity .15s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to,
.fade-nav-enter-from,
.fade-nav-leave-to {
  opacity: 0;
}
</style>
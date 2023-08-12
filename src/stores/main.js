import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    slideCount: 0,
    bgHeader: [
      'bg-[url(@/assets/images/mobile/image-hero.jpg)]',
      'TB:bg-[url(@/assets/images/tablet/image-hero.jpg)]',
      'DT:bg-[url(@/assets/images/desktop/image-hero.jpg)]',
    ],
    bgStrategic: [
      'bg-[url(@/assets/images/mobile/image-strategic.jpg)]',
      'TB:bg-[url(@/assets/images/tablet/image-strategic.jpg)]',
      'DT:bg-[url(@/assets/images/desktop/image-strategic.jpg)]',
    ],
    bgSlides: [
      {
        id: 1,
        bgs: [
          'bg-[url(@/assets/images/mobile/image-slide-1.jpg)]',
          'TB:bg-[url(@/assets/images/tablet/image-slide-1.jpg)]',
          'DT:bg-[url(@/assets/images/desktop/image-slide-1.jpg)]',
        ],
        main: 'Brand naming & guidelines',
        description: 'Lean Product Roadmap',
        date: '2019 project',
      },
      {
        id: 2,
        bgs: [
          'bg-[url(@/assets/images/mobile/image-slide-2.jpg)]',
          'TB:bg-[url(@/assets/images/tablet/image-slide-2.jpg)]',
          'DT:bg-[url(@/assets/images/desktop/image-slide-2.jpg)]',
        ],
        main: 'Brand identity & merchandise',
        description: 'New Majestic Hotel',
        date: '2018 Project',
      },
      {
        id: 3,
        bgs: [
          'bg-[url(@/assets/images/mobile/image-slide-3.jpg)]',
          'TB:bg-[url(@/assets/images/tablet/image-slide-3.jpg)]',
          'DT:bg-[url(@/assets/images/desktop/image-slide-3.jpg)]',
        ],
        main: 'Brand identity & web design',
        description: 'Crypto Dashboard',
        date: '2016 Project',
      },
    ],
  }),
  getters: {

  },
  actions: {
    joinArr(arrVal) {
      return arrVal.join(' ')
    },
    increment() {
      if (this.slideCount >= 2) {
        this.slideCount = 0
      } else {
        this.slideCount++
      }
    },
    decrement() {
      if (this.slideCount <= 0) {
        this.slideCount = 2
      } else {
        this.slideCount--
      }
    }
  }
})

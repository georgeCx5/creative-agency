<script>
export default {
   data() {
      return {
         isHovered: false,
      }
   },
   computed: {
      getDirection() {
         return this.direction == 'left' ? '' : '-scale-100'
      },
      getHoverState() {
         return this.isHovered ? '#FF9393' : '#F94F4F'
      }
   },
   props: {
      direction: {
         String,
         required: true,
      }
   }
}
</script>
<template>
   <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" :class="`${getDirection}`">
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
         <g transform="matrix(-1 0 0 1 40 0)" :stroke="getHoverState" fill="none" fill-rule="evenodd">
            <circle cx="20" cy="20" r="19.5" />
            <path stroke-width="2" d="M17.5 15l5 5-5 5" />
         </g>
      </svg>
   </button>
</template>
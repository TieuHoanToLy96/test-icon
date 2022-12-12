<script>
export default {
  name: 'percent-svg',
  props: {
    size: {
      type: Number,
      default: 24
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 1.7
    },
    color: {
      type: String,
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.1617 5.25L5.66174 18.75M10.1617 7.125C10.1617 8.57475 8.98649 9.75 7.53674 9.75C6.087 9.75 4.91174 8.57475 4.91174 7.125C4.91174 5.67525 6.087 4.5 7.53674 4.5C8.98649 4.5 10.1617 5.67525 10.1617 7.125ZM19.9117 16.875C19.9117 18.3247 18.7365 19.5 17.2867 19.5C15.837 19.5 14.6617 18.3247 14.6617 16.875C14.6617 15.4253 15.837 14.25 17.2867 14.25C18.7365 14.25 19.9117 15.4253 19.9117 16.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
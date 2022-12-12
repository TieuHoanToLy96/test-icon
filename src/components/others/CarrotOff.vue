<script>
export default {
  name: 'carrot-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.868 8.84594C6.112 12.2279 3 20.9999 3 20.9999C3 20.9999 11.75 17.8959 15.134 15.1499M16.801 12.8079C17.041 12.03 17.0647 11.2014 16.8696 10.4109C16.6745 9.6205 16.2681 8.89806 15.6937 8.32104C15.1194 7.74403 14.3988 7.33419 13.6093 7.13546C12.8198 6.93673 11.9911 6.9566 11.212 7.19294" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 13L7.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 8C22 8 20.86 6 19 6C17.594 6 16 8 16 8C16 8 17.14 10 19 10C20.86 10 22 8 22 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2C16 2 14 3.14 14 5C14 6.86 16 8 16 8C16 8 18 6.423 18 5C18 3.14 16 2 16 2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'forms-svg',
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
<path d="M9.75 3H3M9.75 14.3822H3M3.81818 6.34302H20.1818C20.6337 6.34302 21 6.52629 21 6.75237V9.11566C21 9.34174 20.6337 9.52501 20.1818 9.52501H3.81818C3.36631 9.52501 3 9.34174 3 9.11566V6.75237C3 6.52629 3.36631 6.34302 3.81818 6.34302ZM3.81818 17.7252H20.1818C20.6337 17.7252 21 17.9085 21 18.1346V20.5907C21 20.8167 20.6337 21 20.1818 21H3.81818C3.36631 21 3 20.8167 3 20.5907V18.1346C3 17.9085 3.36631 17.7252 3.81818 17.7252Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
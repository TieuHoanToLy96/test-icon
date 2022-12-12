<script>
export default {
  name: 'binary-svg',
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
<path d="M11 10V5H10M18 19V14H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 5H15.5C15.2239 5 15 5.22386 15 5.5V9.5C15 9.77614 15.2239 10 15.5 10H17.5C17.7761 10 18 9.77614 18 9.5V5.5C18 5.22386 17.7761 5 17.5 5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 14H10.5C10.2239 14 10 14.2239 10 14.5V18.5C10 18.7761 10.2239 19 10.5 19H12.5C12.7761 19 13 18.7761 13 18.5V14.5C13 14.2239 12.7761 14 12.5 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 10H6.01M6 19H6.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
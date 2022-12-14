<script>
export default {
  name: 'number-circle-nine',
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
<path d="M14.5085 11.8129L11.4852 16.875M21.2352 12C21.2352 16.9706 17.2058 21 12.2352 21C7.26467 21 3.23523 16.9706 3.23523 12C3.23523 7.02944 7.26467 3 12.2352 3C17.2058 3 21.2352 7.02944 21.2352 12ZM14.8602 10.5C14.8602 11.9497 13.685 13.125 12.2352 13.125C10.7855 13.125 9.61023 11.9497 9.61023 10.5C9.61023 9.05025 10.7855 7.875 12.2352 7.875C13.685 7.875 14.8602 9.05025 14.8602 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
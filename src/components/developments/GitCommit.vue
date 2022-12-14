<script>
export default {
  name: 'git-commit',
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
<path d="M17.1097 12C17.1097 14.6924 14.9271 16.875 12.2347 16.875C9.54235 16.875 7.35974 14.6924 7.35974 12M17.1097 12C17.1097 9.30761 14.9271 7.125 12.2347 7.125C9.54235 7.125 7.35974 9.30761 7.35974 12M17.1097 12H23.4847M7.35974 12H0.984741" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
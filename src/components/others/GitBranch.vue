<script>
export default {
  name: 'git-branch',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20C8.10457 20 9 19.1046 9 18C9 16.8954 8.10457 16 7 16C5.89543 16 5 16.8954 5 18C5 19.1046 5.89543 20 7 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8C8.10457 8 9 7.10457 9 6C9 4.89543 8.10457 4 7 4C5.89543 4 5 4.89543 5 6C5 7.10457 5.89543 8 7 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 8V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18H15C15.5304 18 16.0391 17.7893 16.4142 17.4142C16.7893 17.0391 17 16.5304 17 16V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14L17 11L20 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
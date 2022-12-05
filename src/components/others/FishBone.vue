<script>
export default {
  name: 'fish-bone',
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
<path d="M16.69 7.44001C15.5977 8.70796 14.9979 10.3265 15 12C14.9975 13.6786 15.6007 15.3016 16.699 16.571M16.699 16.567C18.613 15.883 20.39 14.384 22 12.002C20.387 9.61801 18.606 8.11901 16.688 7.43701" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 9.50391C2.77125 10.3727 3.57932 11.2082 4.422 12.0079C3.57853 12.8048 2.77042 13.6382 2 14.5059" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.42188 12.0049H14.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10V14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 8V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'kayak-svg',
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
<path d="M6.414 6.41388C6.78894 6.03882 6.99957 5.5302 6.99957 4.99988C6.99957 4.46955 6.78894 3.96093 6.414 3.58588L5 2.17188L2.172 4.99988L3.586 6.41388C3.96105 6.78882 4.46967 6.99945 5 6.99945C5.53033 6.99945 6.03894 6.78882 6.414 6.41388Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5861 17.5861C17.2111 17.9611 17.0005 18.4697 17.0005 19.0001C17.0005 19.5304 17.2111 20.039 17.5861 20.4141L19.0001 21.8281L21.8281 19.0001L20.4141 17.5861C20.039 17.2111 19.5304 17.0005 19.0001 17.0005C18.4697 17.0005 17.9611 17.2111 17.5861 17.5861V17.5861Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 6.5L17.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 2.5C12.017 5.101 4.373 10.452 2 22C11.983 19.399 19.627 14.048 22 2.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.5 12.5L11.5 17.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 6.5L17.5 11.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
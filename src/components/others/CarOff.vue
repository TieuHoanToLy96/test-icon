<script>
export default {
  name: 'car-off',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 19C8.10457 19 9 18.1046 9 17C9 15.8954 8.10457 15 7 15C5.89543 15 5 15.8954 5 17C5 18.1046 5.89543 19 7 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.584 15.5879C15.2087 15.9629 14.9977 16.4716 14.9976 17.0022C14.9974 17.5327 15.2079 18.0416 15.583 18.4169C15.958 18.7922 16.4667 19.0031 16.9973 19.0033C17.5278 19.0035 18.0367 18.7929 18.412 18.4179" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 17H3V11L5 6H6M10 6H14L18 11H19C19.5304 11 20.0391 11.2107 20.4142 11.5858C20.7893 11.9609 21 12.4696 21 13V17M15 17H9M3 11H11M15 11H18M12 8V6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
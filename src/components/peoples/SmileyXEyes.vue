<script>
export default {
  name: 'smiley-xeyes',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0588 21C17.0294 21 21.0588 16.9706 21.0588 12C21.0588 7.02944 17.0294 3 12.0588 3C7.08828 3 3.05884 7.02944 3.05884 12C3.05884 16.9706 7.08828 21 12.0588 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3061 9L14.3088 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.3061 12L14.3088 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.80608 9L6.80884 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.80608 12L6.80884 9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.058 17.8125C12.5753 17.8125 12.9946 17.3928 12.9946 16.875C12.9946 16.3572 12.5753 15.9375 12.058 15.9375C11.5407 15.9375 11.1213 16.3572 11.1213 16.875C11.1213 17.3928 11.5407 17.8125 12.058 17.8125Z" fill="currentColor"/>
</svg>

</template>
    
<script>
export default {
  name: 'brand-sass',
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
<path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9999 10.523C14.4599 9.69695 16.0019 9.69695 16.0019 8.36795C16.0019 7.00195 14.6549 7.00195 13.2669 7.00195C11.3569 7.00195 9.91492 7.49195 8.72992 8.74995C7.88192 9.65195 7.70292 11.199 8.57692 12.057C9.54992 13.013 11.7829 13.846 11.4609 15.55C11.2279 16.785 9.99192 17.373 8.84392 16.752C8.06192 16.328 8.38992 15.006 9.46992 14.24C10.5499 13.474 12.2919 13.248 13.5699 14C14.5499 14.575 14.6159 15.724 14.0039 16.193" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
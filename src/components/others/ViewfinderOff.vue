<script>
export default {
  name: 'viewfinder-off',
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
<path d="M5.65001 5.62296C4.80212 6.45505 4.12736 7.44677 3.66464 8.54092C3.20192 9.63508 2.96039 10.81 2.95399 11.998C2.94759 13.1859 3.17644 14.3634 3.62734 15.4625C4.07825 16.5616 4.74228 17.5605 5.58115 18.4017C6.42002 19.2429 7.41713 19.9096 8.51496 20.3636C9.61279 20.8175 10.7896 21.0496 11.9776 21.0464C13.1656 21.0433 14.3412 20.805 15.4366 20.3453C16.532 19.8856 17.5256 19.2136 18.36 18.368M20.044 16.04C20.8951 14.3483 21.1909 12.4314 20.8893 10.5619C20.5877 8.69243 19.7042 6.96571 18.3644 5.62748C17.0246 4.28925 15.2969 3.40771 13.4271 3.10832C11.5573 2.80893 9.64064 3.10695 7.95001 3.95996" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12V12.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
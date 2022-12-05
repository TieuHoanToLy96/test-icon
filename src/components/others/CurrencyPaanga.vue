<script>
export default {
  name: 'currency-paanga',
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
<path d="M21 6H17C16.2044 6 15.4413 6.31607 14.8787 6.87868C14.3161 7.44129 14 8.20435 14 9C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12H18C18.7956 12 19.5587 12.3161 20.1213 12.8787C20.6839 13.4413 21 14.2044 21 15C21 15.7956 20.6839 16.5587 20.1213 17.1213C19.5587 17.6839 18.7956 18 18 18H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 6V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 6H11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 6V18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
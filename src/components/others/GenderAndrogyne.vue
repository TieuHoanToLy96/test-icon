<script>
export default {
  name: 'gender-androgyne',
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
<path d="M13 11L19 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20C11.7614 20 14 17.7614 14 15C14 12.2386 11.7614 10 9 10C6.23858 10 4 12.2386 4 15C4 17.7614 6.23858 20 9 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 9V5H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 10.5L13.5 7.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
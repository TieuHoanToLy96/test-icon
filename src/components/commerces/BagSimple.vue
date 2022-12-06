<script>
export default {
  name: 'bag-simple',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.42645 6.75C8.42645 5.75544 8.82154 4.80161 9.5248 4.09835C10.2281 3.39509 11.1819 3 12.1765 3C13.171 3 14.1248 3.39509 14.8281 4.09835C15.5314 4.80161 15.9265 5.75544 15.9265 6.75M3.92645 6.75H20.4265C20.8407 6.75 21.1765 7.08579 21.1765 7.5V19.5C21.1765 19.9142 20.8407 20.25 20.4265 20.25H3.92645C3.51224 20.25 3.17645 19.9142 3.17645 19.5V7.5C3.17645 7.08579 3.51224 6.75 3.92645 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
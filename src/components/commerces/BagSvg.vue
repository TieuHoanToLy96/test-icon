<script>
export default {
  name: 'bag-svg',
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
<path d="M8.36765 9.75V6.75C8.36765 5.75544 8.76273 4.80161 9.466 4.09835C10.1693 3.39509 11.1231 3 12.1176 3C13.1122 3 14.066 3.39509 14.7693 4.09835C15.4726 4.80161 15.8676 5.75544 15.8676 6.75V9.75M3.86765 6.75H20.3676C20.7819 6.75 21.1176 7.08579 21.1176 7.5V19.5C21.1176 19.9142 20.7819 20.25 20.3676 20.25H3.86765C3.45343 20.25 3.11765 19.9142 3.11765 19.5V7.5C3.11765 7.08579 3.45343 6.75 3.86765 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
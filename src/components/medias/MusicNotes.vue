<script>
export default {
  name: 'music-notes',
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
<path d="M20.0293 16.125C20.0293 17.5747 18.854 18.75 17.4043 18.75C15.9546 18.75 14.7793 17.5747 14.7793 16.125C14.7793 14.6753 15.9546 13.5 17.4043 13.5C18.854 13.5 20.0293 14.6753 20.0293 16.125ZM20.0293 16.125V3L8.0293 6V19.125M8.0293 19.125C8.0293 20.5747 6.85405 21.75 5.4043 21.75C3.95455 21.75 2.7793 20.5747 2.7793 19.125C2.7793 17.6753 3.95455 16.5 5.4043 16.5C6.85405 16.5 8.0293 17.6753 8.0293 19.125ZM20.0293 7.5L8.0293 10.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
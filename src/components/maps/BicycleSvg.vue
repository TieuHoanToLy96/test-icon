<script>
export default {
  name: 'bicycle-svg',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1465 7.5C20.1465 7.10218 19.9884 6.72064 19.7071 6.43934C19.4258 6.15804 19.0443 6 18.6465 6H14.8965L20.1465 15M5.14648 6H7.77148L13.0215 15M16.5921 9H9.52152L5.14648 15M23.8965 15C23.8965 17.0711 22.2176 18.75 20.1465 18.75C18.0754 18.75 16.3965 17.0711 16.3965 15C16.3965 12.9289 18.0754 11.25 20.1465 11.25C22.2176 11.25 23.8965 12.9289 23.8965 15ZM8.89648 15C8.89648 17.0711 7.21755 18.75 5.14648 18.75C3.07542 18.75 1.39648 17.0711 1.39648 15C1.39648 12.9289 3.07542 11.25 5.14648 11.25C7.21755 11.25 8.89648 12.9289 8.89648 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
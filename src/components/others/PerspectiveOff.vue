<script>
export default {
  name: 'perspective-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.511 4.50195L18.141 5.87695C18.3794 5.9109 18.5975 6.02973 18.7553 6.2116C18.9131 6.39347 19 6.62617 19 6.86695V15M18.141 18.123L6.141 19.837C5.9992 19.8571 5.85471 19.8466 5.71731 19.8062C5.57992 19.7657 5.45283 19.6961 5.34464 19.6023C5.23645 19.5084 5.14969 19.3924 5.09023 19.2621C5.03077 19.1318 5 18.9902 5 18.847V5.15295C5.00019 5.10711 5.00353 5.06134 5.01 5.01595" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
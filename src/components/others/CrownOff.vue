<script>
export default {
  name: 'crown-off',
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
<path d="M17.9999 18H4.99992L3.13492 8.673C3.12524 8.62294 3.13109 8.57112 3.15169 8.52449C3.17229 8.47785 3.20666 8.43863 3.25018 8.41208C3.29371 8.38553 3.34431 8.37292 3.3952 8.37594C3.4461 8.37897 3.49485 8.39748 3.53492 8.429L7.99992 12L9.59993 9.6M11.1959 7.206L11.9999 6L15.9999 12L20.4639 8.429C20.504 8.39711 20.5528 8.37828 20.6039 8.37506C20.655 8.37184 20.7059 8.38439 20.7496 8.411C20.7933 8.43761 20.8279 8.477 20.8485 8.52386C20.8691 8.57072 20.8748 8.62278 20.8649 8.673L19.5019 15.491" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
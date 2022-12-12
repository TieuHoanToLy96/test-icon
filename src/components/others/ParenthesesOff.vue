<script>
export default {
  name: 'parentheses-off',
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
<path d="M5.74297 5.74512C4.43241 7.95326 3.84868 10.5173 4.07423 13.0752C4.29978 15.633 5.32321 18.0554 6.99997 20.0001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 4C18.3387 5.55184 19.2666 7.41474 19.6989 9.4181C20.1311 11.4215 20.0538 13.5013 19.474 15.467M18.254 18.261C17.8875 18.8761 17.4679 19.458 17 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
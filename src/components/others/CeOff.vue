<script>
export default {
  name: 'ce-off',
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
<path d="M10.9999 4C10.1221 3.99925 9.25003 4.14317 8.41895 4.426" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.86707 5.86401C4.60707 6.91808 3.70212 8.33449 3.27517 9.9208C2.84821 11.5071 2.91995 13.1864 3.48064 14.7305C4.04133 16.2746 5.06379 17.6087 6.40909 18.5514C7.75439 19.4942 9.35731 20 11.0001 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4C18.4616 3.99967 16.9558 4.44285 15.6628 5.27643C14.3699 6.11002 13.3446 7.29867 12.71 8.7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12C12 14.1217 12.8429 16.1566 14.3431 17.6569C15.8434 19.1571 17.8783 20 20 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
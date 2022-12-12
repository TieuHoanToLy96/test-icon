<script>
export default {
  name: 'droplet-off',
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
<path d="M8.45394 8.45801L6.80094 11.003C6.00167 12.371 5.77588 13.9995 6.17286 15.5333C6.56983 17.0671 7.55734 18.3816 8.91989 19.19C10.2824 19.9985 11.9094 20.2352 13.4459 19.8485C14.9823 19.4618 16.3034 18.4831 17.1209 17.126" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.0002 14C18.0019 12.9467 17.7248 11.9117 17.1972 11L12.0002 3L10.0322 6.03" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
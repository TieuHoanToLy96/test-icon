<script>
export default {
  name: 'copyright-svg',
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
<path d="M15.2353 14.2501C14.763 14.8796 14.1046 15.3446 13.3534 15.5791C12.6022 15.8137 11.7962 15.8059 11.0496 15.557C10.303 15.3081 9.65366 14.8305 9.19352 14.1921C8.73339 13.5536 8.48578 12.7866 8.48578 11.9996C8.48577 11.2126 8.73337 10.4455 9.1935 9.80705C9.65362 9.16858 10.303 8.69106 11.0495 8.44211C11.7961 8.19316 12.6021 8.1854 13.3533 8.41994C14.1046 8.65448 14.763 9.11942 15.2353 9.74891M21.2352 12C21.2352 16.9706 17.2058 21 12.2352 21C7.26467 21 3.23523 16.9706 3.23523 12C3.23523 7.02944 7.26467 3 12.2352 3C17.2058 3 21.2352 7.02944 21.2352 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'zoom-replace',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L15 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.29102 8.00304C3.64183 6.82727 4.29553 5.76436 5.18659 4.92086C6.07766 4.07736 7.17479 3.48289 8.36802 3.19704C10.0427 2.7917 11.8081 3.01637 13.3279 3.82828C14.8477 4.64019 16.0159 5.98263 16.61 7.60004" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 4V8H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.7049 12.0049C16.3531 13.1788 15.6994 14.2398 14.8089 15.0818C13.9185 15.9238 12.8226 16.5173 11.6309 16.8029C9.9563 17.2079 8.19124 16.9831 6.67164 16.1712C5.15205 15.3594 3.98403 14.0171 3.38989 12.3999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16V12H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
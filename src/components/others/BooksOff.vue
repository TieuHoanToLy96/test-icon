<script>
export default {
  name: 'books-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9V19C9 19.2652 8.89464 19.5196 8.70711 19.7071C8.51957 19.8946 8.26522 20 8 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5C9 4.73478 9.10536 4.48043 9.29289 4.29289C9.48043 4.10536 9.73478 4 10 4H12C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20H10C9.73478 20 9.48043 19.8946 9.29289 19.7071C9.10536 19.5196 9 19.2652 9 19V9" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 8H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.2541 10.244L13.0361 5.82004C12.9709 5.57439 12.9998 5.31325 13.117 5.08778C13.2343 4.8623 13.4315 4.68872 13.6701 4.60104L13.8031 4.56004L15.9871 4.03004C16.5491 3.89504 17.1201 4.22004 17.2691 4.76204L20.5051 16.512" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5851 19.589L18.0131 19.969C17.4511 20.105 16.8801 19.779 16.7311 19.238L15.7791 15.78" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 9L18 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.207 15.199L19.923 15.019" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
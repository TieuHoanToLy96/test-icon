<script>
export default {
  name: 'backhoe-svg',
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
<path d="M4 19C5.10457 19 6 18.1046 6 17C6 15.8954 5.10457 15 4 15C2.89543 15 2 15.8954 2 17C2 18.1046 2.89543 19 4 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19C14.1046 19 15 18.1046 15 17C15 15.8954 14.1046 15 13 15C11.8954 15 11 15.8954 11 17C11 18.1046 11.8954 19 13 19Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19H4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12V7H10C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10V15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 15V13C5 12.7348 5.10536 12.4804 5.29289 12.2929C5.48043 12.1054 5.73478 12 6 12H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.12 9.88L18 5L13 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.1199 9.87988C21.5389 10.2994 21.8242 10.8337 21.9397 11.4153C22.0553 11.9969 21.9959 12.5997 21.769 13.1476C21.5422 13.6954 21.1581 14.1638 20.6652 14.4935C20.1724 14.8231 19.5928 14.9994 18.9999 14.9999C18.2045 14.9992 17.442 14.6827 16.8799 14.1199L21.1199 9.87988V9.87988Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
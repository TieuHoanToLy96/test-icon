<script>
export default {
  name: 'chat-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.13397 18.926L5.11493 21.4639C5.00561 21.5558 4.87231 21.6146 4.73072 21.6333C4.58913 21.652 4.44514 21.63 4.31567 21.5697C4.1862 21.5094 4.07664 21.4133 3.99987 21.2929C3.92311 21.1725 3.88232 21.0326 3.88232 20.8898V6.00006C3.88232 5.80115 3.96134 5.61038 4.10199 5.46973C4.24265 5.32908 4.43341 5.25006 4.63232 5.25006H21.1323C21.3312 5.25006 21.522 5.32908 21.6627 5.46973C21.8033 5.61038 21.8823 5.80115 21.8823 6.00006V18.0001C21.8823 18.199 21.8033 18.3897 21.6627 18.5304C21.522 18.671 21.3312 18.7501 21.1323 18.7501H8.61658C8.44002 18.7501 8.26912 18.8124 8.13397 18.926Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
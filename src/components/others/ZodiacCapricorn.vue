<script>
export default {
  name: 'zodiac-capricorn',
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
<path d="M4 4C4.79565 4 5.55871 4.31607 6.12132 4.87868C6.68393 5.44129 7 6.20435 7 7V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7C7 6.20435 7.31607 5.44129 7.87868 4.87868C8.44129 4.31607 9.20435 4 10 4C10.7956 4 11.5587 4.31607 12.1213 4.87868C12.6839 5.44129 13 6.20435 13 7V18C13 18.7956 12.6839 19.5587 12.1213 20.1213C11.5587 20.6839 10.7956 21 10 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20C17.6569 20 19 18.6569 19 17C19 15.3431 17.6569 14 16 14C14.3431 14 13 15.3431 13 17C13 18.6569 14.3431 20 16 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
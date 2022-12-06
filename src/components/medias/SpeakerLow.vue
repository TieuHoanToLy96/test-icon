<script>
export default {
  name: 'speaker-low',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.79419 15.75H3.29419C3.09528 15.75 2.90451 15.671 2.76386 15.5303C2.62321 15.3897 2.54419 15.1989 2.54419 15V9C2.54419 8.80109 2.62321 8.61032 2.76386 8.46967C2.90451 8.32902 3.09528 8.25 3.29419 8.25H7.79419M7.79419 15.75L14.5442 21V3L7.79419 8.25M7.79419 15.75V8.25M18.1638 9.87868C18.4424 10.1573 18.6634 10.488 18.8142 10.8519C18.9649 11.2159 19.0425 11.606 19.0425 12C19.0425 12.394 18.9649 12.7841 18.8142 13.148C18.6634 13.512 18.4424 13.8427 18.1638 14.1213" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
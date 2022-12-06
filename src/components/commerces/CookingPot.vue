<script>
export default {
  name: 'cooking-pot',
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
<path d="M9.23459 1.5V4.5M12.2346 1.5V4.5M15.2346 1.5V4.5M23.4846 9L20.4846 11.25M0.984589 9L3.98459 11.25M4.73459 7.5H19.7346C19.9335 7.5 20.1243 7.57902 20.2649 7.71967C20.4056 7.86032 20.4846 8.05109 20.4846 8.25V17.25C20.4846 17.8467 20.2475 18.419 19.8256 18.841C19.4036 19.2629 18.8313 19.5 18.2346 19.5H6.23459C5.63785 19.5 5.06555 19.2629 4.6436 18.841C4.22164 18.419 3.98459 17.8467 3.98459 17.25V8.25C3.98459 8.05109 4.06361 7.86032 4.20426 7.71967C4.34491 7.57902 4.53568 7.5 4.73459 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'battery-low',
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
<path d="M24.0735 9V15M7.27349 15.75V8.25004M21.0735 6.75V17.25C21.0735 18.0784 20.4019 18.75 19.5735 18.75H5.32349C4.49506 18.75 3.82349 18.0784 3.82349 17.25V6.75C3.82349 5.92157 4.49506 5.25 5.32349 5.25H19.5735C20.4019 5.25 21.0735 5.92157 21.0735 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
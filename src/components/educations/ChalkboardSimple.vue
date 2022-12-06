<script>
export default {
  name: 'chalkboard-simple',
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
<path d="M3.05878 15.75V5.25C3.05878 5.05109 3.13779 4.86032 3.27845 4.71967C3.4191 4.57902 3.60986 4.5 3.80878 4.5H20.3088C20.5077 4.5 20.6985 4.57902 20.8391 4.71967C20.9798 4.86032 21.0588 5.05109 21.0588 5.25V15.75M1.55878 18.75H22.5588M11.3088 18.75V15.75H17.3088V18.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
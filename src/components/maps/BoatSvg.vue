<script>
export default {
  name: 'boat-svg',
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
<path d="M12.2352 4.5V2.25M12.2352 15.75V8.29057M5.48523 10.5V5.25C5.48523 5.05109 5.56425 4.86032 5.7049 4.71967C5.84555 4.57902 6.03632 4.5 6.23523 4.5H18.2352C18.4341 4.5 18.6249 4.57902 18.7656 4.71967C18.9062 4.86032 18.9852 5.05109 18.9852 5.25V10.5M21.2352 15C19.8693 19.7809 13.5276 21.452 12.4052 21.7125C12.2934 21.7385 12.1771 21.7385 12.0652 21.7125C10.9428 21.452 4.6012 19.7809 3.23523 15V11.7906C3.23523 11.6332 3.28476 11.4797 3.3768 11.352C3.46884 11.2243 3.59873 11.1288 3.74806 11.0791L11.9981 8.32906C12.152 8.27774 12.3185 8.27774 12.4724 8.32906L20.7224 11.0791C20.8717 11.1288 21.0016 11.2243 21.0937 11.352C21.1857 11.4797 21.2352 11.6332 21.2352 11.7906V15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'house-simple',
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
<path d="M20.4163 10.2768L12.9157 3.4579C12.7777 3.33239 12.5978 3.26284 12.4112 3.26285C12.2246 3.26285 12.0447 3.33241 11.9067 3.45794L4.40719 10.2768C4.32988 10.3471 4.26811 10.4328 4.22584 10.5283C4.18358 10.6239 4.16174 10.7272 4.16174 10.8317V19.5C4.16174 19.6989 4.24076 19.8897 4.38141 20.0303C4.52207 20.171 4.71283 20.25 4.91174 20.25H19.9117C20.1107 20.25 20.3014 20.171 20.4421 20.0303C20.5827 19.8897 20.6617 19.6989 20.6617 19.5V10.8318C20.6617 10.7273 20.6399 10.6239 20.5976 10.5284C20.5554 10.4328 20.4936 10.3471 20.4163 10.2768Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
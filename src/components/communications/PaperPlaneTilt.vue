<script>
export default {
  name: 'paper-plane-tilt',
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
<path d="M10.3936 13.6066L14.6362 9.36395M19.7112 3.36355L2.24294 8.29049C2.09598 8.33194 1.96518 8.41725 1.86801 8.53503C1.77084 8.65281 1.71193 8.79745 1.69916 8.9496C1.68639 9.10175 1.72037 9.25418 1.79655 9.38651C1.87272 9.51884 1.98748 9.62477 2.12547 9.69013L10.1515 13.4919C10.308 13.5661 10.4341 13.6921 10.5082 13.8487L14.31 21.8747C14.3754 22.0127 14.4813 22.1274 14.6136 22.2036C14.746 22.2798 14.8984 22.3138 15.0505 22.301C15.2027 22.2882 15.3473 22.2293 15.4651 22.1321C15.5829 22.035 15.6682 21.9042 15.7097 21.7572L20.6366 4.28898C20.6728 4.16067 20.6741 4.02503 20.6405 3.89603C20.6068 3.76703 20.5394 3.64933 20.4451 3.55506C20.3508 3.46079 20.2331 3.39335 20.1041 3.35969C19.9751 3.32603 19.8395 3.32736 19.7112 3.36355Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
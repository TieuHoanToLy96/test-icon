<script>
export default {
  name: 'wifi-medium',
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
<path d="M9.47617 15.5683C10.3618 14.7223 11.5395 14.2503 12.7642 14.2503C13.989 14.2503 15.1666 14.7223 16.0523 15.5683M6.29419 12.3863C8.02385 10.6964 10.346 9.75027 12.7642 9.75027C15.1824 9.75027 17.5046 10.6964 19.2342 12.3863" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.764 19.6875C13.2813 19.6875 13.7007 19.2678 13.7007 18.75C13.7007 18.2322 13.2813 17.8125 12.764 17.8125C12.2467 17.8125 11.8274 18.2322 11.8274 18.75C11.8274 19.2678 12.2467 19.6875 12.764 19.6875Z" fill="currentColor"/>
</svg>

</template>
    
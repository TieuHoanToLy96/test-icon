<script>
export default {
  name: 'file-search',
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
<path d="M15.1323 3H6.13159C5.93268 3 5.74191 3.07902 5.60126 3.21967C5.46061 3.36032 5.38159 3.55109 5.38159 3.75V20.25C5.38159 20.4489 5.46061 20.6397 5.60126 20.7803C5.74191 20.921 5.93268 21 6.13159 21H19.6323C19.7308 21 19.8283 20.9806 19.9193 20.9429C20.0103 20.9052 20.093 20.85 20.1627 20.7803C20.2323 20.7107 20.2875 20.628 20.3252 20.537C20.3629 20.446 20.3823 20.3485 20.3823 20.25V8.25M15.1323 3L20.3823 8.25M15.1323 3V8.25H20.3823M14.3629 15.7312L15.8629 17.2312M15.1318 13.875C15.1318 15.3247 13.9565 16.5 12.5068 16.5C11.057 16.5 9.88177 15.3247 9.88177 13.875C9.88177 12.4253 11.057 11.25 12.5068 11.25C13.9565 11.25 15.1318 12.4253 15.1318 13.875Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
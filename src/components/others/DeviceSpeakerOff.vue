<script>
export default {
  name: 'device-speaker-off',
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
<path d="M7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V15M19 19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H7C6.46957 21 5.96086 20.7893 5.58579 20.4142C5.21071 20.0391 5 19.5304 5 19V5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1139 11.1331C10.6198 11.2858 10.1734 11.5636 9.81828 11.9397C9.46313 12.3157 9.2112 12.7772 9.08693 13.2792C8.96266 13.7813 8.97026 14.307 9.10902 14.8053C9.24777 15.3036 9.51295 15.7575 9.87884 16.1231C10.2447 16.4887 10.6989 16.7536 11.1973 16.8919C11.6957 17.0303 12.2214 17.0375 12.7234 16.9128C13.2254 16.7881 13.6866 16.5358 14.0624 16.1803C14.4381 15.8249 14.7156 15.3784 14.8679 14.8841" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 7V7.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
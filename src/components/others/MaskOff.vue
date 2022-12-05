<script>
export default {
  name: 'mask-off',
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
<path d="M19.42 19.41C19.2339 19.5972 19.0127 19.7457 18.769 19.8469C18.5253 19.9482 18.2639 20.0002 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6C4 5.446 4.225 4.945 4.588 4.583M8 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.88495 9.8722C9.60283 10.1501 9.37851 10.4811 9.22495 10.8462C9.07139 11.2112 8.99163 11.603 8.99025 11.999C8.98888 12.395 9.06592 12.7874 9.21694 13.1535C9.36796 13.5196 9.58997 13.8522 9.87016 14.132C10.1504 14.4119 10.4832 14.6335 10.8494 14.7841C11.2157 14.9347 11.6082 15.0113 12.0042 15.0094C12.4002 15.0076 12.7919 14.9273 13.1568 14.7733C13.5216 14.6194 13.8524 14.3947 14.13 14.1122M14.712 10.7162C14.4129 10.0865 13.9047 9.58007 13.274 9.2832" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
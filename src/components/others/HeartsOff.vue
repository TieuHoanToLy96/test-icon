<script>
export default {
  name: 'hearts-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.017 18.0008L12 19.9998L4.50002 12.5718C3.98221 12.068 3.57973 11.4579 3.3203 10.7836C3.06087 10.1094 2.95065 9.38686 2.99721 8.6659C3.04378 7.94493 3.24604 7.24262 3.59006 6.60732C3.93408 5.97202 4.41169 5.41881 4.99001 4.98579M8.00002 3.98779C8.77776 3.98989 9.5443 4.17338 10.2387 4.5237C10.9331 4.87402 11.5362 5.3815 12 6.00579C12.7823 4.96433 13.9401 4.26924 15.2271 4.06845C16.514 3.86765 17.8286 4.177 18.8909 4.93067C19.9533 5.68434 20.6796 6.82282 20.9153 8.10386C21.151 9.38489 20.8775 10.7073 20.153 11.7898" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.814 11.814C11.294 12.339 11.0017 13.0477 11.0004 13.7866C10.9991 14.5255 11.2889 15.2352 11.807 15.762L15.989 20L17.999 17.979M19.976 15.989L20.187 15.777C20.7069 15.2519 20.999 14.5432 21.0002 13.8043C21.0013 13.0654 20.7113 12.3557 20.193 11.829C19.938 11.5697 19.6339 11.3636 19.2986 11.2227C18.9632 11.0818 18.6032 11.009 18.2395 11.0083C17.8757 11.0077 17.5155 11.0793 17.1796 11.2189C16.8438 11.3586 16.539 11.5636 16.283 11.822L16 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'coffee-off',
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
<path d="M3 14C3.83 14.642 5.077 15.017 6.5 15C7.923 15.017 9.17 14.642 10 14C10.73 13.435 11.783 13.077 12.994 13.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.9999 3C7.8059 3.14 7.6359 3.305 7.4939 3.49" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3C11.6835 3.22717 11.4271 3.52797 11.2529 3.87642C11.0787 4.22488 10.9919 4.6105 11 5C10.9919 5.3895 11.0787 5.77512 11.2529 6.12358C11.4271 6.47203 11.6835 6.77283 12 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 10H17V13M16.743 16.743C16.3686 17.9745 15.6083 19.0531 14.5743 19.8196C13.5402 20.5861 12.2872 20.9999 11 21H9C7.4087 21 5.88258 20.3679 4.75736 19.2426C3.63214 18.1174 3 16.5913 3 15V10H10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.116 16.1241C20.5982 15.6434 20.9025 15.0129 20.979 14.3364C21.0554 13.6599 20.8995 12.9775 20.5368 12.4013C20.1741 11.8251 19.6261 11.3894 18.9831 11.1659C18.34 10.9423 17.64 10.9441 16.998 11.1711" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
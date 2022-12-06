<script>
export default {
  name: 'grill-off',
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
<path d="M8 8H5C5 9.5913 5.63214 11.1174 6.75736 12.2426C7.88258 13.3679 9.4087 14 11 14H13C13.315 14 13.624 13.976 13.926 13.929M16.712 12.715C17.3959 12.1773 17.9545 11.4972 18.3489 10.7218C18.7434 9.94638 18.9642 9.09437 18.996 8.225L19 8H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.8271 18.8151C18.6951 19.1102 18.4936 19.3688 18.2398 19.5689C17.986 19.7691 17.6874 19.9047 17.3698 19.9642C17.0521 20.0237 16.7247 20.0053 16.4156 19.9107C16.1066 19.816 15.8251 19.6478 15.5953 19.4206C15.3654 19.1933 15.1941 18.9138 15.0959 18.6058C14.9978 18.2979 14.9757 17.9707 15.0316 17.6524C15.0875 17.3341 15.2198 17.034 15.417 16.778C15.6142 16.5219 15.8706 16.3175 16.1641 16.1821" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 14L6 20" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 18H7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 5V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 5V4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
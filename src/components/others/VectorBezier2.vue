<script>
export default {
  name: 'vector-bezier-2',
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
<path d="M6 3H4C3.44772 3 3 3.44772 3 4V6C3 6.55228 3.44772 7 4 7H6C6.55228 7 7 6.55228 7 6V4C7 3.44772 6.55228 3 6 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 17H18C17.4477 17 17 17.4477 17 18V20C17 20.5523 17.4477 21 18 21H20C20.5523 21 21 20.5523 21 20V18C21 17.4477 20.5523 17 20 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 6C15.5523 6 16 5.55228 16 5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5C14 5.55228 14.4477 6 15 6Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 5.5C7.65661 5.5 8.30679 5.66813 8.91342 5.99478C9.52004 6.32144 10.0712 6.80022 10.5355 7.40381C10.9998 8.00739 11.3681 8.72394 11.6194 9.51256C11.8707 10.3012 12 11.1464 12 12C12 13.7239 12.5268 15.3772 13.4645 16.5962C14.4021 17.8152 15.6739 18.5 17 18.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
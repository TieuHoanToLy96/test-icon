<script>
export default {
  name: 'arrow-left-right',
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
<path d="M17 13L21 9L17 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13L3 9L7 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 14C12 12.6739 12.5268 11.4021 13.4645 10.4645C14.4021 9.52678 15.6739 9 17 9H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19V14C12 13.3434 11.8707 12.6932 11.6194 12.0866C11.3681 11.48 10.9998 10.9288 10.5355 10.4645C10.0712 10.0002 9.52004 9.63188 8.91342 9.3806C8.30679 9.12933 7.65661 9 7 9H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'user-minus',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.691 12.75H24.1909M11.0659 15C14.1726 15 16.691 12.4816 16.691 9.375C16.691 6.2684 14.1726 3.75 11.0659 3.75C7.95935 3.75 5.44095 6.2684 5.44095 9.375C5.44095 12.4816 7.95935 15 11.0659 15ZM11.0659 15C9.53285 15 8.01839 15.3357 6.62889 15.9835C5.23938 16.6313 4.00858 17.5755 3.02295 18.7498M11.0659 15C12.599 15 14.1136 15.3357 15.5031 15.9835C16.8926 16.6314 18.1234 17.5756 19.109 18.7499" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'meteor-svg',
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
<path d="M20.9998 3L15.9998 12H20.9998L14.1088 19.086C13.4918 19.7043 12.7564 20.192 11.9467 20.5197C11.137 20.8475 10.2695 21.0087 9.39605 20.9937C8.52262 20.9787 7.66119 20.7877 6.8632 20.4323C6.06522 20.0769 5.34707 19.5643 4.75165 18.9251C4.15623 18.2859 3.69575 17.5332 3.39775 16.7121C3.09974 15.8909 2.9703 15.0181 3.01718 14.1458C3.06405 13.2735 3.28628 12.4196 3.67057 11.6352C4.05486 10.8507 4.59334 10.1517 5.25383 9.58L12.9998 3L11.9998 8L20.9998 3V3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 17C10.8807 17 12 15.8807 12 14.5C12 13.1193 10.8807 12 9.5 12C8.11929 12 7 13.1193 7 14.5C7 15.8807 8.11929 17 9.5 17Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
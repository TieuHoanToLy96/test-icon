<script>
export default {
  name: 'cricket-svg',
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
<path d="M11.105 18.7899L10.099 19.7819C9.33188 20.5423 8.29909 20.9743 7.21911 20.9868C6.13913 20.9992 5.09666 20.591 4.31225 19.8486C3.52785 19.1061 3.06303 18.0877 3.01613 17.0086C2.96924 15.9296 3.34394 14.8746 4.06098 14.0669L4.21798 13.9009L12.5 5.49994L14 6.99994L17.45 3.60894C17.8301 3.23221 18.3409 3.01651 18.876 3.0067C19.4111 2.99688 19.9294 3.19371 20.3231 3.55625C20.7168 3.91879 20.9556 4.41913 20.9898 4.95323C21.0241 5.48733 20.8511 6.01408 20.507 6.42394L20.391 6.54994L17 9.99994L18.5 11.4999L14.832 15.1169" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 7.5L16.5 13.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 21C15.6569 21 17 19.6569 17 18C17 16.3431 15.6569 15 14 15C12.3431 15 11 16.3431 11 18C11 19.6569 12.3431 21 14 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
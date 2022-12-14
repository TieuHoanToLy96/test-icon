<script>
export default {
  name: 'brand-blogger',
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
<path d="M8 21H16C17.3261 21 18.5979 20.4732 19.5355 19.5355C20.4732 18.5979 21 17.3261 21 16V13C21 12.2044 20.6839 11.4413 20.1213 10.8787C19.5587 10.3161 18.7956 10 18 10H17V8C17 6.67392 16.4732 5.40215 15.5355 4.46447C14.5979 3.52678 13.3261 3 12 3H8C6.67392 3 5.40215 3.52678 4.46447 4.46447C3.52678 5.40215 3 6.67392 3 8V16C3 17.3261 3.52678 18.5979 4.46447 19.5355C5.40215 20.4732 6.67392 21 8 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 7H8.5C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10H11.5C12.3284 10 13 9.32843 13 8.5C13 7.67157 12.3284 7 11.5 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 14H8.5C7.67157 14 7 14.6716 7 15.5C7 16.3284 7.67157 17 8.5 17H15.5C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
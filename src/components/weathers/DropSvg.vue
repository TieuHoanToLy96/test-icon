<script>
export default {
  name: 'drop-svg',
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
<path d="M13.3496 17.9265C14.267 17.7706 15.1133 17.3337 15.7717 16.6761C16.43 16.0185 16.868 15.1727 17.0251 14.2556M20.0884 13.5C20.0884 6.75 12.5884 1.5 12.5884 1.5C12.5884 1.5 5.08838 6.75 5.08838 13.5C5.08838 15.4891 5.87856 17.3968 7.28508 18.8033C8.6916 20.2098 10.5993 21 12.5884 21C14.5775 21 16.4852 20.2098 17.8917 18.8033C19.2982 17.3968 20.0884 15.4891 20.0884 13.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
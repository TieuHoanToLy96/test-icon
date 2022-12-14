<script>
export default {
  name: 'files-svg',
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
<path d="M7.55884 6V3.75C7.55884 3.55109 7.63786 3.36032 7.77851 3.21967C7.91916 3.07902 8.10993 3 8.30884 3H15.8088L19.5588 6.75V17.25C19.5588 17.4489 19.4798 17.6397 19.3392 17.7803C19.1985 17.921 19.0077 18 18.8088 18H16.5588M8.30884 14.25H12.8088M8.30884 17.25H12.8088M15.8088 21H5.30884C5.10993 21 4.91916 20.921 4.77851 20.7803C4.63786 20.6397 4.55884 20.4489 4.55884 20.25V6.75C4.55884 6.55109 4.63786 6.36032 4.77851 6.21967C4.91916 6.07902 5.10993 6 5.30884 6H12.8088L16.5588 9.75V20.25C16.5588 20.4489 16.4798 20.6397 16.3392 20.7803C16.1985 20.921 16.0077 21 15.8088 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
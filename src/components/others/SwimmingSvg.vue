<script>
export default {
  name: 'swimming-svg',
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
<path d="M16 10C16.5523 10 17 9.55228 17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9C15 9.55228 15.4477 10 16 10Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 11L10 9L13.5 12L12 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 16.75C3.31129 16.9048 3.65249 16.9901 4 17C4.3895 17.0082 4.77512 16.9214 5.12358 16.7472C5.47203 16.573 5.77283 16.3165 6 16C6.22717 15.6835 6.52797 15.4271 6.87642 15.2529C7.22488 15.0787 7.6105 14.9919 8 15C8.3895 14.9919 8.77512 15.0787 9.12358 15.2529C9.47203 15.4271 9.77283 15.6835 10 16C10.2272 16.3165 10.528 16.573 10.8764 16.7472C11.2249 16.9214 11.6105 17.0082 12 17C12.3895 17.0082 12.7751 16.9214 13.1236 16.7472C13.472 16.573 13.7728 16.3165 14 16C14.2272 15.6835 14.528 15.4271 14.8764 15.2529C15.2249 15.0787 15.6105 14.9919 16 15C16.3895 14.9919 16.7751 15.0787 17.1236 15.2529C17.472 15.4271 17.7728 15.6835 18 16C18.2272 16.3165 18.528 16.573 18.8764 16.7472C19.2249 16.9214 19.6105 17.0082 20 17C20.3475 16.9901 20.6887 16.9048 21 16.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
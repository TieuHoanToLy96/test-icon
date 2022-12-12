<script>
export default {
  name: 'paint-brush',
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
<path d="M11.3028 10.8899C13.1023 8.46482 17.6803 2.90901 21.8556 2.90901C21.8556 7.08429 16.3 11.6623 13.8748 13.4618M13.2297 8.4981C14.5026 9.21105 15.5536 10.262 16.2666 11.5349M2.63965 20.25H9.38965C10.3538 20.25 11.2964 19.9641 12.0981 19.4284C12.8997 18.8927 13.5246 18.1314 13.8936 17.2406C14.2625 16.3498 14.3591 15.3696 14.171 14.4239C13.9829 13.4783 13.5186 12.6096 12.8368 11.9279C12.155 11.2461 11.2864 10.7818 10.3407 10.5937C9.39506 10.4056 8.41486 10.5021 7.52407 10.8711C6.63328 11.2401 5.87191 11.8649 5.33623 12.6666C4.80056 13.4683 4.51465 14.4108 4.51465 15.375C4.51465 18.75 2.63965 20.25 2.63965 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'gender-male',
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
<path d="M15.4639 9.47703L21.1909 3.75M21.1909 3.75H16.6909M21.1909 3.75V8.25M17.4409 14.25C17.4409 17.9779 14.4188 21 10.6909 21C6.963 21 3.94092 17.9779 3.94092 14.25C3.94092 10.5221 6.963 7.5 10.6909 7.5C14.4188 7.5 17.4409 10.5221 17.4409 14.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
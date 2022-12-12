<script>
export default {
  name: 'picture-in-picture',
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
<path d="M13.2207 18.75V12.75C13.2207 12.5511 13.2997 12.3603 13.4404 12.2197C13.581 12.079 13.7718 12 13.9707 12H21.4707M4.2207 5.25H20.7207C21.1349 5.25 21.4707 5.58579 21.4707 6V18C21.4707 18.4142 21.1349 18.75 20.7207 18.75H4.2207C3.80649 18.75 3.4707 18.4142 3.4707 18V6C3.4707 5.58579 3.80649 5.25 4.2207 5.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
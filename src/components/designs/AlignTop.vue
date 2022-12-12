<script>
export default {
  name: 'align-top',
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
<path d="M20.8976 3.74945H4.39758M19.3971 7.5V16.5C19.3971 16.9142 19.0613 17.25 18.6471 17.25H14.8971C14.4829 17.25 14.1471 16.9142 14.1471 16.5V7.5C14.1471 7.08579 14.4829 6.75 14.8971 6.75H18.6471C19.0613 6.75 19.3971 7.08579 19.3971 7.5ZM6.64713 6.75H10.3971C10.8113 6.75 11.1471 7.08579 11.1471 7.5V20.25C11.1471 20.6642 10.8113 21 10.3971 21H6.64713C6.23291 21 5.89713 20.6642 5.89713 20.25V7.5C5.89713 7.08579 6.23291 6.75 6.64713 6.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
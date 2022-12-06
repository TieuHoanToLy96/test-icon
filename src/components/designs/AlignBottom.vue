<script>
export default {
  name: 'align-bottom',
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
      default: 1.5
    },
    color: {
      type: String,
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.9563 20.2506H4.4563M14.2058 16.5V7.5C14.2058 7.08579 14.5416 6.75 14.9558 6.75H18.7058C19.1201 6.75 19.4558 7.08579 19.4558 7.5V16.5C19.4558 16.9142 19.1201 17.25 18.7058 17.25H14.9558C14.5416 17.25 14.2058 16.9142 14.2058 16.5ZM6.70584 3H10.4558C10.8701 3 11.2058 3.33579 11.2058 3.75V16.5C11.2058 16.9142 10.8701 17.25 10.4558 17.25H6.70584C6.29163 17.25 5.95584 16.9142 5.95584 16.5V3.75C5.95584 3.33579 6.29163 3 6.70584 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
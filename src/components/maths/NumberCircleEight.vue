<script>
export default {
  name: 'number-circle-eight',
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
      default: "#3D3D3D"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.6472 21C17.6178 21 21.6472 16.9706 21.6472 12C21.6472 7.02944 17.6178 3 12.6472 3C7.67665 3 3.64722 7.02944 3.64722 12C3.64722 16.9706 7.67665 21 12.6472 21Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7097 9.5625C14.7097 10.0397 14.5443 10.5021 14.2416 10.8709C13.9388 11.2398 13.5176 11.4923 13.0496 11.5854C12.5816 11.6785 12.0958 11.6064 11.675 11.3815C11.2541 11.1565 10.9243 10.7926 10.7417 10.3518C10.5591 9.91094 10.535 9.42041 10.6735 8.96379C10.812 8.50716 11.1046 8.1127 11.5014 7.84759C11.8981 7.58249 12.3745 7.46316 12.8494 7.50993C13.3243 7.5567 13.7682 7.76668 14.1056 8.10409C14.2974 8.2954 14.4495 8.52273 14.5532 8.77301C14.6569 9.02329 14.7101 9.2916 14.7097 9.5625Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0847 14.0625C15.0847 14.6264 14.8892 15.1729 14.5314 15.6088C14.1737 16.0448 13.6758 16.3431 13.1228 16.4532C12.5697 16.5632 11.9955 16.478 11.4982 16.2122C11.0008 15.9463 10.6111 15.5163 10.3953 14.9953C10.1795 14.4743 10.151 13.8946 10.3147 13.3549C10.4784 12.8153 10.8241 12.3491 11.293 12.0358C11.7619 11.7225 12.3249 11.5815 12.8861 11.6367C13.4473 11.692 13.972 11.9402 14.3708 12.3389C14.5975 12.565 14.7772 12.8337 14.8998 13.1295C15.0223 13.4253 15.0851 13.7423 15.0847 14.0625Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
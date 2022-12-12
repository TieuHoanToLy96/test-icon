<script>
export default {
  name: 'pig-svg',
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
<path d="M15 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3V6.803C17.2376 7.51912 18.1799 8.65245 18.658 10H19.999C20.2642 10 20.5186 10.1054 20.7061 10.2929C20.8936 10.4804 20.999 10.7348 20.999 11V13C20.999 13.2652 20.8936 13.5196 20.7061 13.7071C20.5186 13.8946 20.2642 14 19.999 14H18.657C18.3206 14.9504 17.7504 15.8008 16.999 16.473V18.5C16.999 18.8978 16.841 19.2794 16.5597 19.5607C16.2783 19.842 15.8968 20 15.499 20C15.1012 20 14.7196 19.842 14.4383 19.5607C14.157 19.2794 13.999 18.8978 13.999 18.5V17.917C13.6685 17.9724 13.334 18.0001 12.999 18H8.99899C8.66393 18.0001 8.32945 17.9724 7.99899 17.917V18.5C7.99899 18.8978 7.84096 19.2794 7.55965 19.5607C7.27835 19.842 6.89682 20 6.49899 20C6.10117 20 5.71964 19.842 5.43833 19.5607C5.15703 19.2794 4.99899 18.8978 4.99899 18.5V16.5L4.99999 16.473C4.09402 15.663 3.45536 14.597 3.16853 13.4161C2.88171 12.2352 2.96025 10.995 3.39375 9.85969C3.82726 8.72438 4.59529 7.74747 5.59621 7.05826C6.59712 6.36904 7.78373 6.00001 8.99899 6H11.499L15.999 3H16Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
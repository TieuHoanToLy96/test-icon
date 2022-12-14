<script>
export default {
  name: 'shuffle-angular',
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
<path d="M3.23523 6.75H8.09927C8.21865 6.75 8.3363 6.7785 8.44245 6.83312C8.5486 6.88775 8.64018 6.96693 8.70957 7.06407L15.7609 16.9359C15.8303 17.0331 15.9219 17.1123 16.028 17.1669C16.1342 17.2215 16.2518 17.25 16.3712 17.25H21.9852M21.9852 17.25L19.7352 15M21.9852 17.25L19.7352 19.5M19.7352 4.5L21.9852 6.75M21.9852 6.75L19.7352 9M21.9852 6.75H16.3712C16.2518 6.75 16.1342 6.7785 16.028 6.83312C15.9219 6.88775 15.8303 6.96693 15.7609 7.06407L14.0786 9.41931M3.23523 17.25H8.09927C8.21865 17.25 8.3363 17.2215 8.44245 17.1669C8.5486 17.1123 8.64018 17.0331 8.70957 16.9359L10.3919 14.5807" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'cursor-svg',
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
<path d="M13.3937 12.8049C13.3162 12.8824 13.2566 12.9759 13.2191 13.0789L11.0328 19.0914C10.9804 19.2355 10.8851 19.3601 10.7597 19.4483C10.6344 19.5366 10.485 19.5843 10.3317 19.5851C10.1784 19.5859 10.0285 19.5396 9.90228 19.4526C9.77605 19.3656 9.67952 19.242 9.62569 19.0985L4.16811 4.54493C4.11755 4.41009 4.10687 4.26355 4.13736 4.12281C4.16785 3.98207 4.2382 3.85308 4.34003 3.75126C4.44186 3.64943 4.57085 3.57907 4.71159 3.54858C4.85233 3.5181 4.99887 3.52878 5.1337 3.57934L19.6872 9.03691C19.8308 9.09074 19.9544 9.18728 20.0414 9.31351C20.1284 9.43974 20.1747 9.5896 20.1739 9.74291C20.1731 9.89622 20.1254 10.0456 20.0371 10.171C19.9488 10.2963 19.8243 10.3916 19.6802 10.444L13.6677 12.6304C13.5647 12.6678 13.4712 12.7274 13.3937 12.8049ZM13.3937 12.8049L20.0888 19.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
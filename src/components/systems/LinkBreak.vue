<script>
export default {
  name: 'link-break',
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
<path d="M9.76489 6.75V4.5M15.7649 19.5V17.25M7.51489 9H5.26489M20.2649 15H18.0149M7.42395 12.0377L6.36329 13.0983C5.66037 13.8017 5.26558 14.7554 5.26573 15.7498C5.26587 16.7441 5.66095 17.6977 6.36408 18.4009C7.0672 19.104 8.0208 19.4991 9.01517 19.4992C10.0095 19.4994 10.9633 19.1046 11.6666 18.4017L12.7273 17.341M18.1059 11.9623L19.1666 10.9017C19.8695 10.1983 20.2643 9.2446 20.2641 8.25023C20.264 7.25586 19.8689 6.30226 19.1658 5.59914C18.4627 4.89601 17.5091 4.50094 16.5147 4.50079C15.5203 4.50064 14.5666 4.89544 13.8633 5.59835L12.8026 6.65901" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
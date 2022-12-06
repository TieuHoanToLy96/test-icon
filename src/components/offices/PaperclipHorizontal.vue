<script>
export default {
  name: 'paperclip-horizontal',
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
<path d="M8.1357 13.5H18.6357C19.0335 13.5 19.4151 13.3419 19.6964 13.0606C19.9777 12.7793 20.1357 12.3978 20.1357 12C20.1357 11.6022 19.9777 11.2206 19.6964 10.9393C19.4151 10.658 19.0335 10.5 18.6357 10.5H5.1357C3.51959 10.5 2.20947 11.8431 2.20947 13.5C2.20947 15.1569 3.51959 16.5 5.1357 16.5H18.8227C20.0161 16.5 21.1607 16.0259 22.0046 15.182C22.8485 14.3381 23.3227 13.1935 23.3227 12C23.3227 10.8065 22.8485 9.66193 22.0046 8.81802C21.1607 7.97411 20.0161 7.5 18.8227 7.5H8.32265" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'record-mail-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 15C8.65685 15 10 13.6569 10 12C10 10.3431 8.65685 9 7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.5691 14.5572C18.9542 14.3205 19.2808 13.9997 19.5246 13.619C19.7683 13.2383 19.9229 12.8074 19.9767 12.3585C20.0305 11.9096 19.9822 11.4544 19.8353 11.0269C19.6884 10.5993 19.4468 10.2105 19.1286 9.88941C18.8103 9.56835 18.4236 9.32338 17.9973 9.17279C17.571 9.0222 17.1163 8.9699 16.6669 9.01979C16.2176 9.06968 15.7854 9.22047 15.4026 9.46089C15.0197 9.70131 14.6961 10.0252 14.4561 10.4082" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 15H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
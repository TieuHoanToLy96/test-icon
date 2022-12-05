<script>
export default {
  name: 'bird-svg',
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
<path d="M15.8446 7.3125C16.3619 7.3125 16.7812 6.89277 16.7812 6.375C16.7812 5.85723 16.3619 5.4375 15.8446 5.4375C15.3273 5.4375 14.908 5.85723 14.908 6.375C14.908 6.89277 15.3273 7.3125 15.8446 7.3125Z" fill="currentColor"/>
<path d="M11.7197 12.75L7.96973 17.25M19.9697 9.00001V11.25C19.9697 13.637 19.0215 15.9261 17.3337 17.614C15.6459 19.3018 13.3567 20.25 10.9697 20.25H1.21973L10.2197 9.00001V7.12501C10.2199 5.93934 10.6521 4.79436 11.4355 3.90434C12.2188 3.01431 13.2997 2.44024 14.4757 2.28955C15.6518 2.13886 16.8425 2.42188 17.8249 3.08564C18.8074 3.7494 19.5143 4.74842 19.8134 5.89574L22.2197 7.50001L19.9697 9.00001Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
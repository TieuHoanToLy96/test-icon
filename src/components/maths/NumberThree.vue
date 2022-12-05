<script>
export default {
  name: 'number-three',
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
<path d="M7.73523 3H16.734L11.4859 10.5009C12.3492 10.5008 13.1992 10.7137 13.9606 11.1206C14.722 11.5276 15.3712 12.116 15.8509 12.8338C16.3305 13.5516 16.6258 14.3766 16.7104 15.2358C16.795 16.0949 16.6665 16.9617 16.3361 17.7593C16.0058 18.5569 15.4838 19.2607 14.8165 19.8084C14.1491 20.356 13.357 20.7307 12.5103 20.8991C11.6636 21.0676 10.7884 21.0246 9.96226 20.774C9.13613 20.5234 8.38455 20.0729 7.7741 19.4624" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
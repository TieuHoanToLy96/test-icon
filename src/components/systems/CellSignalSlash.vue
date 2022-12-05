<script>
export default {
  name: 'cell-signal-slash',
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
<path d="M5.26428 3.7508L20.2643 20.2508L3.32544 20.25C3.1771 20.25 3.0321 20.206 2.90876 20.1236C2.78543 20.0412 2.6893 19.9241 2.63253 19.787C2.57576 19.65 2.56091 19.4992 2.58985 19.3537C2.61879 19.2082 2.69022 19.0746 2.79511 18.9697L11.3356 10.4292M13.4593 8.3055L18.2344 3.53034C18.3393 3.42545 18.473 3.35402 18.6185 3.32508C18.7639 3.29614 18.9147 3.31099 19.0518 3.36776C19.1888 3.42453 19.306 3.52065 19.3884 3.64399C19.4708 3.76733 19.5148 3.91233 19.5148 4.06067V14.9665" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
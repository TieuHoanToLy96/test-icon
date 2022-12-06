<script>
export default {
  name: 'ballpen-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 6L21 13L17 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.82799 18.1721C6.09061 18.4348 6.4024 18.6432 6.74557 18.7853C7.08873 18.9275 7.45654 19.0007 7.82799 19.0007C8.19944 19.0007 8.56726 18.9275 8.91042 18.7853C9.25358 18.6432 9.56538 18.4348 9.82799 18.1721L20.414 7.58607C20.5998 7.40035 20.7472 7.17983 20.8477 6.93713C20.9483 6.69442 21.0001 6.43429 21.0001 6.17157C21.0001 5.90886 20.9483 5.64872 20.8477 5.40602C20.7472 5.16331 20.5998 4.9428 20.414 4.75707L19.243 3.58607C19.0573 3.40027 18.8368 3.25288 18.594 3.15232C18.3513 3.05176 18.0912 3 17.8285 3C17.5658 3 17.3056 3.05176 17.0629 3.15232C16.8202 3.25288 16.5997 3.40027 16.414 3.58607L5.82799 14.1721C5.5653 14.4347 5.35691 14.7465 5.21474 15.0896C5.07257 15.4328 4.99939 15.8006 4.99939 16.1721C4.99939 16.5435 5.07257 16.9113 5.21474 17.2545C5.35691 17.5977 5.5653 17.9095 5.82799 18.1721V18.1721Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 19.9999L5.768 18.2319" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
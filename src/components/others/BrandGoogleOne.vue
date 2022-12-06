<script>
export default {
  name: 'brand-google-one',
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
<path d="M11 4.99802V18.98C11.0117 19.5021 11.2273 19.9988 11.6006 20.3638C11.9739 20.7289 12.4754 20.9333 12.9975 20.9333C13.5197 20.9333 14.0211 20.7289 14.3944 20.3638C14.7678 19.9988 14.9833 19.5021 14.995 18.98V4.99802C15.001 4.73194 14.9537 4.46736 14.856 4.2198C14.7583 3.97224 14.6121 3.7467 14.426 3.55641C14.24 3.36613 14.0177 3.21494 13.7724 3.11172C13.5271 3.00849 13.2637 2.95532 12.9975 2.95532C12.7314 2.95532 12.4679 3.00849 12.2226 3.11172C11.9773 3.21494 11.7551 3.36613 11.569 3.55641C11.3829 3.7467 11.2367 3.97224 11.139 4.2198C11.0413 4.46736 10.9941 4.73194 11 4.99802V4.99802Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.63009 8.40703C6.23987 8.79317 6.01422 9.31534 6.00043 9.86414C5.98663 10.4129 6.18576 10.9458 6.55609 11.351C7.32609 12.185 8.60709 12.22 9.41809 11.428L14.3681 6.59403C15.1801 5.80203 15.2141 4.48404 14.4441 3.64904C14.2642 3.45132 14.0462 3.292 13.8032 3.18063C13.5602 3.06927 13.2972 3.00815 13.03 3.00096C12.7628 2.99377 12.4969 3.04065 12.2482 3.13878C11.9996 3.23692 11.7734 3.38428 11.5831 3.57204L6.63009 8.40703V8.40703Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'brightness-off',
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
<path d="M12 3V8M12 12V21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.641 5.63107C3.95184 7.31772 3.00188 9.6063 3.00009 11.9934C2.99831 14.3804 3.94486 16.6704 5.6315 18.3596C7.31815 20.0487 9.60673 20.9987 11.9938 21.0005C14.3808 21.0023 16.6708 20.0557 18.36 18.3691M20.04 16.0511C20.8931 14.3609 21.1915 12.4448 20.8927 10.5753C20.5939 8.70573 19.7132 6.97804 18.3758 5.63798C17.0384 4.29791 15.3124 3.41374 13.4435 3.11124C11.5746 2.80874 9.65784 3.10332 7.966 3.95307" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 8.5001L16.65 4.3501" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 13.9999L13.025 13.0169M15.09 11.0359L19.37 6.92993" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 19.6L15.79 15.81M17.796 13.804L20.85 10.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
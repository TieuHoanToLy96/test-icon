<script>
export default {
  name: 'contrast-off',
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
<path d="M12 12V17C13.3197 17.002 14.5863 16.4806 15.522 15.55M16.914 12.927C17.0503 12.2045 17.0256 11.4609 16.8417 10.7491C16.6577 10.0372 16.3191 9.37472 15.8498 8.80873C15.3806 8.24275 14.7923 7.78721 14.1268 7.47457C13.4614 7.16194 12.7352 6.9999 12 7V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.64103 5.63107C3.95187 7.31772 3.00191 9.6063 3.00012 11.9934C2.99834 14.3804 3.94489 16.6704 5.63153 18.3596C7.31818 20.0487 9.60676 20.9987 11.9938 21.0005C14.3809 21.0023 16.6709 20.0557 18.36 18.3691M20.04 16.0511C20.8931 14.3609 21.1915 12.4448 20.8927 10.5753C20.594 8.70573 19.7132 6.97804 18.3758 5.63798C17.0384 4.29791 15.3125 3.41374 13.4435 3.11124C11.5746 2.80874 9.65787 3.10332 7.96603 3.95307" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
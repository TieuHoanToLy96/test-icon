<script>
export default {
  name: 'ghost-svg',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.78576 11.8125C10.3031 11.8125 10.7224 11.3928 10.7224 10.875C10.7224 10.3572 10.3031 9.9375 9.78576 9.9375C9.26847 9.9375 8.84912 10.3572 8.84912 10.875C8.84912 11.3928 9.26847 11.8125 9.78576 11.8125Z" fill="currentColor"/>
<path d="M15.0358 11.8125C15.5531 11.8125 15.9724 11.3928 15.9724 10.875C15.9724 10.3572 15.5531 9.9375 15.0358 9.9375C14.5185 9.9375 14.0991 10.3572 14.0991 10.875C14.0991 11.3928 14.5185 11.8125 15.0358 11.8125Z" fill="currentColor"/>
<path d="M20.6616 20.25L17.9116 18L15.1616 20.25L12.4116 18L9.66162 20.25L6.91162 18L4.16162 20.25V11.25C4.16162 9.06196 5.03082 6.96354 6.57799 5.41637C8.12517 3.86919 10.2236 3 12.4116 3C14.5997 3 16.6981 3.86919 18.2453 5.41637C19.7924 6.96354 20.6616 9.06196 20.6616 11.25V20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
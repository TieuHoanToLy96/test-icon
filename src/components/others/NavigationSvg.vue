<script>
export default {
  name: 'navigation-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18.5L19.265 20.963C19.3611 21.0007 19.466 21.0098 19.5671 20.9892C19.6683 20.9687 19.7613 20.9193 19.835 20.847C19.9093 20.7742 19.9614 20.6818 19.9851 20.5805C20.0088 20.4792 20.0032 20.3732 19.969 20.275L12 3L4.02998 20.275C3.99572 20.3733 3.99022 20.4793 4.01414 20.5807C4.03805 20.682 4.09038 20.7744 4.16498 20.847C4.23868 20.9193 4.33171 20.9687 4.43284 20.9892C4.53398 21.0098 4.63891 21.0007 4.73498 20.963L12 18.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
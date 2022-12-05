<script>
export default {
  name: 'lightbulb-filament',
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
<path d="M8.77905 21.75H16.279M12.529 18.75V13.5M12.529 13.5L9.52905 10.5M12.529 13.5L15.529 10.5M7.90752 15.6573C7.01572 14.9608 6.2934 14.0712 5.79486 13.0553C5.29633 12.0395 5.03453 10.9239 5.02917 9.79232C5.0067 5.72711 8.28405 2.34779 12.3482 2.25213C13.9231 2.21421 15.4699 2.67313 16.7693 3.56379C18.0687 4.45446 19.0546 5.73165 19.5873 7.21419C20.1199 8.69674 20.1723 10.3094 19.7369 11.8233C19.3014 13.3373 18.4004 14.6757 17.1615 15.6488C16.8886 15.8602 16.6674 16.1309 16.5145 16.4404C16.3616 16.7499 16.2811 17.0901 16.2791 17.4352L16.2791 18C16.2791 18.1989 16.2 18.3897 16.0594 18.5303C15.9187 18.671 15.728 18.75 15.5291 18.75H9.52904C9.33013 18.75 9.13936 18.671 8.99871 18.5303C8.85806 18.3897 8.77904 18.1989 8.77904 18L8.77903 17.4346C8.77818 17.0916 8.69926 16.7534 8.54826 16.4454C8.39727 16.1375 8.17815 15.868 7.90752 15.6573Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
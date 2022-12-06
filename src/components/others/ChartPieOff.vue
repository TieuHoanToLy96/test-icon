<script>
export default {
  name: 'chart-pie-off',
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
<path d="M5.63002 5.64298C3.94391 7.33268 2.99808 9.62297 3.00062 12.01C3.00315 14.3971 3.95383 16.6854 5.64352 18.3715C7.33322 20.0576 9.62351 21.0034 12.0106 21.0009C14.3976 20.9984 16.6859 20.0477 18.372 18.358M20.046 16.068C20.3807 15.412 20.634 14.7175 20.8 14C20.8 13.7348 20.6947 13.4804 20.5071 13.2929C20.3196 13.1053 20.0652 13 19.8 13H17M13 13C12.4696 13 11.9609 12.7893 11.5858 12.4142C11.2107 12.0391 11 11.5304 11 11M11 6.99998V3.99998C10.9876 3.88151 10.9518 3.76668 10.8946 3.66215C10.8375 3.55763 10.7602 3.46548 10.6672 3.39107C10.5741 3.31665 10.4673 3.26144 10.3527 3.22864C10.2382 3.19584 10.1183 3.1861 10 3.19998C9.28645 3.36507 8.59568 3.61659 7.94302 3.94898" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 3.5C16.2697 3.94708 17.423 4.6733 18.3748 5.62516C19.3267 6.57702 20.0529 7.73028 20.5 9H16C15.7348 9 15.4804 8.89464 15.2929 8.70711C15.1054 8.51957 15 8.26522 15 8V3.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
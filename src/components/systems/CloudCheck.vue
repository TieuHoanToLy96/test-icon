<script>
export default {
  name: 'cloud-check',
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
<path d="M8.32351 12C8.32351 10.5166 8.76337 9.06659 9.58748 7.83323C10.4116 6.59986 11.5829 5.63856 12.9534 5.07091C14.3238 4.50325 15.8318 4.35472 17.2867 4.64411C18.7415 4.9335 20.0779 5.64781 21.1268 6.6967C22.1757 7.7456 22.89 9.08197 23.1794 10.5368C23.4688 11.9917 23.3203 13.4997 22.7526 14.8701C22.1849 16.2406 21.2237 17.4119 19.9903 18.236C18.7569 19.0601 17.3069 19.5 15.8235 19.5H7.57351C6.82898 19.4993 6.09312 19.3402 5.41477 19.0333C4.73643 18.7265 4.1311 18.2788 3.63899 17.7201C3.14687 17.1614 2.77921 16.5045 2.56042 15.7928C2.34163 15.0812 2.2767 14.3311 2.36996 13.5924C2.46321 12.8538 2.7125 12.1434 3.1013 11.5084C3.49009 10.8735 4.00949 10.3285 4.62502 9.90964C5.24055 9.49078 5.93813 9.20762 6.67145 9.07897C7.40478 8.95033 8.15709 8.97912 8.87844 9.16346M18.8235 10.875L14.3235 15.375L12.0735 13.125" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
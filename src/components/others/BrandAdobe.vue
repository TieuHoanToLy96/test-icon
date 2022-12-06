<script>
export default {
  name: 'brand-adobe',
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
<path d="M12.893 4.51397L20.87 18.508C20.9353 18.6231 20.977 18.7501 20.9925 18.8816C21.008 19.013 20.9971 19.1463 20.9604 19.2734C20.9237 19.4006 20.8619 19.5192 20.7788 19.6221C20.6956 19.7251 20.5926 19.8104 20.476 19.873C20.3226 19.9566 20.1507 20.0003 19.976 20H16.5L12 12L9.5 16H11L13 20H4.023C3.458 20 3 19.55 3 18.997C3 18.826 3.045 18.657 3.13 18.507L11.107 4.51397C11.1981 4.35793 11.3285 4.22849 11.4851 4.13852C11.6418 4.04856 11.8193 4.00122 12 4.00122C12.1807 4.00122 12.3582 4.04856 12.5149 4.13852C12.6715 4.22849 12.8019 4.35793 12.893 4.51397V4.51397Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
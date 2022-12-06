<script>
export default {
  name: 'paper-plane',
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
<path d="M12.8712 17.25V11.25M12.2168 3.41852L3.3488 19.2543C3.27419 19.3875 3.24202 19.5403 3.2566 19.6923C3.27117 19.8443 3.33179 19.9882 3.43035 20.1049C3.52891 20.2215 3.66072 20.3052 3.80816 20.3449C3.95559 20.3846 4.11164 20.3784 4.25543 20.327L12.619 17.3401C12.7821 17.2818 12.9603 17.2818 13.1235 17.3401L21.487 20.327C21.6308 20.3784 21.7868 20.3846 21.9343 20.3449C22.0817 20.3052 22.2135 20.2215 22.3121 20.1049C22.4106 19.9882 22.4713 19.8443 22.4858 19.6923C22.5004 19.5403 22.4682 19.3875 22.3936 19.2543L13.5256 3.41852C13.4604 3.3022 13.3655 3.20534 13.2505 3.13793C13.1354 3.07051 13.0045 3.03497 12.8712 3.03497C12.7379 3.03497 12.607 3.07051 12.492 3.13793C12.3769 3.20534 12.282 3.3022 12.2168 3.41852Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
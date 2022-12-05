<script>
export default {
  name: 'userswitch-svg',
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
<g clip-path="url(#clip0_691_21463)">
<path d="M12 14.7969C13.933 14.7969 15.5 13.2316 15.5 11.3007C15.5 9.36985 13.933 7.80456 12 7.80456C10.067 7.80456 8.5 9.36985 8.5 11.3007C8.5 13.2316 10.067 14.7969 12 14.7969ZM12 14.7969C10.8366 14.7969 9.69588 15.1182 8.70435 15.7261C7.71281 16.3341 6.90917 17.2044 6.3825 18.2407M12 14.7969C13.1634 14.7969 14.3041 15.1182 15.2957 15.7261C16.2872 16.3341 17.0908 17.2044 17.6175 18.2407M18.3 12L20.4 14.0977M20.4 14.0977L22.5 12M20.4 14.0977L20.4 12C20.402 10.1871 19.8161 8.42232 18.7301 6.96982C17.6441 5.51733 16.1164 4.45524 14.3756 3.94253C12.6349 3.42982 10.7747 3.49408 9.07351 4.12567C7.37234 4.75727 5.92171 5.92224 4.93875 7.4462M1.5 12L3.6 9.90227M3.6 9.90227L5.7 12M3.6 9.90227L3.6 12C3.59802 13.8129 4.18387 15.5776 5.26987 17.0301C6.35587 18.4826 7.88359 19.5447 9.62437 20.0574C11.3651 20.5701 13.2253 20.5059 14.9265 19.8743C16.6277 19.2427 18.0783 18.0777 19.0612 16.5538" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_691_21463">
<rect :width="width || size" :height="height || size" fill="white"/>
</clipPath>
</defs>
</svg>

</template>
    
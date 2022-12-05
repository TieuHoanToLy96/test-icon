<script>
export default {
  name: 'bulb-off',
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
<path d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.0891 7.08292C11.8878 6.93473 12.7106 6.98338 13.4863 7.22468C14.262 7.46597 14.9672 7.89262 15.5409 8.46774C16.1147 9.04285 16.5396 9.74909 16.7791 10.5254C17.0185 11.3016 17.0652 12.1246 16.9151 12.9229M15.5371 15.5339C15.3693 15.7018 15.1899 15.8575 15.0001 15.9999C14.6096 16.3864 14.3157 16.8594 14.1419 17.3805C13.9682 17.9017 13.9196 18.4565 14.0001 18.9999C14.0001 19.5304 13.7893 20.0391 13.4143 20.4141C13.0392 20.7892 12.5305 20.9999 12.0001 20.9999C11.4696 20.9999 10.9609 20.7892 10.5858 20.4141C10.2108 20.0391 10.0001 19.5304 10.0001 18.9999C10.0805 18.4565 10.0319 17.9017 9.85818 17.3805C9.68446 16.8594 9.39049 16.3864 9.00006 15.9999C8.42609 15.5696 7.95146 15.0208 7.60838 14.3907C7.26529 13.7607 7.0618 13.0642 7.01171 12.3486C6.96163 11.633 7.06612 10.9149 7.3181 10.2433C7.57007 9.57161 7.96364 8.96203 8.47206 8.45592" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69995 17H14.3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
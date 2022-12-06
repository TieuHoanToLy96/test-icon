<script>
export default {
  name: 'shadow-off',
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
<path d="M5.63398 5.63779C3.96893 7.33032 3.04012 9.61223 3.04988 11.9865C3.05964 14.3607 4.00718 16.6349 5.68609 18.3137C7.36501 19.9925 9.63928 20.9398 12.0135 20.9494C14.3877 20.959 16.6696 20.03 18.362 18.3648M20.042 16.0448C20.8941 14.3537 21.1912 12.437 20.8909 10.5673C20.5906 8.69763 19.7082 6.97032 18.3693 5.6312C17.0304 4.29209 15.3032 3.40941 13.4336 3.10878C11.564 2.80815 9.64718 3.1049 7.95598 3.95679" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 12H18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 15H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 18H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 9H17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
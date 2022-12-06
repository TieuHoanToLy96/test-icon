<script>
export default {
  name: 'cloud-fog',
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
<path d="M6.99996 16C5.75223 16 4.55561 15.5259 3.67334 14.682C2.79107 13.838 2.29541 12.6934 2.29541 11.5C2.29541 10.3065 2.79107 9.1619 3.67334 8.31799C4.55561 7.47408 5.75223 6.99997 6.99996 6.99997C7.29464 5.68715 8.15672 4.53345 9.39654 3.79269C10.6364 3.05192 12.1524 2.78475 13.6111 3.04997C15.0698 3.31519 16.3516 4.09106 17.1747 5.2069C17.9978 6.32274 18.2946 7.68715 18 8.99997H19C19.9282 8.99997 20.8185 9.36872 21.4748 10.0251C22.1312 10.6815 22.5 11.5717 22.5 12.5C22.5 13.4282 22.1312 14.3185 21.4748 14.9748C20.8185 15.6312 19.9282 16 19 16H6.99996Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 20H19" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
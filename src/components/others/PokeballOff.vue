<script>
export default {
  name: 'pokeball-off',
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
<path d="M20.0399 16.0479C20.8921 14.3571 21.1894 12.4405 20.8894 10.571C20.5894 8.7015 19.7074 6.97422 18.3689 5.63496C17.0304 4.29571 15.3036 3.41271 13.4343 3.11161C11.5649 2.8105 9.64824 3.10664 7.95693 3.95788M5.63693 5.63588C3.95028 7.32491 3.00369 9.61478 3.00537 12.0017C3.00706 14.3887 3.9569 16.6772 5.64593 18.3639C7.33496 20.0505 9.62483 20.9971 12.0118 20.9954C14.3988 20.9937 16.6873 20.0439 18.3739 18.3549" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.88416 9.87406C9.32111 10.4363 9.00447 11.1992 9.00391 11.9949C9.00334 12.7907 9.3189 13.554 9.88116 14.1171C10.4434 14.6801 11.2063 14.9968 12.002 14.9973C12.7978 14.9979 13.5611 14.6823 14.1242 14.1201M14.6942 10.6791C14.3942 10.0701 13.8974 9.58027 13.2842 9.28906" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 12H9M16 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
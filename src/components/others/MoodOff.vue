<script>
export default {
  name: 'mood-off',
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
<path d="M5.63406 5.63802C3.94675 7.32639 2.99925 9.61588 3 12.0028C3.00075 14.3898 3.94969 16.6787 5.63806 18.366C7.32642 20.0533 9.61592 21.0008 12.0029 21.0001C14.3898 20.9993 16.6787 20.0504 18.3661 18.362M20.0451 16.04C20.8951 14.3496 21.1908 12.4343 20.8901 10.5663C20.5894 8.69822 19.7076 6.97246 18.37 5.63421C17.0324 4.29596 15.3071 3.41331 13.4392 3.11169C11.5713 2.81006 9.65587 3.1048 7.96506 3.95402" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10H9.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10H15.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 15C9.82588 15.3326 10.2148 15.5968 10.6441 15.7772C11.0734 15.9576 11.5344 16.0505 12 16.0505C12.4656 16.0505 12.9266 15.9576 13.3559 15.7772C13.7852 15.5968 14.1741 15.3326 14.5 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
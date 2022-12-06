<script>
export default {
  name: 'book-bookmark',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7388 2.40002V12L13.6181 9.60002L10.4988 12V2.40002M4.25883 20.8C4.25883 20.1635 4.50537 19.5531 4.9442 19.103C5.38303 18.6529 5.97822 18.4 6.59883 18.4H19.8588V2.40002H6.59883C5.97822 2.40002 5.38303 2.65288 4.9442 3.10297C4.50537 3.55306 4.25883 4.1635 4.25883 4.80002V20.8ZM4.25883 20.8L4.25879 21.6H18.2987" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
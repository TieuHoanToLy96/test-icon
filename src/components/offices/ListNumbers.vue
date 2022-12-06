<script>
export default {
  name: 'list-numbers',
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
<path d="M10.5732 12H21.0732M10.5732 6H21.0732M10.5732 18H21.0732M4.57324 5.625L6.07324 4.875V10.1244M4.67638 14.3016C4.74765 14.133 4.8534 13.9811 4.98683 13.8558C5.12027 13.7305 5.27844 13.6345 5.45119 13.5739C5.62395 13.5133 5.80746 13.4895 5.98994 13.5041C6.17242 13.5187 6.34984 13.5712 6.51081 13.6584C6.67177 13.7456 6.81271 13.8655 6.92459 14.0104C7.03646 14.1553 7.11679 14.322 7.16042 14.4998C7.20405 14.6776 7.21001 14.8625 7.17792 15.0428C7.14583 15.223 7.0764 15.3945 6.97409 15.5463L4.57324 18.75H7.19824" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'currency-dollar',
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
<path d="M12.3529 2.25V21.75M17.6029 8.25C17.6029 7.75754 17.5059 7.26991 17.3175 6.81494C17.129 6.35997 16.8528 5.94657 16.5046 5.59835C16.1563 5.25013 15.7429 4.97391 15.288 4.78545C14.833 4.597 14.3454 4.5 13.8529 4.5H10.4779C9.48334 4.5 8.52952 4.89509 7.82625 5.59835C7.12299 6.30161 6.72791 7.25544 6.72791 8.25C6.72791 9.24456 7.12299 10.1984 7.82625 10.9017C8.52952 11.6049 9.48334 12 10.4779 12H14.6029C15.5975 12 16.5513 12.3951 17.2546 13.0983C17.9578 13.8016 18.3529 14.7554 18.3529 15.75C18.3529 16.7446 17.9578 17.6984 17.2546 18.4017C16.5513 19.1049 15.5975 19.5 14.6029 19.5H10.1029C9.10834 19.5 8.15452 19.1049 7.45125 18.4017C6.74799 17.6984 6.35291 16.7446 6.35291 15.75" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
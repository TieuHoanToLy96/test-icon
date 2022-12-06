<script>
export default {
  name: 'empathize-off',
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
<path d="M12 8C12.4945 8 12.9778 7.85338 13.3889 7.57867C13.8 7.30397 14.1205 6.91352 14.3097 6.45671C14.4989 5.99989 14.5484 5.49723 14.452 5.01228C14.3555 4.52732 14.1174 4.08187 13.7678 3.73223C13.4181 3.3826 12.9727 3.1445 12.4877 3.04804C12.0028 2.95157 11.5001 3.00108 11.0433 3.1903C10.5865 3.37952 10.196 3.69995 9.92133 4.11108C9.64662 4.5222 9.5 5.00555 9.5 5.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.317 12.315L12 12.632L11.272 11.905C10.986 11.6152 10.6454 11.3848 10.27 11.2272C9.8945 11.0695 9.49158 10.9877 9.08438 10.9863C8.67718 10.985 8.27374 11.0643 7.89728 11.2195C7.52082 11.3747 7.17878 11.6028 6.89084 11.8908C6.60291 12.1787 6.37476 12.5208 6.21954 12.8972C6.06432 13.2737 5.98509 13.6771 5.98641 14.0843C5.98772 14.4915 6.06956 14.8944 6.22722 15.2699C6.38487 15.6453 6.61523 15.9859 6.90502 16.272L12 21.368L16.689 16.678M18.013 14.005C17.9954 13.2096 17.6714 12.4516 17.1085 11.8893C16.5457 11.3271 15.7875 11.0038 14.992 10.987" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'link-simple-break',
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
<path d="M14.0023 16.7728L11.3506 19.4245C10.5067 20.2682 9.36215 20.7421 8.1688 20.742C6.97546 20.7419 5.83103 20.2678 4.98721 19.4239C4.14339 18.5801 3.66929 17.4357 3.66919 16.2423C3.66909 15.049 4.14299 13.9045 4.98666 13.0605L7.63832 10.4089M17.1847 13.5904L19.8364 10.9388C20.68 10.0948 21.1539 8.95027 21.1538 7.75693C21.1537 6.56359 20.6796 5.41916 19.8358 4.57534C18.992 3.73152 17.8476 3.25742 16.6542 3.25732C15.4609 3.25721 14.3164 3.73112 13.4724 4.57479L10.8207 7.22644" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'cloud-slash',
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
<path d="M4.91189 3.75L19.9119 20.25M18.5895 18.7956C17.5949 19.261 16.51 19.5016 15.4119 19.5H7.16189C6.41736 19.4993 5.6815 19.3402 5.00315 19.0333C4.3248 18.7265 3.71948 18.2788 3.22737 17.7201C2.73525 17.1614 2.36759 16.5045 2.1488 15.7928C1.93001 15.0812 1.86508 14.3311 1.95834 13.5924C2.05159 12.8538 2.30088 12.1434 2.68968 11.5084C3.07847 10.8735 3.59787 10.3285 4.2134 9.90964C4.82893 9.49077 5.5265 9.20762 6.25983 9.07897C6.99316 8.95032 7.74547 8.97912 8.46682 9.16346M10.9712 5.95537C12.4654 4.8577 14.3133 4.35238 16.1581 4.53693C18.003 4.72149 19.7142 5.58283 20.9614 6.95474C22.2085 8.32665 22.9034 10.1119 22.9118 11.966C22.9202 13.82 22.2416 15.6115 21.0069 16.9947M7.91189 12C7.90977 10.6604 8.26817 9.34484 8.9495 8.19141" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
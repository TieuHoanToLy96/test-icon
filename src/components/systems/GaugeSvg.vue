<script>
export default {
  name: 'gauge-svg',
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
<path d="M12.4705 5.25V8.25M3.05268 12.4765L5.95046 13.253M21.8882 12.4765L18.9905 13.253M10.1685 18L16.5796 9.64487M2.72046 17.25V15.1058C2.72046 9.71719 7.04736 5.26871 12.436 5.25006C13.7193 5.24552 14.9908 5.49436 16.1777 5.98231C17.3646 6.47026 18.4435 7.18771 19.3525 8.09353C20.2616 8.99934 20.9828 10.0757 21.475 11.2609C21.9671 12.446 22.2205 13.7167 22.2205 15V17.25C22.2205 17.4489 22.1414 17.6397 22.0008 17.7803C21.8601 17.921 21.6694 18 21.4705 18H3.47046C3.27155 18 3.08078 17.921 2.94013 17.7803C2.79948 17.6397 2.72046 17.4489 2.72046 17.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
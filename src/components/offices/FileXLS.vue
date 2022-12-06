<script>
export default {
  name: 'file-xls',
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
<path d="M11.1601 16.2324V20.9027H14.1001M4.0201 16.2324L7.8001 20.9027M7.8001 16.2324L4.0201 20.9027M17.0401 20.5135C17.4952 20.828 18.0474 20.9986 18.6151 21C19.5601 21 20.4001 20.7081 20.4001 19.7351C20.4001 18.1784 17.0401 18.8595 17.0401 17.4C17.0401 16.6216 17.6701 16.1351 18.6151 16.1351C19.1828 16.1365 19.735 16.3071 20.1901 16.6216M3.6001 12.3405V3.77838C3.6001 3.57194 3.6886 3.37396 3.84613 3.22798C4.00366 3.08201 4.21732 3 4.4401 3H14.5201M14.5201 3L20.4001 8.44865M14.5201 3V8.44865H20.4001M20.4001 8.44865V12.3405" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
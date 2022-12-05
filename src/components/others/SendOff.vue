<script>
export default {
  name: 'send-off',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 14L12.001 11.999M14 10L21 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.7181 6.713L21.0001 3L17.2851 13.289M16.2221 16.23L14.5001 21C14.4562 21.0957 14.3858 21.1769 14.2971 21.2338C14.2085 21.2906 14.1054 21.3209 14.0001 21.3209C13.8948 21.3209 13.7917 21.2906 13.703 21.2338C13.6144 21.1769 13.5439 21.0957 13.5001 21L10.0001 14L3.00007 10.5C2.90433 10.4561 2.8232 10.3857 2.76632 10.2971C2.70944 10.2084 2.6792 10.1053 2.6792 10C2.6792 9.89468 2.70944 9.79158 2.76632 9.70295C2.8232 9.61431 2.90433 9.54387 3.00007 9.5L7.77207 7.777" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
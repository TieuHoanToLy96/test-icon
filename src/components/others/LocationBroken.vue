<script>
export default {
  name: 'location-broken',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 20L10 14L3.00001 10.5C2.90427 10.4561 2.82314 10.3857 2.76626 10.2971C2.70938 10.2084 2.67914 10.1053 2.67914 10C2.67914 9.89468 2.70938 9.79158 2.76626 9.70295C2.82314 9.61431 2.90427 9.54387 3.00001 9.5L21 3C19.302 7.703 17.95 11.37 17 14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 17L20 21M20 17L16 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
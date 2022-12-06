<script>
export default {
  name: 'world-www',
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
<path d="M19.5001 7.00002C18.6764 5.76688 17.5607 4.75644 16.2522 4.05859C14.9437 3.36073 13.4831 2.99709 12.0001 3.00002C10.5198 2.99911 9.06209 3.36374 7.75652 4.06154C6.45095 4.75933 5.33787 5.7687 4.51611 7.00002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5001 3C10.7207 4.2486 10.1069 5.5932 9.67407 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 3C13.2804 4.24975 13.8949 5.59571 14.328 7.004" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.5001 17C18.6764 18.2331 17.5607 19.2436 16.2522 19.9414C14.9437 20.6393 13.4831 21.0029 12.0001 21C10.5198 21.0009 9.06209 20.6363 7.75652 19.9385C6.45095 19.2407 5.33787 18.2313 4.51611 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5001 21C10.7207 19.7514 10.1069 18.4068 9.67407 17" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 21.0001C13.2804 19.7503 13.8949 18.4044 14.328 16.9961" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10L3 14L4.5 10L6 14L7 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10L18 14L19.5 10L21 14L22 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.5 10L10.5 14L12 10L13.5 14L14.5 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
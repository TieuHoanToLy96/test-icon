<script>
export default {
  name: 'rotate-2',
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
<path d="M15.0001 4.5501C14.0217 4.15613 12.9754 3.95872 11.9207 3.96914C10.8661 3.97956 9.82384 4.19761 8.85347 4.61083C7.8831 5.02405 7.00362 5.62435 6.26524 6.37746C5.52687 7.13058 4.94406 8.02175 4.5501 9.00009C3.75445 10.976 3.77629 13.187 4.61083 15.1467C5.44537 17.1065 7.02423 18.6544 9.00009 19.4501M9.00009 15.0001V20.0001H4.00009" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3701 7.16016V7.17016" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 19.9399V19.9499" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8401 18.3701V18.3801" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.3701 15.1001V15.1101" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9399 11V11.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
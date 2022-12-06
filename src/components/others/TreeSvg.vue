<script>
export default {
  name: 'tree-svg',
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
<path d="M12 13L10 11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12L14 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.82399 15.9951C9.38646 15.9694 8.95986 15.8483 8.57419 15.6401C8.18853 15.4319 7.85316 15.1417 7.59169 14.7899C7.33022 14.4382 7.149 14.0334 7.06077 13.6041C6.97253 13.1748 6.97944 12.7314 7.08099 12.3051C6.71807 12.0034 6.4315 11.6203 6.24458 11.187C6.05766 10.7537 5.97568 10.2823 6.0053 9.81134C6.03493 9.34035 6.17533 8.88301 6.41507 8.47652C6.65481 8.07003 6.98713 7.72588 7.38499 7.47206C7.03636 6.85272 6.91894 6.12971 7.05365 5.43187C7.18836 4.73403 7.56645 4.10668 8.12055 3.6616C8.67466 3.21651 9.36878 2.98261 10.0793 3.00156C10.7897 3.0205 11.4704 3.29108 12 3.76506C12.5297 3.29183 13.2101 3.0219 13.9202 3.00331C14.6303 2.98473 15.3239 3.21871 15.8777 3.66359C16.4314 4.10848 16.8093 4.73541 16.9441 5.43281C17.079 6.13022 16.962 6.85284 16.614 7.47206C17.0121 7.72565 17.3447 8.06968 17.5846 8.47613C17.8246 8.88259 17.9652 9.33997 17.9949 9.81104C18.0246 10.2821 17.9427 10.7535 17.7557 11.1869C17.5687 11.6203 17.2821 12.0034 16.919 12.3051C17.024 12.7459 17.0277 13.2047 16.93 13.6472C16.8322 14.0896 16.6356 14.5042 16.3547 14.8597C16.0738 15.2153 15.716 15.5026 15.3082 15.7001C14.9004 15.8976 14.4531 16.0002 14 16.0001H9.99999L9.82399 15.9951Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'box-align-top-left',
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
<path d="M11.0049 5.00488V10.0049C11.0049 10.2701 10.8995 10.5245 10.712 10.712C10.5245 10.8995 10.2701 11.0049 10.0049 11.0049H5.00488C4.73967 11.0049 4.48531 10.8995 4.29778 10.712C4.11024 10.5245 4.00488 10.2701 4.00488 10.0049V5.00488C4.00488 4.73967 4.11024 4.48531 4.29778 4.29778C4.48531 4.11024 4.73967 4.00488 5.00488 4.00488H10.0049C10.2701 4.00488 10.5245 4.11024 10.712 4.29778C10.8995 4.48531 11.0049 4.73967 11.0049 5.00488V5.00488Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0051 4.00488H14.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0051 4.00488H19.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0051 9.00488H19.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0051 15.0049H19.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00512 15.0049H3.99512" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.0051 20.0049H19.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0051 20.0049H14.9951" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.00512 20.0049H8.99512" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.00512 20.0049H3.99512" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'rotate-rectangle',
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
<path d="M10.09 4.00977L10.586 3.51477C10.9611 3.13983 11.4697 2.9292 12 2.9292C12.5304 2.9292 13.039 3.13983 13.414 3.51477L20.485 10.5848C20.671 10.7705 20.8185 10.9911 20.9192 11.2339C21.0198 11.4767 21.0716 11.7369 21.0716 11.9998C21.0716 12.2626 21.0198 12.5229 20.9192 12.7657C20.8185 13.0084 20.671 13.229 20.485 13.4148L13.415 20.4848C13.2293 20.6707 13.0087 20.8182 12.7659 20.9189C12.5231 21.0195 12.2629 21.0713 12 21.0713C11.7372 21.0713 11.477 21.0195 11.2342 20.9189C10.9914 20.8182 10.7708 20.6707 10.585 20.4848L3.51504 13.4148C3.32909 13.229 3.18157 13.0084 3.08092 12.7657C2.98027 12.5229 2.92847 12.2626 2.92847 11.9998C2.92847 11.7369 2.98027 11.4767 3.08092 11.2339C3.18157 10.9911 3.32909 10.7705 3.51504 10.5848L7.05004 7.04977H3.06204" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.05005 11.0378V7.0498" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'radar-svg',
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
<path d="M21 12H13C13 11.8022 12.9414 11.6089 12.8315 11.4444C12.7216 11.28 12.5654 11.1518 12.3827 11.0761C12.2 11.0004 11.9989 10.9806 11.8049 11.0192C11.6109 11.0578 11.4327 11.153 11.2929 11.2929C11.153 11.4327 11.0578 11.6109 11.0192 11.8049C10.9806 11.9989 11.0004 12.2 11.0761 12.3827C11.1518 12.5654 11.28 12.7216 11.4444 12.8315C11.6089 12.9414 11.8022 13 12 13V21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.9991 8.99777C15.5688 8.42558 15.0206 7.95246 14.3916 7.61043C13.7627 7.2684 13.0676 7.06542 12.3534 7.01523C11.6393 6.96504 10.9226 7.06881 10.252 7.31952C9.58143 7.57022 8.97249 7.96202 8.46639 8.46841C7.96029 8.9748 7.56884 9.58397 7.31852 10.2547C7.06819 10.9255 6.96483 11.6422 7.01543 12.3563C7.06603 13.0704 7.2694 13.7654 7.6118 14.3942C7.95419 15.0229 8.42762 15.5708 9.00006 16.0008" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.486 8.9951C19.9777 7.56273 19.1149 6.28241 17.9782 5.27355C16.8414 4.26468 15.4677 3.56013 13.9851 3.2256C12.5025 2.89106 10.9593 2.93745 9.49947 3.36043C8.03964 3.78341 6.7107 4.5692 5.63659 5.64452C4.56248 6.71985 3.77819 8.04967 3.35687 9.50999C2.93554 10.9703 2.8909 12.5135 3.22711 13.9958C3.56332 15.478 4.26942 16.8509 5.27958 17.9865C6.28973 19.1221 7.57102 19.9834 9.00397 20.4901" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
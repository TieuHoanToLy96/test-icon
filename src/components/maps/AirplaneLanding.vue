<script>
export default {
  name: 'airplane-landing',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.35278 20.25H22.8528M2.60278 9.72461V4.79056C2.60278 4.67172 2.63102 4.55458 2.68518 4.4488C2.73933 4.34301 2.81784 4.25161 2.91425 4.18213C3.01066 4.11264 3.1222 4.06706 3.23968 4.04914C3.35716 4.03121 3.47721 4.04147 3.58995 4.07905L4.85278 4.49999L6.35278 7.31249L9.35278 8.24999V4.79056C9.35278 4.67172 9.38102 4.55458 9.43518 4.4488C9.48933 4.34301 9.56784 4.25161 9.66425 4.18213C9.76066 4.11264 9.8722 4.06706 9.98968 4.04914C10.1072 4.03121 10.2272 4.04147 10.34 4.07905L11.6028 4.49999L14.6028 9.74999L19.1557 11.0147C19.7875 11.1902 20.3444 11.5678 20.7412 12.0899C21.138 12.6119 21.3528 13.2495 21.3528 13.9052V17.25L4.79389 12.6135C4.16349 12.437 3.60813 12.0591 3.21252 11.5375C2.81692 11.0159 2.60278 10.3793 2.60278 9.72461Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
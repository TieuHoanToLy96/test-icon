<script>
export default {
  name: 'flask-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.98517 3V8.79226C9.98518 8.9282 9.94823 9.06158 9.87829 9.17814L3.9167 19.1141C3.84841 19.2279 3.81155 19.3578 3.80987 19.4905C3.8082 19.6232 3.84177 19.754 3.90716 19.8695C3.97256 19.985 4.06743 20.0811 4.18209 20.1479C4.29675 20.2148 4.42709 20.25 4.55982 20.25H19.9105C20.0433 20.25 20.1736 20.2148 20.2883 20.1479C20.4029 20.0811 20.4978 19.985 20.5632 19.8695C20.6286 19.754 20.6622 19.6232 20.6605 19.4905C20.6588 19.3578 20.6219 19.2279 20.5537 19.1141L14.5921 9.17813C14.5221 9.06157 14.4852 8.92819 14.4852 8.79226V3M8.48517 3H15.9852M6.1055 15.4654C7.21398 14.6575 9.11682 14.1908 12.2352 15.75C15.5825 17.4236 17.5292 16.7631 18.5963 15.8518" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
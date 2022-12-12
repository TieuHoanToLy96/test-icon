<script>
export default {
  name: 'wrench-svg',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.9314 3.47509L13.9975 7.40902L14.5278 10.0607L17.1794 10.591L21.1134 6.65707L21.1137 6.65691C21.6007 7.80631 21.7171 9.07893 21.4469 10.2976C21.1767 11.5163 20.5332 12.6204 19.6061 13.4563C18.679 14.2921 17.5143 14.8182 16.2742 14.9611C15.0342 15.1041 13.7804 14.8568 12.6874 14.2538L12.6875 14.2536L7.42944 20.341C7.0074 20.7626 6.43523 20.9993 5.83872 20.9991C5.2422 20.9989 4.67017 20.7619 4.24837 20.3401C3.82657 19.9183 3.58953 19.3463 3.58936 18.7497C3.58919 18.1532 3.8259 17.5811 4.24746 17.159L10.3348 11.901L10.3346 11.9011C9.73164 10.8081 9.4844 9.5543 9.62735 8.31422C9.77029 7.07414 10.2963 5.90948 11.1322 4.98236C11.968 4.05524 13.0721 3.41178 14.2908 3.14155C15.5095 2.87133 16.7821 2.98778 17.9315 3.47471L17.9314 3.47509Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
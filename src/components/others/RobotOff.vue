<script>
export default {
  name: 'robot-off',
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
<path d="M11 7H17C17.5304 7 18.0391 7.21071 18.4142 7.58579C18.7893 7.96086 19 8.46957 19 9V10L20 11V14L19 15M18.829 18.811C18.672 19.165 18.4156 19.4658 18.0909 19.6768C17.7662 19.8879 17.3872 20.0002 17 20H7C6.46957 20 5.96086 19.7893 5.58579 19.4142C5.21071 19.0391 5 18.5304 5 18V15L4 14V11L5 10V9C5 8.46957 5.21071 7.96086 5.58579 7.58579C5.96086 7.21071 6.46957 7 7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 12.5C9.05228 12.5 9.5 12.0523 9.5 11.5C9.5 10.9477 9.05228 10.5 8.5 10.5C7.94772 10.5 7.5 10.9477 7.5 11.5C7.5 12.0523 7.94772 12.5 8.5 12.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.854 11.853C15.9248 11.7834 15.9731 11.6943 15.9929 11.597C16.0126 11.4997 16.0028 11.3988 15.9648 11.3071C15.9267 11.2154 15.8622 11.1372 15.7794 11.0825C15.6966 11.0278 15.5993 10.9991 15.5 11C15.4338 10.9999 15.3682 11.0131 15.307 11.0386C15.2459 11.0642 15.1905 11.1018 15.144 11.149" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.336 4.343L8 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 7L16 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
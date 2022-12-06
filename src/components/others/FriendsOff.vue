<script>
export default {
  name: 'friends-off',
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
<path d="M5 5C5 5.53043 5.21071 6.03914 5.58579 6.41421C5.96086 6.78929 6.46957 7 7 7M9 5C9 4.46957 8.78929 3.96086 8.41421 3.58579C8.03914 3.21071 7.53043 3 7 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 22V17L4 16V12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H9C9.26522 11 9.51957 11.1054 9.70711 11.2929C9.89464 11.4804 10 11.7348 10 12V16L9 17V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 7C18.1046 7 19 6.10457 19 5C19 3.89543 18.1046 3 17 3C15.8954 3 15 3.89543 15 5C15 6.10457 15.8954 7 17 7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22V18H13L14.254 14.237M15.29 11.295C15.3829 11.2013 15.4935 11.1269 15.6154 11.0763C15.7373 11.0257 15.868 10.9997 16 11H18C18.2652 11 18.5196 11.1054 18.7071 11.2929C18.8946 11.4804 19 11.7348 19 12L20.503 16.508M19 19V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
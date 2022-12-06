<script>
export default {
  name: 'camera-off',
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
<path d="M8.29 4.296C8.38295 4.20224 8.49354 4.1278 8.6154 4.077C8.73726 4.0262 8.86797 4.00003 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V17M19.821 19.824C19.571 19.937 19.293 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H6C6.292 7 6.568 6.938 6.818 6.825" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4359 10.4399C10.0487 10.6767 9.7202 10.9983 9.47527 11.3804C9.23034 11.7626 9.0753 12.1953 9.02185 12.646C8.9684 13.0968 9.01792 13.5538 9.16669 13.9826C9.31545 14.4114 9.55958 14.8009 9.88069 15.1217C10.2018 15.4425 10.5915 15.6862 11.0205 15.8346C11.4494 15.9829 11.9065 16.032 12.3572 15.9781C12.8078 15.9242 13.2404 15.7688 13.6223 15.5235C14.0042 15.2782 14.3255 14.9494 14.5619 14.5619" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'panorama-horizontal',
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
<path d="M4.338 5.5301C9.444 7.4621 14.549 7.4621 19.655 5.5321C19.8058 5.47668 19.9677 5.4584 20.127 5.4788C20.2864 5.49921 20.4384 5.5577 20.5704 5.64933C20.7023 5.74095 20.8103 5.86302 20.8851 6.00519C20.9598 6.14737 20.9993 6.30547 21 6.4661V17.4661C21 18.1581 20.308 18.6661 19.66 18.4281C14.553 16.4961 9.446 16.4961 4.339 18.4281C3.691 18.6741 3 18.1861 3 17.4931V6.4661C3.00098 6.30623 3.04028 6.14891 3.11461 6.00736C3.18894 5.8658 3.29612 5.74413 3.42718 5.65255C3.55823 5.56097 3.70933 5.50215 3.86781 5.48102C4.02629 5.45989 4.18753 5.47706 4.338 5.5311V5.5301Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
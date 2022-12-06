<script>
export default {
  name: 'panorama-horizontal-off',
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
<path d="M10.95 6.9521C13.851 7.1021 16.753 6.6291 19.655 5.5321C19.8058 5.47668 19.9677 5.4584 20.127 5.4788C20.2864 5.49921 20.4385 5.5577 20.5704 5.64933C20.7024 5.74095 20.8103 5.86302 20.8851 6.00519C20.9598 6.14737 20.9993 6.30547 21 6.4661V17.0001M17.788 17.8061C13.305 16.5251 8.82201 16.7321 4.33901 18.4281C4.1885 18.4841 4.02668 18.5027 3.8674 18.4824C3.70812 18.4621 3.55614 18.4034 3.42449 18.3115C3.29284 18.2196 3.18545 18.0971 3.11152 17.9545C3.03759 17.812 2.99932 17.6537 3.00001 17.4931V6.4661C3.00099 6.30623 3.04029 6.14891 3.11462 6.00736C3.18895 5.8658 3.29613 5.74413 3.42719 5.65255C3.55824 5.56097 3.70934 5.50215 3.86782 5.48102C4.0263 5.45989 4.18754 5.47706 4.33801 5.5311C4.92601 5.7521 5.51401 5.9491 6.10201 6.1211" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
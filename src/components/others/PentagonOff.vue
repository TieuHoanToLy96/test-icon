<script>
export default {
  name: 'pentagon-off',
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
<path d="M8.868 4.85693L10.804 3.39993C11.1493 3.14013 11.5694 2.99913 12.0015 2.99805C12.4336 2.99697 12.8544 3.13586 13.201 3.39393L20.233 8.63093C20.5722 8.88337 20.8227 9.23685 20.9485 9.64057C21.0743 10.0443 21.0688 10.4775 20.933 10.8779L19.411 15.3629M18.384 18.3919L17.96 19.6419C17.8258 20.0378 17.571 20.3817 17.2312 20.6253C16.8915 20.8689 16.484 20.9999 16.066 20.9999H7.946C7.52511 21.0001 7.1149 20.8675 6.77376 20.621C6.43262 20.3745 6.17795 20.0266 6.046 19.6269L3.15 10.8619C3.01883 10.4649 3.01543 10.0366 3.14028 9.63753C3.26513 9.23842 3.51194 8.88848 3.846 8.63693L6.582 6.57693" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
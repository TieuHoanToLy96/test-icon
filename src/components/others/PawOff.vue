<script>
export default {
  name: 'paw-off',
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
<path d="M11.168 11.1538C10.458 11.4638 9.98401 12.2608 9.16401 13.7468C8.22201 15.4498 6.31801 15.5918 5.84301 17.0378C5.74601 17.3028 5.69801 17.7148 5.70001 17.9998C5.70001 19.1758 6.48701 19.9998 7.50001 19.9998C8.75901 19.9998 10.504 18.9998 12 18.9998C13.496 18.9998 15.241 19.9998 16.5 19.9998C17.427 19.9998 18.164 19.3108 18.283 18.2918" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.1881 8.082C20.0596 8.0277 19.9215 7.99981 19.7821 8H19.7671C19.0321 8.012 18.2071 8.75 17.7741 9.866C17.2551 11.201 17.4941 12.566 18.3121 12.918C18.4411 12.973 18.5791 13 18.7181 13C19.4571 13 20.2931 12.258 20.7291 11.134C21.2451 9.799 21.0021 8.434 20.1891 8.082H20.1881Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.997 6.992C11.008 6.7496 10.9946 6.50671 10.957 6.267C10.754 4.97 9.90997 4 9.02497 4C8.74986 4.00159 8.48314 4.09483 8.26697 4.265" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.456 6.733C16.67 5.357 16.081 4.139 15.136 4.011C15.0823 4.00357 15.0282 3.99989 14.974 4C14.089 4 13.246 4.97 13.044 6.267C12.83 7.643 13.419 8.861 14.364 8.989C14.418 8.996 14.472 9 14.526 9C15.411 9 16.256 8.026 16.456 6.733V6.733Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.68995 12.918C6.50595 12.566 6.74395 11.199 6.22595 9.866C5.78995 8.742 4.95495 8 4.21695 8C4.07695 8 3.93995 8.027 3.80995 8.082C2.99395 8.434 2.75595 9.801 3.27395 11.134C3.70995 12.258 4.54495 13 5.28295 13C5.42295 13 5.55995 12.973 5.68995 12.918Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'apple-logo',
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
<path d="M13.067 3.04744C13.2849 2.48157 13.6692 1.995 14.1691 1.65183C14.6691 1.30865 15.2613 1.12498 15.8676 1.125M20.6032 15.275C19.4241 18.1548 17.2838 20.25 15.4926 20.25H8.74265C6.11765 20.25 2.74265 15.75 2.74265 10.875C2.74266 9.78912 3.05697 8.72646 3.64764 7.81528C4.23831 6.9041 5.08008 6.18337 6.07136 5.74007C7.06263 5.29678 8.16102 5.14988 9.23395 5.3171C10.3069 5.48432 11.3085 5.95852 12.1178 6.68246C12.6908 6.17001 13.3626 5.78026 14.092 5.53761C14.8214 5.29496 15.5929 5.20438 16.3586 5.27146C17.1244 5.33854 17.8683 5.56186 18.5445 5.92764C19.2206 6.29341 19.8145 6.79388 20.2897 7.39815C19.6009 7.81473 19.0363 8.40843 18.6549 9.11735C18.2735 9.82628 18.0892 10.6245 18.1212 11.4289C18.1532 12.2333 18.4002 13.0144 18.8367 13.6908C19.2732 14.3672 19.8835 14.9144 20.6032 15.275Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
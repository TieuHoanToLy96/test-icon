<script>
export default {
  name: 'barbell-off',
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
<path d="M2 12H3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 8H4C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9V15C3 15.2652 3.10536 15.5196 3.29289 15.7071C3.48043 15.8946 3.73478 16 4 16H6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.298 6.28809C6.2035 6.381 6.12847 6.49183 6.0773 6.61408C6.02614 6.73633 5.99986 6.86756 6 7.00009V17.0001C6 17.2653 6.10536 17.5197 6.29289 17.7072C6.48043 17.8947 6.73478 18.0001 7 18.0001H8C8.26522 18.0001 8.51957 17.8947 8.70711 17.7072C8.89464 17.5197 9 17.2653 9 17.0001V9.00009" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18H17C17.275 18 17.523 17.89 17.704 17.71M18 14V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H16C15.7348 6 15.4804 6.10536 15.2929 6.29289C15.1054 6.48043 15 6.73478 15 7V11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V15C21 15.2652 20.8946 15.5196 20.7071 15.7071C20.5196 15.8946 20.2652 16 20 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
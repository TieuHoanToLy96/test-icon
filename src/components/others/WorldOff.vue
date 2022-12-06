<script>
export default {
  name: 'world-off',
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
<path d="M3.6001 9H9.0001M13.0001 9H20.4001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.65001 5.62296C4.80212 6.45505 4.12736 7.44677 3.66464 8.54092C3.20192 9.63508 2.96039 10.81 2.95399 11.998C2.94759 13.1859 3.17644 14.3634 3.62734 15.4625C4.07825 16.5616 4.74228 17.5605 5.58115 18.4017C6.42002 19.2429 7.41713 19.9096 8.51496 20.3636C9.61279 20.8175 10.7896 21.0496 11.9776 21.0464C13.1656 21.0433 14.3412 20.805 15.4366 20.3453C16.532 19.8856 17.5256 19.2136 18.36 18.368M20.044 16.04C20.8951 14.3483 21.1909 12.4314 20.8893 10.5619C20.5877 8.69243 19.7042 6.96571 18.3644 5.62748C17.0246 4.28925 15.2969 3.40771 13.4271 3.10832C11.5573 2.80893 9.64064 3.10695 7.95001 3.95996" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.6001 15H15.0001M19.0001 15H20.4001" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.33509 8.388C8.10847 9.57856 7.99629 10.7881 8.00009 12C8.00009 16.97 9.79009 21 12.0001 21C13.6221 21 15.0181 18.828 15.6461 15.706M16.0001 12C16.0001 7.03 14.2101 3 12.0001 3C10.9651 3 10.0211 3.885 9.31109 5.337" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'help-off',
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
<path d="M5.64091 5.63107C3.95175 7.31772 3.00178 9.6063 3 11.9934C2.99822 14.3804 3.94477 16.6704 5.63141 18.3596C7.31806 20.0487 9.60664 20.9987 11.9937 21.0005C14.3808 21.0023 16.6707 20.0557 18.3599 18.3691M20.0399 16.0511C20.893 14.3609 21.1914 12.4448 20.8926 10.5753C20.5938 8.70573 19.7131 6.97804 18.3757 5.63798C17.0383 4.29791 15.3123 3.41374 13.4434 3.11124C11.5745 2.80874 9.65775 3.10332 7.96591 3.95307" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17V17.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.0001 13.4998C11.9888 13.2994 12.0179 13.0988 12.0856 12.9099C12.1532 12.7209 12.2582 12.5475 12.3941 12.3998M14.5001 10.4998C14.6791 10.0317 14.719 9.52189 14.615 9.03164C14.511 8.5414 14.2675 8.09166 13.9139 7.73656C13.5603 7.38145 13.1115 7.13611 12.6217 7.03007C12.1319 6.92402 11.6219 6.96179 11.1531 7.13883" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'poo-svg',
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
<path d="M10 12H10.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12H14.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 16C10.5869 16.4087 11.2849 16.6277 12 16.6277C12.7151 16.6277 13.4131 16.4087 14 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4C13 4 14.5 5.5 14.5 8L14.664 8.005C15.0486 8.03025 15.4221 8.14407 15.7554 8.33757C16.0887 8.53106 16.3727 8.79899 16.5853 9.12042C16.7979 9.44186 16.9333 9.80809 16.981 10.1905C17.0286 10.573 16.9872 10.9612 16.86 11.325C17.4127 11.606 17.8648 12.0515 18.154 12.6C18.4432 13.1485 18.5554 13.7731 18.475 14.388C19.039 14.7065 19.4848 15.1991 19.7456 15.792C20.0065 16.3848 20.0685 17.0462 19.9223 17.6773C19.7761 18.3083 19.4296 18.8751 18.9346 19.2928C18.4396 19.7106 17.8226 19.9569 17.176 19.995L17 20H7C6.33701 20 5.69268 19.7804 5.16769 19.3755C4.6427 18.9706 4.26663 18.4032 4.09823 17.762C3.92983 17.1207 3.9786 16.4418 4.23692 15.8312C4.49523 15.2206 4.94853 14.7127 5.526 14.387C5.44585 13.7723 5.55809 13.1479 5.84729 12.5996C6.13648 12.0512 6.58844 11.606 7.141 11.325C7.01378 10.9613 6.97235 10.5731 7.01994 10.1908C7.06754 9.80839 7.20287 9.44221 7.41537 9.12079C7.62787 8.79938 7.91179 8.53143 8.24496 8.33788C8.57813 8.14432 8.95153 8.0304 9.336 8.005L9.5 8C11 8 12 6 11 4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
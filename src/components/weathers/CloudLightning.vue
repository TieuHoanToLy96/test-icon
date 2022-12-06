<script>
export default {
  name: 'cloud-lightning',
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
<path d="M12.8234 22.5L15.2844 18.75H10.5734L13.0344 15M9.07344 8.625C9.07344 7.36415 9.44733 6.13161 10.1478 5.08324C10.8483 4.03488 11.844 3.21778 13.0088 2.73527C14.1737 2.25276 15.4555 2.12652 16.6921 2.3725C17.9288 2.61848 19.0647 3.22564 19.9562 4.1172C20.8478 5.00876 21.455 6.14467 21.7009 7.3813C21.9469 8.61793 21.8207 9.89973 21.3382 11.0646C20.8557 12.2295 20.0386 13.2251 18.9902 13.9256C17.9418 14.6261 16.7093 15 15.4484 15H7.94844C7.34951 14.9995 6.75787 14.8686 6.21465 14.6163C5.67142 14.3641 5.18964 13.9966 4.80279 13.5393C4.41594 13.0821 4.1333 12.5461 3.97451 11.9686C3.81573 11.3911 3.7846 10.786 3.8833 10.1952C3.98201 9.60447 4.20817 9.04231 4.54607 8.5478C4.88397 8.05329 5.3255 7.63829 5.83998 7.33164C6.35446 7.025 6.92955 6.83407 7.52527 6.77213C8.12099 6.71018 8.72305 6.7787 9.28961 6.97293" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
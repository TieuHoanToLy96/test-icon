<script>
export default {
  name: 'brand-comedy-central',
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
<path d="M5.34277 17.657C6.46161 18.7758 7.88707 19.5377 9.43891 19.8463C10.9907 20.155 12.5993 19.9965 14.061 19.391C15.5228 18.7855 16.7722 17.7601 17.6513 16.4445C18.5303 15.1289 18.9995 13.5822 18.9995 12C18.9995 10.4178 18.5303 8.87107 17.6513 7.55548C16.7722 6.2399 15.5228 5.21452 14.061 4.60901C12.5993 4.00349 10.9907 3.84504 9.43891 4.15369C7.88707 4.46234 6.46161 5.22422 5.34277 6.343" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.8279 9.172C13.2685 8.61247 12.5558 8.23139 11.7798 8.07695C11.0039 7.92251 10.1995 8.00165 9.46857 8.30437C8.73759 8.60708 8.11281 9.11977 7.67323 9.7776C7.23365 10.4354 6.99902 11.2088 6.99902 12C6.99902 12.7912 7.23365 13.5646 7.67323 14.2224C8.11281 14.8802 8.73759 15.3929 9.46857 15.6956C10.1995 15.9984 11.0039 16.0775 11.7798 15.9231C12.5558 15.7686 13.2685 15.3875 13.8279 14.828" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
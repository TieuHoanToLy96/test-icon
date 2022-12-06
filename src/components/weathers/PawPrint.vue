<script>
export default {
  name: 'paw-print',
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
<path d="M20.6399 12C21.6754 12 22.5149 11.1605 22.5149 10.125C22.5149 9.08947 21.6754 8.25 20.6399 8.25C19.6044 8.25 18.7649 9.08947 18.7649 10.125C18.7649 11.1605 19.6044 12 20.6399 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.88989 12C5.92543 12 6.76489 11.1605 6.76489 10.125C6.76489 9.08947 5.92543 8.25 4.88989 8.25C3.85436 8.25 3.01489 9.08947 3.01489 10.125C3.01489 11.1605 3.85436 12 4.88989 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.38989 7.5C10.4254 7.5 11.2649 6.66053 11.2649 5.625C11.2649 4.58947 10.4254 3.75 9.38989 3.75C8.35436 3.75 7.51489 4.58947 7.51489 5.625C7.51489 6.66053 8.35436 7.5 9.38989 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.1399 7.5C17.1754 7.5 18.0149 6.66053 18.0149 5.625C18.0149 4.58947 17.1754 3.75 16.1399 3.75C15.1044 3.75 14.2649 4.58947 14.2649 5.625C14.2649 6.66053 15.1044 7.5 16.1399 7.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.9432 14.6113C17.0026 14.0888 16.3062 13.216 16.0057 12.1828C15.8017 11.4811 15.3754 10.8646 14.791 10.4259C14.2067 9.98719 13.4956 9.75 12.7649 9.75C12.0341 9.75 11.3231 9.98719 10.7387 10.4259C10.1543 10.8646 9.72813 11.4812 9.52416 12.1829C9.22365 13.2161 8.52723 14.0888 7.58654 14.6113C6.90893 14.9786 6.39864 15.5925 6.16145 16.3259C5.92426 17.0593 5.97837 17.8558 6.31255 18.5503C6.64673 19.2449 7.23536 19.7842 7.95642 20.0565C8.67748 20.3288 9.47568 20.3132 10.1855 20.0129C11.8383 19.3352 13.6915 19.3352 15.3442 20.0129C16.0542 20.3135 16.8525 20.3294 17.5738 20.0571C18.2951 19.7849 18.8839 19.2455 19.2182 18.5508C19.5524 17.8561 19.6065 17.0594 19.3691 16.3259C19.1317 15.5924 18.6212 14.9784 17.9432 14.6113Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
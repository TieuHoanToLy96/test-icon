<script>
export default {
  name: 'brand-4chan',
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
<path d="M14 11C14 11 20.054 9.95 20 6.5C19.962 4.176 17.515 3.31 16.984 5C16.984 5 16.482 3 14.974 3C13.466 3 11.99 6 14 11V11Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.98 11C13.98 11 20.055 9.95 20 6.5C19.962 4.176 17.507 3.31 16.975 5C16.975 5 16.47 3 14.958 3C13.445 3 11.964 6 13.981 11H13.98Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 13.98L13.062 14.289L13.143 14.639L13.218 14.929L13.31 15.257L13.42 15.615L13.481 15.803L13.62 16.195C14.26 17.925 15.461 20.032 17.5 20C19.824 19.962 20.69 17.507 19 16.975L19.148 16.93L19.313 16.872C19.3458 16.8594 19.3785 16.8464 19.411 16.833L19.633 16.735C20.219 16.455 21 15.903 21 14.958C21 13.445 18 11.964 13 13.981V13.98Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.02 13L9.71099 13.062L9.36099 13.143L9.07099 13.218L8.74299 13.31L8.38499 13.42L8.19699 13.481L7.80499 13.62C6.07499 14.26 3.96799 15.46 3.99999 17.5C4.03799 19.824 6.49299 20.69 7.02499 19L7.06999 19.148L7.12799 19.313L7.16699 19.411L7.26499 19.633C7.54499 20.219 8.09699 21 9.04199 21C10.555 21 12.036 18 10.019 13H10.02Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 10.0201L10.938 9.7111L10.857 9.3611L10.782 9.0711L10.69 8.7431L10.58 8.3851L10.452 8.0031L10.304 7.6041C9.646 5.9171 8.46 3.9701 6.5 4.0001C4.176 4.0381 3.31 6.4931 5 7.0251L4.852 7.0701L4.688 7.1281C4.6545 7.14066 4.62116 7.15367 4.588 7.1671L4.368 7.2651C3.78 7.5451 3 8.0971 3 9.0421C3 10.5551 6 12.0361 11 10.0191V10.0201Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
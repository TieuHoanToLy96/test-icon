<script>
export default {
  name: 'brand-redux',
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
<path d="M16.5401 7C15.7351 4.635 14.0041 3 12.0001 3C9.22605 3 6.97705 5.632 6.97705 9.496C6.97705 11.452 8.55905 14.223 9.48905 15.492" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.71092 11.979C3.05492 13.856 2.49692 16.164 3.49992 17.89C4.88692 20.28 8.63792 20.721 12.0009 18.79C13.7039 17.811 14.8759 15.428 15.5169 13.992" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.0141 19.9899C17.5251 19.9899 19.5371 19.5519 20.5011 17.8899C21.8881 15.4999 20.2861 11.9969 16.9221 10.0659C15.2201 9.0869 12.5651 8.8309 10.9951 8.9959" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.4931 9.86203C10.9731 10.138 11.5881 9.97403 11.8651 9.49603C11.931 9.38239 11.9737 9.25685 11.9909 9.12664C12.0081 8.99642 11.9994 8.86409 11.9653 8.73725C11.9312 8.61041 11.8724 8.49156 11.7922 8.38752C11.712 8.28349 11.6121 8.19632 11.4981 8.13103C11.2674 7.99809 10.9934 7.96197 10.736 8.03056C10.4787 8.09915 10.2591 8.26687 10.1251 8.49703C10.0593 8.61073 10.0166 8.73632 9.99947 8.86657C9.98235 8.99683 9.99114 9.12918 10.0253 9.25603C10.0595 9.38288 10.1185 9.50172 10.1987 9.60571C10.279 9.70971 10.3791 9.79682 10.4931 9.86203V9.86203Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 15.5C10.5 15.5 10.0523 15.5 9.5 15.5C8.94772 15.5 8.5 15.5 8.5 15.5C8.5 15.5 8.94772 15.5 9.5 15.5C10.0523 15.5 10.5 15.5 10.5 15.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 14C16.5 14 16.0523 14 15.5 14C14.9477 14 14.5 14 14.5 14C14.5 14 14.9477 14 15.5 14C16.0523 14 16.5 14 16.5 14Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
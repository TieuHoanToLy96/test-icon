<script>
export default {
  name: 'circles-four',
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
      default: "currentColor"
    }
  }
}
</script>
  
<template>
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.06616 10.5C9.93012 10.5 11.4412 8.98896 11.4412 7.125C11.4412 5.26104 9.93012 3.75 8.06616 3.75C6.2022 3.75 4.69116 5.26104 4.69116 7.125C4.69116 8.98896 6.2022 10.5 8.06616 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8162 10.5C19.6801 10.5 21.1912 8.98896 21.1912 7.125C21.1912 5.26104 19.6801 3.75 17.8162 3.75C15.9522 3.75 14.4412 5.26104 14.4412 7.125C14.4412 8.98896 15.9522 10.5 17.8162 10.5Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.06616 20.25C9.93012 20.25 11.4412 18.739 11.4412 16.875C11.4412 15.011 9.93012 13.5 8.06616 13.5C6.2022 13.5 4.69116 15.011 4.69116 16.875C4.69116 18.739 6.2022 20.25 8.06616 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8162 20.25C19.6801 20.25 21.1912 18.739 21.1912 16.875C21.1912 15.011 19.6801 13.5 17.8162 13.5C15.9522 13.5 14.4412 15.011 14.4412 16.875C14.4412 18.739 15.9522 20.25 17.8162 20.25Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
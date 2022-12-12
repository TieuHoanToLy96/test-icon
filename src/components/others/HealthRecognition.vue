<script>
export default {
  name: 'health-recognition',
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
  <svg :style='{color: color}' :width="width || size" :height="height || size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 16V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.60299 9.61016C8.7929 9.41665 9.01947 9.26293 9.26946 9.158C9.51946 9.05307 9.78787 8.99902 10.059 8.99902C10.3301 8.99902 10.5985 9.05307 10.8485 9.158C11.0985 9.26293 11.3251 9.41665 11.515 9.61016L12 10.0002L12.5 9.60416C12.6898 9.41277 12.9157 9.26099 13.1646 9.15762C13.4135 9.05426 13.6804 9.00136 13.95 9.00201C14.2195 9.00267 14.4862 9.05685 14.7346 9.16142C14.983 9.26598 15.2082 9.41886 15.397 9.61116C15.7835 10.0046 16.0001 10.5341 16.0001 11.0857C16.0001 11.6372 15.7835 12.1667 15.397 12.5602L12 16.0002L8.60299 12.5602C8.21616 12.1667 7.99939 11.637 7.99939 11.0852C7.99939 10.5334 8.21616 10.0036 8.60299 9.61016Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
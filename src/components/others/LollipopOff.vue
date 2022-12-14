<script>
export default {
  name: 'lollipop-off',
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
<path d="M7.46203 7.49291C6.97606 8.75777 6.86764 10.1365 7.14993 11.4618C7.43223 12.787 8.09309 14.0019 9.05234 14.9589C10.0116 15.9159 11.228 16.574 12.5539 16.8532C13.8798 17.1324 15.2583 17.0208 16.522 16.5319M18.938 14.9619C20.2528 13.6512 20.9931 11.8719 20.996 10.0154C20.9989 8.15885 20.2642 6.37722 18.9535 5.06241C17.6428 3.7476 15.8635 3.00731 14.007 3.0044C12.1505 3.0015 10.3688 3.73621 9.05403 5.04691" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 10C21 9.07174 20.6313 8.1815 19.9749 7.52513C19.3185 6.86875 18.4283 6.5 17.5 6.5C16.5717 6.5 15.6815 6.86875 15.0251 7.52513C14.3687 8.1815 14 9.07174 14 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.71 12.715C12.1967 13.133 11.5754 13.3968 10.9182 13.4759C10.261 13.555 9.59486 13.4461 8.99706 13.1619C8.39925 12.8776 7.89431 12.4297 7.54083 11.87C7.18734 11.3104 6.99981 10.6619 7 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 17C14.838 17 15.607 16.706 16.209 16.215M17.5 13.5C17.5 12.5717 17.1313 11.6815 16.4749 11.0251C15.8185 10.3687 14.9283 10 14 10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 3C13.0717 3 12.1815 3.36875 11.5251 4.02513C10.8687 4.6815 10.5 5.57174 10.5 6.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 21L9 15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
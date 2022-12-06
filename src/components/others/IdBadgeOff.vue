<script>
export default {
  name: 'id-badge-off',
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
<path d="M7.141 3.125C7.41976 3.04191 7.70912 2.9998 8 3H16C16.7957 3 17.5587 3.31607 18.1213 3.87868C18.6839 4.44129 19 5.20435 19 6V15M18.87 18.874C18.6825 19.4891 18.3024 20.0277 17.7857 20.4104C17.269 20.7932 16.643 20.9999 16 21H8C7.20435 21 6.44129 20.6839 5.87868 20.1213C5.31607 19.5587 5 18.7957 5 18V6C4.9998 5.70562 5.04293 5.41282 5.128 5.131" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.1789 11.1758C10.8847 11.3083 10.6269 11.5101 10.4276 11.7639C10.2283 12.0177 10.0933 12.316 10.0343 12.6332C9.97521 12.9505 9.99379 13.2773 10.0884 13.5858C10.1831 13.8943 10.351 14.1753 10.5778 14.4049C10.8046 14.6344 11.0835 14.8057 11.3909 14.9041C11.6982 15.0024 12.0248 15.025 12.3428 14.9697C12.6607 14.9145 12.9606 14.7832 13.2167 14.5869C13.4729 14.3907 13.6778 14.1354 13.8139 13.8428" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 6H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 18H15" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
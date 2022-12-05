<script>
export default {
  name: 'crutches-off',
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
<path d="M8.17822 4.174C8.33698 3.82391 8.59326 3.52699 8.9164 3.31878C9.23953 3.11057 9.61582 2.9999 10.0002 3H14.0002C14.2629 3 14.5229 3.05173 14.7656 3.15224C15.0082 3.25275 15.2287 3.40007 15.4144 3.58579C15.6002 3.7715 15.7475 3.99198 15.848 4.23463C15.9485 4.47728 16.0002 4.73736 16.0002 5C16.0002 5.26264 15.9485 5.52272 15.848 5.76537C15.7475 6.00802 15.6002 6.2285 15.4144 6.41421C15.2287 6.59993 15.0082 6.74725 14.7656 6.84776C14.5229 6.94827 14.2629 7 14.0002 7H11.0002" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 21H13" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V16.908C12.0001 16.3157 12.1754 15.7368 12.504 15.244L13.496 13.756C13.5299 13.7053 13.5622 13.6536 13.593 13.601M14 10V7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V16.908C11.9999 16.3157 11.8246 15.7368 11.496 15.244L10.504 13.756C10.1754 13.2632 10.0001 12.6843 10 12.092V10" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 11H11" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
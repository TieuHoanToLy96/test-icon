<script>
export default {
  name: 'recharging-svg',
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
<path d="M7.03797 4.5C6.05222 5.15156 5.20443 5.99086 4.54297 6.97" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.186 10.209C2.9559 11.367 2.9559 12.559 3.186 13.717" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.5 16.9619C5.15156 17.9477 5.99086 18.7955 6.97 19.4569" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.209 20.814C11.3644 21.043 12.5536 21.043 13.709 20.814" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9619 19.4998C17.9477 18.8482 18.7955 18.0089 19.4569 17.0298" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.814 13.7912C21.0441 12.6332 21.0441 11.4412 20.814 10.2832" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4998 7.03797C18.8482 6.05222 18.0089 5.20443 17.0298 4.54297" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.7912 3.18614C12.6345 2.94944 11.4425 2.94264 10.2832 3.16614" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 8L10 12H14L12 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21C14.3869 21 16.6761 20.0518 18.364 18.364C20.0518 16.6761 21 14.3869 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
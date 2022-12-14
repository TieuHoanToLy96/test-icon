<script>
export default {
  name: 'push-pin',
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
<path d="M8.4267 15.75L4.6767 19.5M14.6464 2.78034L8.8017 8.62501C8.8017 8.62501 6.2007 7.32451 3.42057 9.56724C3.33847 9.63333 3.2712 9.71595 3.22312 9.80974C3.17504 9.90353 3.14723 10.0064 3.14149 10.1116C3.13576 10.2169 3.15223 10.3221 3.18984 10.4206C3.22745 10.519 3.28535 10.6085 3.35978 10.6831L13.4751 20.7984C13.5508 20.8743 13.642 20.9331 13.7424 20.9708C13.8429 21.0085 13.9502 21.0241 14.0572 21.0167C14.1643 21.0093 14.2684 20.9791 14.3627 20.9279C14.457 20.8768 14.5393 20.8061 14.6039 20.7204C15.3907 19.6746 16.6266 17.5248 15.5517 15.375L21.3964 9.53034C21.537 9.38969 21.616 9.19892 21.616 9.00001C21.616 8.8011 21.537 8.61033 21.3964 8.46968L15.707 2.78034C15.5664 2.63969 15.3756 2.56067 15.1767 2.56067C14.9778 2.56067 14.787 2.63969 14.6464 2.78034Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
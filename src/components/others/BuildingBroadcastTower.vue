<script>
export default {
  name: 'building-broadcast-tower',
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
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.616 13.924C16.9324 13.164 17.0563 12.3376 16.9767 11.5183C16.897 10.6989 16.6163 9.91188 16.1594 9.22706C15.7026 8.54225 15.0837 7.98084 14.3577 7.59268C13.6318 7.20451 12.8212 7.0016 11.998 7.00195C11.1747 7.00231 10.3643 7.20593 9.6387 7.59472C8.91307 7.98352 8.29467 8.54546 7.83839 9.23067C7.38212 9.91588 7.10208 10.7031 7.02316 11.5226C6.94423 12.342 7.06885 13.1683 7.38596 13.928" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.307 15.4691C20.877 14.1014 21.1004 12.6141 20.9576 11.1394C20.8147 9.66456 20.31 8.24785 19.4881 7.01499C18.6662 5.78212 17.5527 4.77123 16.2463 4.07207C14.94 3.3729 13.4812 3.00708 11.9995 3.00708C10.5178 3.00708 9.05904 3.3729 7.75268 4.07207C6.44632 4.77123 5.33278 5.78212 4.51092 7.01499C3.68906 8.24785 3.1843 9.66456 3.04144 11.1394C2.89859 12.6141 3.12206 14.1014 3.69201 15.4691" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 21L12 12L15 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 19H14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
<script>
export default {
  name: 'lifebuoy-off',
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
<path d="M9.17082 9.172C8.4336 9.92409 8.02273 10.9366 8.02738 11.9897C8.03203 13.0429 8.45183 14.0517 9.19567 14.7972C9.9395 15.5428 10.9474 15.9649 12.0005 15.972C13.0536 15.979 14.067 15.5705 14.8208 14.835M15.9998 12C15.9998 10.9391 15.5784 9.92172 14.8282 9.17157C14.0781 8.42143 13.0607 8 11.9998 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.63993 5.63178C4.79319 6.46516 4.11984 7.45795 3.65871 8.55287C3.19758 9.64779 2.9578 10.8232 2.95319 12.0112C2.94859 13.1993 3.17926 14.3765 3.63189 15.475C4.08452 16.5734 4.75016 17.5714 5.59041 18.4113C6.43067 19.2512 7.4289 19.9165 8.52754 20.3687C9.62618 20.8209 10.8035 21.0511 11.9915 21.046C13.1796 21.0409 14.3549 20.8007 15.4496 20.3391C16.5444 19.8776 17.5369 19.2038 18.3699 18.3568M20.0369 16.0558C20.8915 14.3653 21.1908 12.4482 20.8924 10.5777C20.594 8.70711 19.7129 6.9784 18.3748 5.63771C17.0367 4.29702 15.3096 3.41272 13.4396 3.11073C11.5697 2.80874 9.65206 3.10446 7.95993 3.95578" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15L18.35 18.35" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.9999 15L5.6499 18.35" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.6499 5.6499L8.9999 8.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.35 5.6499L15 8.9999" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
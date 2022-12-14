<script>
export default {
  name: 'recycle-off',
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
<path d="M12 17L10 19L12 21M10 19H19M20.896 16.929C20.8873 16.6959 20.8379 16.4661 20.75 16.25L20.2 15.25" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.53599 11.0001L7.80399 8.26807L5.07199 9.00007M7.80399 8.26807L3.30399 16.0621C3.15903 16.3461 3.0841 16.6608 3.08547 16.9797C3.08683 17.2986 3.16444 17.6126 3.31182 17.8954C3.4592 18.1782 3.67208 18.4217 3.9327 18.6055C4.19331 18.7893 4.49411 18.9081 4.80999 18.9521L5.95099 18.9761" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.4641 10.9998L18.1961 11.7318L18.9281 8.99982M18.1961 11.7318L13.6961 3.93782C13.5225 3.67026 13.2875 3.44809 13.0105 3.28986C12.7336 3.13162 12.4229 3.04191 12.1042 3.02821C11.7856 3.01451 11.4683 3.07722 11.1788 3.2111C10.8893 3.34497 10.636 3.54614 10.4401 3.79782L9.84912 4.77382" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3L21 21" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
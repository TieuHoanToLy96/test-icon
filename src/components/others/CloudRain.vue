<script>
export default {
  name: 'cloud-rain',
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
<path d="M6.99996 18C5.75223 18 4.55561 17.5258 3.67334 16.6819C2.79107 15.838 2.29541 14.6934 2.29541 13.5C2.29541 12.3065 2.79107 11.1619 3.67334 10.318C4.55561 9.47406 5.75223 8.99995 6.99996 8.99995C7.29464 7.68713 8.15672 6.53343 9.39654 5.79267C10.0104 5.42587 10.6986 5.1715 11.4217 5.04406C12.1449 4.91663 12.8888 4.91863 13.6111 5.04995C14.3333 5.18127 15.0198 5.43934 15.6312 5.80943C16.2427 6.17952 16.7672 6.65437 17.1747 7.20688C17.5823 7.75939 17.8649 8.37873 18.0065 9.02955C18.1481 9.68036 18.1459 10.3499 18 11H19C19.9282 11 20.8185 11.3687 21.4748 12.0251C22.1312 12.6815 22.5 13.5717 22.5 14.5C22.5 15.4282 22.1312 16.3184 21.4748 16.9748C20.8185 17.6312 19.9282 18 19 18" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 13V15M11 18V20M15 15V17M15 20V22" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
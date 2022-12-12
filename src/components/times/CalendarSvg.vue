<script>
export default {
  name: 'calendar-svg',
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
<path d="M16.9705 2.25V5.25M7.97046 2.25V5.25M4.22046 8.25H20.7205M9.09546 11.9997H11.7205L10.2205 13.8747C10.4671 13.8747 10.7099 13.9355 10.9275 14.0518C11.145 14.168 11.3305 14.3361 11.4675 14.5411C11.6046 14.7462 11.689 14.9819 11.7132 15.2273C11.7374 15.4728 11.7008 15.7204 11.6065 15.9483C11.5121 16.1762 11.3631 16.3773 11.1725 16.5338C10.9819 16.6904 10.7556 16.7975 10.5138 16.8457C10.2719 16.894 10.0219 16.8818 9.7858 16.8103C9.54974 16.7389 9.33495 16.6103 9.16045 16.436M13.9705 13.1247L15.4705 11.9997V16.8747M4.97046 3.75H19.9705C20.3847 3.75 20.7205 4.08579 20.7205 4.5V19.5C20.7205 19.9142 20.3847 20.25 19.9705 20.25H4.97046C4.55625 20.25 4.22046 19.9142 4.22046 19.5V4.5C4.22046 4.08579 4.55625 3.75 4.97046 3.75Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</template>
    
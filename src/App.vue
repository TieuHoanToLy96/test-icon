<script>
import { message } from 'ant-design-vue'
import FuzzySearch from 'fuzzy-search'
import { cloneDeep, debounce } from 'lodash'
import { nextTick, shallowRef, markRaw } from 'vue'

import * as arrows from "./components/arrows"
import * as brands from "./components/brands"
import * as commerces from "./components/commerces"
import * as communications from "./components/communications"
import * as designs from "./components/designs"
import * as developments from "./components/developments"
import * as educations from "./components/educations"
import * as games from "./components/games"
import * as healths from "./components/healths"
import * as maps from "./components/maps"
import * as maths from "./components/maths"
import * as medias from "./components/medias"
import * as offices from "./components/offices"
import * as peoples from "./components/peoples"
import * as securitys from "./components/securitys"
import * as systems from "./components/systems"
import * as times from "./components/times"
import * as weathers from "./components/weathers"
import * as others from "./components/others"

import Pickr from "./components/Pickr.vue"
import Lazy from "./components/Lazy.vue"

export default {
  setup() {
    return { shallowRef, markRaw }
  },
  data() {
    return { array: [], templateString: "", tag: "", visibleModal: false, key: 'all', searchTerm: "", pickr: null, colorSvg: "", iconSize: '24', exampleColors: ["#000", "#e01a4f", "#5f19dd", "#0ead69", "#53b3cb"] }
  },
  computed: {
    totalIcon() {
      return this.array.reduce((acc, el) => el.data.length + acc, 0)
    }
  },
  components: {
    Pickr, Lazy
  },
  mounted() {
    let icons = [
      { key: "arrows", components: arrows, title: "Arrows" },
      { key: "brands", components: brands, title: "Brands" },
      { key: "commerces", components: commerces, title: "Commerces" },
      { key: "communications", components: communications, title: "Communications" },
      { key: "designs", components: designs, title: "Designs" },
      { key: "developments", components: developments, title: "Developments" },
      { key: "educations", components: educations, title: "Educations" },
      { key: "games", components: games, title: "Games" },
      { key: "healths", components: healths, title: "Healths" },
      { key: "maps", components: maps, title: "Maps" },
      { key: "maths", components: maths, title: "Maths" },
      { key: "medias", components: medias, title: "Media" },
      { key: "offices", components: offices, title: "Offices" },
      { key: "peoples", components: peoples, title: "Peoples" },
      { key: "securitys", components: securitys, title: "Securitys" },
      { key: "systems", components: systems, title: "Systems" },
      { key: "times", components: times, title: "Times" },
      { key: "weathers", components: weathers, title: "Weather" },
      { key: "others", components: others, title: "Othes" }
    ]

    for (let i = 0; i < icons.length; i++) {
      let x = []
      for (let props in icons[i].components) {
        const component = icons[i].components[props]
        x.push(component)
      }
      this.array = this.array.concat({ key: icons[i].key, data: x, title: icons[i].title })
    }
  },
  methods: {
    click(idx, componentName) {
      let refName = `module_${componentName}_${idx}`
      this.templateString = this.$refs[`${refName}`][0].$el.outerHTML
      this.tag = `<${componentName}-pcon`
      if (this.colorSvg) {
        this.tag = this.tag + ` color="${this.colorSvg}"`
      }
      if (this.iconSize) {
        this.tag = this.tag + ` :size="${this.iconSize}"`
      }
      this.tag = this.tag + `></${componentName}-pcon>`
      this.visibleModal = true
    },
    copy(text, type) {
      navigator.clipboard.writeText(text);
      message.success(`Copied ${type}`)
    },
    selectItem(e) {
      this.key = e.key
    },
    useNonAccentVietnamese(str) {
      str = str || ""
      str = str.toLowerCase()
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
      str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i")
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
      str = str.replace(/đ/g, "d")
      // Some system encode vietnamese combining accent as individual utf-8 characters
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "") // Huyền sắc hỏi ngã nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, "") // Â, Ê, Ă, Ơ, Ư
      return str
    },
    handleChangeTerm(e) {
      let value = e.target.value
      this.searchTerm = value
      this.filter(value)
    },
    filter: debounce(function (value) {
      this.array = this.array.map(el => {
        let data = el.data.map(e => {
          // const searcher = new FuzzySearch([this.useNonAccentVietnamese(e.name.toLowerCase())], [], {
          //   caseSensitive: false,
          // });
          // let result = searcher.search(this.useNonAccentVietnamese(value.toLowerCase()));

          let check = this.useNonAccentVietnamese(e.name.toLowerCase().replaceAll("-", " ")).includes(this.useNonAccentVietnamese(value.toLowerCase()))
          e.isHidden = !check
          return e
          // return !!result.length
        })

        el.data = data
        return el
      })
    }, 0),
    handleChangeColor(color) {
      this.colorSvg = color
    },
    cancelModal() {
      this.visibleModal = false
      this.templateString = ""
      this.tag = ""
    }
  }
}
</script>

<template>
  <a-layout>
    <a-layout-sider :width="250" :style="{ background: '#fff' }">
      <div :style="{ display: 'flex', height: '64px', alignItems: 'center', justifyContent: 'center' }">
        <img :style="{ width: '150px' }"
          src="https://statics.pancake.vn/web-media/08/57/24/b0/01f0af106e9cbb6ad173d034a942ed39e7c5acb460beb981c0868b13.svg" />
      </div>
      <a-menu :style="{ width: '250px', height: '100%' }" :selectedKeys="[key]" @select="selectItem">
        <a-menu-item key="all">
          <span :style="{ display: 'flex', width: '100%', justifyContent: 'space-between' }">
            <span>
              All
            </span>
            <span>
              {{ totalIcon }}
            </span>
          </span>
        </a-menu-item>
        <a-menu-item v-for="el in array" :key="el.key">
          <span :style="{ display: 'flex', width: '100%', justifyContent: 'space-between' }">
            <span>
              {{ el.title }}
            </span>
            <span>
              {{ el.data.length }}
            </span>
          </span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-input :style="{ width: '250px', borderRadius: '20px' }" :value="searchTerm" @change="handleChangeTerm"
          placeholder="Search icon" />
      </a-layout-header>
      <a-layout-content :style="{ overFlow: 'scroll', height: 'calc(100vh - 64px)' }">
        <div :style="{ padding: '10px', display: 'flex' }">
          <div :style="{ flex: '1' }">
            <div v-for="el in array" :key="el.key">
              <div :style="{ display: 'flex', flexWrap: 'wrap', }" v-show="key == 'all' || key == el.key">
                <Lazy v-for="(component, idx) in el.data" :key="`module_${component.name}_${idx}`" class="icon-wrapper"
                  @click="e => click(idx, component.name)" v-show="!component.isHidden">
                  <component :ref="`module_${component.name}_${idx}`" :is="component" :color="colorSvg" :size="parseInt(iconSize)">
                  </component>
                  <div></div>
                </Lazy>
              </div>
            </div>
          </div>

          <div :style="{ width: '250px', height: 'fit-content', position: 'sticky', top: '20px' }">
            <div :style="{ padding: '20px 0px', alignItems: 'center' }">
              <div>
                <div>Size</div>
                <a-radio-group :value="iconSize" button-style="solid" @change="e => iconSize = e.target.value">
                  <a-radio-button value="24">S</a-radio-button>
                  <a-radio-button value="32">M</a-radio-button>
                  <a-radio-button value="40">L</a-radio-button>
                  <a-radio-button value="48">XL</a-radio-button>
                </a-radio-group>
              </div>

              <div :style="{ marginTop: '16px' }">
                <div>Color</div>
                <div :style="{ display: 'flex', alignItems: 'center' }">
                  <div v-for="(el) in exampleColors" :key="el" :style="{
                    marginRight: '8px', cursor: 'pointer', padding: '4px',
                    border: el == colorSvg ? `3px solid ${el}` : 'none',
                    borderRadius: '20px'
                  }" @click="handleChangeColor(el)">
                    <div
                      :style="{ background: el, width: el == colorSvg ? '18px' : '26px', height: el == colorSvg ? '8px' : '16px', borderRadius: '20px' }">
                    </div>
                  </div>

                  <Pickr :change="handleChangeColor" />
                </div>
              </div>
            </div>
            <div :style="{ marginTop: '16px' }">
              <div>Props</div>
              <div :style="{
                background: '#fff',
                padding: '16px 20px',
                borderRadius: '6px',
                marginTop: '10px',
                border: '1px solid #e8e8e8'
              }">
                size=Number
                strokeWidth=Number
                color=String
              </div>
            </div>

            <div :style="{
              background: '#fff',
              padding: '16px 20px',
              borderRadius: '6px',
              marginTop: '10px',
              border: '1px solid #e8e8e8',
              cursor: 'pointer',
              fontSize: '18px'
            }" @click="copy('npm i vue-pancake-icons', 'npm')">npm i vue-pancake-icons</div>
          </div>
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>

  <a-modal :visible="visibleModal" @cancel="cancelModal" centered class="modal-svg" :footer="false">
    <div>
      <div class="icon-svg" v-html="templateString"></div>
      <div class="icon-tag" @click="e => copy(tag, 'tag')"> {{ tag }}</div>
      <div class="icon-html" @click="e => copy(templateString, 'svg')">{{ templateString}}</div>
    </div>
  </a-modal>
</template>

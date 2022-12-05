import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import { createServer as createViteServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

const toCamelCase = text => {
  return text.replace(/-\w/g, clearAndUpper);
}

const toPascalCase = text => {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

const clearAndUpper = text => {
  return text.replace(/-/, "").toUpperCase();
}

const convertVueComponent = (dirName = "arrows") => {
  let fullDir = path.resolve(`./src/assets/icons/${dirName}`)

  let listIcon = fs.readdirSync(fullDir)
  let importVue = []

  listIcon.forEach((fileName) => {
    const fullPath = fullDir + `/${fileName}`
    let content = fs.readFileSync(fullPath, { encoding: 'utf8', flag: 'r' })

    var extension = path.extname(fileName);
    var file = path.basename(fileName, extension).replace(" ", "").replace(".", "");

    let fileKebab = kebabCase(file)

    if (fileKebab.split("-").length == 1) {
      file = file + "Svg"
      fileKebab = fileKebab + "-svg"
    }

    file = toPascalCase(fileKebab)

    content = content.replaceAll('width="24"', ':width="width || size"').replaceAll('width="25"', ':width="width || size"').replaceAll('height="24"', ':height="height || size"').replaceAll('stroke-width="1.5"', ':stroke-width="strokeWidth"').replaceAll('stroke="#3D3D3D"', 'stroke="currentColor"').replaceAll('stroke="black"', 'stroke="currentColor"').replaceAll('fill="#3D3D3D"', 'fill="currentColor"').replaceAll('fill="black"', 'fill="currentColor"').replaceAll("<svg", "<svg :style='{color: color}'")
    let newContent = `<script>
export default {
  name: '${fileKebab}',
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
  ${content}
</template>
    `
    importVue = importVue.concat([{ name: file, dir: dirName }])
    if (!fs.existsSync(path.resolve(`./src/components/${dirName}`))) {
      fs.mkdirSync(path.resolve(`./src/components/${dirName}`));
    }

    fs.writeFileSync(path.resolve(`./src/components/${dirName}`, file + ".vue"), newContent)
  })


  fs.writeFileSync(path.resolve(`./src/components/${dirName}`, "index.js"), `${importVue.map(el => `import ${el.name} from "./${el.name}.vue"`).join("\n")}
export {
  ${importVue.map(el => el.name).join(", ")}
}`)

  console.log(`${dirName} success`)
}

let listFolder = fs.readdirSync(path.resolve(`./src/assets/icons`))
listFolder.forEach(el => {
  convertVueComponent(el)
})

console.log(listFolder.map(el => `import * as ${el} from "./components/${el}"`).join("\n"))
console.log(listFolder, "listFolder")


async function createServer() {
  const app = express()

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares)

  app.use('*', async (req, res) => {
    // serve index.html - we will tackle this next
  })

  app.listen(5173)
}

createServer()
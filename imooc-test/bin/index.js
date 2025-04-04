#!/usr/bin/env node

import lib from "imooc-test-de"

const argv = process.argv
const command = argv[2]

const options = argv.slice(3)
//实现指令和参数
if (options.length > 1) {
  let [ option, params ] = options
  option = option.replace('--', '')
  
  if(command) {
    if (lib[command]) {
      lib[command]({ option, params })
    } else {
      console.log('无效命令')
    }
    
  } else {
    console.log('请输入命令')
  }
}

if(command.startsWith('--') || command.startsWith('-')) {
  const globOptions = command.replace(/--|-/g, '')
  if (globOptions === 'V' || globOptions === 'version') {
    console.log('1.0.0')
  }
}


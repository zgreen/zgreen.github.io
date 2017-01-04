#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const curPosts = require('../src/posts.json')
const args = process.argv.slice(2).reduce((init, cur) => {
  const split = cur.split('=')
  init[split[0].slice(2)] = split[1]
  return init
}, {})

fs.writeFile(
  `src/posts/${args.name}.md`,
  'foo bar',
  (err) => { if (err) { throw new Error(err) } }
)

fs.writeFile(
  `src/posts.json`,
  JSON.stringify(curPosts.concat(`${args.name}`)),
  (err) => { if (err) { throw new Error(err) } }
)

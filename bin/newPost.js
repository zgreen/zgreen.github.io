#!/usr/bin/env node
'use strict'

const fs = require('fs')
const path = require('path')
const curPosts = require('../src/posts.json')
const args = Object.assign({}, { draft: false }, require('minimist')(process.argv.slice(2)))
// Bail if no title
if (!args.title) {
  throw new Error('To create a new post, you must provide a title.')
}
const slug = args.title.toLowerCase().replace(/\s/g, '-')
const postedDate = new Date()

if (curPosts.map((post) => post.slug).indexOf(slug) !== -1) {
  throw new Error('A post with that title already exists. Please choose a new title.')
}

fs.writeFile(
  `src/posts/${slug}.md`,
  `# ${args.title}
<time>${postedDate.getMonth() + 1}/${postedDate.getDate()}/${postedDate.getFullYear()}</time>
  `,
  (err) => { if (err) { throw new Error(err) } }
)

fs.writeFile(
  `src/posts.json`,
  JSON.stringify(curPosts.concat(
    {
      isDraft: args.draft,
      postedDate,
      slug,
      title: args.title
    }
  )),
  (err) => { if (err) { throw new Error(err) } }
)

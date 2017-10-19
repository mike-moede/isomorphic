# Description

This is a common series of steps I use to create a simple web app

# Stack / Tools

- Express
- Pug
- Browserify
- Mocha/Chai
- bluebird
- ESLint
- Grunt

# Global Install Dependencies

- install browserify: `npm install -g browserify`
- install mocha: `npm install -g mocha`
- install nodemon: `npm install -g nodemon`
- install eslint `npm install -g eslint`

# Important Points

- Isomorphic pattern for front-end file sharing
    - see `lib/cow.js` for an example
- build steps using task runner
    - see `Build Steps`
- Assumes dist and lib directories are at same depth (since using relative pathing)

# Javascript Build Steps

* lint
* make sure tests pass
* clean staging/dist directory(s)
* move npm files to lib/vendor
* move src files to dist
* concat files > bundle-raw
* browserify single file > bundle
* create es5 bundle > bundle+map (es5)
* minify es5 bundle > bundle.min

# Related commands

- `npm init`
- `grunt-init node`
- `express --view=pug {myapp}`

# TODO

- replace Grunt with npm scripts or Gulp
- add front-end framework (Vue)
- create Yeoman generator

# Issues

- 

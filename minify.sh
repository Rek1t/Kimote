#!/bin/bash

echo Minify JS scripts with Grunt
echo Make sure grunt is locally installed with grunt-contrib-uglify :
echo $ sudo npm install grunt
echo $ sudo npm install grunt-contrib-uglify
echo ""

# Run grunt with Gruntfile.js to minify controllers and factories
echo Running grunt ...
echo Minifying controllers and factories to scripts.min.js ...
grunt

# Delete js files
echo Deleting app.js, controllers and factories ...
rm app.js && rm -r controllers && rm -r factories

echo Done
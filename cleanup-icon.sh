#!/bin/bash

hash inkscape 2>/dev/null || { printf >&2 "Inkscape was not found in your PATH. \nYou can install it from here https://inkscape.org/en/release/0.92.2/ or using 'brew install caskformula/caskformula/inkscape'. \nAborting.\n"; exit 1; }
hash svgo 2>/dev/null || { printf >&2 "svgo was not found in your PATH. \nYou can install using 'npm i -g svgo@1.0.3'. \nAborting.\n"; exit 1; }

if [ $# -eq 0 ]
  then
    printf "Path to SVG icon was expected, but got no aguments. \nAborting\n"; exit 1;
fi

# http://how-to.wikia.com/wiki/How_to_use_Inkscape_in_commandline_mode
# run `inkscape --verb-list` for more verbs
# Make sure canvas fits drawing (i.e. ther is no empty spaces around the drawing)
inkscape --verb=FitCanvasToDrawing --verb=FileVacuum --verb=FileSave --verb=FileQuit $1
# in case of an icon with stokes add `--verb=EditSelectAll --verb=StrokeToPath` to argument
# list (make sure to remove extra styles by hand as svgo can't handle them)

# Remove unneeded attributes/tags and do general clean up
svgo --precision 2 --disable removeViewBox --disable removeTitle --enable removeDimensions --pretty $1

echo ""
echo "cleanup of $1 is finished!"
echo ""
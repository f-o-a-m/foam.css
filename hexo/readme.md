https://zalando-incubator.github.io/hexo-theme-doc/usage-and-configuration/sass-styles.html

The entry point location must be source/styles/doc.scss so that it will override the css pre-compiled version that theme tries to include by default.

To use ( not verified ) :

Clone foam.css into source/styles/
Make a file called `doc.scss`
add this line to `doc.scss` : `@import "/hexo/_doc.scss"`

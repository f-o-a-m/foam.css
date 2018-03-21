import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";
import MarkdownPage from './pages/MarkdownPage'

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./pages/WELCOME.md"))
  },
  {
    path: "/components",
    title: "Components",
    content: pageLoader(() => import("./pages/COMPONENTS.md"))
  },
  {
    path: '/markdown',
    title: 'Markdown',
    component: MarkdownPage,
  },
]

const foamTheme = {
  // Colors
  background: '#fff',
  textColor: '#333333',
  codeColor: '#00263E',
  linkColor: '#fdbba6',

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  lightColor: '#fff',

  // Used in PageHeader
  pageHeadingBackground: '#000',
  pageHeadingTextColor: '#fff',

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 120,

  // Used for navigation bar
  navBarBackground: '#eee',
  navBarTextColor: '#000',

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: '#003B5C',

  sidebarColor: '#eee',
  sidebarColorActive: '#000',
  sidebarColorText: '#444',
  sidebarColorTextActive: '#000',
  sidebarColorLine: '#EBEBEB',
  sidebarColorHeading: '#000',

  // Used in the html, react, and image specimens.
  bgLight: '#F2F2F2',
  bgDark: '#333333',

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: {color: '#FF5555'},
    punctuation: {color: '#535353'},
    script: {color: '#3F7397'},
    function: {color: '#FF5555'},
    keyword: {color: '#3F7397'},
    string: {color: '#00263E'}
  },

  // Patterns
  checkerboardPatternLight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=',
  checkerboardPatternDark: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==',

  // Fonts
  fontFamily: "'Open Sans', sans-serif",
  fontHeading: "'GT Haptik', sans-serif",
  fontMono: "'Roboto Mono', monospace",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2
}


ReactDOM.render(
  <Catalog
    title="FOAM Styleguide"
    pages={pages}
    theme={foamTheme}

  />,
  document.getElementById("root")
);

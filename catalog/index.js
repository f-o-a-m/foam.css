import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages =
  [ { path: "/"
    , title: "Welcome"
    , content: pageLoader(() => import("./pages/WELCOME.md"))
    }
    , { title: "Utils"
      , pages:
        [ { path: "/utils"
          , title: "Overview"
          , content: pageLoader(() => import("./pages/utils.md"))
          }
        , { path: "/typography"
          , title: "Typography"
          , content: pageLoader(() => import("./pages/typography.md"))
          }
        , { path: "/colors"
          , title: "Colors"
          , content: pageLoader(() => import("./pages/colors.md"))
          }
        , { path: "/spacing"
          , title: "Spacing"
          , content: pageLoader(() => import("./pages/spacing.md"))
          }
        ]
      }
  , { title: "Components"
    , pages:
      [ { path: "/button"
        , title: "Button"
        , content: pageLoader(() => import("./pages/button.md"))
        }
      , { path: "/icon"
        , title: "Icon"
        , content: pageLoader(() => import("./pages/Icon.md"))
        , imports: { Icon: require('./pages/Icon.jsx') }
        }
      , { path: "/grid"
        , title: "Grid"
        , content: pageLoader(() => import("./pages/grid.md"))
        }
      ]
    }
  , { title: "Templates"
    , pages:
      [ { path: "/user-widget"
        , title: "User Widget"
        , component: require('./pages/UserWidget.jsx').example
        }
      , { path: "/map-controls"
        , title: "Map Controls"
        , component: require('./pages/MapControls.jsx').example
        }
      , { path: "/point-of-interest"
        , title: "Point of interest"
        , component: require('./pages/PointOfInterest.jsx').example
        }
      , { path: "/tooltip"
        , title: "Tooltip"
        , component: require("./pages/Tooltip.jsx").example
        }
      ]
    }
  ]

// See `DefaultTheme.js` for more contamination options:
// https://github.com/interactivethings/catalog/blob/v3.5.2/src/DefaultTheme.js
const foamTheme =
  // Colors
  { background: '#fff'
  , linkColor: '#fdbba6'

  // NavigationBar background color, but also sometimes used as a foreground
  // or border color.
  , lightColor: '#fff'

  // Used in PageHeader
  , pageHeadingBackground: '#000'

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  , pageHeadingHeight: 120

  // Used for navigation bar
  , navBarBackground: '#eee'
  , navBarTextColor: '#000'

  , sidebarColor: '#eee'
  , sidebarColorActive: '#000'
  , sidebarColorText: '#444'
  , sidebarColorTextActive: '#000'
  , sidebarColorHeading: '#000'

  // Fonts
  , fontFamily: "'Open Sans', sans-serif"
  , fontHeading: "'GT Haptik', sans-serif"
  , fontMono: "'Roboto Mono', monospace"
  }


ReactDOM.render(
  <Catalog
    title="FOAM Styleguide"
    pages={pages}
    theme={foamTheme}
    />,
  document.getElementById("root")
)

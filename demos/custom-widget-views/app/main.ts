import BlockyBasemapToggle = require("./widgets/BlockyBasemapToggle");
import BlockyBasemapGallery = require("./widgets/BlockyBasemapGallery");
import BlockyBookmarks = require("./widgets/BlockyBookmarks");
import Expand = require("esri/widgets/Expand");

import Map = require("esri/Map");
import MapView = require("esri/views/MapView");
import { bookmarks as bookmarksJSON } from "./support/json";

// map setup

const map = new Map({
  basemap: "topo"
});

const view = new MapView({
  container: "viewDiv",
  map,
  center: [-86.049, 38.485],
  zoom: 3
});

// widget setup

const basemapToggle = new BlockyBasemapToggle({
  view,
  nextBasemap: "hybrid"
});

const basemapGalleryExpand = new Expand({
  view,
  content: new BlockyBasemapGallery({ view })
});

const bookmarksExpand = new Expand({
  view,
  content: new BlockyBookmarks({ view, bookmarks: bookmarksJSON })
});

// add widgets to our map

view.ui.add(basemapToggle, "bottom-right");
view.ui.add(basemapGalleryExpand, "top-right");
view.ui.add(bookmarksExpand, "top-right");

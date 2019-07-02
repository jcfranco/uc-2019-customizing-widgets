import Bookmarks = require("esri/widgets/Bookmarks");
import Bookmark = require("esri/webmap/Bookmark");
import i18nCommon = require("dojo/i18n!esri/nls/common");

import { transform } from "../support/blockify";
import { declared, subclass } from "esri/core/accessorSupport/decorators";
import { tsx } from 'esri/widgets/support/widget';

const CSS = {
  bookmark: "esri-bookmarks__bookmark",
  bookmarkButton: "esri-bookmarks__bookmark-button",
  bookmarkImageContainer: "esri-bookmarks__bookmark-image-container",
  bookmarkIcon: "esri-bookmarks__bookmark-icon",
  bookmarkImage: "esri-bookmarks__image",
  bookmarkName: "esri-bookmarks__bookmark-name",
  bookmarkActive: "esri-bookmarks__bookmark--active",

  // common
  esriButton: "esri-button",
  esriButtonTertiary: "esri-button--tertiary",
  iconEdit: "esri-icon-edit",
  widgetIcon: "esri-icon-bookmark"
};

// use interface merging to avoid re-implementing private members
interface BlockyBookmarks {
  _showEditBookmarkForm: Function;
  _goToBookmark: Function;
  editingEnabled: boolean;
}

@subclass("esri.demos.BlockyBookmarks")
class BlockyBookmarks extends declared(Bookmarks) {

  // based on https://github.com/Esri/arcgis-js-api/blob/4master/widgets/Bookmarks.tsx
  protected _renderBookmark(bookmark: Bookmark): VNode {
    const { activeBookmark } = this.viewModel;

    const { name, thumbnail } = bookmark;
    const title = name || i18nCommon.untitled;

    const bookmarkClasses = {
      [CSS.bookmarkActive]: activeBookmark === bookmark
    };

    const imageSource = (thumbnail && thumbnail.url) || "";

    const imageNode = imageSource ? (
      <img src={imageSource} alt={name} class={CSS.bookmarkImage}
           afterCreate={transform} />
    ) : (
                        <span aria-hidden="true"
                              class={this.classes(CSS.bookmarkIcon, CSS.widgetIcon)} />
                      );

    const imageContainerNode = <div
      class={CSS.bookmarkImageContainer}>{imageNode}</div>;

    const editContainer = this.editingEnabled ? (
      <div key="edit-container">
        <button
          title={i18nCommon.edit}
          aria-label={i18nCommon.edit}
          data-bookmark-item={bookmark}
          onclick={this._showEditBookmarkForm}
          bind={this}
          class={this.classes(CSS.esriButton, CSS.esriButtonTertiary)}
        >
          <span aria-hidden="true" class={CSS.iconEdit} />
        </button>
      </div>
    ) : null;

    return (
      <li key={bookmark} class={this.classes(CSS.bookmark, bookmarkClasses)}>
        <button
          bind={this}
          data-bookmark-item={bookmark}
          onclick={this._goToBookmark}
          class={CSS.bookmarkButton}
        >
          {imageContainerNode}
          <span class={CSS.bookmarkName}>{title}</span>
          {editContainer}
        </button>
      </li>
    );
  }

}

export = BlockyBookmarks;

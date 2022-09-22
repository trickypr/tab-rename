// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

browser.menus.create({
  id: "set-tab-title",
  title: "Rename Tab",
  contexts: ["tab"],
  command: "_execute_page_action",
});

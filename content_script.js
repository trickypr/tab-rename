// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

const original = document.title;
let changed = false;

setInterval(async () => {
  // Some websites will change the title of the page at times, so we need to
  // rename the tab every so often

  const store = await browser.storage.local.get(window.location.href);
  if (store[window.location.href]) {
    document.title = store[window.location.href];
    changed = true;
  } else if (changed) {
    document.title = original;
    changed = false;
  }
}, 1000);

// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/.

/** @type {HTMLInputElement} */
const tabTitleInput = document.getElementById("title");

const activeTab = await browser.tabs.query({
  active: true,
  currentWindow: true,
});

if (activeTab && activeTab.length) {
  const store = await browser.storage.local.get(activeTab[0].url);

  if (store[activeTab[0].url]) {
    tabTitleInput.value = store[activeTab[0].url];
  } else {
    tabTitleInput.value = activeTab[0].title;
  }
}

tabTitleInput.focus();

document.getElementById("set").addEventListener("click", async () => {
  await browser.storage.local.set({
    [activeTab[0].url]: tabTitleInput.value,
  });
  close();
});

document.getElementById("reset").addEventListener("click", async () => {
  await browser.storage.local.remove(activeTab[0].url);
  close();
});

tabTitleInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    document.getElementById("set").click();
  }
});

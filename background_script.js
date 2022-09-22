browser.menus.create({
  id: "set-tab-title",
  title: "Rename Tab",
  contexts: ["tab"],
  command: "_execute_page_action",
});

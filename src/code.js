function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("Open Sidebar")
    .addItem("Open Home", "openSidebarHome")
    .addItem("Open About", "openSidebarAbout")
    .addItem("Open Contact", "openSidebarContact")
    .addToUi();
}

function openSidebar(name) {
  if (name === "Home") {
    openSidebarHome_();
  } else if (name === "About") {
    openSidebarAbout_();
  } else if (name === "Contact") {
    openSidebarContact_();
  }
}

function openSidebarHome_() {
  const html = HtmlService.createHtmlOutputFromFile("sidebar-home").setTitle("Home");
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
}

function openSidebarAbout_() {
  const html = HtmlService.createHtmlOutputFromFile("sidebar-about").setTitle("About");
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
}

function openSidebarContact_() {
  const html = HtmlService.createHtmlOutputFromFile("sidebar-contact").setTitle("Contact");
  const ui = SpreadsheetApp.getUi();
  ui.showSidebar(html);
}

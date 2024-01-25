﻿chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.indexOf("atlassian.net/wiki/") > -1) {
    console.log(`updated: ${tab.url}`);
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: ['./jquery-2.2.0.min.js', './content_script.js'],
    });
  }
});
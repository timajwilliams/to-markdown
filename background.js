chrome.action.onClicked.addListener((tab) => {
    const jinaUrl = 'https://r.jina.ai/' + tab.url;
    chrome.tabs.create({ url: jinaUrl });
  });
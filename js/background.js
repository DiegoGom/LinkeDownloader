chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ["/js/jquery.js","/js/download-video.js"]
        })
            .then(() => {
                console.log("Script Add!!");
            })
            .catch(err => console.log(err));
    }
    return 0;
});
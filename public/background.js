// eslint-disable-next-line no-undef
chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated');
  });
  
  // eslint-disable-next-line no-undef
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'backgroundInstalled') {
      // Background script installed or updated
      console.log('Background script installed or updated');
    }
});
  
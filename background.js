chrome.runtime.onInstalled.addListener(async (details) => {
  console.log('installed', details);

  await logAllTabs();

  const [currentTab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });

  const url = new URL(currentTab.url);
  const source = url.searchParams.get('source');

  console.log('Current tab source', source, url);
  chrome.storage.local.set({ installSource: source }, () => {
    console.log('install source saved:', source);
  });
});

async function logAllTabs() {
  const tabs = await chrome.tabs.query({
    lastFocusedWindow: true,
  });

  console.log(
    'All tabs in this window',
    tabs.map((tab) => tab.url)
  );
}

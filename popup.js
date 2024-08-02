document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.local.get('installSource', (result) => {
    const sourceElement = document.getElementById('source');
    if (result.installSource) {
      sourceElement.textContent = `Installed from source: ${result.installSource}`;
    } else {
      sourceElement.textContent = 'No install source found.';
    }
  });
});

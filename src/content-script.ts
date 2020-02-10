const connector = document.createElement('script');
connector.src = chrome.runtime.getURL('./communicator.js');
document.body.appendChild(connector);

window.addEventListener('message', ({source, data}) => {
  if (source !== window) return;

  if (data.sender === 'communicator') {
    chrome.runtime.sendMessage({
      sender: 'yandex music',
      event: data.event
    });
  }
});
document.getElementById('goButton').addEventListener('click', function() {
    let url = document.getElementById('urlInput').value.trim();
    
    // Validate URL
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    try {
        const urlObj = new URL(url);
        if (urlObj.protocol === 'https:' || urlObj.protocol === 'http:') {
            //
            const proxyUrl = `https://170.187.138.45:3000/${urlObj.href}`;
            document.getElementById('browserFrame').src = proxyUrl;
        } else {
            alert('Invalid URL protocol. Only HTTP and HTTPS are allowed.');
        }
    } catch (e) {
        alert('Invalid URL. Please enter a valid URL.');
    }
});

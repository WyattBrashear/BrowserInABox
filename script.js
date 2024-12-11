document.getElementById('goButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        document.getElementById('browserFrame').src = url;
    }
});
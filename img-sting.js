document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64String = e.target.result;
            console.log(base64String); // This is the base64 encoded string of the image
        };
        reader.readAsDataURL(file);
    }
});
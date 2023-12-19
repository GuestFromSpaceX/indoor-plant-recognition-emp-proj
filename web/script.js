document.getElementById('image-input').addEventListener('change', function (e) {
    var fileInput = e.target;
    var imgContainer = document.getElementById('image-container');

    for (var i = 0; i < fileInput.files.length; i++) {
        var file = fileInput.files[i];
        var reader = new FileReader();
        
        reader.onload = function (event) {
            var img = document.createElement('img');
            img.src = event.target.result;
            img.alt = 'Загруженное изображение';
            img.style.maxWidth = '100%';

            // Вставить новые изображения перед первым дочерним элементом
            imgContainer.insertBefore(img, imgContainer.firstChild);
        };

        reader.readAsDataURL(file);
    }

    // Очистка input после загрузки файлов
    fileInput.value = '';
});

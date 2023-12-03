function spinPreloader() {
    //* Preloader
    document.addEventListener('DOMContentLoaded', () => {
        var
            images = document.images,
            imagesTotalCount = images.length,
            imagesLoadedCount = 0,
            preloader = document.getElementById('preloader'),
            percentPreloader = document.getElementById('percents');
        console.log(images)

        if (imagesTotalCount != 0 && imagesTotalCount >= 5) {

            preloader.classList.remove('preloader--hide')

            for (var i = 0; i < imagesTotalCount; i++) {
                var imageClone = new Image();
                imageClone.onload = imagesLoaded;
                imageClone.onerror = imagesLoaded;
                imageClone.src = images[i].src;

            }

            function imagesLoaded() {
                imagesLoadedCount++
                percentPreloader.innerHTML = (((100 / imagesTotalCount * imagesLoadedCount) << 0));

                if (imagesLoadedCount >= imagesTotalCount) {

                    preloader.classList.add('preloader--hide')
                }
            }
        } else {
            console.log("done")
        }

    })
}

export default spinPreloader;
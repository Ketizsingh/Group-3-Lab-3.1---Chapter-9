window.addEventListener("load", function () {
    document.getElementById('featured').addEventListener("mouseover", function (event) {

        document.querySelector('#featured > figcaption').style.opacity = '80%';
        document.querySelector('#featured > figcaption').style.transition = 'opacity 1s';

    });
    
    document.getElementById('featured').addEventListener("mouseout", function( event ) {
       
        document.querySelector('#featured > figcaption').style.opacity='0%';
        document.querySelector('#featured > figcaption').style.transition='opacity 1s';

    });
});
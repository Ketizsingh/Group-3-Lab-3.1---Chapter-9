window.addEventListener("load", function () {
	
    document.getElementById('featured').addEventListener("mouseover", function (event) {

        document.querySelector('#featured > figcaption').style.opacity = '80%';
        document.querySelector('#featured > figcaption').style.transition = 'opacity 1s';

    });
    
    document.getElementById('featured').addEventListener("mouseout", function( event ) {
       
        document.querySelector('#featured > figcaption').style.opacity='0%';
        document.querySelector('#featured > figcaption').style.transition='opacity 1s';

    });


    document.getElementById('thumbnails').onclick = function(event)
    {
        if(event.target.tagName == 'IMG')
        {
            let title = event.target.title;
            let src = event.target.src.split(/(\\|\/)/g).pop();
            let alt = event.target.alt;
            
            document.querySelector('#featured > img').src='images/medium/'+src;
            document.querySelector('#featured > img').title=title;
            document.querySelector('#featured > figcaption').innerHTML = alt;
           
          
        }
    }
});
window.addEventListener("load", function () {
    document.querySelectorAll('.hilightable').forEach(item => {

    	var hilightable = document.querySelector('.hilightable');

         item.addEventListener('focus', event => {
            item.classList.remove('hilightable');
            item.classList.add('highlight');
        });


        item.addEventListener('blur', event => {
            item.classList.remove('highlight');
            item.classList.add('hilightable');
        });

        var mainForm = document.getElementById('mainForm');
        mainForm.addEventListener('submit', Event => {
  
        }); 
    	
    });
});
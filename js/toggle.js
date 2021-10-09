function　openNav () {
    var open = document.getElementById('header');
    if(!open) return;
    
    var mask= document.getElementById('mask');
    var toggleBtn = document.getElementById('toggle_btn');
    
    //functionを呼び出す
    closeNav(mask);
    closeNav(toggleBtn);

    function closeNav(elem) {
        if(!elem) return;
        elem.addEventListener('click', function() {
            open.classList.toggle('open');
        })
        console.log ('elem=>',elem);
        console.log ('open=>',open);
    }
}

openNav (); //functionを呼び出す
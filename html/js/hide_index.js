window.onscroll = function(){
    const rect = document.getElementById('section-about').getBoundingClientRect();
    if(rect.top === 0) {
     document.getElementById('section-index').style="display: none;"
    }
}
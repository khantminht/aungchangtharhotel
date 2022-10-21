// Start jQuery Area
$(document).ready(function(){
    console.log('hi');
});

    // Start Room Section
    $('.roompopup').magnificPopup({type: 'image'});
    // End Room Section

// End jQuery Area


// Start Header
// Start nav bar
function dropbtn(){
    document.getElementById('mydropdown').classList.toggle('show');
}

function dropfilter(){
    var getsearch, filter, getdropdiv, getlinks, linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    getdropdiv = document.getElementById('mydropdown');
    getlinks = getdropdiv.getElementsByTagName('a') ;

    // console.log(getlinks);

    for(var x=0; x < getlinks.length; x++){

        linkvalue = getlinks[x].textContent || getlinks[x].innerText;

        if(linkvalue.toUpperCase().indexOf(filter) > -1){
            getlinks[x].style.display = '';
        }else{
            getlinks[x].style.display = 'none';
        }
    }
}
// End nav bar 


// Start auto Background
    function* genfun(){
        var index =8;

        while(true){
            yield index++;

            if(index>13){
                index = 8;
            }
        }
    }

    var getgen = genfun();

    var idx = getgen.next().value;

    var getheader = document.querySelector('header');
    getheader.style.backgroundImage = `url("./assets/img/banner/banner8.jpg")`;

    function autoload(){
        // console.log(getgen.next().value);

        getheader.style.backgroundImage = `url("./assets/img/banner/banner${getgen.next().value}.jpg")`;
    }

    setInterval(autoload, 3000);
// End auto Background

// End Header
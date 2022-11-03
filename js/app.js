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
function dropbtn(e){
    // document.getElementById('mydropdown').classList.toggle('show');

    // underfined cuz we used onclick, not eventListener
    // we must declare function type (event) completely in html to use with onclick
    // console.log(this);
    // console.log(e);

    e.target.nextElementSibling.classList.toggle('show');
}

function dropfilter(){
    var getsearch, filter, getdropdiv, getlinks, linkvalue;

    getsearch = document.getElementById('search');
    filter = getsearch.value.toUpperCase();
    // getdropdiv = document.getElementById('mydropdown');
    // getlinks = getdropdiv.getElementsByTagName('a') ;

    getlinks = document.querySelectorAll('.mydropdowns a');
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

// Start Testimonial Sectoin
const getcompanyname = document.querySelector('.companyname');
const getrole  = document.querySelector('.role');
const gettestimonial =  document.querySelector('.testimonial');

const testimonialdatas = [
    {
        name:"Rich Star Restaurant",
        position:"Our Outlet",
        text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
        name:"48 Sky Bar Cafe",
        position:"Our Partner",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',"
    },
    {
        name:"52 Branched Hotels",
        position:"Our Branch",
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
    },
    {
        name:"Cool land Swimming Pools",
        position:"Our Client",
        text:"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident"
    },
    {
        name:"Chaung Thar Spa",
        position:"Our Bussiness",
        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum"
    }
];

let idx = 0;
// 3TM
// End Testimonial Section
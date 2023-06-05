
var digitalid = document.getElementById('digital');
var dgidone = document.getElementById('dgid1');
var dgidtwo = document.getElementById('dgid2');





$(document).ready(function () {





    $('.square').mouseover(function () {
        var target = $(this).data('target');
        $(target).css('background', '#989696');
        $(target).css('transition', '.5s');

    });

    $('.square').mouseleave(function () {
        var target = $(this).data('target');
        $(target).css('background', '#3a3939');
        $(target).css('transition', '.5s');

    });

    $('.setting').click(function () {
        $('.settingsection').css('visibility', 'visible');
        $('.settiong-items').addClass('settingani');
        $('.right-top').css('background', '#3d3d3d');
        $('.right-top').mouseleave(function () {
            $('.container-right-top').css('background', '#514f4f')
        });


        if ($(dgidone).hasClass('dgani1p1') && $(dgidtwo).hasClass('dgani2p1')) {
            $(dgidone).toggleClass('dgani1p1');
            $(dgidone).toggleClass('dganireverse1');
            $(dgidtwo).toggleClass('dgani2p1');
            $(dgidtwo).toggleClass('dganireverse2');
        }

    })



    $('.center').click(function () {
        window.location.reload();
    })





    function clock() {

        var minute = document.querySelector('.minute');
        var hour = document.getElementById('hour');

        var getdate = new Date();
        var gethour = getdate.getHours();
        var getmin = getdate.getMinutes();
        var getsec = getdate.getSeconds();
        var getmils = getdate.getMilliseconds();

        var gettime = gethour * 3600 + getmin * 60 + getsec * 1 + getmils / 1000;
        // console.log(gettime);

        let hours = gettime / 60 / 12 * 6;
        let minutes = gettime / 60 * 6;


        $(hour).css('transform', `rotate(${hours}deg)`);
        $(minute).css('transform', `rotate(${minutes}deg)`);


        // console.log(hrvalue%6)

        let hrs = gethour % 12;

        var hrvalue = hrs.toString().padStart(2, '0');
        var minvalue = getmin.toString().padStart(2, '0');
        var secvalue = getsec.toString().padStart(2, '0');

        $('#hr').html(`<h1>${hrvalue} <span>hr</span></h1>`);
        $('#mi').html(`<h1>${minvalue} <span>min</span></h1>`);
        $('#se').html(`<h1>${secvalue} <span>sec</span></h1>`);

    }

    clock();

    setInterval(clock, 1000);



    $('.clockbtn').click(function () {
        $('.cls').addClass('clocksection');
        $('.cinradio').addClass('clocksectioninradio');
        $('.cinmusic').addClass('clocksectioninmusic');
        $('.center').addClass('centerhomeani');
        $('.clockhands').css('visibility', 'visible');
        $('.clockhands').addClass('clhandani');


        $('.settingsection').css('visibility', 'hidden');
        $('.right-top').css('background', '#2e2c2c');
        $('.container-right-top').css('background', '#3a3939')

    });







    //Music 
    $('.musicbtn').click(function () {

        $('.second-container').addClass('formusic')

        $('.square').css({
            'display': 'none',
            'border': 'none',
            'background': '#2b2b2b',
            'transition': 'all .5s'

        });

        $('.textaligncenter').css({
            'display': 'none',
            'transition': 'all .5s'
        });

        $('.d-block').css({
            'display': 'block'
        });

        $('.center').addClass('centerhomeani');

        $('.musiccontainer').css("visibility", "visible");




        $('.settingsection').css('visibility', 'hidden');

    })





});

$('.center').click(function () {
    window.location.reload();
})


digitalid.addEventListener('click', function () {

    // $('.digitalcontainer').css('visibility','visible');



    dgidone.classList.toggle('dgani1p1');
    dgidtwo.classList.toggle('dgani2p1');
    $('.settingsection').css('visibility', 'hidden');


    if (dgidone.classList.contains('dgani1p1') && dgidtwo.classList.contains('dgani2p1')) {
        dgidone.classList.remove('dganireverse1');
        dgidtwo.classList.remove('dganireverse2')

    } else {
        dgidone.classList.add('dganireverse1')
        dgidtwo.classList.add('dganireverse2')
    }


})




// Music 

const audiosrc = document.getElementById('audiosrc');
const playpause = document.getElementById('playpause');
const prevbtn = document.getElementById('prevbtn');
const nextbtn = document.getElementById('nextbtn');

const songtitle = document.getElementById('tits');
const artis = document.getElementById('artis');

const progresscontainer = document.getElementById('progresscontainer');
const progressbar = document.getElementById('progressbar');
const timestamp = document.getElementById('timestamp');

const songslist = document.querySelectorAll('.songs');
const musiclistmodalcontainer = document.getElementById('musiclistmodalcontainer')
const menubarlines = document.getElementById('menubarlines')

const audios = ['imagination', 'addictofmagic', 'allweknow', 'dieahappyman', 'drunktext', 'control', 'dancewithyou'];
const tits = ['Imagination', 'Addict Of Magic', 'All We Know', 'Die A Happy Man', 'Drunk Text', 'Control', 'Dance With You'];
const artists = ['Shawn Mendes', 'Picture This', 'Chainsmokers', 'Thomas Rhett', 'Henry Moodie', 'Zoe Wees', 'Brett Young'];

let curadoidx = 0;


function ados(ado) {
    audiosrc.src = `./music/${ado}.mp3`;
    // console.log(ado)
}


function playado() {
    playpause.querySelector('i.fa-solid').classList.remove('fa-play');
    playpause.querySelector('i.fa-solid').classList.add('fa-pause');
    audiosrc.play();
}

function pauseado() {
    playpause.querySelector('i.fa-solid').classList.add('fa-play');
    playpause.querySelector('i.fa-solid').classList.remove('fa-pause');
    audiosrc.pause();
}


function playpauseado() {
    if (audiosrc.paused) {
        audiosrc.play();
    } else {
        audiosrc.pause();
    }
}

function prev() {
    curadoidx--;

    if (curadoidx < 0) {
        curadoidx = audios.length - 1;
        curtitidx = audios.length - 1;
    }

    ados(audios[curadoidx]);
    songtitle.innerHTML = `<h3>${tits[curadoidx]}</h3>`;
    artis.innerHTML = `<span class="artis">${artists[curadoidx]}</span>`;
    audiosrc.play();


}



function next() {
    curadoidx++;

    if (curadoidx > audios.length - 1) {
        curadoidx = 0;
        curtitidx = 0
    }
    ados(audios[curadoidx]);

    songtitle.innerHTML = `<h3>${tits[curadoidx]}</h3>`;
    artis.innerHTML = `<span class="artis">${artists[curadoidx]}</span>`;
    audiosrc.play();


}

function updateprogress(p) {
    var { currentTime } = p.target;
    var { duration } = p.target;

    const progresstime = (currentTime / duration) * 100;
    progressbar.style.width = `${progresstime}%`

    var mins = Math.floor(audiosrc.currentTime / 60);
    var secs = Math.floor(audiosrc.currentTime % 60);

    var min = mins.toString().padStart(2, '0');
    var sec = secs.toString().padStart(2, '0')

    timestamp.innerHTML = `<div>${min}:${sec}</div>`;




    if (currentTime == duration) {
     
        console.log(curadoidx++)
       ados(audios[curadoidx]);
       songtitle.innerHTML = `<h3>${tits[curadoidx]}</h3>`;
       artis.innerHTML = `<span class="artis">${artists[curadoidx]}</span>`;
        audiosrc.play();

    }



}


function skipprogress(e) {
    var width = this.clientWidth;
    var clientx = e.offsetX;
    var nowclip = (clientx / width) * audiosrc.duration;
    audiosrc.currentTime = nowclip;
    audiosrc.play();

}




songslist.forEach(function (songs, idx) {

    songs.addEventListener("click", function () {
        curadoidx = idx;
        ados(audios[curadoidx]);
        songtitle.innerHTML = `<h3>${tits[curadoidx]}</h3>`;
        artis.innerHTML = `<span class="artis">${artists[curadoidx]}</span>`;
    })

})


audiosrc.addEventListener('timeupdate', updateprogress);
audiosrc.addEventListener('play', playado);
audiosrc.addEventListener('pause', pauseado);

playpause.addEventListener('click', playpauseado)
nextbtn.addEventListener('click', next);
prevbtn.addEventListener('click', prev);

progresscontainer.addEventListener('click', skipprogress);
menubarlines.addEventListener('click', function () {
    musiclistmodalcontainer.classList.toggle('musicmodal')

    if (musiclistmodalcontainer.classList.contains('musicmodal')) {
        musiclistmodalcontainer.classList.remove('musicmodalreverse')

    } else {
        musiclistmodalcontainer.classList.add('musicmodalreverse')

    }
})


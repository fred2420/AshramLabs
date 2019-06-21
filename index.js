var i = 0;
var txt = '> Mesh Networking  \r\n \n > RTOS';
var speed = 50;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("Console").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });



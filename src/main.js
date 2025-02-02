window.addEventListener('resize', OnWindowResized);
OnWindowResized();


function OnWindowResized() {
    
    let svgRoot = document.documentElement;
    let background = document.getElementById("background");
    let middlecirc = document.getElementById("middlecirc");
    let circlabel = document.getElementById("circlabel");

    let width = svgRoot.clientWidth;
    let height = svgRoot.clientHeight;

    background.style.width = width;
    background.style.height = height;
    middlecirc.style.cx = width / 2;
    middlecirc.style.cy = height / 2;
    circlabel.setAttribute('x', width / 2);
    circlabel.setAttribute('y', height / 2 + 10);
}
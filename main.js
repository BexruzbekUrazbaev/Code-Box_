function changeColor(colorParam) {
    let color = colorParam.value.toLowerCase();
    var optionElement = document.querySelector('header');
    var optionElement5 = document.querySelector('nav');
    var optionElement2 = document.querySelector('section');
    var optionElement3 = document.querySelector('.section2');
    var optionElement4 = document.querySelector('.section3');
    optionElement.style.background = color;
    optionElement2.style.background = color;
    optionElement3.style.background = color;
    optionElement4.style.background = color;
    optionElement5.style.background = color;
};
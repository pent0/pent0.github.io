// Main region
var current_index = 0;
show_slide(0);

function switch_to_slide(slide) {
    current_index = show_slide(slide);
}

function show_slide(slide_index) {
    showcases = document.getElementsByClassName("trophy");
    
    if (slide_index >= showcases.length)
        slide_index = 0;

    if (slide_index < 0)
        slide_index = showcases.length - 1;

    var i = 0;

    for (i = 0; i < showcases.length; i++) {
        showcases[i].style.display = "none";
    }

    showcases[slide_index].style.display = "block";
    showcases[slide_index].style.textAlign = "center";

    return slide_index;
}

function next_slide() {
    current_index++;
    current_index = show_slide(current_index);
}

function prev_slide() {
    current_index--;
    current_index = show_slide(current_index);
}
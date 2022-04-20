var a = 0;
function show_hide() {
    if(a == 1){
        document.getElementById("ul1").style.visibility="hidden";
        return a=0;
    } else {
        document.getElementById("ul1").style.visibility="visible";
        return a=1;
    }
}
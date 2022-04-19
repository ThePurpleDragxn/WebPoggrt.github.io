var a = 0;
function show_hide() {
    if(a == 1){
        document.getElementById("hamList").style.display="flex";
        return a = 0;
    } else {
        document.getElementById("hamList").style.display="none";
        return a = 1;
    }
}
var img=document.getElementById("my_img");
var img_arr=["./img/ugly_red.jpg","./img/white_momo.jpg","./img/white_jp.jpg"];
var Name=document.getElementById("name");
var Name_arr=["lisa","jenifer","alison"];
var designation=document.getElementById("designation");
var designation_arr=["Teacher","Photographer","web developer"];
var bio_lisa=document.getElementById("lisa");
var bio_jenifer=document.getElementById("jenifer");
var bio_alison=document.getElementById("alison");
var bio_arr=[bio_lisa,bio_jenifer,bio_alison];
var i=0;
function chn_img(){
    var i=window.i;
    img.src=img_arr[i];
    Name.innerHTML=Name_arr[i];
    designation.innerHTML=designation_arr[i];
    bio_alison.innerHTML=bio_arr[i].innerHTML;
    window.i=i+1;
    if(window.i>2){
        window.i=0;
    }
}
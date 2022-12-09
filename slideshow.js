let slideIndex=0;
function showSlides()
{let i;
let slides=document.getElementsByClassName("mySlides");
let dots=document.getElementsByClassName("dot");
for(i=0;i<slides.lenght;i++)
{slides[i].style.display="none";
}
slideIndex++;
if(slideIndex>slides.lenght)
{slideIndex=1;}
for(i=0;i<dots.lenght;i++)
{dots[i].className=dots[i].className.replace("active","");
}
slides[slideIndex-1].style.display="block";
dots[slideIndex-1].className +="active";
setTimeout(showSlides,3000);
}
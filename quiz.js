function check() {
    window.scrollTo(0,0);

    var a=0;
    var b=0;
    var c=0;
    var d=0;

    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var resulthead=document.getElementById('resulthead');
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');

    if (q1=="Oily") {a++}
    if (q1=="Dry") {b++}
    if (q1=="Normal") {c++}
    if (q1=="Sensitive") {d++}

    if (q2=="Oily") {a++}
    if (q2=="Dry") {b++}
    if (q2=="Normal") {c++}
    if (q2=="Sensitive") {d++}

    if (q3=="Oily") {a++}
    if (q3=="Dry") {b++}
    if (q3=="Normal") {c++}
    if (q3=="Sensitive") {d++}

    if (q4=="Oily") {a++}
    if (q4=="Dry") {b++}
    if (q4=="Normal") {c++}
    if (q4=="Sensitive") {d++}

    if (q5=="Oily") {a++}
    if (q5=="Dry") {b++}
    if (q5=="Normal") {c++}
    if (q5=="Sensitive") {d++}

    quiz.style.display='none';
    document.getElementById('yourresult').style.display='block';

    if (a >=3 && b>=1) {
    resulthead.innerHTML="Combination Skin Type";
    result.innerHTML="So what does this mean?" + "<br>"
    + "<br>" + "It is very likely that you have combination type skin. This means that you have oily skin in some areas of your face (typically the T-zone) and dry skin in other areas. We recommend that you use products for combination type skin that is gentle enough for dry skin but strong enough to remove excess oils from your face.";

    }

    else if (a >=3) {
    resulthead.innerHTML="Oily Skin Type";
    result.innerHTML="So what does this mean?" + "<br>"
    + "<br>" + "It is very likely that you have oily type skin. This means that your sebaceous glands are producing excessive amount of sebum. Oftentimes you'll feel as though your skin is quite shiny and leaves oil when you touch it. We recommend that you use lightweight products for oily skin types to prevent your skin feeling clogged with product, and be sure not to wash your face excessively (recommended max 2x daily).";
    }

    else if (b >=3) {
    resulthead.innerHTML="Dry Skin Type";
    result.innerHTML="So what does this mean?" + "<br>"
    + "<br>" + "It is very likely that you have dry type skin. A lot of the time, dry skin is caused by weather changes. Oftentimes you'll feel as though your skin is quite dry and peels a little easily. We recommended that you keep a trusty moisturiser around with you and reapply as necessary.";
    }

    else if (c >=3) {
    resulthead.innerHTML="Normal Skin Type";
    result.innerHTML="So what does this mean?" + "<br>"
    + "<br>" + "It is very likely that you have normal type skin. This means that your skin is  balanced in terms of oiliness and dryness. Ironically, this is the rarest skin type! Lucky you! We recommend that you still keep with a simple routine to look after your skin.";
    }

    else if (d >=3) {
    resulthead.innerHTML="Sensitive Skin Type";
    result.innerHTML="So what does this mean?" + "<br>"
    + "<br>" + "It is very likely that you have sensitive type skin. Oftentimes you'll feel as though your skin is quite red and reacts easily to any product you use. Additionally, it may be itchy and flaky. We recommend that you be gentle with cleansing and be sure to use products that are specifically for sensitive skin to not damage your natural skin barrier.";
    }

    else if (a<=2 && b<=2 && c<=2 && d<=2) {
    result.innerHTML="Sorry, we cannot determine your skin type based on your answers. Please take the quiz again and ensure all questions have been answered.";
    }
      
    var str="To all products page";
    var result=str.link("all-products.html");
    document.getElementById("redirect").innerHTML=result;

    
}

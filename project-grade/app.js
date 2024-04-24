let score = prompt("คะแนนของคุณ")
if(score >= 80 && score <= 100){
    if(score >= 80){
        document.getElementById("result").innerHTML = "คุณได้เกรด A"
    }
    else if(score >=75){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score >=70){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score >=65){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score >=60){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score >=55){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score >=50){
        document.getElementById("result").innerHTML = "คุณได้เกรด B+"
    }
    else if(score <50){
        document.getElementById("result").innerHTML = "คุณได้เกรด F"
    }
else{
    document.getElementById("result").innerHTML = "กรุณากรอกตัวเลขในช่วง 0-100"
}
}
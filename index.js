function randomValueGenerator(){
    let max=50;
    let min=-50;
    for(let i=1;i<=10;i++){
        let j=i-1;
        let p="box"+j;
        document.getElementById(p).innerHTML=Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    document.getElementById("start").disabled = false;
}
async function bubbleSort(){
    document.getElementById("generate").disabled = true;
    document.getElementById("start").disabled = true;
    let req=9;
    for (var i = 0; i <=10-1 ; i++) {
        // Last i elements are already in place  ;
        document.getElementById("iteration").innerHTML="Iteration "+(i+1);
        let flag=0;
        for (var j = 0; j < (10 - i - 1); j++) {
            let k=j+1;
            document.getElementById("reference").innerHTML="Comparing Elements at Index "+j+" and "+k;

            let p="box"+j;//Id of h1 tags
            let p1="boxs"+j;//Id of div 
            
            let q="box"+k;
            let q1="boxs"+k;
            let x1=document.getElementById(p).innerHTML;
            let x=parseInt(x1);
            let y1=document.getElementById(q).innerHTML;
            let y=parseInt(y1);

            document.getElementById(p1).style.backgroundColor="#FAEBD7";
            document.getElementById(q1).style.backgroundColor="#FAEBD7";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
            )
            
            
            if (x>y) {
                document.getElementById("reference").innerHTML="Swapping Elements at Index "+j+" and "+k;
                let v1=document.getElementById(p);
                let v2=document.getElementById(q);
                v1.classList.add("pressed");
                v1.classList.add("pressed");
                document.getElementById(p).innerHTML=y;
                document.getElementById(q).innerHTML=x;
                document.getElementById(p1).style.backgroundColor="orange";
                document.getElementById(q1).style.backgroundColor="orange";
                
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000)
                )
                document.getElementById(p1).style.backgroundColor="white";
                document.getElementById(q1).style.backgroundColor="white";
                flag=1;
            }
            document.getElementById(p1).style.backgroundColor="white";
            document.getElementById(q1).style.backgroundColor="";
        }
        if(flag==0){
            document.getElementById("reference").innerHTML="";
            for(i=req;i>=0;i--){
                let k="boxs"+i;
                document.getElementById(k).style.backgroundColor="rgba(43, 39, 150, 0.4)";
            }
            document.getElementById("iteration").innerHTML="Sorted!";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
            )
            document.getElementById("iteration").innerHTML="";
            break;
        }
        let p3="boxs"+req;
        document.getElementById(p3).style.backgroundColor="rgba(43, 39, 150, 0.4)";
        req-=1;

    }
    document.getElementById("boxs0").style.backgroundColor="rgba(43, 39, 150, 0.4)";
    // document.getElementById("boxs1").style.backgroundColor="rgba(43, 39, 150, 0.4)";
    // document.getElementById("boxs2").style.backgroundColor="rgba(43, 39, 150, 0.4)";
    document.getElementById("generate").disabled = false;
    document.getElementById("start").disabled = false;
}
document.getElementById("start").disabled = true;
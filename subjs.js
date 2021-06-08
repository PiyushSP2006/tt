var Sun=["PHYS","CHEM","BIO","MATHS","HIST"];
var Mon=["MATHS","GEO","HIST","PHYS"];
var Tue=["CHEM","PED","GEO","BIO"];
var Wed=["CHEM","PED","CHEM","BIO"];
var Thurs=["CHEM","PHY","HIST","GEO"];
var Fri=["ODIA","ENG","MATHS","BIO"];
var Sat=["PHY","BIO","CHEM","GEO"];
var day,dayName,DAY,d;
var title="TIME TABLE"



    
getDays();




async function getDays(){
    day=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    dayName= await day.json();
    
    DAY=dayName.day_of_week;
   
    console.log(DAY);
   // document.write(title)
    if (DAY===0){
    document.write(Mon);
    }
    if(DAY===1){
        document.write(Tue);
    }
    if(DAY===2){
        document.write(Wed);
    }
    if(DAY===3){
        document.write(Thurs);
    }
    if(DAY===4){
        document.write(Fri);
    }
    if(DAY===5){
        document.write(Sat);
    }
    if(DAY===6){
        document.write(Sun);
    }
}

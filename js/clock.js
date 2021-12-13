


let info=document.querySelector("#myName");
let textInfo=document.querySelector("#textInfo");
let dateInfo=document.querySelector("#myClock");
let textInfoName=document.querySelector("#textInfoName");
let fname=document.querySelector("#fname");

let formDOM=document.querySelector("#myForm");
formDOM.addEventListener("submit",validateForm)
function validateForm(event) {

   event.preventDefault();
   
if(fname.value){
    
    let lastName=fname.value;
    textInfoName.innerHTML=`Merhaba <span class="text-success"
    <strong>
    "${lastName}"</strong></span>  hoş geldiniz!`;
    myFunction();
    

    

  formDOM.remove(); 

    let FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "FullNrererame");
    FN.setAttribute("placeholder", "Full Name");
        formDOM.appendChild(FN);
}else{
    console.log("hata")
    myFunctionNotName();
    textInfo.innerHTML=`
    <div class="container">
    <div class="col-sm-8 offset-sm-2 pt-5">
        <form id="myFormNew">
          <input type="text" name="fnameNew" id="fnameNew" placeholder="Lütfen adınızı giriniz." style="height:50px; width:300px;">
          <button type="submit" class="btn btn-success">Giriş Yap</button>
           <a href="index.html" class="btn btn-primary"id="newTag">Ana Sayfaya Geri Dön</a>
        </form>
        
      </div>
      </div>`;
 
    let myFormNew=document.querySelector("#myFormNew");
    myFormNew.addEventListener("submit",function(event){
        event.preventDefault();
        let nameEvent=fnameNew.value;
        textInfoName.classList.remove("text-warning");
        if(nameEvent){
         textInfoName.innerHTML=`Merhaba <span class="text-success"
        <strong>
        "${nameEvent}"</strong></span>  hoş geldiniz!`;
        myFunction(); 
        }else{
            myFunctionNotName();
        }
    });
    
   formDOM.remove(); 
}   
}

function myFunctionNotName(){
    textInfoName.innerHTML="Maalesef sizi tanıyamadık.";
    textInfoName.classList.remove("text-body");
    textInfoName.classList.add("text-warning");
}

function myFunction() {
    showTime();
    textInfo.innerHTML="Sizi aramızda tekrardan görmek güzel."; 
    textInfo.innerHTML=`<a href="index.html" class="btn btn-primary btn-lg"id="newTag">Ana Sayfaya Geri Dön</a>`;
}

function showTime(){
    let month = new Array();
    month[0] = "OCAK";
    month[1] = "ŞUBAT";
    month[2] = "MART";
    month[3] = "NİSAN";
    month[4] = "MAYIS";
    month[5] = "HAZİRAN";
    month[6] = "TEMMUZ";
    month[7] = "AĞUSTOS";
    month[8] = "EYLÜL";
    month[9] = "EKİM";
    month[10] = "KASIM";
    month[11] = "ARALIK";


    let date=new Date();
    let dateYear=date.getFullYear();
    let dateMonth=month[date.getMonth()];
    let dateDay=date.getDate();
    let dateHours=date.getHours();
    let dateMinutes=date.getMinutes();
    let dateSeconds=date.getSeconds();
    dateInfo.innerHTML=`${dateDay} ${dateMonth} ${dateYear} ${dateHours}:${dateMinutes}:${dateSeconds} <span class="text-body">
    tarihinde giriş yaptınız.</span> `;
    setInterval(showTime,1000);
}

let infoArray=[{"th":"$5","td1":"Buy 14 books for 2 children","td2":"Buy 4 packets of flour","td3":" "},{"th":"$10","td1":"Buy 28 books for 4 children","td2":"Buy 9 packets of flour","td3":"Protect 1 child"},{"th":"$20","td1":"Buy 56 books for 8 children","td2":" ","td3":"Protect 2 children"},{"th":"$50","td1":"Buy 140 books for 20 children","td2":"Buy 48 packets of flour","td3":"Protect 5 children"}]
const Btn1=document.getElementById('btn1');
const Btn2=document.getElementById('btn2');
const Btn3=document.getElementById('btn3');
const Btn4=document.getElementById('btn4');
const TableData=document.getElementById('data');
const Message=document.getElementById('message');
const text=document.getElementById('text-el');
const OnceBtn=document.getElementById('once-btn');
const MonthBtn=document.getElementById('monthly-btn');
const amountInput=document.getElementById('amountInp');
const countryInput=document.getElementById('countryInp');
const Country=document.getElementById('Country-el');
const OtherAmount=document.getElementById('Otherval');
const periodText=document.getElementById('Period-el');
const durationPeriod=document.getElementById('timer');
const donationField1=document.getElementById('DonationField1')
const donationField2=document.getElementById('DonationField2');

let renderArray0=infoArray;
let renderArray1=infoArray;
let renderArray2=infoArray;
let renderArray3=infoArray;

function copyText(){
    let newText="I want to support with "+OtherAmount.value+" dollars"
    countryInput.value=Country.value;
    amountInput.value=newText
    donationField2.value=donationField1.value
}

OnceBtn.addEventListener("click", function(){
    Message.textContent="Your single donation";
    text.textContent="You are about to give once";
    OnceBtn.style.background='#e64e71';
    OnceBtn.style.color='#fff';
    MonthBtn.style.background='gray';
    MonthBtn.style.color='#000';
    periodText.textContent="Make a one time donation of:"
    durationPeriod.style.display="block"
})

MonthBtn.addEventListener("click", function(){
    Message.textContent="Your Monthly Donation";
    text.textContent="You are about to become a Pure Active Love Organization monthly supporter";
    MonthBtn.style.background="#e64e71";
    MonthBtn.style.color='#fff';
    OnceBtn.style.background='gray';
    OnceBtn.style.color='#000';
    periodText.textContent="Make a monthly donation of:"
    durationPeriod.style.display="none"
    donationField1.value="";
    donationField2.value="";
})


function renderMessage(){
    let tableinfo="<tr>"+"<th>"+ renderArray0+"</th>"+"<td>"+renderArray1+"</td>"+"<td>"+renderArray2+"</td>"+"<td>"+renderArray3+"</td>"+"</tr>";
    TableData.style.background="gray"  
    TableData.innerHTML=tableinfo;
    amountInput.value="I want to support with "+num+ " dollars";
    OtherAmount.value="";
}

    Btn1.addEventListener("click", function(){
        renderArray0=infoArray[0].th;
        renderArray1=infoArray[0].td1;
        renderArray2=infoArray[0].td2;
        renderArray3=infoArray[0].td3;
        num=5
        renderMessage()   
        
    })
    Btn2.addEventListener("click", function(){
        renderArray0=infoArray[1].th;
        renderArray1=infoArray[1].td1;
        renderArray2=infoArray[1].td2;
        renderArray3=infoArray[1].td3;
        num=10
        renderMessage()
    })
    Btn3.addEventListener("click", function(){
        renderArray0=infoArray[2].th;
        renderArray1=infoArray[2].td1;
        renderArray2=infoArray[2].td2;
        renderArray3=infoArray[2].td3;
        num=20
        renderMessage()
    })
    Btn4.addEventListener("click", function(){
        renderArray0=infoArray[3].th;
        renderArray1=infoArray[3].td1;
        renderArray2=infoArray[3].td2;
        renderArray3=infoArray[3].td3;
        num=50
        renderMessage()
    })
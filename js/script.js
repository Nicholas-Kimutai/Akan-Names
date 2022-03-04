var male = [
    {day:"Sunday",akanName:"Kwasi"},
    {day:"Monday",akanName:"Kwadwo"},
    {day:"Tuesday",akanName:"Kwabena"},
    {day:"Wednesday",akanName:"Kwaku"},
    {day:"Thursday",akanName:"Yaw"},
    {day:"Friday",akanName:"Kofi"},
    {day:"Saturday",akanName:"Kwame"}
     ];

     var female = [
        {day:"Sunday",akanName:"Akosua"},
        {day:"Monday",akanName:"Adwoa"},
        {day:"Tuesday",akanName:"Abenaa"},
        {day:"Wednesday",akanName:"Akua"},
        {day:"Thursday",akanName:"Yaa"},
        {day:"Friday",akanName:"Afua"},
        {day:"Saturday",akanName:"Ama"}
    ];
    
    function dayOfWeek(){
        var dd = parseInt(document.getElementById("dd").value);
        var mm = parseInt(document.getElementById("mm").value);
        var yy = document.getElementById("yy").value;

        var cc = parseInt(year.slice(0,2)); // century digit
        var yy = parseInt(year.slice(2,4)); // year digit

        if(dd <= 0 || dd > 31) alert("You have entered an invalid day");
        if(mm <= 0 || mm > 12) alert("You have entered an invalid month");

        var day = (((cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7;
        return Math.floor(day);
   
    };

    function showResults(){
        var gender = document.querySelector('input[name="gridRadios"]:checked');
        if(gender === null){
            alert("Please select your gender");
        }
        else{
            gender=gender.value;
        }
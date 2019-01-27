var arr_notes =[];


function create_note(note, date, time,index) {
    var note = {
        note: note,
        date: date,
        time: time,
        index :index
    }
    return note;
}

function valid(note,date){
    if(note == ""){
        document.getElementById("errormsg").innerHTML = "Task required";
        return 1;
    }
    else if(date == ""){
        document.getElementById("errormsg").innerHTML = "Date required";
        return 1;
    }
    else{
        return 2;
    }
}

function adir(){
    console.log("hello")
}

function add(){
    var note = document.forms["notes-form"]["note"].value;
 var date =document.forms['notes-form']['date_input'].value;
 var time =document.forms['notes-form']['time_input'].value;
 var index =Math.floor((Math.random() * 1000000) + 1);

if(valid(note,date)==2)
{
    arr_notes.push(create_note(note, date, time,index))
    localStorage.setItem("tasks", JSON.stringify(arr_notes));
    var taskindex = arr_notes.length -1;
    var card = document.createElement("div");
    var container = document.getElementById("taskcontainer");
    card.className = "taskcard";
    card.innerHTML = "<span id='container'><i id='x' class='btn-floating btn-lg purple-gradient' onclick='this.parentElement.parentElement.remove();deletenote("+index+")' ><span class='glyphicon glyphicon-trash'></span> </i><span class='taskstyle'>" + arr_notes[taskindex].note + "</span>" +"<span class='datestyle'>" + arr_notes[taskindex].date + "</span>" + "<span class='timestyle'>" + arr_notes[taskindex].time + "</span>";
    container.append(card);
    document.getElementById("errormsg").innerHTML = "";
    document.forms["notes-form"]["note"].value="";
    document.forms['notes-form']['date_input'].value="";
    document.forms['notes-form']['time_input'].value="";
}
else{
adir();
}
}










function deletenote(index)
{
    
    var x = arr_notes.findIndex(function(note){
        return note.index == index
    })
    if(x !== -1){
        arr_notes.splice(x,1);
        localStorage.setItem("tasks", JSON.stringify(arr_notes));
    }
    else{
        console.log("didnt find id");
    }

}



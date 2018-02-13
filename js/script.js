$(document).ready(function(){
    $("#addTask").on("click", addTask);
    $("#taskList").on("change", ".completeITask", completeITask);
    $("#taskList").on("click", ".deleteTask", deleteTask);
    $("#newTask").on("keypress", function (event){
        if (event.keyCode === 13) {
            addTask();
            event.preventDefault();
        }
    });
    $("#taskList").on("dblclick", ".textTask", startEdit);
    $("#taskList").on("click", ".saveTask", saveEdit);


    function addTask(event){
        let newTaskText = $("#newTask").val();
        if (!newTaskText){
            return false;
        } else {
            $("#taskList").append('<li> <input type="checkbox" class="completeITask"> <span class="textTask">' + newTaskText + '</span><input type="text" class="editTask"><button class="btn btn-info saveTask">save</button><span class="glyphicon glyphicon-trash deleteTask"></span></li>');
            $("#newTask").val("");
        }
    }
    function deleteTask(){
        $(this).parent().remove();
    }
    function completeITask(){
        $(this).parent().toggleClass("done");
    }
    function startEdit () {
        let currenText = $(this).parent().find(".textTask").text();
        $(this).parent().find(".editTask").val(currenText);
        $(this).parent().find(".editTask").show();
        $(this).parent().find(".saveTask").show();
        $(this).parent().find(".textTask").hide();
    }
    function saveEdit () {
        $(this).hide();
        let newValue = $(this).parent().find(".editTask").val();
        $(this).parent().find(".editTask").hide();
        $(this).parent().find(".textTask").text(newValue);
        $(this).parent().find(".textTask").show();
    }
});
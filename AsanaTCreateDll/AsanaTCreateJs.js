﻿$(document).ready(function ($) {
    //0/c01a52f185cc2e2ce4414381065ab372
    //var someSessionVariable = $("#hdnsession").data('value');
    //"Authorization": "Bearer " + someSessionVariable
    //////////////////////////// TASK SENT->->->->
    var someSessionVariable = $("#hdnsession").val();
    alert(someSessionVariable);

    var settings = {
        "url": "https://app.asana.com/api/1.0/projects?opt_fields=created_at,modified_at,owner,due_date,current_status,public,name,notes,archived,workspace,color,members,followers",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + someSessionVariable
        },
    };
    $.ajax(settings).done(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $("#selectproject").append($("<option value='" + response.data[i].id + "'>" + response.data[i].name + "</option>"));
        }
        var e = document.getElementById("selectproject");
        e.addEventListener('change', function () {
            var value = e.options[e.selectedIndex].value;
            console.log(value);
            var text = e.options[e.selectedIndex].text;
            console.log(text);
        })
    });
    var settings_task_personn = {
        "url": "https://app.asana.com/api/1.0/workspaces/1108392209054696/users",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "Bearer " + someSessionVariable
        },
    };
    $.ajax(settings_task_personn).done(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            $("#task_person").
                append($("<option value='" + response.data[i].id + "'>" + response.data[i].name + "</option>"));
        }
        perso_fortask = document.getElementById("task_person");
        perso_fortask.addEventListener('change', function () {
            persoName_fortask = perso_fortask.options[perso_fortask.selectedIndex].text;
            persoId_fortask = perso_fortask.options[perso_fortask.selectedIndex].value;
            //console.log(persoId_fortask);
        })
    });
    $("#Formgonder").click(function () {
        $("#tasklistname").val
            (
            $.trim($("#tasklistname").val())
            )
        $("#tasklistdesc").val
            (
            $.trim($("#tasklistdesc").val())
            )
        var e = document.getElementById("selectproject");
        var ae = e.options[e.selectedIndex].value;
        var tasklistisim = $("#tasklistname").val();
        var tasklistaciklama = $("#tasklistdesc").val();

        task_forper = document.getElementById("task_person");
        a = task_forper.options[task_forper.selectedIndex].value;
        perso_fortask = document.getElementById("task_person");
        b = perso_fortask.options[perso_fortask.selectedIndex].text;
        //console.log(a);

        if (tasklistisim == '' || tasklistaciklama == '' || b == '') {
            swal("Oops", "Lütfen Boş Kutuları Doldurunuz!", "error")
        } else {
            swal("Tebrikler", "((" + tasklistisim + "))" + "Adlı Kaydınız Başarılı!", "success")
            var settings = {
                "url": "https://app.asana.com/api/1.0/tasks?projects=" + ae + "&workspace=1108392209054696",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Authorization": "Bearer " + someSessionVariable

                },
                "data": {
                    "name": tasklistisim,
                    "notes": tasklistaciklama,
                    "assignee": b
                }
            };
            $.ajax(settings).done(function (response) {
                console.log(response);
                location.reload();
            });
        }
    });
});




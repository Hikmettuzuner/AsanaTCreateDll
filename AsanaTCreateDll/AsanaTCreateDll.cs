using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI;


namespace AsanaTCreateDll
{
    public class AsanaTCreateDll
    {
        public string MissionCreated(Page page, string project_id, string asana_id, string task_name, string task_desc, string assign_id)
        {
            string script_create = "var settings = {\"url\": \"https://app.asana.com/api/1.0/tasks?projects=" + project_id + "&workspace=1108392209054696\",\"method\": \"POST\",\"timeout\": 0,\"headers\": { \"Authorization\": \"Bearer  " + asana_id + "\"},\"data\": {\"name\": \"" + task_name + "\",\"notes\": \"" + task_desc + "\",\"assignee\": "+ assign_id +"}};";
            script_create += " $.ajax(settings).done(function (response) { console.log(response); swal({ title: \"Tebrikler\", text: \"GÖREV OLUŞTURULDU !\", type:\"success\" }).then(function() { } );});";
            ScriptManager.RegisterClientScriptBlock(page, typeof(Page), "", script_create, true);
            return script_create;
        }
    }
}

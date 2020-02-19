$('#incident-add-new-modal').ready(function () {
    $('#incident-add-new-modal').modal();
});

function saveIncident() {
    const issue = $('#issue-field').val();
    const description = $('#description-field').val();
    const url = serverUrl() + "/incident/save";
    const incident = {"issue": issue, "description": description};
    jQuery.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(incident),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, jQxhr) {
            console.log(textStatus);
            $('#incident-add-new-modal').modal('hide');
            findAllIncidents();
        },
        failure: function (errorMessage) {
            alert(errorMessage)
        }
    });
}


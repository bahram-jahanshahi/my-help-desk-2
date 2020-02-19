$('#incident-list').ready(function () {
    findAllIncidents();
});

function findAllIncidents() {
    jQuery.get('http://localhost:9090/incident/all', function (data, status) {
       prepareTable(data);
    });
}

function prepareTable(data) {
    let content = '';
    for (let i = 0; i < data.length; i++) {
        content +=  "<tr>";
        content +=  "<th scope='row'>" + data[i].id + "</th>";
        content +=  "<td >" + data[i].issue + "</td>";
        content +=  "<td >" + data[i].description + "</td>";
        content +=  "<td >" +
                    "<button type='button' class='btn btn-outline-primary btn-sm' onclick='showEdit("+ data[i].id +")'>edit</button>" +
                    "</td>";
        content +=  "</tr>";
    }
    $('#table-body').html(content);
}

function showEdit(id) {
    window.incidentEditId = id;
    $('#modal-container').load('features/incident/incident-edit/incident-edit.html', function () {});
}

function showAddNew() {
    $('#modal-container').load('features/incident/incident-add-new/incident-add-new.html', function () {});
}

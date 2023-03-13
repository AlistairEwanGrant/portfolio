// $(document).ready(function () {
//
// // clear settings when restarted
//     function resetSelectedValue() {
//         document.getElementById('dropdownDepartments').getElementsByTagName('option')[0].selected = true;
//         document.getElementById('dropdownLocation').getElementsByTagName('option')[0].selected = true;
//         let inputField = document.getElementById('myInput')
//         inputField.value = " ";
//     }
//
//     resetSelectedValue()
//
// // set menus
//     $("#newDepartmentForm").hide();
//     $("#newDepartmentSaveButton").hide();
//     $("#newLocationForm").hide();
//     $("#newLocationSaveButton").hide();
//
//
//     function getAllNames() {
//         $.ajax({
//             url: "api/company-directory/get-all",
//             type: 'GET',
//             dataType: 'json',
//             success: function (result) {
//
//                 for (let i = 0; i < result.length; i++) {
//
//                     let firstName = result[i].firstName
//                     let lastName = result[i].lastName
//                     let jobTitle = result[i].jobTitle
//                     let department = result[i].department
//                     let email = result[i].email
//                     let location = result[i].location
//                     let id = result[i].id
//
//                     let nameList =
//                         `<tr id="${id}">
//               <td class='name'>${lastName}, ${firstName}</td>
//               <td class="hiding">${jobTitle}</td>
//               <td>${department}</td>
//               <td>${location}</td>
//               <td class="hiding">${email}</td>
//             </tr>`;
//
//                     $('#resultsArea').append(nameList);
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     }
//
// // updating departmet dropdown main screen
//     function getAllDepartmentNames() {
//         $.ajax({
//             url: "api/company-directory/get-all-departments",
//             type: 'GET',
//             dataType: 'json',
//             success: function (result) {
//
//                 for (let i = 0; i < result.length; i++) {
//
//                     let department = result[i].name
//                     let id = result[i].id
//                     let locationID = result[i].locationID
//
//                     let options = `<option value="${locationID}" id="${id}" >${department}</option> `;
//
//                     $('#dropdownDepartments').append(options);
//                     $('#dropdownDepartmentsEdit').append(options);
//                     $('#newDepartmentDropList').append(options);
//                     $('#editDepartment').append(options);
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     }
//
//
// // updating location dropdown main screen
//     function updateDropdowns() {
//         $.ajax({
//             url: "api/company-directory/get-all-locations",
//             type: 'GET',
//             dataType: 'json',
//             success: function (result) {
//
//                 for (let i = 0; i < result.length; i++) {
//
//                     let location = result[i].name
//                     let id = result[i].id
//
//                     let options = `<option value="${id}" id="${id}" >${location}</option> `;
//
//                     $('#dropdownLocation').append(options);
//                     $('#newDepartmentLocation').append(options);
//                     $('#editLocation').append(options);
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     }
//
//
// // selecting a result to display
//     $(document).on("click", "tr", function () {
//
//         let personnelID = $(this).attr('id');
//
//         $.ajax({
//             url: "api/company-directory/personnel/{id}",
//             type: 'GET',
//             dataType: 'json',
//             data: {
//                 id: personnelID
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function (result) {
//
//                 let firstName = result.firstName;
//                 let lastName = result.lastName;
//                 let email = result.email;
//                 let jobTitle = result.jobTitle;
//                 let personnelID = result.id
//
//
//                 $('#personnelID').html(personnelID);
//                 let departmentID = result.departmentID;
//
//                 $.ajax({
//                     url: "api/company-directory/get-all-departments",
//                     type: 'GET',
//                     dataType: 'json',
//                     success: function (result) {
//
//                         let listLength = $("#dropdownDepartmentsEdit").val('id')[0]
//
//                         for (let i = 0; i < listLength.length; i++) {
//
//                             $("#dropdownDepartmentsEdit").val('id')[0][i].id
//
//                             if ($("#dropdownDepartmentsEdit").val('id')[0][i].id == departmentID) {
//
//                                 document.getElementById('dropdownDepartmentsEdit').getElementsByTagName('option')[i].selected = true;
//
//                                 break;
//                             }
//                         }
//                     },
//                     error: function (jqXHR, textStatus, errorThrown) {
//                         console.log(jqXHR);
//                     }
//                 })
//
//
//                 $('#firstNameEdit').val(firstName);
//                 $('#lastNameEdit').val(lastName);
//                 $('#emailEdit').val(email);
//                 $('#jobTitleEdit').val(jobTitle);
//
//                 showEditDetails()
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     });
//
//
// // Seach Bar
//     $("#myInput").on('keyup', function () {
//
//         let input, filter, tr, td, a, i, txtValue;
//
//         input = document.getElementById("myInput");
//         filter = input.value.toUpperCase();
//         td = document.getElementsByClassName("name");
//
//         for (i = 0; i < td.length; i++) {
//
//             txtValue = td[i].innerHTML;
//             txtValue = txtValue.toUpperCase()
//             filter = filter.toUpperCase()
//
//             filter = filter.replace(/\s+/g, ' ').trim()
//             txtValue = txtValue.replace(/,/g, '');
//
//             if (txtValue.includes(filter)) {
//
//                 td[i].parentElement.style.display = "";
//             } else {
//                 td[i].parentElement.style.display = "none";
//             }
//         }
//     })
//
//     // dropdown changes
//     $("#dropdownDepartments").change(function () {
//
//         filterNames()
//
//         let locationID = $('#dropdownDepartments :selected').val()
//
//         let listLength = document.getElementById('dropdownLocation').getElementsByTagName('option')
//
//         for (let i = 0; i < listLength.length; i++) {
//
//             if ($("#dropdownLocation").val('id')[0][i].id == locationID) {
//
//                 document.getElementById('dropdownLocation').getElementsByTagName('option')[i].selected = true;
//
//                 break;
//             }
//         }
//     });
//
//     $("#dropdownLocation").change(function () {
//
//         filterNames()
//     })
//
//     function filterNames() {
//         $.ajax({
//             url: "api/company-directory/get-all",
//             type: 'GET',
//             dataType: 'json',
//             success: function (result) {
//
//                 var d = document.createDocumentFragment();
//                 d.appendChild(document.getElementById("resultsArea"));
//
//
//                 // rebuild table header
//                 let newElement = document.createElement('table');
//                 newElement.className = "table table-striped table-hover";
//                 newElement.id = "resultsArea";
//
//                 let tbody = document.createElement('tbody');
//                 newElement.appendChild(tbody);
//
//                 let tr = document.createElement('tr');
//                 tbody.appendChild(tr);
//
//                 let td1 = document.createElement('th');
//                 td1.id = "sortName";
//                 td1.className = "white";
//                 td1.innerHTML = "Name"
//                 tr.appendChild(td1);
//
//                 let td2 = document.createElement('th');
//                 td2.className = "white hiding";
//                 td2.innerHTML = "Job Title"
//                 tr.appendChild(td2);
//
//                 let td3 = document.createElement('th');
//                 td3.className = "white";
//                 td3.innerHTML = "Department"
//                 tr.appendChild(td3);
//
//                 let td4 = document.createElement('th');
//                 td4.className = "white";
//                 td4.id = "minWidth";
//                 td4.innerHTML = "Location"
//                 tr.appendChild(td4);
//
//                 let td5 = document.createElement('th');
//                 td5.className = "white hiding";
//                 td5.innerHTML = "Email"
//                 tr.appendChild(td5);
//
//                 document.getElementById("forList").appendChild(newElement);
//
//                 let department = $("#dropdownDepartments option:selected").text()
//                 let location = $("#dropdownLocation option:selected").text()
//
//                 for (let i = 0; i < result.length; i++) {
//
//                     if (department == "Department" && location == "Location") {
//
//                         let firstName = result[i].firstName
//                         let lastName = result[i].lastName
//                         let jobTitle = result[i].jobTitle
//                         let department = result[i].department
//                         let email = result[i].email
//                         let location = result[i].location
//                         let id = result[i].id
//
//                         let nameList =
//                             `<tr id="${id}">
//                 <td class='name'>${lastName}, ${firstName}</td>
//                 <td class="hiding">${jobTitle}</td>
//                 <td>${department}</td>
//                 <td>${location}</td>
//                 <td class="hiding">${email}</td>
//               </tr>`;
//
//                         $('#resultsArea').append(nameList);
//
//                     } else if (department == "Department") {
//
//                         if (location === result[i].location) {
//
//                             let firstName = result[i].firstName
//                             let lastName = result[i].lastName
//                             let jobTitle = result[i].jobTitle
//                             let department = result[i].department
//                             let email = result[i].email
//                             let location = result[i].location
//                             let id = result[i].id
//
//                             let nameList =
//                                 `<tr id="${id}">
//                   <td class='name'>${lastName}, ${firstName}</td>
//                   <td class="hiding">${jobTitle}</td>
//                   <td>${department}</td>
//                   <td>${location}</td>
//                   <td class="hiding">${email}</td>
//                 </tr>`;
//
//                             $('#resultsArea').append(nameList);
//                         }
//
//                     } else if (location == "Location") {
//                         if (department === result[i].department) {
//                             let firstName = result[i].firstName
//                             let lastName = result[i].lastName
//                             let jobTitle = result[i].jobTitle
//                             let department = result[i].department
//                             let email = result[i].email
//                             let location = result[i].location
//                             let id = result[i].id
//
//                             let nameList =
//                                 `<tr id="${id}">
//                   <td class='name'>${lastName}, ${firstName}</td>
//                   <td class="hiding">${jobTitle}</td>
//                   <td>${department}</td>
//                   <td>${location}</td>
//                   <td class="hiding">${email}</td>
//                 </tr>`;
//
//                             $('#resultsArea').append(nameList);
//                         }
//
//                     } else {
//
//                         if (department === result[i].department) {
//
//                             if (location === result[i].location) {
//
//                                 let firstName = result[i].firstName
//                                 let lastName = result[i].lastName
//                                 let jobTitle = result[i].jobTitle
//                                 let department = result[i].department
//                                 let email = result[i].email
//                                 let location = result[i].location
//                                 let id = result[i].id
//
//                                 let nameList =
//                                     `<tr id="${id}">
//                     <td class='name'>${lastName}, ${firstName}</td>
//                     <td class="hiding">${jobTitle}</td>
//                     <td>${department}</td>
//                     <td>${location}</td>
//                     <td class="hiding">${email}</td>
//                   </tr>`;
//
//                                 $('#resultsArea').append(nameList);
//                             }
//                         }
//                     }
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     }
//
// // edit the database button and actions
//     $("#editSaveButton").click(function () {
//
//         updateData()
//
//     })
//
//     $("#close").click(function () {
//
//         $('#newModal').hide()
//
//         let newDepartmentText = document.getElementById("newDepartmentText");
//         newDepartmentText.value = "";
//
//         let newLocationText = document.getElementById("newLocationText");
//         newLocationText.value = "";
//
//     })
//
//     function showEditDetails() {
//         $("#newModal").show();
//         $("#trashButtonPersonnel").show();
//         $("#editDepartmentForm").hide();
//         $("#editLocationForm").hide();
//         $('.modal-title').html('Edit / Delete')
//         $("#dropdownTableEdit").show();
//         $("#newSaveButton").hide();
//         $("#editSaveButton").show();
//         $("#dropdownTableAdd").hide();
//         $("#newDepartmentSaveButton").hide();
//         $("#firstModalPage").show();
//         $("#newDepartmentForm").hide();
//         $("#newLocationForm").hide();
//         $("#newLocationSaveButton").hide();
//         $("#trashButtonLocation").hide();
//         $("#trashButtonDepartment").hide();
//         $("#editDepartmentSaveButton").hide();
//         $("#editLocationSaveButton").hide();
//         document.getElementById('dropdownTableEdit').getElementsByTagName('option')[0].selected = true;
//     }
//
//     function updateData() {
//
//         let personnelID = $('#personnelID').text()
//         let firstNameForEdit = $('#firstNameEdit').val()
//         if (firstNameForEdit === '') {
//             alert("First Name cannot be empty");
//             throw new Error("First Name cannot be empty");
//         }
//
//         let lastNameForEdit = $('#lastNameEdit').val()
//         if (lastNameForEdit === '') {
//             alert("Last Name cannot be empty");
//             throw new Error("Last Name cannot be empty");
//         }
//
//         let emailForEdit = $('#emailEdit').val()
//         let jobTitleForEdit = $('#jobTitleEdit').val()
//         let departmentForEdit = $('#dropdownDepartmentsEdit option:selected').attr('id')
//
//         $.ajax({
//             url: "api/company-directory/personnel/{personnelID}/edit",
//             type: 'GET',
//             dataType: 'json',
//             data: {
//                 personnelID: personnelID,
//                 firstNameEdit: firstNameForEdit,
//                 lastNameForEdit: lastNameForEdit,
//                 emailForEdit: emailForEdit,
//                 jobTitleForEdit: jobTitleForEdit,
//                 departmentForEdit: departmentForEdit
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function () {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have updated ${firstNameForEdit} ${lastNameForEdit}'s details`);
//
//                 $('#newModal').hide()
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     }
//
//     $("#trashButtonPersonnel").click(function () {
//
//         let personnelID = $('#personnelID').text()
//         let firstNameForEdit = $('#firstNameEdit').val()
//         let lastNameForEdit = $('#lastNameEdit').val()
//
//         $.ajax({
//             url: "api/company-directory/personnel/{personnelID}",
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 personnelID: personnelID,
//                 '_method': 'DELETE',
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function (result) {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have removed ${firstNameForEdit} ${lastNameForEdit}`);
//
//                 $('#newModal').hide()
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#addNew").click(function () {
//
//         $("#dropdownTableEdit").hide();
//         $("#dropdownTableAdd").show();
//         $("#newModal").show();
//         $("#newSaveButton").show();
//         $('.modal-title').html('Add New')
//         $("#trashButtonPersonnel").hide();
//         $("#editLocationForm").hide();
//         $("#editDepartmentForm").hide();
//         $("#trashButtonLocation").hide();
//         $("#trashButtonDepartment").hide();
//         $("#editSaveButton").hide();
//         $("#editDepartmentSaveButton").hide();
//         $("#editLocationSaveButton").hide();
//         $("#firstModalPage").show();
//         $("#newDepartmentForm").hide();
//         $("#newDepartmentSaveButton").hide();
//         $("#newLocationForm").hide();
//         $("#newLocationSaveButton").hide();
//         $('#firstNameEdit').val('')
//         $('#lastNameEdit').val('')
//         $('#emailEdit').val('')
//         $('#jobTitleEdit').val('')
//         document.getElementById('dropdownTableAdd').getElementsByTagName('option')[0].selected = true;
//     })
//
//     $("#newSaveButton").click(function () {
//
//         let firstNameForEdit = $('#firstNameEdit').val()
//         if (firstNameForEdit === '') {
//             alert("First Name cannot be empty");
//             throw new Error("First Name cannot be empty");
//         }
//         let lastNameForEdit = $('#lastNameEdit').val()
//         if (lastNameForEdit === '') {
//             alert("Last Name cannot be empty");
//             throw new Error("Last Name cannot be empty");
//         }
//         let emailForEdit = $('#emailEdit').val()
//         let jobTitleForEdit = $('#jobTitleEdit').val()
//         let departmentForEdit = $('#dropdownDepartmentsEdit option:selected').attr('id')
//
//         if (departmentForEdit === undefined) {
//             alert("Department cannot be empty");
//             throw new Error("Department cannot be empty");
//         }
//
//         $.ajax({
//             url: "api/company-directory/personnel",
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 firstNameEdit: firstNameForEdit,
//                 lastNameForEdit: lastNameForEdit,
//                 emailForEdit: emailForEdit,
//                 jobTitleForEdit: jobTitleForEdit,
//                 departmentForEdit: departmentForEdit
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function () {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have added a new Personnel '${firstNameForEdit} ${lastNameForEdit}'`);
//
//                 $('#newModal').hide()
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#dropdownTableAdd").change(function () {
//
//         let dropdownTableAdd = $("#dropdownTableAdd option:selected").text()
//
//         if (dropdownTableAdd == "Department") {
//             $("#firstModalPage").hide();
//             $("#newDepartmentForm").show();
//             $("#newDepartmentSaveButton").show();
//             $("#newSaveButton").hide();
//             $("#newLocationForm").hide();
//             $("#newLocationSaveButton").hide();
//             $("#trashButtonPersonnel").hide();
//         }
//
//         if (dropdownTableAdd == "Personnel") {
//             $("#firstModalPage").show();
//             $("#newDepartmentForm").hide();
//             $("#newDepartmentSaveButton").hide();
//             $("#newSaveButton").show();
//             $("#newLocationForm").hide();
//             $("#newLocationSaveButton").hide();
//         }
//
//         if (dropdownTableAdd == "Location") {
//             $("#firstModalPage").hide();
//             $("#newDepartmentForm").hide();
//             $("#newDepartmentSaveButton").hide();
//             $("#newSaveButton").hide();
//             $("#newLocationForm").show();
//             $("#newLocationSaveButton").show();
//         }
//     })
//
//     $("#dropdownTableEdit").change(function () {
//
//         let dropdownTableEdit = $("#dropdownTableEdit option:selected").text()
//
//         if (dropdownTableEdit == "Personnel") {
//             $("#firstModalPage").show();
//             $("#newDepartmentForm").hide();
//             $("#newDepartmentSaveButton").hide();
//             $("#newSaveButton").hide();
//             $("#newLocationForm").hide();
//             $("#newLocationSaveButton").hide();
//             $("#editSaveButton").show();
//             $("#editDepartmentSaveButton").hide();
//             $("#editLocationSaveButton").hide();
//             $("#trashButtonPersonnel").show();
//             $("#trashButtonDepartment").hide();
//             $("#trashButtonLocation").hide();
//             $("#editDepartmentForm").hide();
//             $("#editLocationForm").hide();
//         }
//
//         if (dropdownTableEdit == "Department") {
//
//             let editDepartmentDropdown = $("#editDepartment option:selected").text()
//
//             $('#editDepartmentText').val(editDepartmentDropdown);
//             $("#firstModalPage").hide();
//             $("#newDepartmentForm").hide();
//             $("#editLocationSaveButton").hide();
//             $("#newDepartmentSaveButton").hide();
//             $("#newSaveButton").hide();
//             $("#editDepartmentSaveButton").show();
//             $("#editSaveButton").hide();
//             $("#newLocationForm").hide();
//             $("#newLocationSaveButton").hide();
//             $("#trashButtonPersonnel").hide();
//             $("#trashButtonDepartment").show();
//             $("#editDepartmentForm").show();
//             $("#trashButtonLocation").hide();
//             $("#editLocationForm").hide();
//         }
//
//         if (dropdownTableEdit == "Location") {
//
//             let editLocation = $("#editLocation option:selected").text()
//
//             $('#editLocationText').val(editLocation);
//             $("#firstModalPage").hide();
//             $("#newDepartmentForm").hide();
//             $("#newDepartmentSaveButton").hide();
//             $("#newSaveButton").hide();
//             $("#editDepartmentSaveButton").hide();
//             $("#editSaveButton").hide();
//             $("#newLocationForm").hide();
//             $("#newLocationSaveButton").hide();
//             $("#trashButtonPersonnel").hide();
//             $("#trashButtonDepartment").hide();
//             $("#editDepartmentForm").hide();
//             $("#trashButtonLocation").show();
//             $("#editLocationSaveButton").show();
//             $("#editLocationForm").show();
//
//         }
//     })
//
// //add new department
//     $("#newDepartmentSaveButton").click(function () {
//
//         let newDepartmentName = $('#newDepartmentText').val()
//         if (newDepartmentName === '') {
//             alert("Department cannot be empty");
//             throw new Error("Department cannot be empty");
//         }
//         let newDepartmentNameLocation = $('#newDepartmentLocation').val()
//         if (newDepartmentNameLocation === '16') {
//             alert("Location cannot be empty");
//             throw new Error("Location cannot be empty");
//         }
//
//         $.ajax({
//             url: "api/company-directory/department",
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 name: newDepartmentName,
//                 locationID: newDepartmentNameLocation
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function (result) {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have added a new Department '${newDepartmentName}'`);
//
//                 $('#newModal').hide()
//
//                 let newDepartmentText = document.getElementById("newDepartmentText");
//                 newDepartmentText.value = "";
//
//                 let newLocationText = document.getElementById("newLocationText");
//                 newLocationText.value = "";
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
// //add new Location
//     $("#newLocationSaveButton").click(function () {
//
//         let newLocationName = $('#newLocationText').val()
//         if (newLocationName === '') {
//             alert("Location cannot be empty");
//             throw new Error("Location cannot be empty");
//         }
//
//         $.ajax({
//             url: "api/company-directory/location",
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 name: newLocationName
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function (result) {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have added a new Location '${newLocationName}'`);
//
//                 $('#newModal').hide()
//
//                 let newDepartmentText = document.getElementById("newDepartmentText");
//                 newDepartmentText.value = "";
//
//                 let newLocationText = document.getElementById("newLocationText");
//                 newLocationText.value = "";
//
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#editDepartment").change(function () {
//
//         let editDepartmentDropdown = $("#editDepartment option:selected").text()
//
//         $('#editDepartmentText').val(editDepartmentDropdown);
//
//     })
//
//     $("#editLocation").change(function () {
//
//         let editLocation = $("#editLocation option:selected").text()
//
//         $('#editLocationText').val(editLocation);
//
//     })
//
//     $("#editDepartmentSaveButton").click(function () {
//
//         let locationID = $('#editDepartment :selected').attr('id')
//
//         let locationName = $('#editDepartmentText').val()
//         if (locationName === '') {
//             alert("Department Name cannot be empty");
//             throw new Error("Department Name cannot be empty");
//         }
//
//         $.ajax({
//             url: "api/company-directory/department/{locationID}/edit",
//             type: 'GET',
//             dataType: 'json',
//             data: {
//                 locationID: locationID,
//                 locationName: locationName
//             },
//             success: function () {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have updated Department details to ${locationName}`);
//
//                 $('#newModal').hide()
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#editLocationSaveButton").click(function () {
//
//         let locationID = $('#editLocation :selected').attr('id')
//
//         if (locationID === '16') {
//             alert("Null Location cannot be edited");
//             throw new Error("Null Location cannot be edited");
//         }
//         let locationName = $('#editLocationText').val()
//
//         $.ajax({
//             url: "api/company-directory/location/{locationID}/edit",
//             type: 'GET',
//             dataType: 'json',
//             data: {
//                 locationID: locationID,
//                 locationName: locationName
//             },
//             success: function () {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have updated Location details to ${locationName}`);
//
//                 $('#newModal').hide()
//
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#trashButtonDepartment").click(function () {
//
//         let departmentID = $('#editDepartment :selected').attr('id');
//         let department = $('#editDepartment :selected').text();
//
//         $.ajax({
//             url: "api/company-directory/department/{departmentID}",
//             type: 'GET',
//             dataType: 'json',
//             data: {
//                 departmentID: departmentID,
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//
//             success: function (result) {
//
//                 let personnelLink = result.length
//
//                 if (personnelLink > 0) {
//
//                     alert(`Cannot delete Department linked to ${personnelLink} Personnel`)
//
//                 } else {
//
//                     $.ajax({
//                         url: "api/company-directory/department/{departmentID}",
//                         type: 'POST',
//                         dataType: 'json',
//                         data: {
//                             departmentID: departmentID,
//                             '_method': 'DELETE',
//                         },
//                         headers: {
//                             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//                         },
//
//                         success: function (result) {
//
//                             removeOptions(document.getElementById('dropdownLocation'));
//                             removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                             removeOptionsCompletely(document.getElementById('editLocation'));
//                             removeOptions(document.getElementById('dropdownDepartments'));
//                             removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                             removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                             filterNames();
//                             getAllDepartmentNames();
//                             updateDropdowns();
//
//                             alert(`You have removed '${department}'`);
//
//                             $('#newModal').hide()
//
//                         }
//                     })
//                 }
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     $("#trashButtonLocation").click(function () {
//
//         let locationID = $('#editLocation :selected').attr('id');
//         if (locationID === '16') {
//             alert("Null Location cannot be deleted");
//             throw new Error("Null Location cannot be deleted");
//         }
//
//         let location = $('#editLocation :selected').text();
//         if (locationID === '') {
//             alert("Location cannot be empty");
//             throw new Error("Location cannot be empty");
//         }
//
//         $.ajax({
//             url: "api/company-directory/location/{locationID}",
//             type: 'POST',
//             dataType: 'json',
//             data: {
//                 locationID: locationID,
//                 '_method': 'DELETE',
//             },
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             },
//             success: function (result) {
//
//                 removeOptions(document.getElementById('dropdownLocation'));
//                 removeOptionsCompletely(document.getElementById('newDepartmentLocation'));
//                 removeOptionsCompletely(document.getElementById('editLocation'));
//                 removeOptions(document.getElementById('dropdownDepartments'));
//                 removeOptions(document.getElementById('dropdownDepartmentsEdit'));
//                 removeOptionsCompletely(document.getElementById('editDepartment'));
//
//                 filterNames();
//                 getAllDepartmentNames();
//                 updateDropdowns();
//
//                 alert(`You have removed '${location}'`);
//
//                 $('#newModal').hide()
//             },
//             error: function (jqXHR, textStatus, errorThrown) {
//                 console.log(jqXHR);
//             }
//         })
//     })
//
//     //Start up functions
//     getAllNames();
//     getAllDepartmentNames();
//     updateDropdowns();
//
//     //To clear dropdown to update with new data with a blank choice
//     function removeOptions(Element) {
//         var i, L = Element.options.length - 1;
//         for (i = L; i >= 0; i--) {
//             if (i == 0) {
//                 continue;
//             } else {
//                 Element.remove(i);
//             }
//         }
//     }
//
//     //To clear dropdown to update with new data without a blank choice
//     function removeOptionsCompletely(Element) {
//         var i, L = Element.options.length - 1;
//         for (i = L; i >= 0; i--) {
//             Element.remove(i);
//         }
//     }
//
// });

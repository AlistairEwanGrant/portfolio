<x-app-layout>

    @vite(['resources/css/bootstrapFive.css', 'resources/js/jquery.min.js'])
    @vite('resources/js/company.js')

<!-- togelled modal -->
<div class="modal" id="newModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content centered-page-content">
            <div class="modal-header" >
                <h5 class="modal-title" id="large">Edit Details</h5>

                <select class="btn btn-primary dropdown-toggle dropdownTableAdd" type="button" id="dropdownTableAdd" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option value="personnel">Personnel</option>
                    <option value="department">Department</option>
                    <option value="location">Location</option>
                </select>

                <select class="btn btn-primary dropdown-toggle dropdownTableEdit" type="button" id="dropdownTableEdit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option value="personnel">Personnel</option>
                    <option value="department">Department</option>
                    <option value="location">Location</option>
                </select>

            </div>

            <div class="modal-body centered-page-content">

                <!-- first page Edit form -->
                <form id="firstModalPage">
                    <div class="form-group">
                        <label for="firstNameEdit">First name</label>
                        <input type="text" class="form-control" id="firstNameEdit">
                    </div></br>

                    <div class="form-group">
                        <label for="lastNameEdit">Last name</label>
                        <input type="text" class="form-control" id="lastNameEdit">
                    </div></br>

                    <div class="form-group">
                        <label for="emailEdit">Email</label>
                        <input type="email" class="form-control" id="emailEdit">
                    </div></br>

                    <div class="form-group">
                        <label for="jobTitleEdit">Job Title</label>
                        <input type="text" class="form-control" id="jobTitleEdit">
                    </div></br>

                    <div class="form-group">
                        <label for="dropdownDepartmentsEdit" >Department</label></br>
                        <select class="btn btn-secondary dropdown-toggle dropdownMenuDepartment" type="button" id="dropdownDepartmentsEdit" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <option value="none"></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <h1 type="personnelID" class="form-control personnelID" id="personnelID"></h1>
                    </div></br>

                </form>

                <!-- New department form -->
                <form id="newDepartmentForm">

                    <div class="form-group">
                        <label for="newDepartmentText">New Department Name</label>
                        <input type="text" class="form-control" id="newDepartmentText">
                    </div></br>

                    <div class="form-group">
                        <label for="newDepartmentLocation" >Location of New Department</label></br>
                        <select class="btn btn-secondary dropdown-toggle dropdownMenuDepartment" type="button" id="newDepartmentLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </select>
                    </div></br>

                </form>

                <!-- New Location form -->
                <form id="newLocationForm">

                    <div class="form-group">
                        <label for="newLocationText">New Location Name</label>
                        <input type="text" class="form-control" id="newLocationText">
                    </div></br>

                </form>


                <!-- Edit department form -->
                <form id="editDepartmentForm">

                    <div class="form-group">
                        <label for="editDepartment">Department</label></br>
                        <select class="btn btn-secondary dropdown-toggle dropdownMenuDepartment" type="button" id="editDepartment" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </select>
                    </div></br>

                    <div class="form-group">
                        <label for="editDepartmentText">Update Department Name</label>
                        <input type="text" class="form-control" id="editDepartmentText">
                    </div></br>

                </form>

                <!-- Edit Location form -->
                <form id="editLocationForm">

                    <div class="form-group">
                        <label for="editLocation">Department</label></br>
                        <select class="btn btn-secondary dropdown-toggle dropdownMenuDepartment" type="button" id="editLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </select>
                    </div></br>


                    <div class="form-group">
                        <label for="editLocationText">Update Location Name</label>
                        <input type="text" class="form-control" id="editLocationText">
                    </div></br>

                </form>

            </div>

            <div class="modal-footer">

                <button type="button" id="close" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" id="editSaveButton">Save</button>
                <button type="button" class="btn btn-primary" id="newSaveButton">Save</button>
                <button type="button" class="btn btn-primary" id="newDepartmentSaveButton">Save</button>
                <button type="button" class="btn btn-primary" id="editDepartmentSaveButton">Save</button>
                <button type="button" class="btn btn-primary" id="newLocationSaveButton">Save</button>
                <button type="button" class="btn btn-primary" id="editLocationSaveButton">Save</button>
                <button type="button" id="trashButtonPersonnel" class="btn btn-primary"><i class="fas fa-trash-alt" id='trash'></i></button>
                <button type="button" id="trashButtonDepartment" class="btn btn-primary"><i class="fas fa-trash-alt" id='trash'></i></button>
                <button type="button" id="trashButtonLocation" class="btn btn-primary"><i class="fas fa-trash-alt" id='trash'></i></button>

            </div>
        </div>
    </div>
</div>

<!-- Top navigation-->
<nav class="navbar-mine navbar-expand-lg navbar-light bg-light border-bottom">
    <div id="resize">

        <input type="search" id="myInput" placeholder=" Search for names.." title="Type in a name" class="form-control rounded" aria-label="Search"
               aria-describedby="search-addon" />

        <select class="btn btn-secondary dropdown-toggle dropdownMenuDepartment bold-text-name" type="button" id="dropdownDepartments" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <option value="0" id="0">Department</option>
        </select>

        <select class="btn btn-secondary dropdown-toggle dropdownMenuButton bold-text-name" type="button" id="dropdownLocation" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <option value="0" id="0">Location</option>
        </select>

        <button type="button" class="btn btn-outline-dark btn-secondary white" id="addNew"><i class="fas fa-plus" style="color:white"></i></button>

    </div>
</nav>


<!-- Page content-->
<div class="container-fluid centered-page-content" id="forList" >

    <table class="table table-striped table-hover" id="resultsArea">
        <tr class="headerDetails tr-mine">
            <th class="white th-change" id="sortName">Name</th>
            <th class="white th-change hiding">Job Title</th>
            <th class="white th-change">Department</th>
            <th class="white th-change" id="minWidth">Location</th>
            <th class="white hiding th-change" >Email</th>
        </tr>
    </table>

</div>

</x-app-layout>

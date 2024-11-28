function editProfile() {
    const inputs = document.querySelectorAll('.editable');
    const saveButton = document.getElementById('saveBtn');
    const editButton = document.getElementById('editBtn');
    const fileInput = document.getElementById('fileInput');

    inputs.forEach(input => {
        input.disabled = !input.disabled;
    });

    fileInput.style.display = fileInput.style.display === 'none' ? 'block' : 'none';
    saveButton.style.display = saveButton.style.display === 'none' ? 'block' : 'none';
    editButton.style.display = editButton.style.display === 'none' ? 'block' : 'none';
}

function previewImage(event) {
    const preview = document.getElementById('profilePic');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function saveChanges() {
    alert("Changes saved successfully!");
    editProfile();
}


function newItem() {

    // Adding a new item to the list
    let li = $('<li></li>');
    let inputValue = $('input').val();
    li.append(inputValue);

    if (inputValue === "") {
        alert("the field cannot be empty!")
    } else {
        $('#list').append(li);
    }

    // Crossing out the list Item using double click
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    // Creating delete button
    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);

    // Deleting an item from the list

    deleteButton.on('click', function() {
      li.addClass('remove');
    });

    $('#list').sortable();
}

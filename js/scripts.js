
// function to create list element
function listCreation(inputValue) {
    let li = $('<li></li>');
    li.append(inputValue);

    let deleteButton = $('<crossOutButton></crossOutButton>');
    deleteButton.append(document.createTextNode('X'));
    li.append(deleteButton);
    $('#list').append(li);

    // Crossing out the list Item using double click
    li.on("dblclick", function() {
        li.toggleClass("strike");
    });

    // Deleting an item from the list
    deleteButton.on('click', function() {
        li.remove()
    });

    $('#list').sortable();
}

// inserting an item to the list using add button
function newItem() {
    let inputValue = $('input').val();

    if (inputValue === "") {
        alert("the field cannot be empty!")
    } else {
        listCreation(inputValue);
    }
}


$('input').on('keypress', function(e) {

    if (e.key === 'Enter') {
        e.preventDefault();
        let inputValue = $('input').val();
        if (inputValue === "") {
            alert("the field cannot be empty!")
        } else {
            listCreation(inputValue);
        }
    }
  });









//
// function newItem() {
//
//     // Adding a new item to the list
//     let li = $('<li></li>');
//     let inputValue = $('input').val();
//     li.append(inputValue);
//
//     if (inputValue === "") {
//         alert("the field cannot be empty!")
//     } else {
//         $('#list').append(li);
//     }
//
//     // Crossing out the list Item using double click
//     li.on("dblclick", function() {
//         li.toggleClass("strike");
//     });
//
//     // Creating delete button
//     let deleteButton = $('<crossOutButton></crossOutButton>');
//     deleteButton.append(document.createTextNode('X'));
//     li.append(deleteButton);
//
//     // Deleting an item from the list
//
//     deleteButton.on('click', function() {
//       li.remove()
//     });
//
//     $('#list').sortable();
// }
//
// $('input').on('keypress', function(e) {
//   e.preventDefault();
//   let li = $('<li></li>');
//   let inputValue = $('input').val();
//   li.append(inputValue);
//
//   $('#list').append(li);
//
// })

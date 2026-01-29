function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }

  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", crossOut);

  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on("click", function () {
    li.addClass("delete");
  });

}

$('#input').on('keypress', function (e) {
  if (e.which === 13) {
    newItem();
    e.preventDefault();
  }
});

  $('#list').sortable();
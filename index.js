
/* Create a full CRUD application of your choice using an API or JSON Server.
Use JQuery/AJAX to interact with the API. 
Use a form to post new entities.
Build a way for users to update or delete entities.
Include a way to get entities from the API.
Use Bootstrap and CSS to style your project.
 */

const URL_ENDPOINT = 'http://localhost:3000/BookList'


$.get(URL_ENDPOINT).then(data =>  {
  console.log("getting books ...",data);
    data.map(book => {
    $('tbody').append(
        $(`
        <tr>
          <td>${book.id}</td>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>
            <button type="button" onclick="deleteBook(${book.id})">🗑</button>
          </td>
        </tr>
        `)
    )
    })
})

function deleteBook (id) {
  console.log("deleting books ...", id);
  $.ajax(`${URL_ENDPOINT}/${id}`, {
    method: 'DELETE'
  })
}

$('#submitBook').click(function (event) {
  event.preventDefault();
   /* console.log("submitting books", $('#id').val()) */
 console.log("submitting books", $('#Author').val()) 
  $.post(URL_ENDPOINT, {
  id: $('#id').val(),
  title: $('#title').val(),
  author: $('#Author').val(),
})

})

function updateBook () {
  let id = $('#updateId').val()

  $.ajax(`${URL_ENDPOINT}/${id}`, {
    method: "PUT",
    data: {
      title: $('#updateTitle').val(),
      author: $('#updateAuthor').val(),
    }
  })
}

//$('#updateBook').click(updateBook)

$.getJSON("/articles", (data) => {
  
  for (var i = 0; i < data.length; i++) {
  
    $("#articles").append(
      ` <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${data[i].title}</h5>
        <p class="card-text"><a href=${data[i].link}>View Article</a></p>
        <a data-id= ${data[i]._id} class="btn btn-primary" id='saveArticle'>Save Article
        </div>`
    )
  }
});

$(document).on('click', '#saveArticle', () => {
  // $('#notes').empty();
  // $('#articles').empty();

  let thisId = $(this).attr("data-id");
  $.ajax({
      method: "POST",
      url: "/save/" + thisId,
     
    })
    .then( (data) => {
      // $('#notes').append(
      //   `<h2> ${data.title} </h2>
      //   <p> `
        
      // )
    });
});


$(document).on("click", "p", () => {
   
  $("#notes").empty();
 
  var thisId = $(this).attr("data-id");

  
  $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
    
    .then( (data) => {
      console.log(data);
   
      $("#notes").append("<h2>" + data.title + "</h2>");
      
      $("#notes").append("<input id='titleinput' name='title' >");
      
      $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
     
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      
      if (data.note) {
        
        $("#titleinput").val(data.note.title);
        
        $("#bodyinput").val(data.note.body);
      }
    });
});


$(document).on("click", "#savenote", () => {
  
  var thisId = $(this).attr("data-id");

  
  $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
       
        title: $("#titleinput").val(),
       
        body: $("#bodyinput").val()
      }
    })
    
    .then( (data) => {
     
      console.log(data);
      $("#savedArticle").append("<h2>" + data.title + "</h2>");
    
      $("#savedArticle").append("<input id='titleinput' name='title' >");
      
      $("#savedArticle").append("<textarea id='bodyinput' name='body'></textarea>");
     
      $("#savedArticle").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

      
      $("#notes").empty();
    });

  
  $("#titleinput").val("");
  $("#bodyinput").val("");
});
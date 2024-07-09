//  , 1 kere de async/await yöntemi ile atın. isteklerinizi fonksiyon içerisinde tanımlayın.
//getCommentById, getAllComments, postComment, deleteComment, updateCommentPatch, updateCommentPut






// const getCommentById = ((id) => {
//     const jsonUrl = "https://jsonplaceholder.typicode.com/comments";
//     fetch(`${jsonUrl}/${id}`)
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// })
// getCommentById(5);

//-----------------------------------------------------
// const getAllComments = ((sadas)=>{
//     const jsonUrl = "https://jsonplaceholder.typicode.com/comments";
//     fetch(`${jsonUrl}`)
//     .then((response) => response.json())
//   .then((data) => console.log(data));

// })

// getAllComments();
//-----------------------------------------------------

// const newComment = {
//     name: "Lorem Ipsum",
//     email: "example@gmail.com",
//     body: "lorem ipsum dolor sit amet non elit",
//   };

//   const postComment =((newComment)=>{
//     const jsonUrl = "https://jsonplaceholder.typicode.com/comments";

//     fetch(jsonUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newComment),
//       })
//         .then((response) => response.json())
//         .then((data) => console.log(data));
//   })

//   postComment(newComment);

  //--------------------------------------------------

//   const deleteComment =((id)=>{
//     const jsonUrl = `https://jsonplaceholder.typicode.com/comments/${id}`;
//     fetch(jsonUrl,{
//         method:"DELETE",
//         headers: { "Content-Type": "application/json" }
       
//     })
//     .then((response) => response.json())
//         .then((data) => console.log(data));
//   })

//   deleteComment(501);



  const updatedComment = {
    name: "Updated Lorem Ipsum",
    email: "hakan@example.com",
    body: "updated lorem ipsum dolor sit amet non elit",
  };
  const updateCommentPut = (commentId, updatedComment) => {
    const jsonUrl = `https://jsonplaceholder.typicode.com/comments/${commentId}`;
  
    fetch(jsonUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedComment),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  
  updateCommentPut(1, updatedComment);

  //devamı eksik




  
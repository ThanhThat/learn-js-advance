// https://jsonplaceholder.typicode.com/todos/1
// const getNewTodo = async (id) => {
//   let response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos/${id}`
//   );

//   if (response && response.status !== 200) {
//     // reject
//     throw new Error("Something wrongs with status code: " + response.status);
//   }

//   let data = await response.json();
//   return data;
// };

const getNewTodo = async (id) => {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (response && response.status !== 200)
      throw new Error("Something wrongs with status code: " + response.status);

    let data = await response.json();
    return data;
  } catch (e) {
    console.log("> check catch error: ", e.message);
  }
};

getNewTodo("sadfasdfas")
  .then((data) => {
    console.log("Check data: ", data);
  })
  .catch((err) => {
    console.log(">> check error: ", err.message);
  });

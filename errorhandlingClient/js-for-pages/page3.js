import { SERVER } from "../settings.js"
import { handleHttpErrors } from "../fetchUtils.js";
const API_URL = SERVER + "/api/quotes"

export function setUpAddButtonHandler() {
  document.getElementById("btn-add").onclick = addNewQuote;
}

async function addNewQuote() {
  try{
  const newQuote = {};
  newQuote.quote = document.getElementById("quote").value
  newQuote.ref = document.getElementById("author").value

  fetch(API_URL, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json"
    },
    body: JSON.stringify(newQuote)
  })
    .then(res => handleHttpErrors(res))
    .then(addedQuote => document.getElementById("addedQuote").innerText = JSON.stringify(addedQuote))
  
}catch (error){
  document.getElementById("error").innerHTML = error.message
}
}
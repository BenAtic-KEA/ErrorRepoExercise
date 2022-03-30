import { SERVER } from "../settings.js"
import { handleHttpErrors, makeOptions } from "../fetchUtils.js"
const SERVER_URL = SERVER + "/api/quotes"

export function page4Handlers() {
  document.getElementById("btn-find").onclick = findQuote
  document.getElementById("btn-edit").onclick = editQuote
  document.getElementById("btn-delete").onclick = deleteQuote
}


async function findQuote() {
  document.getElementById("quote").value = ""
  document.getElementById("author").value = ""

  const id = getIdFromInputField()
  try{

  const foundQuote = await fetch(`${SERVER_URL}/${id}`)
    .then(res => handleHttpErrors(res))
    
      document.getElementById("quote").value = foundQuote.quote
      document.getElementById("author").value = foundQuote.ref
  }catch (error){
    document.getElementById("error").innerText = error.message
  }    
    
}

async function editQuote() {
  const id = getIdFromInputField()
  const editedQuote = {
    id: id
  }
  editedQuote.quote = document.getElementById("quote").value
  editedQuote.ref = document.getElementById("author").value
  
  try{
  const quote = await fetch(SERVER_URL + "/" + id, makeOptions("PUT",editedQuote))
    .then(res => handleHttpErrors(res))
    .then(() => clearFields())
  }catch (error){
    document.getElementById("error").innerHTML = error.message
  }

}
async function deleteQuote() {
  const id = getIdFromInputField()
  try{

    const deleteQuote = await fetch(SERVER_URL + "/" + id, makeOptions("DELETE"))
    .then(res => handleHttpErrors(res))
    .then(() => clearFields())
  }catch (error){
    document.getElementById("error").innerText = error.message
  }
  }

function clearFields() {
  document.getElementById("quote-id").value = ""
  document.getElementById("quote").value = ""
  document.getElementById("author").value = ""
}

function getIdFromInputField() {
  const id = document.getElementById("quote-id").value
  if (id === "") {
    throw new Error("No ID Provided")
  }
  return id
}

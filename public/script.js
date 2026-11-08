const addHeader = document.querySelector("#add-header");
const headersEditor = document.querySelector("#headers-editor");
let sendBtn = document.querySelector("#send");
let textArea=document.querySelector("#request-body");
addHeader.addEventListener("click", () => {
  let div = document.createElement("div");
  div.className = "header-row";
  const keyInput = document.createElement("input");
  const valueInput = document.createElement("input");
  keyInput.placeholder = "Key";
  valueInput.placeholder = "Value";
  keyInput.className = "header-key";
  valueInput.className = "header-value";
  div.appendChild(keyInput);
  div.appendChild(valueInput);
  headersEditor.insertBefore(div, addHeader);
});

sendBtn.addEventListener("click", () => {
  let keyValue = document.querySelectorAll(".header-key");
  let inputValue = document.querySelectorAll(".header-value");
  let headers = {};
  for (let i = 0; i < keyValue.length; i++) {
    let key = keyValue[i].value.trim();
    let value = inputValue[i].value.trim();
    if (key && value) {
      headers[key] = value;
    }
  }
  let textAreaValue=textArea.value;
  let textAreaObject=textAreaValue.trim()?JSON.parse(textAreaValue):{};
  let selectValue=document.querySelector("#drop-down").value;
  let urlValue=document.querySelector("#request-url").value.trim();
  let requestConfig={
    method:selectValue,
    url:urlValue,
    headers:headers,
    body:textAreaObject
  }
  console.log(urlValue);
  console.log(requestConfig);
});

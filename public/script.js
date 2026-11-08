const addHeader=document.querySelector("#add-header");
const headersEditor=document.querySelector("#headers-editor");
addHeader.addEventListener("click",()=>{
 let div=document.createElement("div");
    div.className="header-row";
    const keyInput=document.createElement("input");
    const valueInput=document.createElement("input");
    keyInput.placeholder="Key";
    valueInput.placeholder="Value";
    div.appendChild(keyInput);
    div.appendChild(valueInput);
    headersEditor.insertBefore(div, addHeader);
})
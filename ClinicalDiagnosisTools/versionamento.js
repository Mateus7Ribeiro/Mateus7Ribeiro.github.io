const urlParams = new URLSearchParams(window.location.search);

if(urlParams.size > 0) {
    applyValueToFieldId("osNumber");
    applyValueToFieldId("branches");
    applyValueToFieldId("cherry");
}

function applyValueToFieldId(value) {
    if(urlParams.get(value)) {
        document.getElementById(value).value = urlParams.get(value);
    }
}

document.getElementById("osForm").addEventListener("submit", (event) => {   
    
    event.preventDefault();
    // Obtenha os valores dos campos de entrada
    const osNumber = document.getElementById("osNumber").value.trim();
    const branchesInput = document.getElementById("branches").value;   
    const sufixBranches = document.getElementById("sufixo").value.trim();   
    const cherryInput = document.getElementById("cherry").value;
    const removePull = document.getElementById("removePull").checked;
    const removeInitialCheckout = document.getElementById("removeInitialCheckout").checked;

 
    // Divida as branches com base nas vírgulas
    const branchesArray = branchesInput.split(",");
    const cherryArray = cherryInput.split(",");

    // Crie uma div para cada branch e exiba os resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa quaisquer resultados anteriores
    
    const titleCommit = document.createElement("div");
    titleCommit.innerHTML = `[SO-${osNumber}] fix(<edit>AtePac__</edit>) <edit>Insert here the commit message</edit> `;
    resultadosDiv.appendChild(titleCommit);
    //resultadosDiv.setAttribute("contenteditable","true");
    
    branchesArray.forEach(function(branch) {
        branch = branch.trim();
        const resultDiv = document.createElement("div");
        const branchVersion = branch.split('.').slice(-1);
        
        if(!removeInitialCheckout){
            resultDiv.innerHTML += `<br>git checkout ${branch}`;
        }
        
        resultDiv.innerHTML += `<br>git checkout <edit>${sufixBranches}${osNumber}_${branchVersion}</edit> `;
        
        if(!removePull){
            resultDiv.innerHTML += `<br>git pull origin ${branch}`;
        }
        
        if(!cherryArray[0] == ''){
            cherryArray.forEach(function(cherryPick) {
                cherryPick = cherryPick.trim();
                resultDiv.innerHTML += `<br>git cherry-pick ${cherryPick}`;
            });
        }
        
        resultDiv.innerHTML += `<br>git push origin <edit>mr_${osNumber}_${branchVersion}</edit> `;                
        
        resultadosDiv.appendChild(resultDiv);
    });
    
    
    for (const edit of document.getElementsByTagName("edit")){
        edit.setAttribute("contenteditable","true");
    }
  
});
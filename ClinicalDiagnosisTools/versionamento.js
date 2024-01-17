const urlParams = new URLSearchParams(window.location.search);

function createLinksPR() {
    const linksGithubEdit = document.getElementById("links-github-edit");
    const arrayDirectory = ['tasy','tasy-backend'];
    linksGithubEdit.innerHTML = "";
    getValuesForm();
    const linksContainer = document.createElement("div");
    const branchesArray = this.branchesInput.split(",");
    
    for(let branch of branchesArray) {
        branch = branch.trim();
        const branchVersion = branch.split('.').slice(-1);
        const linkSpan = document.createElement("span");
        const sufix = sufixBranches.split(" ");
        
        linkSpan.innerHTML += `${branch} -> `;
        for(let directory of arrayDirectory){
            const linkHref = document.createElement("a");
            linkHref.href = `https://github.dev/philips-emr/${directory}/tree/${branch}`;
            linkHref.href = `https://github.com/philips-emr/${directory}/compare/${branch}...${sufix[sufix.length-1]}${osNumber}_${branchVersion}`;
            linkHref.textContent = ` ${directory} |`

            linkSpan.appendChild(linkHref);
            linksContainer.appendChild(linkSpan);
        }
        linkSpan.innerHTML += `<br>`;
    };
    
    linksGithubEdit.appendChild(linksContainer);
}
function createLinksEdit() {
    const linksGithubEdit = document.getElementById("links-github-edit");
    const arrayDirectory = ['tasy','tasy-backend'];
    linksGithubEdit.innerHTML = "";
    
    getValuesForm();
    const linksContainer = document.createElement("div");
    const branchesArray = this.branchesInput.split(",");
    
    for(let branch of branchesArray) {
        branch = branch.trim();
        const linkSpan = document.createElement("span");
        linkSpan.innerHTML += `${branch} -> `;
        for(let directory of arrayDirectory){
            const linkHref = document.createElement("a");
            linkHref.href = `https://github.dev/philips-emr/${directory}/tree/${branch}`;
            linkHref.textContent = ` ${directory} |`
            
            linkSpan.appendChild(linkHref);
            linksContainer.appendChild(linkSpan);
        }
        linkSpan.innerHTML += `<br>`;
    };
    
    linksGithubEdit.appendChild(linksContainer);
}

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

function getValuesForm(){
    this.osNumber = document.getElementById("osNumber").value.trim();
    this.branchesInput = document.getElementById("branches").value;   
    this.sufixBranches = document.getElementById("sufixo").value.trim();   
    this.cherryInput = document.getElementById("cherry").value;
    this.removePull = document.getElementById("removePull").checked;
    this.removePush = document.getElementById("removePush").checked;
    this.quebraBranchVersao = document.getElementById("quebraBranchVersao").checked;
    this.removeInitialCheckout = document.getElementById("removeInitialCheckout").checked;
    this.removeBranchCheckout = document.getElementById("removeBranchCheckout").checked;
}

document.getElementById("osForm").addEventListener("submit", (event) => {
    
    event.preventDefault();
    getValuesForm();
    // Obtenha os valores dos campos de entrada
    const osNumber = this.osNumber;
    const branchesInput = this.branchesInput;
    const sufixBranches = this.sufixBranches;
    const cherryInput = this.cherryInput;
    const removePull = this.removePull;
    const removePush = this.removePush;
    const quebraBranchVersao = this.quebraBranchVersao;
    const removeInitialCheckout = this.removeInitialCheckout;
    const removeBranchCheckout = this.removeBranchCheckout;

    // Divida as branches com base nas vírgulas
    const branchesArray = branchesInput.split(",");
    const cherryArray = cherryInput.split(",");

    // Crie uma div para cada branch e exiba os resultados
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpa quaisquer resultados anteriores
    
    const titleCommit = document.createElement("div");
    titleCommit.innerHTML = `fix(<edit>AtePac__</edit>): <edit>Insert here the commit message</edit> [SO-${osNumber}] `;
    resultadosDiv.appendChild(titleCommit);
    //resultadosDiv.setAttribute("contenteditable","true");
    
    branchesArray.forEach(function(branch) {
        branch = branch.trim();
        const resultDiv = document.createElement("div");
        let branchVersion = branch;
        const sufix = sufixBranches.split(" ");
        
        if(quebraBranchVersao){
            branchVersion = branchVersion.split('.').slice(-1);
        }
        
        if(!removeInitialCheckout){
            resultDiv.innerHTML += `<br>git checkout ${branch}`;
        }
        
        if(!removePull){
            resultDiv.innerHTML += `<br>git pull origin ${branch}`;
        }
        
		if(!removeBranchCheckout){
			resultDiv.innerHTML += `<br>git checkout <edit>${sufixBranches}${osNumber}_${branchVersion}</edit> `;
        }
		
        if(!cherryArray[0] == ''){
            cherryArray.forEach(function(cherryPick) {
                cherryPick = cherryPick.trim();
                resultDiv.innerHTML += `<br>git cherry-pick ${cherryPick}`;
            });
        }
        
		if(!removePush){
        resultDiv.innerHTML += `<br>git push origin <edit>${sufix[sufix.length-1]}${osNumber}_${branchVersion}</edit> `;                
        }
        resultadosDiv.appendChild(resultDiv);
    });
    
    createLinksPR();
	
    for (const edit of document.getElementsByTagName("edit")){
        edit.setAttribute("contenteditable","true");
    }
    
  
});


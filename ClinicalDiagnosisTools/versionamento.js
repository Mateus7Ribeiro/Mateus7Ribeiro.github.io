const urlParams = new URLSearchParams(window.location.search);
const repositoryLinks = [
    'https://github.com/philips-internal/emr-tasy-frontend', 
    'https://github.com/philips-internal/emr-tasy-backend',
    'https://github.com/philips-internal/cci-tws-exam-service',
    'https://github.com/philips-internal/cci-tws-health-professional-application',
    'https://github.com/philips-internal/cci-tws-patient-application',
    'https://github.com/philips-internal/cci-tws-referring-physician-application'
    ];

const branchesValues = 'art_pas_exams,5.00.1832,5.01.1835,5.02.1838,5.02.1839'


function preencheSelect(idSelect, items) {
    const dropdown = document.getElementById(idSelect); 
    
    items.forEach(item => {
      let option = document.createElement('option');
      option.value = item;
      option.text = item.replace('https://github.com/','');
      dropdown.appendChild(option);
    });
}

function preencheInputText(idInput, value) {
    document.getElementById(idInput).value = value
}

function createLinksPR() {
    const linksGithubEdit = document.getElementById("links-github-edit");
    const arrayRepository = document.getElementById("repository").value.split(',');
    linksGithubEdit.innerHTML = "";
    getValuesForm();
    const linksContainer = document.createElement("div");
    const branchesArray = this.branchesInput.split(",");
    
    for(let branch of branchesArray) {
        branch = branch.trim();
        const branchVersion = branch;

        const linkSpan = document.createElement("span");
        const sufix = sufixBranches.split(" ");
        
        linkSpan.innerHTML += `${branch} -> `;
        for(let repository of arrayRepository){
            const linkHref = document.createElement("a");

            linkHref.href = `${repository}/compare/${branch}...${sufix[sufix.length-1]}${osNumber}_${branchVersion}`;
            linkHref.textContent = ` ${branch}${arrayRepository.length>1?' | ':''}`;

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
        resultDiv.innerHTML += `<br>pause && git push origin <edit>${sufix[sufix.length-1]}${osNumber}_${branchVersion}</edit> `;                
        }
        resultadosDiv.appendChild(resultDiv);        
        
        createLinksPR();
    });
    
    
	
    for (const edit of document.getElementsByTagName("edit")){
        edit.setAttribute("contenteditable","true");
    }    
    
});

this.preencheSelect("repository", repositoryLinks);
this.preencheInputText("branches", branchesValues);

if(urlParams.size > 0) {
    applyValueToFieldId("osNumber");
    applyValueToFieldId("branches");
    applyValueToFieldId("cherry");
}
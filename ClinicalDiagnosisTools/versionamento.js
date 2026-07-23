const urlParams = new URLSearchParams(window.location.search);
const repositoryLinks = [
    'https://github.com/philips-internal/emr-tasy-frontend',
    'https://github.com/philips-internal/emr-tasy-backend',
    'https://github.com/philips-internal/cci-tws-exam-service',
    'https://github.com/philips-internal/cci-tws-health-professional-application',
    'https://github.com/philips-internal/cci-tws-patient-application',
    'https://github.com/philips-internal/cci-tws-referring-physician-application'
];

const branchesValues = 'art_pas_exams,5.04.1845,5.02.1839,5.02.1838,5.01.1835,dev,1.10.x,1.8.x,1.9.x'


function preencheSelect(idSelect, items) {
    const dropdown = document.getElementById(idSelect);

    items.forEach(item => {
        let option = document.createElement('option');
        option.value = item;
        option.text = item.replace('https://github.com/', '');
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

    for (let branch of branchesArray) {
        branch = branch.trim();
        const branchVersion = branch;

        const linkSpan = document.createElement("span");
        const remoteBranch = sufixBranches.replace('{os}', osNumber).replace('{version}', branchVersion).replace(/^-[bB]\s*/, '');

        linkSpan.innerHTML += `${branch} -> `;
        for (let repository of arrayRepository) {
            const linkHref = document.createElement("a");

            linkHref.href = `${repository}/compare/${branch}...${remoteBranch}`;
            linkHref.textContent = ` ${branch}${arrayRepository.length > 1 ? ' | ' : ''}`;

            linkSpan.appendChild(linkHref);
            linksContainer.appendChild(linkSpan);
        }
        linkSpan.innerHTML += `<br>`;
    };

    linksGithubEdit.appendChild(linksContainer);
}

function createLinksEdit() {
    const linksGithubEdit = document.getElementById("links-github-edit");
    const arrayDirectory = ['tasy', 'tasy-backend'];
    linksGithubEdit.innerHTML = "";

    getValuesForm();
    const linksContainer = document.createElement("div");
    const branchesArray = this.branchesInput.split(",");

    for (let branch of branchesArray) {
        branch = branch.trim();
        const linkSpan = document.createElement("span");
        linkSpan.innerHTML += `${branch} -> `;
        for (let directory of arrayDirectory) {
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
    if (urlParams.get(value)) {
        document.getElementById(value).value = urlParams.get(value);
    }
}

function getValuesForm() {
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
    titleCommit.innerHTML = `<edit>fix: Insert here the commit message AB#${osNumber} </edit>`;
    resultadosDiv.appendChild(titleCommit);
    //resultadosDiv.setAttribute("contenteditable","true");

    branchesArray.forEach(function (branch) {
        branch = branch.trim();
        const resultDiv = document.createElement("div");
        let branchVersion = branch;
        const resolvedSufix = sufixBranches.replace('{os}', osNumber).replace('{version}', branchVersion);
        const remoteBranch = resolvedSufix.replace(/^-[bB]\s*/, '');


        if (!removeInitialCheckout) {
            resultDiv.innerHTML += `<br>git checkout ${branch}`;
        }

        if (!removePull) {
            resultDiv.innerHTML += `<br>git pull origin ${branch}`;
        }

        if (!removeBranchCheckout) {
            resultDiv.innerHTML += `<br>git checkout <edit>${resolvedSufix}</edit> `;
        }

        if (!cherryArray[0] == '') {
            cherryArray.forEach(function (cherryPick) {
                cherryPick = cherryPick.trim();
                resultDiv.innerHTML += `<br>git cherry-pick ${cherryPick}`;
            });
        }

        if (!removePush) {
            resultDiv.innerHTML += `<br>pause && git push origin <edit>${remoteBranch}</edit> `;
        }
        resultadosDiv.appendChild(resultDiv);

        createLinksPR();
    });



    for (const edit of document.getElementsByTagName("edit")) {
        edit.setAttribute("contenteditable", "true");
    }

});

this.preencheSelect("repositoryList", repositoryLinks);
this.preencheInputText("repository", repositoryLinks[0]);
this.preencheInputText("branches", branchesValues);

// ===== PERFIS E PERSISTÊNCIA LOCAL =====
const STORAGE_KEY = 'versionamento_profiles';
const LAST_STATE_KEY = 'versionamento_lastState';

const formFields = ['osNumber', 'branches', 'sufixo', 'cherry', 'repository'];
const checkboxFields = ['removeInitialCheckout', 'removePull', 'removeBranchCheckout', 'removePush'];

function getFormState() {
    const state = {};
    formFields.forEach(id => state[id] = document.getElementById(id).value);
    checkboxFields.forEach(id => state[id] = document.getElementById(id).checked);
    return state;
}

function applyFormState(state) {
    formFields.forEach(id => {
        if (state[id] !== undefined) document.getElementById(id).value = state[id];
    });
    checkboxFields.forEach(id => {
        if (state[id] !== undefined) document.getElementById(id).checked = state[id];
    });
}

function saveLastState() {
    localStorage.setItem(LAST_STATE_KEY, JSON.stringify(getFormState()));
}

function loadLastState() {
    const saved = localStorage.getItem(LAST_STATE_KEY);
    if (saved) applyFormState(JSON.parse(saved));
}

function getProfiles() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
}

function refreshProfileSelect() {
    const select = document.getElementById('profileSelect');
    const profiles = getProfiles();
    select.innerHTML = '<option value="">-- Selecione um perfil --</option>';
    Object.keys(profiles).forEach(name => {
        const opt = document.createElement('option');
        opt.value = name;
        opt.textContent = name;
        select.appendChild(opt);
    });
}

function saveProfile() {
    const name = document.getElementById('profileName').value.trim();
    if (!name) { alert('Digite um nome para o perfil.'); return; }
    const profiles = getProfiles();
    profiles[name] = getFormState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    document.getElementById('profileName').value = '';
    refreshProfileSelect();
    document.getElementById('profileSelect').value = name;
}

function loadProfile() {
    const name = document.getElementById('profileSelect').value;
    if (!name) { alert('Selecione um perfil para carregar.'); return; }
    const profiles = getProfiles();
    if (profiles[name]) {
        applyFormState(profiles[name]);
        saveLastState();
    }
}

function deleteProfile() {
    const name = document.getElementById('profileSelect').value;
    if (!name) { alert('Selecione um perfil para apagar.'); return; }
    if (!confirm(`Apagar o perfil "${name}"?`)) return;
    const profiles = getProfiles();
    delete profiles[name];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
    refreshProfileSelect();
}

// Auto-save ao alterar qualquer campo
document.getElementById('osForm').addEventListener('input', saveLastState);
document.getElementById('osForm').addEventListener('change', saveLastState);

// Restaurar último estado e carregar perfis ao abrir
loadLastState();
refreshProfileSelect();

if (urlParams.size > 0) {
    applyValueToFieldId("osNumber");
    applyValueToFieldId("branches");
    applyValueToFieldId("cherry");
}
let variableIndex = 1;

document.getElementById('add-variable').addEventListener('click', () => {
    const container = document.getElementById('variables-container');
    const variableDiv = document.createElement('div');
    variableDiv.className = 'variable';
    
    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', `variable-name-${variableIndex}`);
    nameLabel.innerText = 'Nome da Variável:';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = `variable-name-${variableIndex}`;
    nameInput.className = 'variable-name';
    
    const valuesLabel = document.createElement('label');
    valuesLabel.setAttribute('for', `variable-values-${variableIndex}`);
    valuesLabel.innerText = 'Valores (separados por vírgula):';
    
    const valuesInput = document.createElement('input');
    valuesInput.type = 'text';
    valuesInput.id = `variable-values-${variableIndex}`;
    valuesInput.className = 'variable-values';
    
    variableDiv.appendChild(nameLabel);
    variableDiv.appendChild(nameInput);
    variableDiv.appendChild(valuesLabel);
    variableDiv.appendChild(valuesInput);
    
    container.appendChild(variableDiv);
    
    variableIndex++;
});

document.getElementById('calculate-combinations').addEventListener('click', () => {
    const variables = [];
    
    for (let i = 0; i < variableIndex; i++) {
        const name = document.getElementById(`variable-name-${i}`).value;
        const values = document.getElementById(`variable-values-${i}`).value.split(',');
        
        if (name && values.length > 0) {
            variables.push({ name, values });
        }
    }
    
    const combinations = generateCombinations(variables);
    
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '<h2>Combinações:</h2>';
    
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    
    // Create table headers
    const headerRow = document.createElement('tr');
    const indexHeader = document.createElement('th');
    indexHeader.innerText = 'Caso de Teste';
    headerRow.appendChild(indexHeader);
    
    variables.forEach(variable => {
        const th = document.createElement('th');
        th.innerText = variable.name;
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    
    // Create table rows
    combinations.forEach((combination, index) => {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        indexCell.innerText = `Caso de Teste ${index + 1}`;
        row.appendChild(indexCell);
        
        combination.forEach(value => {
            const td = document.createElement('td');
            td.innerText = value;
            row.appendChild(td);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(thead);
    table.appendChild(tbody);
    resultsContainer.appendChild(table);
});

function generateCombinations(variables) {
    const combinations = [];
    
    function helper(arr, index) {
        if (index === variables.length) {
            combinations.push([...arr]);
            return;
        }
        
        const variable = variables[index];
        
        for (let i = 0; i < variable.values.length; i++) {
            arr[index] = variable.values[i];
            helper(arr, index + 1);
        }
    }
    
    helper([], 0);
    return combinations;
}

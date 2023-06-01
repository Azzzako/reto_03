function renderTableComparison(data) {
  const container = document.getElementById('table-container');

  // Create the table element
  const table = document.createElement('table');

  // Create the table header
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  header1.textContent = 'Institucion Financiera';
  const header2 = document.createElement('th');
  header2.textContent = 'Instrumento';
  const header3 = document.createElement('th');
  header3.textContent = 'Apertura';
  const header4 = document.createElement('th');
  header4.textContent = 'Comisión Anual';
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  headerRow.appendChild(header3);
  headerRow.appendChild(header4);
  table.appendChild(headerRow);

  // Create table rows for each data element
  data.forEach((item) => {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = item.institucionFinanciera;
    const cell2 = document.createElement('td');
    cell2.textContent = item.instrumento[0].debito;
    const cell3 = document.createElement('td');
    cell3.textContent = item.instrumento[0].apertura;
    const cell4 = document.createElement('td');
    cell4.textContent = item.instrumento[0].comisionAnual;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    table.appendChild(row);
  });

  // Append the table to the container
  container.appendChild(table);
}
  
  fetch('data.json')
    .then(response => response.json())
    .then(data => renderTableComparison(data))
    .catch(error => console.error('Error fetching data:', error));

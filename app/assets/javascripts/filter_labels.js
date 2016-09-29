var labelNameFilters = [
  { 'name': 'Backlog' },
  { 'name': 'Ready' },
  { 'name': 'Current' },
  { 'name': 'Completed' },
  { 'name': '5' },
  { 'name': '300' },
  { 'name': '600' },
  { 'name': '1500' },
  { 'name': '3000' }
];


function filterLabels(labels) {
  return _.differenceBy(labels, labelNameFilters, 'name')
}


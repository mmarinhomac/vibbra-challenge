interface IBudgetBusiness {
  initialRender: boolean
}

export default function BudgetBusiness({ initialRender } : IBudgetBusiness) {
  if (initialRender) {
    fetch('http://localhost:3000/api/budget')
      .then(data => data.json())
      .then(data => console.log(data))
    
    fetch('http://localhost:3000/api/preferences')
      .then(data => data.json())
      .then(data => console.log(data))
  }
}
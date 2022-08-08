interface IBudgetBusiness {
  initialRender: boolean
}

export default function BudgetBusiness({ initialRender } : IBudgetBusiness) {
  if (initialRender) {
    fetch('https://vibbra-challenge.vercel.app/api/budget')
      .then(data => data.json())
      .then(data => console.log(data))
    
    fetch('https://vibbra-challenge.vercel.app/api/preferences')
      .then(data => data.json())
      .then(data => console.log(data))
  }
}
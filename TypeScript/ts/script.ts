type AdminAction = 'CREATE' | 'ACTIVATE';

function doAction (action:AdminAction) {
  switch(action) {
    case 'CREATE':
      return "CREATED"
    case 'ACTIVATE':
      return 'ACTIVATED'
    default:
      const a: never = action;
      throw new Error (`НЕ ПОНЯЛ ЧТО ТУТ ${a}`)
  }
    
}

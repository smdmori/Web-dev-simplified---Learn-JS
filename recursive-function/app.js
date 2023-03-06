const person = {
  name: 'Mori',
  friend: {
    name: 'Erfan',
    friend: {
      name: 'Ehsan'
    }
  }
}


function printName(currentPerson) {
  if (currentPerson == null) return
  console.log(currentPerson.name)
  
  printName(currentPerson.friend)
}

printName(person)

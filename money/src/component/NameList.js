import React from 'react' 

function NameList() {
    const persons = [{
        id: 1,
        name : "Ganesh",
        age : 22,
        skill: "Javascript",
    },
    {
        id: 2,
        name : "Ritesh",
        age : 23,
        skill: "Javascript",
    },
    {
        id: 3,
        name : "Bruce",
        age : 24,
        skill: "Javascript",
    }]
    const personList = persons.map(person => <Person person = {person} />)
    return (
        <div>
           {personList}
        </div>
    )
}

export default NameList

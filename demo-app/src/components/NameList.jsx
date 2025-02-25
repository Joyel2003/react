import React from 'react'

function NameList(){
    const persons = [
        {
            id: 1,
            name: 'Akshai',
            age: 22,
            skill: 'Data Analyst'
        },
        {
            id:2,
            name:'Richald',
            age:22,
            skill: 'Java Developer'
        },
        {
            id: 3,
            name: 'Dewang',
            age: 21,
            skill:'Software Developer'
        },
        {
            id: 4,
            name: 'Joyel',
            age: 21,
            skill: 'UI/UX Designer'
        }
    ]
   const personList = persons.map(person => (
    <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
    </h2>
   ))
   return <div>{personList}</div>
}
export default NameList



import React from 'react'

export const NewUser = async() => {
    return await fetch('https://randomuser.me/api/').then((response) => {return response.json()})
}
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from './Button';
import Card from './Card';

const App = ( ) => {
  const [countryName, setCountryName] = useState('france')
  const [name, setName] = useState("name")
  const [capital, setCapital] = useState("capital")
  const [flag, setFlag] = useState("flag")
  const [region, setRegion] = useState("region")
  const [population, setPopulation] = useState("population")


//LES ETAPES D UNE PROMESSE EN REACT (async + l'étape du cycle de vie que l"on veut exécuter )


useEffect(async () => {  //ETAPE 1 APPELER UNE API AVEC L ACTION FETCH ET L ACTION AWAIT (faire une request)
 try { 
  const result = await fetch('https://restcountries.eu/rest/v2/name/' + countryName)
  const countries= await result.json()
  

    setName (countries[0].name)
    setCapital ( countries[0].capital)
    setFlag (countries[0].flag)
    setRegion (countries[0].region)
    setPopulation (countries[0].population)

  } catch (error) {
    console.error(error)
  }
})



return  <div>

  <div className="text-center">
    <Button onClick={() => setCountryName('france')} >France</Button>
    <Button onClick={() => setCountryName('brazil')}>Brazil</Button>
    <Button onClick={() => setCountryName('croatia')}>Croatia</Button>
    <Button onClick={() => setCountryName('tanzania')}>Tanzania</Button>
    <Button onClick={() => setCountryName('congo')}>Congo</Button>
    <Button onClick={() => setCountryName('rwanda')}>Rwanda</Button>
  </div>

  <Card  {...{name,capital,region,population,flag }}/>

</div>
}



export default App;

import React, {useEffect, useState} from 'react'
import './TableBody.css';
import TableRow from '../tableRow/TableRow';
import NewRow from '../newRow/NewRow';
import FormNew from '../formNew/FormNew'
import FormEdit from '../formEdit/FormEdit';
import axios from "axios";



export default function TableBody() {
    
const [arr, setArr] = useState([])
async function getDB(){
    try {
        const API = `https://localhost:7291/api/Cars`
        const res = await axios.get(API);
        setArr(res.data)
      }
      catch(err) {
        console.log(err);
      }
}
useEffect(() => {getDB();}, [])
    

    const [buttonClick, setButtonClick] = useState(false);
    function addRowOnCLick(){
        setButtonClick(true);
    }

    function discardRow(e){
        e.preventDefault();
        setButtonClick(false);
    }

    const [newCar, setNewCar] = useState({ 
        brand: "", 
        model: "", 
        colour: "", 
        engineType: "", 
        engineSize: 0})

    function updateNewCar(e){
        const valueName = e.target.name;
        setNewCar(newCarHave => ({
            ...newCarHave,
            [valueName]: e.target.value
        }))

    }

    async function addNewCar(e){
        e.preventDefault();      
        discardRow(e);        
        const sentData = {
            brand: newCar.brand, 
            model: newCar.model, 
            colour: newCar.colour, 
            engineType: newCar.engineType, 
            engineSize: +newCar.engineSize
        }

        try{
            const API = `https://localhost:7291/api/Cars`;
            const res = await axios.post(API, sentData);
            getDB();
        }
        catch(err) {
            console.log(err);
        }
    }

    async function handleDelete(index) {
        try{
            const API = `https://localhost:7291/api/Cars/${index}`;
            const res = await axios.delete(API);
            getDB();
        }
        catch(err) {
            console.log(err);
        }
          }

    const [change, setChange] = useState(0)
    function changeExisting(number){
        setChange(number)
    }

    const [edit, setEdit] = useState({ 
        brand: "", 
        model: "", 
        colour: "", 
        engineType: "", 
        engineSize: ""})

    function getChangedCar(identifier, e) {
        const valueName = e.target.name;
        setEdit(editedCar => ({
            ...editedCar,
            [valueName]: e.target.value
        }))
    }
    async function handleSaveChanges(identifier, e){
        const foundObject = arr.findIndex((item) => item.id==identifier)
        e.preventDefault();
        const sentData = {
            brand: edit.brand ? edit.brand : arr[foundObject].brand, 
            model: edit.model ? edit.model : arr[foundObject].model, 
            colour: edit.colour ? edit.colour : arr[foundObject].colour, 
            engineType: edit.engineType ? edit.engineType : arr[foundObject].engineType, 
            engineSize: +edit.engineSize ? edit.engineSize : arr[foundObject].engineSize
        }

        try{
            const API = `https://localhost:7291/api/Cars/${identifier}`;
            const res = await axios.put(API, sentData);
            console.log(res);
            getDB();
        }
        catch(err) {
            console.log(err);
        }
        changeExisting(0);
    }

    function handleCancelEdit(){
        changeExisting(0)
    }

  return (
    
    <div className='table-body'>
      {
            arr.map((item) => {
                return change == item.id ? <FormEdit
                cancelChanges={handleCancelEdit}  
                changeValue={getChangedCar} 
                saveChanges={handleSaveChanges}
                brand= {item.brand} 
                model={item.model} 
                colour={item.colour} 
                engineType={item.engineType} 
                engineSize ={item.engineSize} 
                identifier={item.id}
                key={item.id}/> : <TableRow handleDelete={handleDelete} handleEdit={changeExisting}
                number={item.id} 
                brand= {item.brand} 
                model={item.model} 
                colour={item.colour} 
                engineType={item.engineType} 
                engineSize ={item.engineSize}
                key={item.id}/>
            })
        }

            {buttonClick && <FormNew discard={discardRow} addItem={addNewCar} addValue={updateNewCar}/>}

        <NewRow click={addRowOnCLick} />

    </div>
  )
}

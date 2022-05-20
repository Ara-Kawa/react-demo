import Item from './Item'
import {useState, useEffect} from 'react'

var arr=[]
 function Items({itemlist}) {
  

const[images,setImages]=useState([])
useEffect(()=>{
  
  
  function getList(){
   
    for (var i = 0; i < itemlist.length; i++) {
        arr[i] = itemlist[i]
   
     
   }

   return arr
  }


getList()


  })

  useEffect(()=>{
    const getData = async()=>{
  
      const res = await fetch('https://picsum.photos/v2/list?page=1&limit=200')
      const data = await res.json()
     setImages(await data)
    }
    getData()
   
  },[])


  return (
   
     <div className="row">
   
    {arr.map((item, i)=>(
         
        <Item key={item.id} numItems = {itemlist[i]} image = {images[i]}/>
      
      ))}
    
  </div>
    
  );
 
}

export default Items;


  {/* {itemlist.map((item)=>(
         
        <Item key={item.id} numItems = {item} image = {images}/>
      
      ))} */}
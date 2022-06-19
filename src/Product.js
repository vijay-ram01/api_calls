import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

function Product(){

    // API assigned
    const entriesUrl='https://api.publicapis.org/entries'
    const categoriesUrl='https://api.publicapis.org/categories'

    // useState
    const [entries, setEntries] = useState(null)
    const [categories, setCategories] = useState(null)

    // useEffect
    useEffect(() => {
        axios.get(entriesUrl)
        .then(response => {
            setEntries(response.data)
        })
    }, [entriesUrl])

    useEffect(() => {
        axios.get(categoriesUrl)
        .then(response => {
            setCategories(response.data.categories)
        })
    }, [categoriesUrl])

    if(entries && entries.entries[0]){
        console.log(entries.entries)
        
        return(
            <div className="container bg-cyan-900 flex justify-center items-center">
                {/* <p>here</p> */}
                {
                    entries && entries.entries[0] &&
                    <table className="table shadow-2x1 font-[Poppins] border-2 border-cyan-200">
                        <thead className="text-white">
                            <tr>
                                {
                                Object.keys(entries.entries[0]).map(entry => {
                                    return (
                                        <th className="py-3bg-cyan-800">{entry}</th>
                                    )
                                })  
                                }
                            </tr>
                        </thead>
                        <tbody className="text-white text-cyan-900 text-center">
                        {entries.entries.map((entry) => { return (
                            <tr key={entry.id}>
                            {Object.values(entry).map((val) => { return (
                                <td className='text-white'>{val}</td>
                            )})}
                            </tr>
                        )})}
                        </tbody>
                    </table>
                }
                
            </div>               
        )
    }
     else {
        console.log("out")
    return(
        <div>
            Loading...
        </div>
    )
    }

    // if(categories){
    //     return(
    //         <div class="bg-gray-700 h-900">
    //             <button class="bg-blue-300 font-bold hover:bg-blue-100 py-2 px-4 rounded">Categories</button>
    //             <div class="bg-gray-200 flex flex-col rounded mt-1 p-2 text-sm w-32">
    //                 <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p>
    //                 <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p>
    //                 <p class="px-2 py-1 hover:bg-blue-300 rounded">1</p> 
    //             </div>
    //             {/* {categories.map(category => {
    //                 console.log(category)
    //             })} */}
    //         </div>
    //     )
    // } else {
    //     console.log("out")
    // return(
    //     <div>
    //         Loading...
    //     </div>
    // )
    // }
}

export default Product
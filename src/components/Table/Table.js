import React, { Components} from "react";
import './Table.css'
import '.../App.css'

const Table = (props) => {
    return(
        <div className="bg-cyan-900 flex justify-center items-center h-screen">
            <table className="shadow-2x1 font-[Poppins] border-2 border-cyan-200 w-6/12">
                <thead className="text-white">
                    <tr>
                        <th class="py-3bg-cyan-800">S.NO</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Table
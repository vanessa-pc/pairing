import { randomPair } from "../utils/randomPair"
import { useState } from "react"
import { useEffect } from "react"

export function Pairings({names}: {names: string[]}): JSX.Element {

    const list = new Array<string[]>()    
    const [pairings, setPairings] = useState<Array<string[]>>([])

    useEffect( () => {
        const pairs = []
        while (names.length >= 2){
            const pair = randomPair(names)
            console.log(pair)
            pairs.push(pair)
            console.log(list)
        }
        setPairings(pairs)
    }, []) 
  
    console.log(pairings)
    return (
        <table>
            <thead>
                <tr>
                    <th>
                    The lab pairs for this week are:                    
                    </th>
                </tr>
            </thead>
            <tbody>
                {pairings.map((item, index) => {
                    return(
                        <td key={index}>
                            Group {index+1}
                            <tr key={item[0]}> {item[0]}</tr>
                            <tr key={item[1]}> {item[1]}</tr>
                        </td>
                    );
                })}
            </tbody>
        </table>
    );
}
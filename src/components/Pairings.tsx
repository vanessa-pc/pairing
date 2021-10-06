import { randomPair } from "../utils/randomPair"

export function Pairings({names}: {names: string[]}): JSX.Element {

    const list = new Array<string[]>()    

    while (names.length >= 2){
        const pair = randomPair(names)
      console.log(pair)
        list.push(pair);
        console.log(list)
    }
 
    return (
        <>
            <h2>The lab pairs for this week are:</h2>
            <table>
            <thead>
                <tr>
                {list.map((item, index) => {
                    return <th key={index}> Group {index+1} </th>;
                })}
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td key={item[0]}> {item[0]}</td>
                            <td key={item[1]}> {item[1]}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </>
    );
}
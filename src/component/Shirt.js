import ElementArray from './Array';
import Showcomp from './Showcomp'

export default function Shirt() {
    let shirtData=ElementArray.filter(data=>{
        return data.type=='shirt';
    })
    return (
      <Showcomp data={shirtData}/>
    )
}
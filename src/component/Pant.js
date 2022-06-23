import ElementArray from './Array';
import Showcomp from './Showcomp'

export default function Phirt() {
    let pantData=ElementArray.filter(data=>{
        return data.type=='pant';
    })
    return (
      <Showcomp data={pantData}/>
    )
}
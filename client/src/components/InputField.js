import state from "../state"
import { useSnapshot } from 'valtio'

export default function InputField(){
    const snap= useSnapshot(state)
    return(
        <div>
            <input type="text" value={snap.skill} onChange={(e) =>state.skill=e.target.value} className='border-2 border-black rounded-md my-4' />
        </div>
    )
}

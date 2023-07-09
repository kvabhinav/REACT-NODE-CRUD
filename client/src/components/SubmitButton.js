import { useSnapshot } from "valtio"
import state from "../state"

import SkillManager from "../api/SkillManager"

export default function SubmitButton() {

    const snap = useSnapshot(state)

    const submitSkill=async()=>{
        const skillManager = new SkillManager()
        const res = await skillManager.insertSkill(snap.skill)
    }

    return (
        <div>
            <button onClick={submitSkill} className='py-[0.5] px-2 border-2 border-black rounded-md mx-2'>submit</button>
        </div>
    )
}
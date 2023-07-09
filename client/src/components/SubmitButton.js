import { useSnapshot } from "valtio"
import state from "../state"

export default function SubmitButton() {

    const snap = useSnapshot(state)

    //API call for submitting skill
    const submitSkill = async () => {
        const res = await fetch("http://localhost:8000/", {
            method: "POST",
            body: JSON.stringify({ data: snap.skill }),
            headers: {
                "content-Type": "application/json",
            }
        })
        state.skill=''
    }

    return (
        <div>
            <button onClick={submitSkill} className='py-[0.5] px-2 border-2 border-black rounded-md mx-2'>submit</button>
        </div>
    )
}
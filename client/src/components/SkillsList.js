import { useEffect } from 'react'
import state from '../state'
import { useSnapshot } from 'valtio'


export default function SkillList() {

    const snap = useSnapshot(state)

    //API calling 
    useEffect(() => {
        const setData = async () => {
            const res = await fetch("http://localhost:8000/")
            const data = await res.json()
            state.skills=data
        }
        setData()
    }, [snap.skill])

    return (
        <div>
            {snap.skills.map((item) => {
                return (
                    <div className=''>
                        <li className=''>{item.skills}</li>
                    </div>
                )
            })}
        </div>
    )
}
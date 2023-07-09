import { useEffect } from 'react'
import state from '../state'
import { useSnapshot } from 'valtio'

import SkillManager from '../api/SkillManager'


export default function SkillList() {

    const snap = useSnapshot(state)

    //API calling 
    useEffect(() => {
        const setData = async () => {
            const skillManager = new SkillManager()
            const res = await skillManager.getAll()
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
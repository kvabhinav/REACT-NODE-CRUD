import state from "../state"

class SkillManager {

    static getAll = async () => {
        const res = await fetch("http://localhost:8000/")
        const data = await res.json()
        state.skills = data
    }

    static insertSkill = async (Skill) => {
        const res = await fetch("http://localhost:8000/", {
            method: "POST",
            body: JSON.stringify({ data: Skill }),
            headers: {
                "content-Type": "application/json",
            }
        })
        state.skill = ''
    }
}

export default SkillManager


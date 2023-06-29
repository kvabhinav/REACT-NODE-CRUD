import { useState, useEffect } from 'react'

function App() {
  const [skills, setSkills] = useState([])
  const [skill, setSkill] = useState("")


  //API call for inserting skill
  const submitSkill = async() => {
    const res = await fetch("http://localhost:8000/", {
      method: "POST",
      body: JSON.stringify({ data: skill }),
      headers: {
        "content-Type": "application/json",
      }
    })
    setSkill("")
  }


  //API call for reading all skills
  useEffect(() => {
    const setData = async () => {
      const res = await fetch("http://localhost:8000/")
      const data = await res.json()
      setSkills(data)
    }
    setData()
  }, [skill])

  return (
    <div className="">
      <input type="text" name='skill' value={skill} onChange={(e) => setSkill(e.target.value)} className='border-2 border-black rounded-md my-4' />
      <button onClick={submitSkill} className='py-[0.5] px-2 border-2 border-black rounded-md mx-2'>submit</button>
      {skills.map((skill) => {
        return (
          <div className=''>
            <li className=''>{skill.skills}</li>
          </div>
        )
      })}
    </div>
  );
}

export default App;

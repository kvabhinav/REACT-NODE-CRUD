import { proxy } from 'valtio'

const state = proxy({
    skill:'',
    skills:[]
})

export default state;
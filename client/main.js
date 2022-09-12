const baseURL = 'http://localhost:4000'

//Select html element

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const getWeaponsBtn = document.getElementById("getWeapons")
const weaponRack = document.getElementById('displayWeapons')
const addForm = document.getElementById('addForm')
const addInput = document.getElementById('addInput')
const deleteForm = document.getElementById('deleteForm')
const deleteInput = document.getElementById('deleteInput')
const editForm = document.getElementById('editForm')
const editIndex = document.getElementById('editIndex')
const editInput = document.getElementById('editInput')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
};

const getFortune = () => {
    axios.get(`${baseURL}/api/fortune`)
        .then(res => {
            const data = res.data;
            alert(data);
        
})
};

const getWeapons = () => {
    axios.get(`${baseURL}/api/weapons`)
    .then((res)=> {
        console.log(res.data)
        const weapons = res.data
        weaponRack.innerHTML = ''
        for(let i=0; i < weapons.length; i++){
            let newWeapon = document.createElement('li')
            newWeapon.textContent = weapons[i]
            weaponRack.appendChild(newWeapon)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const addNewItem = (event) =>{
    event.preventDefault()

    let bodyObj = {
        item: addInput.value 
    }

    axios.post(`${baseURL}/api/addWeapon`, bodyObj)
    .then((res)=> {
        console.log(res.data)
        const weapons = res.data
        weaponRack.innerHTML = ''
        for(let i=0; i < weapons.length; i++){
            let newWeapon = document.createElement('li')
            newWeapon.textContent = weapons[i]
            weaponRack.appendChild(newWeapon)
        }
        addInput.value = ''
    })
    .catch((err)=>{
        console.log(err)
    })
}

const deleteItem = (event) => {
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteWeapon/${deleteInput.value}`)
    .then((res)=> {
        const weapons = res.data
        weaponRack.innerHTML = ''
        for(let i=0; i < weapons.length; i++){
            let newWeapon = document.createElement('li')
            newWeapon.textContent = weapons[i]
            weaponRack.appendChild(newWeapon)
        }
        addInput.value = ''
    })
    .catch((err)=>{
        console.log(err)
    })
}

const editItem = (event) =>{
    event.preventDefault()
    let bodyObj = {
        item: editInput.value
    }
    axios.put(`${baseURL}/api/editWeapon/${editIndex.value}`, bodyObj)
    .then((res) => {
        const weapons = res.data
        weaponRack.innerHTML = ''
        for(let i=0; i < weapons.length; i++){
            let newWeapon = document.createElement('li')
            newWeapon.textContent = weapons[i]
            weaponRack.appendChild(newWeapon)
        }
        editIndex.value = ''
        editInput.value = ''
    })
    .catch((err)=>{
        console.log(err)
    })
    }


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getWeaponsBtn.addEventListener('click', getWeapons)
addForm.addEventListener('submit', addNewItem)
deleteForm.addEventListener('submit', deleteItem)
editForm.addEventListener('submit', editItem)
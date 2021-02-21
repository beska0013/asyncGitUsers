
//    github ის მომხმარებლების დავალების async await ზე გადაწერა
// showUserAvatar ფუნქცია გადააკეთეთ try/catch-ზე და ერორის შემთხვვაში ვანახოთ მესიჯი.
const content = document.getElementById('users')
const input = document.getElementById('search')
const deleteBtn=document.getElementById('btn')
let userArray=[]

async function gitHubUsers() { //function validation
    try{
        const gitResponse = await fetch('https://api.github.com/users')
        userArray = await gitResponse.json()
        renderUsers(userArray)
    }catch (err){
        alert(err)
    }}
const renderUsers = users => {
    users.forEach((user) => {
        const image = document.createElement('img')
        const p = document.createElement('p')
        const a = document.createElement('a')
        const div = document.createElement('div')
        content.appendChild(div)
        div.appendChild(image)
        image.src = user.avatar_url
        div.appendChild(p)
        p.innerText = user.login
        div.appendChild(a)
        a.innerText = 'See Portfolio'
        a.href = user.html_url
    })}

input.addEventListener('input', (event) => {
    const inputValue = event.target.value.toLowerCase()
    for(let i=0; i< userArray.length; i++) {
        if (userArray[i].login.includes(inputValue)) {
            content.children[i].style.display = 'flex'
        } else {
            content.children[i].style.display = 'none'
        }}})

//  დაწერეთ კოდის ფრაგმენტი რომელიც await
//  ის გამოყენებით დაელოდება 5წმ და 5 წამის მერე წაშლის ამ ფოტოს
const imgDelete = () =>{
  let  img=document.getElementsByTagName('img') //img Tag
    for(let i=0 ;i < img.length;i++){
        img[i].src=''
        img[i].alt='avatar'
    }
    }
 function fiveSecDelete(){
    setTimeout((imgDelete),5000)
}

deleteBtn.addEventListener('click',fiveSecDelete)   //img delete Btn
document.addEventListener('DOMContentLoaded',gitHubUsers)
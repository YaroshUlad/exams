// __________________________________________ events ______________________________________________

const sm = document.getElementById('small')
const md = document.getElementById('medium')
const big = document.getElementById('big')
const onClickHandler = (e) => {
    console.log(e)
}

/*const onClickHandler2 = (e) => {
    console.log(e.currentTarget)
}*/
const onClickHandler2 = (e) => {
    e.stopPropagation()
    console.log(e.currentTarget)
}


/*sm.onclick = onClickHandler
sm.onclick = null

sm.onclick = (e) => {
    onClickHandler2()
    onClickHandler()
}*/


sm.addEventListener('click', onClickHandler)

sm.removeEventListener('click', onClickHandler)

sm.addEventListener('click', onClickHandler2)
//md.addEventListener('click', onClickHandler2, true)
big.addEventListener('click', onClickHandler2) // при тру меняется очередность обработки
md.addEventListener('click', onClickHandler2)

//event.preventDefault гуглануть
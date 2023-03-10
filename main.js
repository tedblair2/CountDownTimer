const semicircles=document.querySelectorAll(".semicircle")
const timer=document.querySelector(".timer")

const hr=0
const min=0
const sec=20

const hours=hr * 3600000
const minutes=min * 60000
const seconds=sec * 1000
const setTime=hours + minutes + seconds
const startTime=Date.now()
const futureTime=startTime + setTime

const timerloop=setInterval(countDown)
countDown()

function countDown(){
    const currentTime=Date.now()
    const remainintime=futureTime - currentTime
    const angle=(remainintime / setTime)*360

    //prpgress indicator
    if(angle>180){
        semicircles[2].style.display='none'
        semicircles[0].style.transform='rotate(180deg)'
        semicircles[1].style.transform=`rotate(${angle}deg)`
    }else{
        semicircles[2].style.display='block'
        semicircles[0].style.transform=`rotate(${angle}deg)`
        semicircles[1].style.transform=`rotate(${angle}deg)`
    }
    //timer
    const hrs=Math.floor((remainintime/3600000)%24).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})
    const mins=Math.floor((remainintime/60000)%60).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})
    const secs=Math.floor((remainintime/1000)%60).toLocaleString('en-US',{minimumIntegerDigits: 2, useGrouping: false})

    timer.innerHTML=`
        <div>${hrs}</div>
        <div class="colon">:</div>
        <div>${mins}</div>
        <div class="colon">:</div>
        <div>${secs}</div>`

    if(remainintime<=6000){
        timer.style.color='red'
        semicircles[0].style.background='red'
        semicircles[1].style.background='red'
    }


    if(remainintime<0){
        clearInterval(timerloop)
        semicircles[0].style.display='none'
        semicircles[1].style.display='none'
        semicircles[2].style.display='none'
        timer.style.color='grey'

        timer.innerHTML=`
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>
        <div class="colon">:</div>
        <div>00</div>`
    }
}

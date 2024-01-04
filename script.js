var modal = document.querySelector(".modal_box");
var modal_bobux = document.querySelector(".bobuxBtn");
var textMain = document.querySelector(".textMain");
var rebox = document.getElementById("reboxText")
var ellipseMain = document.querySelector(".ellipseMain");
var bobuxMain = document.getElementById("bobux");
var yellowcoin = document.querySelector(".yellowcoin");
var carPic = document.getElementById("carPic")
var coinbox = document.getElementById("coinbox"); 
var score = document.getElementById("score");
var upgradeSection = document.querySelector(".upgrade_section")
var avatarUpgrade = document.querySelector(".avatar_upgrade_section")
var carUpgrade = document.querySelector(".car_upgrade_section")
var houseUpgrade = document.querySelector(".house_upgrade_section")
var playUpgrade = document.querySelector(".play_upgrade_section")
var upgradeBtn = document.querySelector(".upgrade_box1")
var secondupgradeBtn = document.querySelector(".upgrade_box2")
var thirdupgradeBtn = document.querySelector(".upgrade_box3")
var fourthupgradeBtn = document.querySelector(".upgrade_box4")
var fifthupgradeBtn = document.querySelector(".upgrade_box5")
var house = document.getElementById("house")
var coinspot = document.getElementById("coinspot")
var secondCoinSpot = document.getElementById("secondcoinspot")
var thirdCoinSpot = document.getElementById("thirdcoinspot")
var fourthCoinSpot = document.getElementById("fourthcoinspot")
var upgrade = document.getElementById("upgrade")
var avatarBox = document.getElementById("avatarBox")
var houseBox = document.getElementById("houseBox")
var changeToCar = document.getElementById("changeToCar")
var playBtn = document.getElementById("playButton")
var mainAvatar = document.getElementById("avatar")
var changeAvatar = document.getElementById("avatarUp")

var id = null

var whitePos = coinbox.getBoundingClientRect()


modal_bobux.addEventListener("click", () => {
    modal.style.display = "none";
    textMain.style.display = "block";
    ellipseMain.style.display = "block";
    bobuxMain.style.display = "block";
})

// bobuxMain.addEventListener('click', function(e){   
//   // <event>.<target>.<id> check that the id is 'button'
//   yellowcoin.classList.add("move_it")
//   if(e.target.id === 'bobux'){
//       // do something here 
      
//       //console.log(e.target.id); 
//   }  
// })

bobuxMain.addEventListener("click", function(e) {
  var id = e.target.id
  

  if (id === "bobux") {
    yellowcoin.style.display = "block"
    yellowcoin.classList.add("move_it")
    score.innerHTML = parseInt(score.innerHTML) + 3

    if (score.innerHTML == 12) {
      upgradeSection.style.display = "block"
      textMain.style.display = "none";
    ellipseMain.style.display = "none";
    bobuxMain.style.display = "none";
      upgradeBtn.addEventListener("click", closeUpgrade)
    }
  } 
})

function closeUpgrade() {
  var num = 10
  score.innerHTML = 12 - num
  upgradeSection.style.display = "none"
  textMain.style.display = "none";
  rebox.style.display = "block"
  ellipseMain.style.display = "block";
  coinspot.style.display = "block";
  upgrade.style.display = "none"
  avatarBox.style.display = "block"
}

coinspot.addEventListener("click", function(e) {
  var id = e.target.id
  var num = 25

  if (id === "coinspot") {
    yellowcoin.style.display = "block"
    yellowcoin.classList.add("move_it")
    score.innerHTML = parseInt(score.innerHTML) + 5
    if (score.innerHTML == 252) {
      score.innerHTML = 9999
      houseUpgrade.style.display = "block"
      fourthupgradeBtn.addEventListener("click", openHouse)
    }
    else if(score.innerHTML == 27) {
      
      avatarBox.addEventListener("click", closeSecondUpgrade)
    }
  } 

})

function closeSecondUpgrade() {
  score.innerHTML = score.innerHTML - 25
  avatarUpgrade.style.display = "none"
  mainAvatar.style.display = "none"
  avatarBox.style.display = "none"
  changeToCar.style.display = "block"
  rebox.style.display = "none"
  coinspot.style.display = "none"
  secondCoinSpot.style.display = "block"
  changeAvatar.style.display = "block"
  ellipseMain.style.display = "none"
}

secondCoinSpot.addEventListener("click", function(e) {
  var id = e.target.id
  var num = score.innerHTML
  if (id === "secondcoinspot") {
    yellowcoin.style.display = "block"
    yellowcoin.classList.add("move_it")
    score.innerHTML = parseInt(score.innerHTML) + 10

    if (score.innerHTML > 250) {
      score.innerHTML = 9999
      houseUpgrade.style.display = "block"
      fourthupgradeBtn.addEventListener("click", openHouse)
    }
    else if(score.innerHTML >= 100) {
      changeToCar.addEventListener("click", closeCar)
    }
  } 
})

function closeCar() {
  score.innerHTML = score.innerHTML - 100
  carPic.style.display = "block"
  carUpgrade.style.display = "none"
  secondCoinSpot.style.display = "none"
  thirdCoinSpot.style.display = "block"
  changeToCar.style.display = "none"
  houseBox.style.display = "block"
}

thirdCoinSpot.addEventListener("click", function(e) {
  var id = e.target.id
  var num = 250

  if (id === "thirdcoinspot") {
    yellowcoin.style.display = "block"
    yellowcoin.classList.add("move_it")
    score.innerHTML = parseInt(score.innerHTML) + 20

    if (score.innerHTML >= 252) {
     houseBox.addEventListener("click", openHouse)
    }
  } 

})

function openHouse() {
  score.innerHTML = 9999
  carPic.style.display = "block"
  houseBox.style.display = "none"
    houseUpgrade.style.display = "none"
    thirdCoinSpot.style.display = "none"
    fourthCoinSpot.style.display = "block"
    house.style.display = "block"
    playBtn.style.display = "block"
    mainAvatar.style.display = "none"
    changeAvatar.style.display = "block"
    rebox.style.display = "none"
    ellipseMain.style.display = "none";
    coinspot.style.display = "none";
    upgrade.style.display = "none"
    avatarBox.style.display = "none" 
}


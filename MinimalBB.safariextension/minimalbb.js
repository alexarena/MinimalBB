const hideElements = (els) => {
  for(let el of els){
    const elObj = document.getElementById(el)
    if(elObj){
      elObj.style.display = "none"
    }
  }
}

hideElements([
  'module:_868_1',
  'module:_351_1',
  'actionbar',
  'quick_links_wrap',
  'asu_nav_wrapper',
  'column0',
  'topframe.logout.label',
  'global-avatar',
  'menuPuller',
  'copyright',
  'arrowContext_1'
])

document.getElementsByClassName('tabWrapper-left')[0].style.visibility = 'hidden'

const headImg = document.getElementById('topTabs').querySelectorAll('[target][title]')[0]
headImg.href = 'https://myasucourses.asu.edu/'
headImg.setAttribute('target','')

let tmp = document.getElementById('column1')
if(tmp){
  tmp.style.width = '60%'
}

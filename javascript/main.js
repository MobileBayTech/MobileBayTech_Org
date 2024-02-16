let currentTabId = '#calendar'

function loadHTML(newTabId, targetDiv) {
    fetch(`./${newTabId}.html`)
        .then(response => response.text())
        .then(text => targetDiv.innerHTML = text);
}

async function pageUpdate(newTabId){
    let m_newTabId
    let m_currentTabId

    if (newTabId.substring(0,2) === 'm-') {
        m_newTabId = newTabId
        newTabId = newTabId.substring(2,newTabId.length)
    } else {
        m_currentTabId = '#m-' + currentTabId.substring(1,currentTabId.length)
        m_newTabId = 'm-' + newTabId
    }
    m_currentTabId = '#m-' + currentTabId.substring(1,currentTabId.length)

    currentTab = document.querySelector(currentTabId);
    m_currentTab = document.querySelector(m_currentTabId);

    newTab = document.querySelector('#'+newTabId);
    m_newTab = document.querySelector('#'+m_newTabId);

    targetDiv = document.querySelector('.target');

    newTab.classList.add('active')
    m_newTab.classList.add('active')

    currentTab.classList.remove('active')
    m_currentTab.classList.remove('active')


    currentTabId = `#${newTabId}`;

    loadHTML(newTabId, targetDiv);
    
    openMenu()
}

// const menu = document.querySelector("ul.m-nav");
const menuDiv = document.querySelector("div.m-nav");

let open;

function openMenu() {

  if (open) {
    console.log("CLICK - close")
    // menuDiv.style.visibility = "hidden";
    menuDiv.style.animation = "slide-out 1s ease-in-out;"

    menuDiv.style.display = "none";
    open = false;
  } else if (!open) {
    console.log("CLICK - open")
    // menu.style.visibility = "visible";
    menuDiv.style.display = "flex";
    menuDiv.style.animation = "slide-in 1s ease-in-out;"
    open = true;
  }
}
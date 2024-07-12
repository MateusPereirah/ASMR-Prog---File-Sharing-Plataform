const sidebarItems = document.querySelectorAll('.sidebar .item');
const tableRows = document.querySelectorAll('.main table tbody tr');


sidebarItems.forEach(sideItem =>{
    sideItem.addEventListener('click', () =>{
        sidebarItems.forEach(item =>{
            item.classList.remove('active');
        })
        sideItem.classList.add('active');
    })
})

tableRows.forEach(table =>{
    table.addEventListener('click', () =>{
        tableRows.forEach(t_item =>{
            t_item.classList.remove('selected');
        })
        table.classList.add('selected');
    })
})


const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');
let isMenuOpen = false;

menuBtn.addEventListener('click', () =>{
    if(!isMenuOpen){
        leftSection.style.left = '0';
    }else{
        leftSection.style.left = '-160px';
    }
    isMenuOpen = !isMenuOpen;
});

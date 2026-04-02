//tab switching script
function showTab(tab, clickedTab){
     const ongoing = document.getElementById('ongoing-page');
     const completed = document.getElementById('completed-page');

     if(tab === 'ongoing'){
          ongoing.style.display = 'block';
          completed.style.display = 'none';
     }
     else{
          ongoing.style.display = 'none';
          completed.style.display = 'block';
     }

     document.querySelectorAll('.tab-link').forEach(link => {
          link.classList.remove('active-tab');
     });

     clickedTab.classList.add('active-tab');
}
	
    function toggleSubMenu(menuItem) {
        var childMenu = document.getElementsByClassName(menuItem)[0];
        childMenu.style.display = childMenu.style.display === 'none' ? 'block' : 'none';
      }
        const toggleSwitch = document.getElementById('mode-toggle');
        const content = document.querySelector('.content');

        toggleSwitch.addEventListener('change', () => {
            if (toggleSwitch.checked) {
                document.body.classList.add('dark-mode');
          
            } else {
                document.body.classList.remove('dark-mode');
           
            }
        });
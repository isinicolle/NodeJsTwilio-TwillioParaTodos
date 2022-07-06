        const showStatus = (element, status) => {
            status === true
            ? element.style.display = 'initial'
            : element.style.display = 'none';
        }

    
        const statusOne = document.getElementById('status-send-1');
        const statusTwo = document.getElementById('status-send-2');
        
        showStatus(statusOne, false);
        showStatus(statusTwo, false);

        const sendMessage = async (e) => {
            e.preventDefault();

          
            const form = document.getElementById('myform');

           
            const number = form.querySelector('input[name="number"]').value;
            const message = form.querySelector('input[name="message"]').value;

            
            const data = JSON.stringify({ number, message });

           
            const options = {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: data 
            };
            
            const response = await fetch('/send', options);

            if(response.status === 200) {
                showStatus(statusOne, true);

                setTimeout(() => {
    
                    showStatus(statusOne, false);
                }, 3500);

                form.querySelector('textarea[name="message"]').value = '';
            } else {
                showStatus(statusTwo, true);

                setTimeout(() => {
                    // Ocultamos aviso
                    showStatus(statusTwo, false);
                }, 3500);
            }
        }

        window.addEventListener('submit', sendMessage);
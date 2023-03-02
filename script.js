
/**
 * This is the Scrypt to get free connection on linked in
 */

// - Step 1: First copy this script
// - Step 2: Just open linkedin (https://linkedin.com/) and login your account
// - Step 3: get go to connection section of linkedin 
// - Step 4: then, press ctr + shift + i 
// - Step 5: after that a dilorge box will appear, In the top dilorge box to can see console, just click on it
// - Step 6: then paste the script which you have copied

/**
 * version beta
 * Run to increase linked connections
 * please note this js script run list code in developer mode > log tab > past this code
 * pulse will run in linkedin network tab
 * @param {void}
 * @param {void}
 * @author {Sourav Maity}
 * @date {2023}
 */
//A function that is called every 20 seconds.
setInterval(function () {
    var connectBtn = document.querySelectorAll('#pymk-section .btn-primary');
    let i = 1;
    //Clicking on the connect button of the first profile and then scrolling down to the next profile and clicking on the connect button of the next profile and so on.
    connectBtn.forEach(element => {
        setTimeout(function () {
            i = i + 1;
            element.click();
            console.log('<- connection request');
            window.scroll({
                top: (i * 100)*2,
                behavior: 'smooth'
              });
        },3000);
    });

},20000);

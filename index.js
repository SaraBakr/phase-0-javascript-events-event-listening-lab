function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('yeeey I am clicked!');
    }

    input.addEventListener('click', clickAlert);
}
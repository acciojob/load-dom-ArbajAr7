//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    var p = document.createElement('p');
    p.textContent = 'DOM load success';
	document.querySelector('body').appendChild(p);
});
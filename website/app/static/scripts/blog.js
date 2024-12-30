// article content
document.querySelectorAll('.toggle-btn-content').forEach(button => {
    button.addEventListener('click', () => {
        const current_content = button.parentElement.previousElementSibling;
        document.querySelectorAll('.full-content').forEach(content => {
            // console.log(button.children)
            if (content !== current_content) { // close all other
                content.style.display = 'none';
                other_button = content.nextElementSibling.children[0] // button
                other_button.children[0].textContent = '❰'; // span
                if(other_button.classList.contains('extended')) {
                    other_button.classList.toggle('extended')
                }
            } else if(current_content.style.display === 'block') { // close if opened
                current_content.style.display = 'none';
                button.children[0].textContent = '❰'; // span
                button.classList.toggle('extended')
            } else { // open if closed
                current_content.style.display = 'block';
                button.children[0].textContent = '❱'; // span
                button.classList.toggle('extended')
            }
            const sources = current_content.querySelectorAll('.sources')
            if(sources.length>0) {
                const source = sources[0] // sources content
                if(source.style.display === "block") {
                    source.previousElementSibling.classList.toggle('extended');
                    source.style.display = 'none';
                }
            }
        });
    });
});

// sources
document.querySelectorAll('.toggle-btn-sources').forEach(button => {
    button.addEventListener('click', () => {
        const sources = button.nextElementSibling;
        button.classList.toggle('extended')
        if(sources.style.display === 'block') { // close if opened
            sources.style.display = 'none';
        } else { // open if closed
            sources.style.display = 'block';
        }
    });
});

// to replace all the hast-tags
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('p').forEach(p => {
        p.innerHTML = p.innerHTML.replace(/(#\b\w+(?!;)\b)/g, '<span class="hash-tag">$1</span>');
    })
  });
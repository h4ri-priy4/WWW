document.getElementById('add-skill-btn').addEventListener('click', function() {
    const skill = prompt("Enter the skill you want to add:");
    if (skill) {
        const skillsList = document.getElementById('skills-list');
        const newSkillItem = document.createElement('li');
        newSkillItem.textContent = skill;
        skillsList.appendChild(newSkillItem);
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
document.addEventListener("DOMContentLoaded", function() {
    // Adding hover animations for the team section
    const teamMembers = document.querySelectorAll('.team-member');

    teamMembers.forEach(member => {
        member.addEventListener('mouseover', () => {
            member.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease';
            member.style.transform = 'translateY(-10px)';
            member.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.25)';
            member.style.filter = 'brightness(1.1)';
        });

        member.addEventListener('mouseout', () => {
            member.style.transform = 'translateY(0)';
            member.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            member.style.filter = 'brightness(1)';
        });
    });
});

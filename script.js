document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('feedbackForm');
    let feedbacksContainer = document.getElementById('feedbacksContainer');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let feedback = {
            name: name,
            email: email,
            message: message
        };

        // Call function to save feedback
        saveFeedback(feedback);

        // Clear form fields
        form.reset();
    });

    function saveFeedback(feedback) {
        // Create new feedback element
        let feedbackElement = document.createElement('div');
        feedbackElement.classList.add('feedback');
        feedbackElement.innerHTML = '<h3>' + feedback.name + '</h3><p><strong>Email:</strong> ' + feedback.email + '</p><p><strong>Message:</strong> ' + feedback.message + '</p>';

        // Append feedback element to container
        feedbacksContainer.appendChild(feedbackElement);
    }
});

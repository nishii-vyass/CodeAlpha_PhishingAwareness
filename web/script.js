/* =========================================================
   PHISHING AWARENESS TRAINING
   CodeAlpha Cyber Security Internship — Task 2
   Interactive Quiz
   ========================================================= */


document.addEventListener("DOMContentLoaded", function () {

    const quizForm = document.getElementById("quizForm");

    quizForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const answers = {
            q1: "b",
            q2: "b",
            q3: "c",
            q4: "a",
            q5: "b",
            q6: "b",
            q7: "d",
            q8: "c",
            q9: "b",
            q10: "b"
        };


        let score = 0;

        let unanswered = 0;


        /*
         * Check every question.
         */

        for (const question in answers) {

            const selected = document.querySelector(
                `input[name="${question}"]:checked`
            );


            if (!selected) {

                unanswered++;

            } else if (selected.value === answers[question]) {

                score++;

            }

        }


        /*
         * Require all questions.
         */

        if (unanswered > 0) {

            alert(
                `Please answer all questions before submitting the quiz.`
            );

            return;

        }


        /*
         * Display result.
         */

        const resultBox =
            document.getElementById("quizResult");

        const scoreText =
            document.getElementById("scoreText");

        const resultMessage =
            document.getElementById("resultMessage");


        scoreText.textContent =
            `Your Score: ${score}/10`;


        if (score >= 9) {

            resultMessage.textContent =
                "Excellent! You have a strong understanding of phishing awareness.";

        } else if (score >= 7) {

            resultMessage.textContent =
                "Good work! Review the topics you missed and try the quiz again.";

        } else if (score >= 5) {

            resultMessage.textContent =
                "You have basic awareness. Review the training sections and try again.";

        } else {

            resultMessage.textContent =
                "Keep learning. Review the warning signs, prevention steps and social-engineering section before trying again.";

        }


        resultBox.classList.remove("hidden");


        /*
         * Scroll to result.
         */

        resultBox.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    });

});


/*
 * Reset the quiz.
 */

function resetQuiz() {

    const quizForm =
        document.getElementById("quizForm");

    const resultBox =
        document.getElementById("quizResult");


    quizForm.reset();

    resultBox.classList.add("hidden");


    window.scrollTo({
        top: document.getElementById("quiz").offsetTop,
        behavior: "smooth"
    });

}
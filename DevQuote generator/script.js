const quotes = [
    {
        quote: "Code is like humor. When you have to explain it, it's bad.",
        author: "Cory House"
    },
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson"
    },
    {
        quote: "Experience is the name everyone gives to their mistakes.",
        author: "Oscar Wilde"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    },
    {
        quote: "Programs must be written for people to read.",
        author: "Harold Abelson"
    },
    {
        quote: "Talk is cheap. Show me the code.",
        author: "Linus Torvalds"
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck"
    },
    {
        quote: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman"
    },
    {
        quote: "The best error message is the one that never shows up.",
        author: "Thomas Fuchs"
    },
    {
        quote: "Every great developer you know got there by solving problems.",
        author: "Patrick McKenzie"
    },
    {
        quote: "Success is the sum of small efforts repeated daily.",
        author: "Robert Collier"
    },
    {
        quote: "Dream big. Start small. Act now.",
        author: "Robin Sharma"
    },
    {
        quote: "Discipline beats motivation.",
        author: "Unknown"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "A little progress each day adds up to big results.",
        author: "Unknown"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Push yourself because no one else will do it for you.",
        author: "Unknown"
    },
    {
        quote: "Consistency creates excellence.",
        author: "Unknown"
    },
    {
        quote: "Great things never come from comfort zones.",
        author: "Unknown"
    },
    {
        quote: "Success is built one day at a time.",
        author: "Unknown"
    },
    {
        quote: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "The beautiful thing about learning is nobody can take it away.",
        author: "B.B. King"
    },
    {
        quote: "Practice is the hardest part of learning.",
        author: "Unknown"
    },
    {
        quote: "Knowledge grows when shared.",
        author: "Unknown"
    },
    {
        quote: "Stay curious and keep learning.",
        author: "Unknown"
    },
    {
        quote: "Every line of code is a step forward.",
        author: "Unknown"
    },
    {
        quote: "Build. Break. Learn. Repeat.",
        author: "Unknown"
    },
    {
        quote: "Projects teach more than tutorials.",
        author: "Unknown"
    },
    {
        quote: "Coding is learning by doing.",
        author: "Unknown"
    },
    {
        quote: "Your only limit is your willingness to learn.",
        author: "Unknown"
    },
    {
        quote: "Mistakes are proof that you're trying.",
        author: "Unknown"
    },
    {
        quote: "Every bug is an opportunity to improve.",
        author: "Unknown"
    },
    {
        quote: "The harder the challenge, the greater the growth.",
        author: "Unknown"
    },
    {
        quote: "Small wins create momentum.",
        author: "Unknown"
    },
    {
        quote: "Focus on progress, not perfection.",
        author: "Unknown"
    },
    {
        quote: "Success comes from persistence.",
        author: "Unknown"
    },
    {
        quote: "Keep showing up.",
        author: "Unknown"
    },
    {
        quote: "Done is better than perfect.",
        author: "Sheryl Sandberg"
    },
    {
        quote: "Action beats overthinking.",
        author: "Unknown"
    },
    {
        quote: "Code. Commit. Improve.",
        author: "Unknown"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "Be stronger than your excuses.",
        author: "Unknown"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Hard work compounds over time.",
        author: "Unknown"
    },
    {
        quote: "Keep building, even when nobody is watching.",
        author: "Unknown"
    },
    {
        quote: "Every day is a chance to improve.",
        author: "Unknown"
    },
    {
        quote: "Success starts with self-belief.",
        author: "Unknown"
    },
    {
        quote: "Stay patient. Stay consistent.",
        author: "Unknown"
    },
    {
        quote: "Your future self will thank you.",
        author: "Unknown"
    }
];

const generatebtn = document.querySelector("#generatebtn");
const copy = document.querySelector("#copy");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const number = document.querySelector("#number");
function Randomquote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    quote.textContent = quotes[randomIndex].quote;
    author.textContent = `--- ${quotes[randomIndex].author}`;
    number.textContent = `# ${randomIndex}`;
}

generatebtn.addEventListener("click", Randomquote);
Randomquote();



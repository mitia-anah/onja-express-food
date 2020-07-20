// grab elements
const divContainer = document.querySelector(".container");
const button = document.querySelector(".add-order");
const outerModal = document.querySelector(".outer-modal");
const innerModal = document.querySelector(".inner-modal");
const orderList = document.querySelector('.order-list');


// Add the form html here
const inputForm = `
    <form>
        <p>Your name :</p>
        <input
            class="input-form"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name here"
            required
        />
        <p>Please select your dish :</p>
        <select name="dish" class="select-form" required>
            <option value="romazava">Romazava</option>
            <option value="koba">Koba</option>
            <option value="ravitoto">Ravitoto</option>
            <option value="mokary">Mokary</option>
            <option value="achard">Achard</option>
            <option value="masikita">Masikita</option>
            <option value="sambos">Sambos</option>
            <option value="mofo-baolina">Mofo baolina</option>
            <option value="ranonapango">Ranonapango</option>
        </select>
        <p>Please select the size of your plate :</p>
        <input type="radio" id="small" name="size" value="small" required />
        <label for="small">Small</label><br />
        <input type="radio" id="medium" name="size" value="medium" />
        <label for="medium">Medium</label><br />
        <input type="radio" id="large" name="size" value="large" />
        <label for="large">Large</label><br />
        <p>How many pieces do you want to order?</p>
        <input
            class="input-form"
            type="number"
            id="quantity"
            name="amount"
            placeholder="Enter a number here"
            required
        />
        <button class="submitOrder" type="submit">Add this order</button>
    </form>
`;

   // and put it inside of modal
   innerModal.innerHTML = inputForm;


   window.addEventListener('submit', (event) => {
    const userName = document.getElementsByName("name");
    const dishOption = document.getElementsByName("dish");
    const sizeOfPlate = document.getElementsByName("size");
    const numberOfOrder = document.getElementsByName("amount");
    const submitButton = document.querySelector('.submitOrder');

    const form =`

    `;
     orderList.innerHTML= form;

    if (event.target.matches('form')) {
        form.preventDefault();
        const form = event.target;
        form.userName.value;
        form.dishOption.value;
        form.sizeOfPlate.value;
        form.numberOfOrder.value;
        }
   });

    // put it on the modal
    const openModal = event => {
        outerModal.classList.add('open');
    }
        // put it on the modal

const closeModal = event => {
	const isOutside = !event.target.closest('.inner-modal');
	if (isOutside) {
		outerModal.classList.remove('open');
	}
};

const closeModalWithEscapeKey = event => {
	if (event.key === 'Escape') {
		outerModal.classList.remove('open');
	}
};

const handleModalClick = event => {
	console.log(event);
};

window.addEventListener('keydown', closeModalWithEscapeKey);
outerModal.addEventListener('click', closeModal);
button.addEventListener('click', openModal);


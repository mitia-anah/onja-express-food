// grab elements
const divContainer = document.querySelector(".container");
const button = document.querySelector(".add-order");
const outerModal = document.querySelector(".outer-modal");
const innerModal = document.querySelector(".inner-modal");
const submitButton = document.querySelector('.submitOrder');
const title = document.querySelector("#name");

// New order
    submitButton.addEventListener("click", $event => {
        const div = document.querySelector('.order-list');
        const detailButton = document.querySelector('.details');
        const servedButton = document.querySelector(".served");

        const myHTML = `
        <div class="new-order"> 
            <span>${title.value}</span>
            <button class=""details>${detailButton}</button>
            <button class="served">${servedButton}</button>
        </div>
    `;
    div.innerHTML = myHTML;
    });
    
    
    // put it on the modal
    

// const openModal = event => {
//     outerModal.classList.add('open');
//     // grab the info
//     const orderList = event.target.closest('.order-list');
//     const span = orderList.querySelector('h3').textContent;
//     console.log(orderList.dataset);
//     const { step1, step2, step3, img } = card.dataset;
//     // put it on the modal
//     const myHTML = `
//             <h2>${title}</h2>
//             <img src="${img}" alt="${title}"/>
//             <ul>Steps : 
//                 <li>${step1}</li>
//                 <li>${step2}</li>
//                 <li>${step3}</li>
//             </ul>
//             <button class="modal-btn">See next recipe</button>
//     `;
//     innerModal.innerHTML = myHTML;
// };

    const openModal = event => {
        outerModal.classList.add('open');
        // grab the info
    // const div = document.querySelector('.order-list');
    // const span = document.querySelector('.title');
    // const detailButton = document.querySelector('.details');
    // const servedButton = document.querySelector(".served");
    
    // // put it on the modal
    // const myHTML = `
    //     <div class="order-list"> 
    //         <span>${span}</span>
    //         <button>${detailButton}</button>
    //         <button>${servedButton}</button>
    //     </div>
    // `;
    // outerModal.innerHTML = myHTML;
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

// // event delegation
// const handleModalButton = event => {
// 	if (event.target.matches('button.modal-btn')) {
// 		// see the next recipe
// 	}
// };
// window.addEventListener('click', handleModalButton);

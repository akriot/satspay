document.addEventListener('DOMContentLoaded', () => {
    const albums = [
        {
            year: '1987',
            title: 'Born to Mack',
            tracks: [
                'Partytime',
                'Mack Attack',
                'Playboy Short II',
                'Freaky Tales',
                'Dope Fiend Beat',
                'Little Girls',
                'The Universal Mix'
            ],
            image: 'https://bdhsdsjadjcunqriaaef.supabase.co/storage/v1/object/public/album_arts/album01.jpg',
            price: 17000
        },
        {
            year: '1988',
            title: 'Life Is... Too Short',
            tracks: [
                'Life Is... Too Short',
                'Rhymes',
                'I Ain\'t Trippin\'',
                'Nobody Does It Better',
                'Oakland',
                'Don\'t Fight the Feelin\'',
                'CussWords',
                'City of Dope',
                'Pimp the Ho',
                'Outro'
            ],
            image: 'assets/album1988.jpg',
            price: 17000
        },
        {
            year: '1990',
            title: 'Short Dog\'s in the House',
            tracks: [
                'Short Dog\'s In The House',
                'It\'s Your Life',
                'The Ghetto',
                'Short But Funky',
                'In The Oaktown',
                'Dead Or Alive',
                'Punk Bitch',
                'Ain\'t Nothin\' But A Word To Me (with Ice Cube)',
                'Hard On The Boulevard',
                'Pimpology',
                'Paula & Janet',
                'Rap Like Me',
                'The Ghetto (Reprise)'
            ],
            image: 'assets/album1990.jpg',
            price: 17000
        },
        // Add the remaining albums here...
    ];

    const albumContainer = document.querySelector('.album-container');
    const checkoutCard = document.querySelector('.checkout-card');
    const albumDetails = document.getElementById('album-details');
    const totalCostElem = document.getElementById('total-cost');
    const clearButton = document.getElementById('clear-button');
    const checkoutButton = document.getElementById('checkout-button');
    const paymentModal = document.getElementById('payment-modal');
    const paymentAmount = document.getElementById('payment-amount');
    const payButton = document.getElementById('pay-button');
    const closePayment = document.querySelector('.close-payment');
    const paymentRequestElem = document.getElementById('payment-request');

    let totalCost = 0;
    let cartItems = [];

    function displayAlbums(albumList) {
        albumContainer.innerHTML = '';
        albumList.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            albumDiv.innerHTML = `
                <img src="${album.image}" alt="${album.title}">
                <div class="album-name">${album.title}</div>
                <div class="album-year">${album.year}</div>
                <button class="add-to-cart">Add to cart</button>
            `;
            albumDiv.querySelector('.add-to-cart').addEventListener('click', () => addToCart(album));
            albumDiv.querySelector('img').addEventListener('click', () => showModal(album));
            albumContainer.appendChild(albumDiv);
        });
    }

    function addToCart(album) {
        totalCost += album.price;
        cartItems.push(album);
        totalCostElem.textContent = `Total: ${totalCost} sats`;
        showAlbumDetails();
    }

    function showAlbumDetails() {
        albumDetails.innerHTML = '';
        cartItems.forEach((album, index) => {
            const albumDetailDiv = document.createElement('div');
            albumDetailDiv.classList.add('album-details-item');
            albumDetailDiv.innerHTML = `
                <img src="${album.image}" alt="${album.title}" class="thumbnail">
                <h3>${album.title}</h3>
                <span class="delete-icon" data-index="${index}">&times;</span>
            `;
            albumDetails.appendChild(albumDetailDiv);
        });
        checkoutCard.classList.add('active');
        addDeleteFunctionality();
    }

    function addDeleteFunctionality() {
        const deleteIcons = document.querySelectorAll('.delete-icon');
        deleteIcons.forEach(icon => {
            icon.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        const removedAlbum = cartItems.splice(index, 1)[0];
        totalCost -= removedAlbum.price;
        totalCostElem.textContent = `Total: ${totalCost} sats`;
        showAlbumDetails();
    }

    function showModal(album) {
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <span class="close">&times;</span>
            <img src="${album.image}" alt="${album.title}">
            <h3>${album.title} - ${album.year}</h3>
            <ul class="track-list">
                ${album.tracks.map(track => `<li>${track}</li>`).join('')}
            </ul>
        `;
        document.body.appendChild(backdrop);
        document.body.appendChild(modal);

        backdrop.addEventListener('click', () => closeModal(modal, backdrop));
        modal.querySelector('.close').addEventListener('click', () => closeModal(modal, backdrop));
    }

    function closeModal(modal, backdrop) {
        modal.remove();
        backdrop.remove();
    }

    clearButton.addEventListener('click', () => {
        checkoutCard.classList.remove('active');
        albumDetails.innerHTML = '';
        totalCost = 0;
        cartItems = [];
        totalCostElem.textContent = 'Total: 0 sats';
    });

    checkoutButton.addEventListener('click', () => {
        paymentAmount.textContent = totalCost;
        paymentModal.style.display = 'block';
    });

    closePayment.addEventListener('click', () => {
        paymentModal.style.display = 'none';
    });

    payButton.addEventListener('click', async () => {
        const amount = totalCost;
        const response = await fetch('/pay', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount }),
        });
        const result = await response.json();
        if (result.payment_request) {
            paymentRequestElem.textContent = result.payment_request;
        } else {
            alert(result.message);
        }
    });

    sortAscButton.addEventListener('click', () => {
        displayAlbums(albums.sort((a, b) => a.year.localeCompare(b.year) || a.title.localeCompare(b.title)));
    });

    sortDescButton.addEventListener('click', () => {
        displayAlbums(albums.sort((a, b) => b.year.localeCompare(a.year) || b.title.localeCompare(a.title)));
    });

    displayAlbums(albums);
});

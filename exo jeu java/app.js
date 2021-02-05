var minijeu = {
    startPlay: () => {
        this.input = document.getElementById('nombre');
        const button = document.getElementById('valider');
        button.addEventListener('click', this.testNumber.bind(this));
        this.randomNumber = Math.floor(Math.random() * 101);
        this.totalEssais = 10;
        console.log(this.randomNumber);

        alert('Le nombre à deviner est compris entre 1 et 100 .');
    },

    testNumber: (e) => {
        e.preventDefault();
        let nombreutilisateur = this.input.value;
        alert(nombreutilisateur);

        if (nombreutilisateur > this.randomNumber) {
            alert("C'est moins");
        } else if (nombreutilisateur < this.randomNumber) {
            alert("c'est plus");
        } else if (nombreutilisateur === this.randomNumber) {
            alert("Bravo");
        }




        // for (let i = 0; i < 10; i++) {
        //     console.log('Essais encore');
        // }
        // for (let i = 0; i > 10; i++) {
        //     console.log('Tu as perdu');
        // }
    }
}

minijeu.startPlay();
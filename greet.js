
document.addEventListener('alpine:init', () => {
    Alpine.data('greet', () => {
        return {
            name: '',
            // init() {

            // },
            selectedLanguage: 'Select The Language',
            output: '',
            error: '',
            languages: ['Select Language','English', 'seTswana', 'isiZulu', 'isiXhosa'],
            greeting: '',

            greet() {
                if (!this.name.trim()) {
                    this.greeting = 'Please Type Your Name';
                    return;
                }

                // console.log(this.selectedLanguage)
                switch (this.selectedLanguage) {
                    case 'seTswana':
                        this.greeting = 'Dumela, ' + this.name;
                        return
                    case 'isiZulu':
                        this.greeting = 'Sawubona, ' + this.name;
                        return
                    case 'isiXhosa':
                        this.greeting = 'Molo, ' + this.name;
                        return
                    case 'English':
                        this.greeting = 'Hello, ' + this.name;
                        return
                    default:
                        this.greeting = 'Type Your Name, Darling.'
                }
            }
        }
    });
});




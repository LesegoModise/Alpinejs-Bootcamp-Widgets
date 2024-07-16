document.addEventListener('alpine:init', () => {
    Alpine.data('wordGame', () => ({
        sentence: '',
        longest: '',
        shortest: '',
        totalLength: 0,
        totalWords: 0,
        results: false,

        longestWord(sentence) {
            const words = sentence.split(' ');
            let longest = words[0];
            for (let i = 1; i < words.length; i++) {
                if (words[i].length > longest.length) {
                    longest = words[i];
                }
            }
            return longest;
        },

        shortestWord(sentence) {
            const words = sentence.split(' ');
            let shortest = words[0];
            for (let i = 1; i < words.length; i++) {
                if (words[i].length < shortest.length) {
                    shortest = words[i];
                }
            } 
            return shortest;
        },

        wordLengths(sentence) {
            const words = sentence.split(' ');
            let sum = 0;
            words.forEach(word => {
                sum += word.length;
            });
            return sum;
        },

        wordCount(sentence) {
            const words = sentence.split(' ');
            return words.length;
        },

        processSentence() {
            this.longest = this.longestWord(this.sentence);
            this.shortest = this.shortestWord(this.sentence);
            this.totalLength = this.wordLengths(this.sentence);
            this.totalWords = this.wordCount(this.sentence);
            this.results = true;
        }
    }));
});
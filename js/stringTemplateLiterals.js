/* let pet = 'sober';

console.log(`${pet} sit!`);

let sentence1 = `Use the standard /usr/share/wordlists/dirbuster-directory-list-2.3-medium.txt wordlist
on the site to begin with. Whilst that runs, look at the source code of the 
homepage and see if you can find any static files being included...`;

console.log(sentence1);

let sentence2 = `Use the standard /usr/share/wordlists/dirbuster-directory-list-2.3-medium.txt wordlist
            on the site to begin with. Whilst that runs, look at the source code of the 
        homepage and see if you can find any static files being included...`;

console.log(sentence2); */

function getReasonCount(){
    return 2;
}

let interpolation = `\nGive me ${(getReasonCount() == 1) ? 'one good reason' : 'a few reasons'} to try this.`;

console.log(interpolation);
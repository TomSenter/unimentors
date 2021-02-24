const facebook = document.getElementById('facebook-btn');
const google = document.getElementById('google-btn');
const twitter = document.getElementById('twitter-btn');
const whatsapp = document.getElementById('whatsapp-btn');


const share=()=>{
    const postUrl = encodeURI(document.location.href);
    const postTitle = encodeURI('Unimentors-Online tutoring site');

    facebook.setAttribute('href',
    `https://www.facebook.com/sharer.php?u=${postUrl}`);

    google.setAttribute('href',
    `https://plus.google.com/share?url=${postUrl}`);

    twitter.setAttribute('href',
    `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);

    whatsapp.setAttribute('href',
    `https://wa.me/?text=${postTitle} ${postUrl}`);




}

share();
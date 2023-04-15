let pageTitle='Elzero',pageDiscription="Elzero web school",pageDate='15/4/2023';

let card=`
<div>
    <h3>hello ${pageTitle}</h3>
    <p>${pageDiscription}</p>
    <span>${pageDate}</span>
</div>
`
card=card.repeat(4);
document.write(card);
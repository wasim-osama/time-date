let date = new Date();
let months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
let days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
let hours = ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২']


document.querySelector('.month').innerHTML = months[date.getMonth()];
document.querySelector('.day').innerHTML = days[date.getDay()];
document.querySelector('.date').innerHTML = date.getDate().toLocaleString('bn-BD');
document.querySelector('.year').innerHTML = date.getFullYear().toLocaleString('bn-BD').replace(',', '');

function displayTIme() {
    let hour = hours[date.getHours() - 1]
    let min = date.getMinutes().toLocaleString('bn-BD');
    let hrs = date.getHours();
    let sess = '';
    if (hrs == 4 && hrs < 7) {
        sess = 'ভোর'
    } else if (hrs == 7 && hrs < 10) {
        sess = 'সকাল'
    } else if (hrs == 10 && hrs < 15) {
        sess = 'বেলা'
    } else if (hrs == 15 && hrs < 18) {
        sess = 'বিকাল'
    } else if (hrs == 18 && hrs < 21) {
        sess = 'সন্ধ্যা'
    } else {
        sess = 'রাত'
    }
    document.querySelector('.hr').innerHTML = hour;
    document.querySelector('.min').innerHTML = min;
    document.querySelector('.session').innerHTML = sess;
}
displayTIme()
setInterval(displayTIme, 60000)
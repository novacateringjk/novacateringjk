function ininglese() {
    lang = "eng";
    flagImage.src = 'indonesia-flag.png';
    content.textContent = 'Welcome to Nova Catering, your one-stop solution for delicious and mouth-watering food for all your events and gatherings.';
    services.textContent = 'Our expert chefs and dedicated staff are committed to making your event memorable with our wide range of delectable dishes and impeccable service.';
    contact.textContent = 'Whether it\'s a corporate event, wedding, birthday party, or any special occasion, we\'ve got you covered. Explore our menu and get in touch with us to plan your catering needs.';
    contactus.textContent = 'Contact us at:';
    menu.textContent = 'Menu';
    aboutus.textContent = 'About Us';
    contac.textContent = 'Contact';
    testogrande.textContent = 'Delicious Catering Services';
titoloaboutus.textContent = "Welcome to Nova Catering - Experience the Authentic Flavors of Indonesia Since 2005!";
    testoabutus.innerHTML=`<p>We are a passionate team of chefs and food enthusiasts with a mission: to bring the authentic flavors of Indonesia directly to your table. With our presence since 2005 in both Italy and Indonesia, we have built a strong reputation for delivering delicious dishes that meet the highest halal and hygiene standards.</p>
        
        <p>Our history has deep roots in the culinary culture of Indonesia, where recipes passed down from generation to generation are at the core of our cuisine. From "Nasi Goreng" to "Rendang," we have crafted a flavor heritage that unveils the richness of our culture.</p>
        
        <h3>We take pride in providing:</h3>
        
        <ul>
            <li><strong>Authentic Taste:</strong> We use only fresh and authentic ingredients to capture the true flavor of each dish. Every bite is a journey through Indonesian culinary traditions.</li>
            <li><strong>Menu Diversity:</strong> We offer a comprehensive menu that spans from spicy and flavorful dishes to vegetarian and vegan options, ensuring there's something for every palate.</li>
            <li><strong>Hygiene Standards:</strong> We adhere to strict food hygiene standards, both in Europe and Indonesia. We believe that food quality and cleanliness are key to customer satisfaction.</li>
            <li><strong>Excellent Service:</strong> Our friendly and professional team is committed to providing impeccable customer service, from menu selection to delivery.</li>
        </ul>
        
        <p>We are also proud to collaborate with a nutritionist who will help you create menus tailored to your health needs. Our menus can be customized to various customer requirements, making each dish we serve not only delicious but also nutritious.</p>
        
        <p>Thank you for choosing Nova Catering to fulfill your culinary needs. Join us on this culinary journey and allow yourself to be delighted by the unforgettable authentic flavors of Indonesia.</p>
    `;
}

function inindo() {
    lang = "indo";
    flagImage.src = 'us-flag.png';
    content.textContent = 'Selamat datang di Nova Catering, solusi lengkap untuk makanan lezat dan menggugah selera untuk semua acara dan pertemuan Anda.';
    services.textContent = 'Para koki ahli kami dan staf yang berdedikasi berkomitmen untuk membuat acara Anda berkesan dengan beragam hidangan lezat dan pelayanan yang tak tertandingi.';
    contact.textContent = 'Tidak peduli apakah itu acara korporasi, pernikahan, pesta ulang tahun, atau acara istimewa lainnya, kami siap membantu. Telusuri menu kami dan hubungi kami untuk merencanakan kebutuhan catering Anda.';
    contactus.textContent = 'Hubungi kami di:';
    menu.textContent = 'Menu';
    aboutus.textContent = 'Tentang Kami';
    contac.textContent = 'Kontak';
    testogrande.textContent = 'Layanan katering yang lezat';
    titoloaboutus.textContent = "Selamat Datang di Nova Catering - Pengalaman Keaslian Rasa Indonesia Sejak 2005!";

    testoabutus.innerHTML=`<p>Kami adalah tim yang bersemangat, terdiri dari koki dan pecinta makanan, dengan sebuah misi: membawa rasa otentik Indonesia langsung ke meja makan Anda. Dengan kehadiran kami sejak tahun 2005 di Italia dan Indonesia, kami telah membangun reputasi yang kokoh dalam menyajikan hidangan lezat yang memenuhi standar kehalalan dan kebersihan tertinggi.</p>
        
        <p>Sejarah kami memiliki akar yang dalam dalam budaya kuliner Indonesia, di mana resep yang diwariskan dari generasi ke generasi adalah inti dari masakan kami. Dari "Nasi Goreng" hingga "Rendang" kami telah membangun warisan rasa yang mengungkapkan kekayaan budaya kami.</p>
        
        <h3>Kami bangga memberikan:</h3>
        
        <ul>
            <li><strong>Rasa Otentik</strong> Kami menggunakan hanya bahan-bahan segar dan otentik untuk menangkap cita rasa yang sesungguhnya dari setiap hidangan. Setiap gigitan adalah perjalanan melalui tradisi kuliner Indonesia.</li>
            <li><strong>Menu Diversifikasi:</strong> Kami menawarkan menu lengkap yang mencakup hidangan pedas dan lezat hingga pilihan vegetarian dan vegan, memastikan ada sesuatu untuk semua selera.</li>
            <li><strong>Kebersihan Standar:</strong> Kami mematuhi semua standar kebersihan makanan yang ketat, baik yang berlaku di Eropa maupun di Indonesia. Kami percaya bahwa kualitas makanan dan kebersihan adalah kunci kepuasan pelanggan.</li>
            <li><strong>Pelayanan Prima:</strong> Tim kami yang ramah dan profesional berkomitmen untuk memberikan pelayanan pelanggan yang sempurna, mulai dari pemilihan menu hingga pengiriman.</li>
        </ul>
        
        <p>Kami juga bangga dapat bekerja sama dengan seorang nutrisionis yang akan membantu Anda membuat menu yang sesuai dengan kebutuhan kesehatan Anda. Menu kami dapat disesuaikan dengan berbagai kebutuhan pelanggan, sehingga setiap hidangan yang kami sajikan bukan hanya lezat tetapi juga bergizi.</p>
        
        <p>Terima kasih telah memilih Nova catering untuk memenuhi kebutuhan kuliner Anda. Bergabunglah bersama kami dalam perjalanan kuliner ini dan biarkan diri Anda dimanjakan oleh rasa otentik Indonesia yang tak terlupakan.</p>
    `;




}





const titoloaboutus= document.getElementById('titleaboutus');
const testoabutus= document.getElementById('testoaboutus');
const principaletesto = document.getElementById('principaletesto');
const mostramenu= document.getElementById('mostramenu');
const mostranoi= document.getElementById('mostranoi');
const contattami = document.getElementById('contattami');


const flagImage = document.getElementById('flag-image');

const content = document.getElementById('content');
const services = document.getElementById('services');
const contact = document.getElementById('contact');
const contactus = document.getElementById('contactus');
const menu = document.getElementById('menu');
const aboutus = document.getElementById('aboutus');
const contac = document.getElementById('contac');
const testogrande = document.getElementById('testogrande');


function toggleLanguage() {

    if (lang === undefined) {
        if (navigator.language.startsWith('id')) {
            inindo()
        } else {
            ininglese()
        }
    } else if (lang === "eng") {
        console.log(lang);
        inindo()

    } else if (lang === "indo") {
        console.log(lang);
        ininglese()
    } else {
        console.log("error")
    }

}
function inizio(){

    if (principaletesto.classList.contains("nascondi")) {
        principaletesto.classList.remove("nascondi");
        mostramenu.classList.add("nascondi");
        mostranoi.classList.add("nascondi");
        contattami.classList.add("nascondi");
    }

}
function mmenu(){

    if (mostramenu.classList.contains("nascondi")) {
        mostramenu.classList.remove("nascondi");
        principaletesto.classList.add("nascondi");
        mostranoi.classList.add("nascondi");
        contattami.classList.add("nascondi");
    }
}
function mostraaboutus(){
    if (mostranoi.classList.contains("nascondi")) {
        mostranoi.classList.remove("nascondi");
        principaletesto.classList.add("nascondi");
        mostramenu.classList.add("nascondi");
        contattami.classList.add("nascondi");
    }
}
function contattamii(){
    if (contattami.classList.contains("nascondi")) {
        // contattami.classList.add("centrale");
        contattami.classList.remove("nascondi");
        principaletesto.classList.add("nascondi");
        mostramenu.classList.add("nascondi");
        mostranoi.classList.add("nascondi");
    }
}


function sendWhatsApp() {
    const name = document.getElementById("name");
    const message = document.getElementById("message");
    const whatsappNumber = "+6281319028228";
let messaggio= name.value+"_"+message.value;

    // Codifica il testo del messaggio per l'URL
    var encodedMessage = encodeURIComponent(messaggio);

    // Crea l'URL completo per il link di WhatsApp
    var whatsappURL = "https://wa.me/" + whatsappNumber + "/?text=" + encodedMessage;

    // Apre il link di WhatsApp in una nuova finestra/ scheda
    window.open(whatsappURL);
}
function sendEmail(){
    // Get the values from the input fields
    var name = document.getElementById("name").value;
    var message = document.getElementById("message").value;

    // Create the mailto URL
    var mailtoURL = "mailto:novacateringjk@gmail.com?subject=Message%20from%20" + encodeURIComponent(name) + "&body=" + encodeURIComponent(message);

    // Open the mailto URL
    window.location.href = mailtoURL;
    console.log("ciao mail")
}
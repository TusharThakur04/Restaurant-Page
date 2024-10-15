export const aboutload = function(){
    document.addEventListener('DOMContentLoaded',() => {
        const div = document.querySelector('#content');
        const div2 = document.createElement('div');
        div2.className='about';
        div.appendChild(div2);
        const paragraphs = [
            "Welcome to Flavorscape, where every dish is an adventure in taste. Nestled at 123 Culinary Avenue, Flavor City, our restaurant is a celebration of global flavors, crafted with a modern twist.",
            "At Flavorscape, we believe in the power of food to tell a story. Our menu reflects a journey through continents, from Asian-inspired street food to classic European delicacies, each plate a fusion of cultures and creativity.",
            "Our space is designed to transport you into a world of culinary wonder. With a warm, modern ambiance and an inviting atmosphere, Flavorscape is the perfect backdrop for intimate dinners, family gatherings, and celebratory feasts.",
            "Come join us at Flavorscape—where every meal is a passport to a new flavor destination. Let us take you on a culinary journey you'll never forget."
        ];
    
        paragraphs.forEach((i) => {
            const p = document.createElement('p'); 
            p.textContent = i;  
            div2.appendChild(p); 
        });
        



    })
}
import rimage from "./lasagna-5994612.jpg";

export const pageload = function () {
  const div = document.querySelector("#content");

  const head = document.createElement("div");
  head.className = "headline";
  head.textContent =
    "Welcome to Flavorscape: A Culinary Experience Like No Other!";
  const rName = "Flavorscape";
  const hText = head.textContent;
  const newText = hText.replace(
    rName,
    `<span class = "highlight"> ${rName}</span>`,
  );
  head.innerHTML = newText;
  div.appendChild(head);

  const div2 = document.createElement("div");
  div2.className = "image";
  div.appendChild(div2);

  const image = document.createElement("img");
  image.src = rimage;
  div2.appendChild(image);

  const div3 = document.createElement("div");
  div3.className = "description";
  div.appendChild(div3);

  const desc = document.createElement("div");
  desc.textContent =
    "Welcome to Flavorscape, where every dish is a journey into the world of flavor and creativity. Our chefs are dedicated to blending traditional techniques with modern innovation, crafting dishes that are both visually stunning and irresistibly delicious. Whether you're in the mood for a light snack or a full-course meal, our menu offers a variety of options to satisfy every craving. Our atmosphere is designed to complement the culinary experience—inviting, elegant, and perfect for everything from intimate dinners to special celebrations. Join us for a memorable meal and savor the flavors that make us stand out.";
  div3.appendChild(desc);
};

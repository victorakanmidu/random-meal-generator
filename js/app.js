let mealImage = document.querySelector(".mealImage");
let title = document.querySelector(".title");


showMeal = function () {
    let meals = [
        {
            title: "Jollof Rice with Chicken and Fried Platain",
            image: "https://image.shutterstock.com/z/stock-photo-jollof-rice-with-chicken-and-fried-plantain-west-african-cuisine-585882515.jpg"
        },
        {
            title: "Egusi Soup and Garri",
            image: "https://image.shutterstock.com/image-photo/egusi-soup-garri-popular-nigerian-600w-1011943885.jpg"
        },
        {
            title: "Spicy Suya",
            image: "https://image.shutterstock.com/image-photo/african-food-spicy-suya-kebab-260nw-1173088642.jpg"
        },
        {
            title: "Asian Rice Noodles with Shrimp",
            image: "https://image.shutterstock.com/image-photo/asian-rice-noodles-shrimp-vegetables-600w-234530323.jpg"
        },
        {
            title: "Papaya Sallad",
            image: "https://image.shutterstock.com/image-photo/papaya-salad-thailand-260nw-792533608.jpg"
        }
    ]    
    let randomMeal = Math.floor(Math.random() * meals.length);
    title.innerHTML = meals[randomMeal].title;
    mealImage.src = meals[randomMeal].image;    
}

showMeal();

// fetch('https://www.boredapi.com/api/activity?type=recreational')
//   .then(response => response.json())
//   .then(data => console.log(data));
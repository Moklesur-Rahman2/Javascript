import{productsData} from './products-data.js'

for(let item of productsData){
    showProduct(item)
}


function showProduct(item){
    const product = document.createElement('div');
    product.className = 'product col col-3';
    
    const productImage = document.createElement('img');
    productImage.className = 'product-img'
    productImage.src = item.productImage;
    
    const productVideo = document.createElement('video')
    productVideo.attributes.value('controls')

    const source = document.createElement('source')
    source.src = 'videos/video.mp4'
    source.type = 'video/mp4'

    productVideo.append(source)





    const productName = document.createElement('h3');
    productName.className = 'product-name';
    productName.innerText = item.productName;
    
    const productRate = document.createElement('p');
    productRate.className = 'product-rate';
    productRate.innerText=  item.productRate
    
    product.append(productVideo, productName, productRate)
    document.querySelector('.product-list .row').append(product)
}

// <video>
    // <source src= type= > <source>
// <video>

document.querySelector('#search-product').addEventListener('keyup', function(event){
    const keyword = event.target.value.toLowerCase()
    console.log(keyword)

    const products = document.querySelectorAll('.product')

for(let product of products){
    const name = product.children[1].innerText.toLowerCase()
    const rate = product.children[2].innerText

    if(name.includes(keyword)){
        product.style.display = 'block';
    }else{
        product.style.display = 'none';
    }
}

})
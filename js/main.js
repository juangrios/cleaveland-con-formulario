const context = {
    instruments: [
    {
      image: 'public/fotos/murito.jpg',
      name: 'Muro Fino',
      description: 'Piedras naturales de gran resistencia al desgaste, a la humedad, e inalterabilidad con el paso del tiempo. Ideal para revestir todo tipo de muros interiores y/o exteriores, otorgándoles a los mismos una terminación muy particular.',
      price: '$7,000',
      sale: '$6,999'
    },
    {
      image: 'public/fotos/boticcino.jpg',
      name: 'Porcelanato Boticcino 60x60',
      description: 'Patron de variacion en diseño y tonoalidad: V3 . Asemeja a la variación natural de un mármol Boticcino, diferentes diseños y Diferentes tonalidades entre las piezas',
      price: '$1,200'
    },
    
    
    {
      image: 'public/fotos/YO.jpg',
      name: 'Juan Gabriel',
      description: 'Muy Fachero',
      price: '$11455649455.00',
      sale: '$99999999999.00'
    }
  ]
};

const templateSource=document.getElementById("templateHB").innerHTML;
const template= Handlebars.compile(templateSource);
const compiledHtml=template(context);
document.getElementById("information").innerHTML=compiledHtml;


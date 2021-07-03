const db = require("../postgresql.js");

const color = ['black','red', 'blue', 'blue', 'blue', 'black', 'blue', 'green', 'blue', 'blue', 'black'];

const genre = ['men','women','men','men','non-binary','men','men','women','women','kids','men'];

const title = ['T-Shirt','Blouse','Sweater','Sweater','Sweater','Jacket','Sweater','Sweater','Sweater','Snowpants','T-Shirt'];

const price = ['15.99','35.99','18.99','18.99','18.99','18.99','18.99','18.99','18.99','18.99','15.99'];

const quantity = [30, 16, 1, 8, 15, 19, 56, 12, 99, 75, 30]

const imagePath = [ 'https://target.scene7.com/is/image/Target/52377357?wid=1400',
 'https://target.scene7.com/is/image/Target/50362600?wid=1400',
 'https://target.scene7.com/is/image/Target/53152327?wid=1400',
 'https://target.scene7.com/is/image/Target/52569569?wid=1400',
 'https://target.scene7.com/is/image/Target/52569569?wid=1400',
 'https://target.scene7.com/is/image/Target/52189130?wid=1400',
 'https://target.scene7.com/is/image/Target/51584767?wid=1400',
 'https://target.scene7.com/is/image/Target/53271631?wid=1400',
 'https://target.scene7.com/is/image/Target/52940281?wid=1400',
 'https://target.scene7.com/is/image/Target/53325630?wid=1400',
 'https://target.scene7.com/is/image/Target/52377357?wid=1400'];

const items = []

for (let i = 0; i < 11; i++) {
  items.push({quantity: quantity[i], title: title[i], genre: genre[i], color: color[i], imagePath: imagePath[i], price: price[i]});
}

const values = new Inserts('${quantity}, ${title}, ${genre}, ${color}, ${imagePath}, ${price}', items);

db.none(`INSERT INTO Item(quantity, title, genre, color, "ImagePath", price) VALUES $1`, values)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        // Error, no records inserted
    });
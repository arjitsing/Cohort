/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
 
//   const categoryTotal = {};

//     // Step 2: Iterate through each transaction
//     for (const transaction of transactions) {
//         // Step 3: Get category and price from the transaction
//         const { category, price } = transaction;

//         // Step 4: If category does not exist in categoryTotal, initialize it to 0
//         if (!categoryTotal[category]) {
//             categoryTotal[category] = 0;
//         }

//         // Step 5: Add the price of the transaction to the total spent for the category
//         categoryTotal[category] += price;
//         console.log(categoryTotal)
//     }

//     // Step 6: Create an array of objects with category and totalSpent properties
//     const result = Object.entries(categoryTotal).map(([category, totalSpent]) => ({
//         category,
//         totalSpent
//     }));

//     // Step 7: Return the result array
//     return result;
// }

// module.exports = calculateTotalSpentByCategory;
//=========================================== new solution ======================================

function calculateTotalSpentByCategory(transactions) {

  new_keys =[]

  new_values =[]

  final_list =[]

  for (const i of transactions) {
    //console.log(i)
    //console.log(i["category"])
    if ( new_keys.includes(i["category"])) {
      new_values[new_keys.indexOf(i["category"])] += i["price"]
      //new_values.push(i["price"])
    }
    else{
      new_keys.push(i["category"])
      new_values.push(i["price"])

    }

  

    //console.log( new_keys,new_values)



  }
  for (let i =0; i < new_keys.length; i++){
    final_list.push({category: new_keys[i], totalSpent: new_values[i]})
    
  }
  return final_list
}

module.exports = calculateTotalSpentByCategory;

// console.log(calculateTotalSpentByCategory([
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Pizza',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 30,
//     category: 'Clothes',
//     itemName: 'Shirt',
//   },
//   {
//     id: 1,
//     timestamp: 1656076800000,
//     price: 10,
//     category: 'Food',
//     itemName: 'Burger',
//   }
// ]))


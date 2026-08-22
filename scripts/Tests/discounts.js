const cart = [
{id:1, product_name:"product_1", qty:"2", price: "1000" , discount_percentage:"2.5"},
{id:2, product_name:"product_2", qty:"1", price: "700" , discount_percentage:"5"},
{id:3, product_name:"product_3", qty:"7", price: "950" , discount_percentage:"3.5"},
{id:4, product_name:"product_4", qty:"3", price: "10000" , discount_percentage:"6.75"}
]
 
expected output
 
{
 
items: [
 
{id:xxx, product_name: "", qty:"", price:"", price_after_discount:"", total_after_discount:"", discount_amount:""},
...
 
],
 
total_before_discount:"",
total_after_discount:"",
}
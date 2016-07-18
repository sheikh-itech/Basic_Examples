Create the functionality as below using AngularJS
Make sure you follow the below guidelines
1.       Create one json file containing data for atleast one customer (Name, location, email), fetch data from this file initially using the resolver and a service (Factory/service). Show the fetched customer in the left list.
2.       Store all the data in the local storage and display as the screen UI. The right column must show the details of the customer based on the record clicked from the customer list.
3.       Develop an instant searching to filter the customer as the users enter the customer name in the search text box.
4.       Customer list should be in ascending order based on customer name. Show a button with the caption “Desc”. On click  of this button, the list should be in descending order based on customer name and the button caption should change to “Asc”. Now on click, list will be in ascending order and the caption will change the “Desc”.
5.       Apply the validation for email and show the relevant validation message as indicated in the mockup screen below.
6.       Create css modal window to add customer.
7.       As soon as the new customer is added through modal window, the new record must be shown in the customer list. On refresh of page, all the customer should be shown. i.e. now there should be data in localStorage after adding a customer and on refresh the data should be fetched from localStorage instead of json file.
8.       Left side customer list should show the cross icon on the top right corner of box on mouse-over. On click of this icon there should be a confirmation custom css box with message “Are you sure to delete this customer?”. This box should contain two buttons “Yes” and “No”. On click of yes, customer box should slide up and should be deleted from the list (i.e. deleted customer should not appear on search). On click on “No” button delete confirmation box should be closed without any further action.
9.       If User deletes a customer who’s detail is currently appearing on right side box, then after deletion the right side box should  show message “Please select customer from left side to view detail”. Same messages  should be the default message of right side box and should appear initially (i.e. When user first opens the app).
10.   Use the HTML5 elements wherever deemed relevant.
11.   Give box shadow for the tags on mouse hover
12.   Follow all the best practices as the code will be evaluated on same.
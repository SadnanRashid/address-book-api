<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Address Book API</title>
  <link rel="stylesheet" href="https://stackedit.io/style.css" />
</head>

<body class="stackedit">
  <div class="stackedit__html"><h2 id="address-book-api-">**Address Book API **</h2>
<p><strong>API usage and execution</strong></p>
<ul>
<li>Add a new contact</li>
</ul>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/add">http://localhost:5000/api/contacts/add</a><br>
Method : POST<br>
Sample JSON: { 	“first_name” : “Sadnan”,<br>
“last_name” : “Rashid”,<br>
“email” : <a href="mailto:%22sad@nan.com">"sad@nan.com</a>",<br>
“phone” : 47428463121,<br>
“address” : “someAddressHere”,<br>
“country” : “Bangladesh”<br>
}<br>
Return: {{“acknowledged”: true,“insertedId”: “63948dda0bc2b732a1b495e0”}</p>
</blockquote>
<ul>
<li>Add bulk contacts</li>
</ul>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/addmany">http://localhost:5000/api/contacts/addmany</a><br>
Method : POST<br>
Sample JSON: [{ 	“first_name” : “Sadnan”,<br>
“last_name” : “Rashid”,<br>
“email” : <a href="mailto:%22sad@nan.com">"sad@nan.com</a>",<br>
“phone” : 47428463121,<br>
“address” : “someAddressHere”,<br>
“country” : “Bangladesh”<br>
},{ 	“first_name” : “Sadnan”,<br>
“last_name” : “Rashid”,<br>
“email” : <a href="mailto:%22sad@nan.com">"sad@nan.com</a>",<br>
“phone” : 47428463121,<br>
“address” : “someAddressHere”,<br>
“country” : “Bangladesh”<br>
}]<br>
Return: {{“acknowledged”: true, “insertedCount”: 2,<br>
“insertedIds”: {“0”: “63948e940bc2b732a1b495e1”,“1”: “63948e940bc2b732a1b495e2”}</p>
</blockquote>
<p>Fetch details of single contact</p>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/:id">http://localhost:5000/api/contacts/:id</a><br>
Method : GET<br>
Return: {"_id": “63948e940bc2b732a1b495e1”,“first_name”: “Sadnan”,“last_name”: “Rashid”,“email”: <a href="mailto:%22sad@nan.com">"sad@nan.com</a>",“phone”: 47428463121,“address”: “someAddressHere”,“country”: “Bangladesh”}</p>
</blockquote>
<p>Fetch phase matching results</p>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/getmatch/:phase">http://localhost:5000/api/contacts/getmatch/:phase</a><br>
Method : GET<br>
Return: {"_id": “639438bb508b44b7cfc0987b”,“first_name”: “Sadnan”,“last_name”: “Rashid”,“email”: “<a href="http://sadnan.com">sadnan.com</a>”,“phone”: 47428463121,“address”: “some street some house”,“country”: “Bangladesh”}</p>
</blockquote>
<p>Fetch the list of contacts with pagination</p>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/get?page=1&amp;size=2">http://localhost:5000/api/contacts/get?page=1&amp;size=2</a><br>
Method : GET<br>
Return: [ { “_id”: “639438bb508b44b7cfc0987c”, “first_name”: “Sadnan”, “last_name”: “Rashid”, “email”: “<a href="http://sadnan.com">sadnan.com</a>”, “phone”: 47428463121, “address”: “someAddressHere”, “country”: “Bangladesh” }, { “_id”: “639438bb508b44b7cfc0987d”, “first_name”: “Sadnan”, “last_name”: “Rashid”, “email”: “<a href="http://sadnan.com">sadnan.com</a>”, “phone”: 47428463121, “address”: “someAddressHere”, “country”: “Bangladesh” } ]</p>
</blockquote>
<p>Update the given contact</p>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/update/:id">http://localhost:5000/api/contacts/update/:id</a><br>
Method : PUT<br>
Return: { “acknowledged”: true, “modifiedCount”: 1, “upsertedId”: null, “upsertedCount”: 0, “matchedCount”: 1 }</p>
</blockquote>
<p>Delete the given contact</p>
<blockquote>
<p>API: <a href="http://localhost:5000/api/contacts/delete/:id">http://localhost:5000/api/contacts/delete/:id</a><br>
Method : PUT<br>
Return: { “acknowledged”: true, “deletedCount”: 1 }</p>
</blockquote>
</div>
</body>

</html>
